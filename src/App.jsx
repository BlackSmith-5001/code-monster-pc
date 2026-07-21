import { useState, useEffect, useRef, useMemo } from "react";
import {
  LEVELS,
  CODE_BANK,
  ENEMY_VARIANTS,
  EVOLVED_MONSTERS,
  RARITY_LABELS,
  RARITY_COLORS,
  getMonsterBookEntries,
  getMonsterInfo,
  BUG_LIBRARY,
  getBugInfo,
  getBugBookEntries,
  MONSTER_COMMENTS_MAP,
} from "./data";
import { SHISHO_BOYAKI, EPIC_BOYAKI } from "./data/boyaki";
import { Gauge, MonsterPortrait, StatusCard } from "./components/BattleWidgets";

const SAVE_KEY = "typeOfLegendSave";
const REQUIRED_QUESTIONS_PER_STAGE = 10;
const WAVES_PER_STAGE = 3;
const BATTLES_PER_WAVE = 3;
const RARE_CHANCE_BATTLE_RATE = 0.6;
const DEBUG_UNLOCK_LEVEL = 5;
const ASSIST_CHARGE_MAX = 40;
const RARITY_GLOW = {
  common: "rgba(148, 163, 184, 0.28)",
  uncommon: "rgba(52, 211, 153, 0.32)",
  rare: "rgba(96, 165, 250, 0.42)",
  epic: "rgba(251, 191, 36, 0.5)",
};

const KEY_HINT_MAP = [
  { symbol: "==", hint: "== → = を2回" },
  { symbol: "'", hint: "' → Shift + 7" },
  { symbol: '"', hint: '" → Shift + 2' },
  { symbol: "_", hint: "_ → Shift + ろ" },
  { symbol: "*", hint: "* → Shift + :" },
  { symbol: "(", hint: "( → Shift + 8" },
  { symbol: ")", hint: ") → Shift + 9" },
  { symbol: ":", hint: ": → ; キー（Shiftなし）" },
];

const STAGE_LEARNING_THEMES = [
  "半角スペース / クォート / print基礎",
  "文字列 / 変数 / True・Falseの入口",
  "数値計算 / + - * / / 文字列との違い",
  "if / 比較演算子 / コロン / インデント",
  "関数 / return / None",
  "リスト / [] / カンマ",
  "for・while / 無限ループ",
  "総合デバッグ / 複合バグ",
];

const ADVENTURE_TIPS = [
  "コンボが続くと獲得EXPが少し増えます。",
  "魔術師レベルが上がると称号が変わります。",
  "レアモンスターは出現率が低いぶん、図鑑で見つけるとうれしい存在です。",
  "デバッグダンジョンでは、バグ入りコードをそのまま写さず正しいコードに直します。",
  "半角スペースと全角スペースは、見た目が似ていても別物です。",
  "`=` は代入、`==` は比較です。",
  "`*` はPythonの掛け算、`/` はPythonの割り算です。",
  "Lv.3では数値計算、Lv.4では条件分岐が中心になります。",
];

const EFFECT_QUESTIONS = [
  {
    id: "eq_hp_heal",
    code: "hp = 100",
    hint: "変数hpに100を代入",
    effect: { type: "healPlayer", value: 20 },
    effectLabel: "HP +20 回復！",
    comments: ["回復だ！", "HP満タン！", "ナイスコード！", "いやされる～", "hp=100最強"],
  },
  {
    id: "eq_double_attack",
    code: "attack = attack * 2",
    hint: "攻撃力を2倍にする",
    effect: { type: "doubleDamage", value: 2 },
    effectLabel: "次のダメージ×2！",
    comments: ["2倍！！", "パワーアップ！", "やばい強い", "コード is 力", "ダブルアタック"],
  },
  {
    id: "eq_bonus_time",
    code: "time = time + 10",
    hint: "制限時間に10秒追加",
    effect: { type: "bonusTime", value: 10 },
    effectLabel: "次の問題の時間 +10秒！",
    comments: ["時間GET！", "余裕よ余裕", "+10秒！！", "タイムボーナス", "ゆっくりできる"],
  },
  {
    id: "eq_shield",
    code: "shield = 1",
    hint: "シールドに1を代入",
    effect: { type: "shield", value: 1 },
    effectLabel: "次の被ダメージ無効！",
    comments: ["無敵！！", "シールド発動", "ガード確定", "1でON！", "鉄壁キター！"],
  },
  {
    id: "eq_combo_boost",
    code: "combo = combo + 1",
    hint: "コンボカウンターを増やす",
    effect: { type: "comboBoost", value: 1 },
    effectLabel: "コンボ +1ボーナス！",
    comments: ["コンボ加算！", "連続攻撃！", "止まらない", "コンボisパワー", "繋がった！"],
  },
  {
    id: "eq_exp_up",
    code: "exp = exp * 1.5",
    hint: "経験値を1.5倍にする",
    effect: { type: "expBonus", value: 50 },
    effectLabel: "このステージEXP×1.5！",
    comments: ["経験値ボーナス！", "成長速い！", "レベルアップ近い", "EXP増量中", "うまうま"],
  },
  {
    id: "eq_heal_small",
    code: "hp = hp + 30",
    hint: "HPを30増やす",
    effect: { type: "healPlayer", value: 30 },
    effectLabel: "HP +30 回復！",
    comments: ["30回復！", "まだまだいける", "回復薬効いた", "HP補充完了", "もりもり回復"],
  },
];

function getNextEffectChanceAt() {
  return Math.floor(Math.random() * 3) + 3;
}

const DEBUG_TUTORIAL_STEPS = [
  {
    kind: "intro",
    icon: "🐞",
    title: "デバッグダンジョンへようこそ",
    body: "ここでは、わざと間違えたコードをそのまま写さず、正しい形に直して入力します。まずは日本語の間違い直しで感覚を掴もう。",
  },
  {
    kind: "question",
    title: "日本語で練習 1",
    prompt: "あいさつの間違いを直そう。",
    buggy: "こんちには",
    choices: ["こんにちは", "こんちには", "こんばんは"],
    answer: "こんにちは",
    explanation: "文字の順番が入れ替わっていました。デバッグは、こういう小さな違和感に気づく冒険です。",
  },
  {
    kind: "question",
    title: "日本語で練習 2",
    prompt: "余計な空白を取り除こう。",
    buggy: "ありがとう　ございます",
    choices: ["ありがとうございます", "ありがとう ございます", "ありがとう　ございます"],
    answer: "ありがとうございます",
    explanation: "見た目は近くても、全角スペースが混ざると別物です。Pythonでもかなり大事な感覚です。",
  },
  {
    kind: "question",
    title: "日本語で練習 3",
    prompt: "足りない文字を補おう。",
    buggy: "おはよございます",
    choices: ["おはようございます", "おはよございます", "おはようござます"],
    answer: "おはようございます",
    explanation: "足りない1文字を見つけられました。コードでもクォートやコロンの1文字が勝敗を分けます。",
  },
  {
    kind: "question",
    title: "Pythonへ橋渡し",
    prompt: "文字列を変数に入れる形へ直そう。",
    buggy: "name = Taro",
    choices: ["name = 'Taro'", "name == 'Taro'", "name = Taro"],
    answer: "name = 'Taro'",
    explanation: "文字列はクォートで囲みます。デバッグダンジョンでは、間違いを見つけて正しいPythonコードへ直します。",
  },
  {
    kind: "complete",
    icon: "🎉",
    title: "コツを掴んだね！",
    body: "デバッグダンジョン解放！ Lv.1から、バグ憑きコードを正しい呪文に修復していこう。",
  },
];

const TITLE_LIST = [
  {
    id: "apprentice_mage",
    name: "見習い魔術師",
    description: "最初から名乗れる、はじまりの称号。",
    passive: { type: "none", value: 0 },
    isUnlocked: () => true,
  },
  {
    id: "space_graduate",
    name: "半角スペース見習い卒業生",
    description: "30回以上コードを唱えた証。",
    passive: { type: "damageBonus", value: 2 },
    isUnlocked: ({ save }) => (save.totalCasts || 0) >= 30,
  },
  {
    id: "quote_user",
    name: "クォート使い",
    description: "Lv.3以上になった魔術師の基礎称号。",
    passive: { type: "comboBonus", value: 5 },
    isUnlocked: ({ playerLevel }) => playerLevel >= 3,
  },
  {
    id: "variable_ruler",
    name: "変数を統べる者",
    description: "Lv.5以上で名乗れる変数使いの称号。",
    passive: { type: "expBonus", value: 0.1 },
    isUnlocked: ({ playerLevel }) => playerLevel >= 5,
  },
  {
    id: "branch_sage",
    name: "条件分岐の賢者",
    description: "Lv.8以上、またはLv.4クリアで解放。",
    passive: { type: "timeBonus", value: 3 },
    isUnlocked: ({ playerLevel, save }) => playerLevel >= 8 || (save.clearedLevels || []).includes(3),
  },
  {
    id: "legend_debugger",
    name: "伝説のデバッガー",
    description: "バグを10回以上浄化した証。",
    passive: { type: "damageBonus", value: 5 },
    isUnlocked: ({ save }) => (save.debugCleanses || 0) >= 10,
  },
  {
    id: "slime_hunter",
    name: "スライムハンター",
    description: "モンスターを10体以上討伐すると解放。",
    passive: { type: "comboBonus", value: 8 },
    isUnlocked: ({ save }) => (save.monstersDefeatedIds || []).length >= 10 || (save.monstersDefeated || 0) >= 10,
  },
  {
    id: "bug_cleanser",
    name: "バグ浄化師",
    description: "デバッグダンジョンで3回以上バグを直した証。",
    passive: { type: "expBonus", value: 0.15 },
    isUnlocked: ({ save }) => (save.debugCleanses || 0) >= 3,
  },
  {
    id: "rare_observer",
    name: "レアモンスター観測者",
    description: "rare以上のモンスターを発見すると解放。",
    passive: { type: "damageBonus", value: 3 },
    isUnlocked: ({ save }) => {
      const seen = new Set(save.monstersSeen || []);
      return ENEMY_VARIANTS.some((monster) => seen.has(monster.id) && ["rare", "epic"].includes(monster.rarity));
    },
  },
  {
    id: "combo_master",
    name: "コンボマスター",
    description: "最大コンボ10以上を記録した証。",
    passive: { type: "comboBonus", value: 12 },
    isUnlocked: ({ save }) => (save.maxCombo || 0) >= 10,
  },
  {
    id: "monster_collector",
    name: "モンスター蒐集家",
    description: "30体以上のモンスターを発見した証。",
    passive: { type: "expBonus", value: 0.08 },
    isUnlocked: ({ save }) => (save.monstersSeen || []).length >= 30,
  },
  {
    id: "century_caster",
    name: "百呪詠唱師",
    description: "100回以上コードを唱えた大魔術師。",
    passive: { type: "damageBonus", value: 4 },
    isUnlocked: ({ save }) => (save.totalCasts || 0) >= 100,
  },
  {
    id: "stage_conqueror",
    name: "全ステージ制覇者",
    description: "全4ステージをクリアした証。",
    passive: { type: "timeBonus", value: 5 },
    isUnlocked: ({ save }) => (save.clearedLevels || []).length >= 4,
  },
  {
    id: "explorer",
    name: "冒険者",
    description: "10回以上プレイした証。",
    passive: { type: "timeBonus", value: 2 },
    isUnlocked: ({ save }) => (save.stagePlays || []).reduce((a, b) => a + b, 0) >= 10,
  },
  {
    id: "monster_slayer",
    name: "モンスタースレイヤー",
    description: "50体以上のモンスターを討伐した証。",
    passive: { type: "damageBonus", value: 6 },
    isUnlocked: ({ save }) => (save.monstersDefeatedIds || []).length >= 50 || (save.monstersDefeated || 0) >= 50,
  },
  {
    id: "encyclopedia",
    name: "図鑑の探求者",
    description: "モンスターを50体以上発見した証。",
    passive: { type: "expBonus", value: 0.12 },
    isUnlocked: ({ save }) => (save.monstersSeen || []).length >= 50,
  },
];

const TITLE_UNLOCK_MARQUEE = [
  "新称号獲得！！",
  "新パッシブ開放！",
  "称号コレクション更新中",
  "タイトル画面へ急げ！",
  "魔術師の格が上がった！",
];

const LEVEL_UP_MARQUEE = [
  "LvUP！",
  "強くなった！",
  "ステータス上昇！",
  "ナイスデバッグ！",
  "( ≧∀≦)ノ",
  "おめでとう！",
];

const INITIAL_SAVE = {
  saveVersion: 2,
  exp: 0,
  totalCasts: 0,
  monstersDefeated: 0,
  maxCombo: 0,
  clearedLevels: [],
  stagePlays: [0, 0, 0, 0, 0, 0, 0, 0],
  bugsFixed: [],
  debugCleanses: 0,
  monstersSeen: [],
  monstersDefeatedIds: [],
  linkedMonsterIds: [],
  soundEnabled: true,
  lastSelectedMode: "normal",
  lastSelectedLevel: 0,
  debugTutorialCompleted: false,
  monsterBookFilters: {
    status: "all",
    rarity: "all",
    habitat: "all",
    search: "",
  },
  selectedTitleId: "apprentice_mage",
  unlockedTitleIds: ["apprentice_mage"],
  equippedMonsterId: null,
  companionData: {},
};

function sanitizeNumber(value, fallback) {
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function sanitizeArray(value, fallback) {
  return Array.isArray(value) ? value : [...fallback];
}

function sanitizeStringArray(value, fallback) {
  return sanitizeArray(value, fallback).filter((item) => typeof item === "string");
}

function sanitizeCompanionData(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value)
      .filter(([monsterId, data]) => typeof monsterId === "string" && data && typeof data === "object")
      .map(([monsterId, data]) => [
        monsterId,
        {
          skillCount: sanitizeNumber(data.skillCount, 0),
          evolutionStage: sanitizeNumber(data.evolutionStage, 0),
        },
      ])
  );
}

function sanitizeStagePlays(value) {
  const source = Array.isArray(value) ? value : [];
  return Array.from({ length: INITIAL_SAVE.stagePlays.length }, (_, index) =>
    sanitizeNumber(source[index], INITIAL_SAVE.stagePlays[index] || 0)
  );
}

function sanitizeMode(value) {
  return ["normal", "debug"].includes(value)
    ? value
    : INITIAL_SAVE.lastSelectedMode;
}

function sanitizeLevel(value) {
  return Number.isInteger(value) && value >= 0 && value < LEVELS.length
    ? value
    : INITIAL_SAVE.lastSelectedLevel;
}

function sanitizeMonsterBookFilters(value) {
  const filters = value && typeof value === "object" ? value : {};
  const status = ["all", "seen", "unseen", "defeated", "linked"].includes(filters.status)
    ? filters.status
    : INITIAL_SAVE.monsterBookFilters.status;
  const rarity = ["all", "common", "uncommon", "rare", "epic"].includes(filters.rarity)
    ? filters.rarity
    : INITIAL_SAVE.monsterBookFilters.rarity;
  const habitats = [
    "all",
    "はじまりの草原",
    "ことばの森",
    "演算の洞窟",
    "分岐の火山",
    "関数の海",
    "リストの遺跡",
    "繰り返しの塔",
    "バグの深淵",
    "その他",
  ];
  const habitat = habitats.includes(filters.habitat)
    ? filters.habitat
    : INITIAL_SAVE.monsterBookFilters.habitat;

  return {
    status,
    rarity,
    habitat,
    search: typeof filters.search === "string" ? filters.search : INITIAL_SAVE.monsterBookFilters.search,
  };
}

function sanitizeTitleId(value) {
  return TITLE_LIST.some((title) => title.id === value)
    ? value
    : INITIAL_SAVE.selectedTitleId;
}

function sanitizeSave(parsed) {
  const source = parsed && typeof parsed === "object" ? parsed : {};

  return {
    ...INITIAL_SAVE,
    saveVersion: sanitizeNumber(source.saveVersion, INITIAL_SAVE.saveVersion),
    exp: sanitizeNumber(source.exp, INITIAL_SAVE.exp),
    totalCasts: sanitizeNumber(source.totalCasts, INITIAL_SAVE.totalCasts),
    monstersDefeated: sanitizeNumber(source.monstersDefeated, INITIAL_SAVE.monstersDefeated),
    maxCombo: sanitizeNumber(source.maxCombo, INITIAL_SAVE.maxCombo),
    clearedLevels: sanitizeArray(source.clearedLevels, INITIAL_SAVE.clearedLevels)
      .filter((level) => Number.isInteger(level) && level >= 0 && level < LEVELS.length),
    stagePlays: sanitizeStagePlays(source.stagePlays),
    bugsFixed: sanitizeStringArray(source.bugsFixed, INITIAL_SAVE.bugsFixed),
    debugCleanses: sanitizeNumber(source.debugCleanses, INITIAL_SAVE.debugCleanses),
    monstersSeen: sanitizeStringArray(source.monstersSeen, INITIAL_SAVE.monstersSeen),
    monstersDefeatedIds: sanitizeStringArray(source.monstersDefeatedIds, INITIAL_SAVE.monstersDefeatedIds),
    linkedMonsterIds: sanitizeStringArray(source.linkedMonsterIds, INITIAL_SAVE.linkedMonsterIds),
    soundEnabled: typeof source.soundEnabled === "boolean" ? source.soundEnabled : INITIAL_SAVE.soundEnabled,
    lastSelectedMode: sanitizeMode(source.lastSelectedMode),
    lastSelectedLevel: sanitizeLevel(source.lastSelectedLevel),
    debugTutorialCompleted: typeof source.debugTutorialCompleted === "boolean"
      ? source.debugTutorialCompleted
      : INITIAL_SAVE.debugTutorialCompleted,
    monsterBookFilters: sanitizeMonsterBookFilters(source.monsterBookFilters),
    selectedTitleId: sanitizeTitleId(source.selectedTitleId),
    unlockedTitleIds: sanitizeStringArray(source.unlockedTitleIds, INITIAL_SAVE.unlockedTitleIds)
      .filter((titleId) => TITLE_LIST.some((title) => title.id === titleId)),
    equippedMonsterId: typeof source.equippedMonsterId === "string"
      ? source.equippedMonsterId
      : INITIAL_SAVE.equippedMonsterId,
    companionData: sanitizeCompanionData(source.companionData),
  };
}

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? sanitizeSave(JSON.parse(raw)) : sanitizeSave(INITIAL_SAVE);
  } catch {
    return sanitizeSave(INITIAL_SAVE);
  }
}

function getLevelInfoFromExp(exp) {
  let level = 1;
  let rest = exp;
  let need = 100;

  while (rest >= need) {
    rest -= need;
    level += 1;
    need = 100 + (level - 1) * 50;
  }

  return {
    playerLevel: level,
    expInLevel: rest,
    expToNext: need,
  };
}

function getTotalExpForLevel(targetLevel) {
  let total = 0;

  for (let level = 1; level < targetLevel; level += 1) {
    total += 100 + (level - 1) * 50;
  }

  return total;
}

function getPlayerTitle(playerLevel) {
  if (playerLevel >= 15) return "伝説のデバッガー";
  if (playerLevel >= 11) return "条件分岐の賢者";
  if (playerLevel >= 8) return "変数を統べる者";
  if (playerLevel >= 5) return "クォート使い";
  if (playerLevel >= 3) return "半角スペース見習い卒業生";
  return "見習い魔術師";
}

function getUnlockedTitles(save, playerLevel) {
  return TITLE_LIST.map((title) => ({
    ...title,
    unlocked: title.isUnlocked({ save, playerLevel }),
  }));
}

function getNewlyUnlockedTitles(prevSave, nextSave, nextPlayerLevel) {
  const prevIds = new Set(prevSave.unlockedTitleIds || ["apprentice_mage"]);

  return TITLE_LIST.filter(
    (title) =>
      !prevIds.has(title.id) &&
      title.isUnlocked({ save: nextSave, playerLevel: nextPlayerLevel })
  );
}

function describePassive(passive) {
  if (!passive || passive.type === "none") return "";
  if (passive.type === "comboBonus") return `コンボダメージ +${passive.value}%`;
  if (passive.type === "damageBonus") return `正解ダメージ +${passive.value}`;
  if (passive.type === "timeBonus") return `制限時間 +${passive.value}秒`;
  if (passive.type === "expBonus") return `獲得EXP +${Math.round(passive.value * 100)}%`;
  return "";
}

function applyTitleDamageBonus(baseDamage, comboCount, passive) {
  let nextDamage = baseDamage;

  if (passive?.type === "damageBonus") {
    nextDamage += passive.value;
  }

  if (passive?.type === "comboBonus" && comboCount >= 2) {
    nextDamage = Math.round(nextDamage * (1 + passive.value / 100));
  }

  return nextDamage;
}

function applyTitleExpBonus(baseExp, passive) {
  if (passive?.type !== "expBonus") return baseExp;
  return Math.max(1, Math.round(baseExp * (1 + passive.value)));
}

function getActiveTitle(save, playerLevel) {
  const titles = getUnlockedTitles(save, playerLevel);
  const selected = titles.find((title) => title.id === save.selectedTitleId && title.unlocked);
  const levelTitle = titles.find((title) => title.name === getPlayerTitle(playerLevel) && title.unlocked);
  return selected || levelTitle || titles[0];
}

function getRecommendedStage(playerLevel) {
  if (playerLevel >= 8) return 3;
  if (playerLevel >= 6) return 2;
  if (playerLevel >= 3) return 1;
  return 0;
}

function getStageAdvice(playerLevel, save) {
  const rec = getRecommendedStage(playerLevel);
  const lv1Plays = save.stagePlays?.[0] || 0;

  if (playerLevel >= 5 && lv1Plays >= 8) {
    return "🧙‍♀️ 師匠メモ：その腕前でLv.1を周回しているだと……？ そろそろLv.2やLv.3の魔物も泣かせに行けそうです。";
  }

  if (rec > 0) {
    return `🧭 おすすめ：今の称号なら「${LEVELS[rec].label}：${LEVELS[rec].stageName}」にも挑戦できそう。もちろんLv.1で基礎固めも大正解！`;
  }

  return "🧭 おすすめ：まずはLv.1で、半角スペースとクォートの感覚をゆっくり育てよう。焦らなくてOK。";
}

function getAnswerCode(question) {
  return question?.correct || question?.code || "";
}

function getRawDebugChallenge(question) {
  if (!question) return null;
  if (question.hard) return question.hard;

  const correct = getAnswerCode(question);

  if (correct.includes("'Taro'")) {
    return {
      buggy: correct.replace("'Taro'", "Taro"),
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Taroを文字として扱うには、半角クォート ' ' で囲みます。",
      explanation:
        "Pythonでは、文字列は 'Taro' のようにクォートで囲みます。囲まないと、PythonはTaroという名前の変数を探しに行きます。",
    };
  }

  if (correct.includes("'Hello'")) {
    return {
      buggy: correct.replace("'Hello'", "Hello"),
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Helloは文字列なので、半角クォート ' ' で囲みます。",
      explanation:
        "文字として扱いたいものは 'Hello' のようにクォートで囲みます。裸のHelloは、Pythonから見ると文字ではなく名前に見えます。",
    };
  }

  if (correct.includes("'Python'")) {
    return {
      buggy: correct.replace("'Python'", "Python"),
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Pythonという文字を入れたいので、'Python' と書きます。",
      explanation:
        "Pythonと書くだけだと変数名として扱われます。文字列にしたいときは 'Python' のように半角クォートで囲みます。",
    };
  }

  if (correct.includes("'Hi'")) {
    return {
      buggy: correct.replace("'Hi'", "Hi"),
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Hiはあいさつの文字列なので、'Hi' と書きます。",
      explanation:
        "文字列はクォートで囲みます。クォートは『ここからここまでが文字です』とPythonに伝える目印です。",
    };
  }

  if (correct.includes("True")) {
    return {
      buggy: correct.replace("True", "true"),
      bugName: "大文字小文字バグ",
      bugType: "true_lowercase",
      hint: "Pythonの真偽値は true ではなく True です。Tが大文字です。",
      explanation:
        "Pythonは大文字と小文字を区別します。真は True、偽は False と、最初の文字を大文字にします。",
    };
  }

  if (correct.includes("False")) {
    return {
      buggy: correct.replace("False", "false"),
      bugName: "大文字小文字バグ",
      bugType: "false_lowercase",
      hint: "PythonのFalseは、Fが大文字です。",
      explanation:
        "Pythonでは false ではなく False と書きます。大文字小文字は別の文字として扱われます。",
    };
  }

  if (correct.includes(">=")) {
    return {
      buggy: correct.replace(">=", "=>"),
      bugName: "比較記号の順番バグ",
      bugType: "wrong_greater_equal",
      hint: "『以上』は => ではなく >= です。大なり記号が先、イコールが後です。",
      explanation:
        ">= は『以上』を表します。=> はPythonの比較記号ではないので、順番に注意しましょう。",
    };
  }

  if (correct.includes("==")) {
    return {
      buggy: correct.replace("==", "="),
      bugName: "= と == の混同バグ",
      bugType: "assignment_vs_comparison",
      hint: "比べるときは = ではなく == を使います。",
      explanation:
        "= は右の値を左に入れる代入です。== は同じかどうかを比べる比較です。見た目は似ていますが役割が違います。",
    };
  }

  if (correct.includes("*")) {
    return {
      buggy: correct.replace("*", "×"),
      bugName: "全角掛け算バグ",
      bugType: "wrong_multiply_symbol",
      hint: "Pythonの掛け算は × ではなく、半角の * を使います。",
      explanation:
        "算数では × を使いますが、Pythonでは * が掛け算の記号です。キーボードの星マークが掛け算魔法です。",
    };
  }

  if (correct.includes("/")) {
    return {
      buggy: correct.replace("/", "÷"),
      bugName: "全角割り算バグ",
      bugType: "wrong_divide_symbol",
      hint: "Pythonの割り算は ÷ ではなく、半角の / を使います。",
      explanation:
        "Pythonでは / が割り算の記号です。÷ は算数では正しくても、Pythonのコードでは使えません。",
    };
  }

  if (correct.startsWith("if ") && correct.endsWith(":")) {
    return {
      buggy: correct.slice(0, -1),
      bugName: "コロン忘れバグ",
      bugType: "missing_colon",
      hint: "if文の最後には、半角コロン : を付けます。",
      explanation:
        "if score >= 80: のように、if文の終わりには : を付けます。ここから条件に当てはまる処理が始まる合図です。",
    };
  }

  if (/=\s*\d/.test(correct)) {
    return {
      buggy: correct.replace(/=\s*([0-9]+(?:\s*[+\-*/]\s*[0-9]+)?)/, "= '$1'"),
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "計算したい数字は、クォートで囲みません。",
      explanation:
        "20や100は数値なのでクォートなしで書きます。'20' と書くと、計算できる数字ではなく文字として扱われます。",
    };
  }

  return {
    buggy: correct.replace(" = ", " ＝ "),
    bugName: "全角イコールバグ",
    bugType: "zenkaku_equal",
    hint: "Pythonでは半角の = を使います。全角の＝は別の記号です。",
    explanation:
      "見た目が似ていても、半角と全角は別物です。Pythonの記号は基本的に半角で入力しましょう。",
  };
}


function getDebugChallenge(question) {
  const raw = getRawDebugChallenge(question);
  const info = getBugInfo(raw.bugType);

  return {
    ...info,
    ...raw,
    name: raw.bugName || info.name,
    bugName: raw.bugName || info.name,
  };
}

function getShownCode(question, mode) {
  if (!question) return "";
  return mode === "debug" ? getDebugChallenge(question).buggy : getAnswerCode(question);
}

function getHighlightedBuggy(buggy, correct) {
  if (!buggy || !correct) return [{ text: buggy || "", isError: false }];

  let start = 0;
  while (start < buggy.length && start < correct.length && buggy[start] === correct[start]) {
    start += 1;
  }

  let buggyEnd = buggy.length - 1;
  let correctEnd = correct.length - 1;
  while (buggyEnd >= start && correctEnd >= start && buggy[buggyEnd] === correct[correctEnd]) {
    buggyEnd -= 1;
    correctEnd -= 1;
  }

  if (start >= buggy.length && start >= correct.length) {
    return [{ text: buggy, isError: false }];
  }

  const result = [];
  if (start > 0) {
    result.push({ text: buggy.slice(0, start), isError: false });
  }

  const errorText = buggy.slice(start, buggyEnd + 1) || "□";
  result.push({ text: errorText, isError: true });

  if (buggyEnd + 1 < buggy.length) {
    result.push({ text: buggy.slice(buggyEnd + 1), isError: false });
  }

  return result;
}

function getQuestionHint(question, mode) {
  if (!question) return "";
  return mode === "debug" ? getDebugChallenge(question).hint : question.normalHint || question.hint;
}

function getBattleModeLabel(mode) {
  return mode === "debug" ? "🐞 デバッグダンジョン" : "⚔️ ノーマルモード";
}

function getTimedHints(current, elapsed, timeLimit, mode = "normal") {
  if (!current || !timeLimit) return [];

  const ratio = elapsed / timeLimit;
  const hints = [];
  const answerCode = getAnswerCode(current);

  if (mode === "debug") {
    const debug = getDebugChallenge(current);

    if (ratio >= 0.2 && debug?.bugName) {
      hints.push(`第1ヒント：今回のバグは「${debug.bugName}」です。`);
    }

    if (ratio >= 0.5) {
      hints.push("第2ヒント：バグ入りコードをそのまま写さず、記号・大文字小文字・空白を1つずつ見比べよう。");
    }

    if (ratio >= 0.75) {
      hints.push("第3ヒント：詳しい症状と直し方は、上の「詳しい対処法を開く」から確認できます。");
    }

    return hints;
  }

  const firstHint =
    current.normalHint ||
    current.hint ||
    current.hard?.hint ||
    current.details ||
    "詠唱コードをよく見て、記号・空白・大文字小文字を確認しよう。";

  if (ratio >= 0.25 && firstHint) {
    hints.push(`第1ヒント：${firstHint}`);
  }

  if (ratio >= 0.5 && current.terms?.[0]?.[0] && current.terms?.[0]?.[1]) {
    hints.push(`第2ヒント：「${current.terms[0][0]}」は ${current.terms[0][1]}`);
  }

  if (ratio >= 0.7 && current.tips?.[0]) {
    hints.push(`第3ヒント：${current.tips[0]}`);
  }

  if (ratio >= 0.85 && answerCode) {
    const previewLength = Math.max(3, Math.ceil(answerCode.length * 0.45));
    hints.push(`最終ヒント：先頭は「${answerCode.slice(0, previewLength)}」です。ここまで見せたらもう師匠の温情。`);
  }

  return hints;
}

const SOUND_FILES = {
  ok: ["/sounds/se-correct.mp3", "/sounds/cast.mp3"],
  critical: ["/sounds/se-critical.mp3", "/sounds/critical.mp3"],
  victory: ["/sounds/victory.mp3"],
  levelup: ["/sounds/se-unlock.mp3", "/sounds/levelup.mp3"],
  ng: ["/sounds/se-wrong.mp3", "/sounds/damage.mp3"],
  click: ["/sounds/se-click.mp3", "/sounds/click.mp3"],
};

const BGM_FILES = {
  battle: ["/sounds/bgm-battle.mp3"],
  menu: ["/sounds/bgm-title.mp3", "/sounds/bgm-menu.mp3"],
};

const activeSoundAudios = new Set();

function stopActiveSounds() {
  activeSoundAudios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });

  activeSoundAudios.clear();
}

function playBeepFallback(type, enabled) {
  if (!enabled) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const ctx = new AudioContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  const settings = {
    ok: { freq: 660, duration: 0.08, type: "sine" },
    critical: { freq: 990, duration: 0.12, type: "triangle" },
    victory: { freq: 784, duration: 0.18, type: "sine" },
    levelup: { freq: 1046, duration: 0.25, type: "square" },
    ng: { freq: 180, duration: 0.15, type: "sawtooth" },
    click: { freq: 520, duration: 0.06, type: "sine" },
  };

  const s = settings[type] || settings.ok;

  oscillator.type = s.type;
  oscillator.frequency.value = s.freq;

  gain.gain.setValueAtTime(0.05, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + s.duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + s.duration);

  setTimeout(() => ctx.close(), s.duration * 1000 + 80);
}

function getAudioSources(source) {
  return Array.isArray(source) ? source.filter(Boolean) : [source].filter(Boolean);
}

function playAudioWithFallback(audio, sources, onFallbackExhausted) {
  const queue = getAudioSources(sources);
  let sourceIndex = 0;
  let settled = false;

  const trySource = () => {
    if (sourceIndex >= queue.length) {
      onFallbackExhausted?.();
      return;
    }

    settled = false;
    audio.src = queue[sourceIndex];

    const playPromise = audio.play();

    if (playPromise) {
      playPromise
        .then(() => {
          settled = true;
        })
        .catch(() => {
          sourceIndex += 1;
          trySource();
        });
    }
  };

  audio.addEventListener("error", () => {
    if (settled) return;
    sourceIndex += 1;
    trySource();
  });

  trySource();
}

function playSound(type, enabled) {
  if (!enabled) return null;

  const sources = SOUND_FILES[type];

  if (!sources) {
    playBeepFallback(type, enabled);
    return null;
  }

  const audio = new Audio();
  audio.volume = type === "critical" || type === "levelup" ? 0.45 : 0.35;

  activeSoundAudios.add(audio);

  const cleanup = () => {
    activeSoundAudios.delete(audio);
  };

  audio.addEventListener("ended", cleanup);

  playAudioWithFallback(audio, sources, () => {
    cleanup();
    playBeepFallback(type, enabled);
  });

  return audio;
}

function playSoundAndWait(type, enabled, maxWaitMs = 60000) {
  if (!enabled) {
    return Promise.resolve();
  }

  const audio = playSound(type, enabled);

  if (!audio) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let settled = false;
    let timerId = null;

    const done = () => {
      if (settled) return;
      settled = true;

      if (timerId) {
        clearTimeout(timerId);
      }

      resolve();
    };

    audio.addEventListener("ended", done, { once: true });
    audio.addEventListener("error", done, { once: true });
    audio.addEventListener("pause", done, { once: true });

    audio.addEventListener(
      "loadedmetadata",
      () => {
        if (timerId) {
          clearTimeout(timerId);
        }

        const durationMs = Number.isFinite(audio.duration)
          ? audio.duration * 1000 + 300
          : maxWaitMs;

        timerId = setTimeout(done, Math.min(maxWaitMs, Math.max(800, durationMs)));
      },
      { once: true }
    );

    timerId = setTimeout(done, maxWaitMs);
  });
}

const RARITY_ENCOUNTER_WEIGHTS = {
  common: 62,
  uncommon: 25,
  rare: 10,
  epic: 3,
};

function pickWeightedEnemy(candidates) {
  const weightedPool = candidates.flatMap((enemy) => {
    const weight = RARITY_ENCOUNTER_WEIGHTS[enemy.rarity] || 10;
    return Array.from({ length: weight }, () => enemy);
  });

  return weightedPool[Math.floor(Math.random() * weightedPool.length)] || candidates[0] || ENEMY_VARIANTS[0];
}

function getStageEnemyCandidates(stageLevel) {
  const stageCandidates = ENEMY_VARIANTS.filter((monster) => {
    if (!Array.isArray(monster.levels) || monster.levels.length === 0) return true;
    return monster.levels.includes(stageLevel);
  });

  return stageCandidates.length > 0 ? stageCandidates : ENEMY_VARIANTS;
}

function buildEnemyFromBase(base, stageLevel) {
  const bonusHp = stageLevel * 35;
  const bonusExp = stageLevel * 12;
  const baseHp = base.hp ?? (base.rarity === "epic" ? 122 : base.rarity === "rare" ? 88 : base.rarity === "uncommon" ? 66 : 48);
  const baseExp = base.exp ?? (base.rarity === "epic" ? 60 : base.rarity === "rare" ? 38 : base.rarity === "uncommon" ? 24 : 14);
  const icon = base.icon || base.sprite || "🐲";

  return {
    id: base.id,
    name: `${icon} ${base.name}`,
    baseName: base.name,
    sprite: base.sprite || icon,
    image: base.image,
    rarity: base.rarity,
    type: base.type,
    description: base.description,
    habitat: base.habitat,
    password: base.password || base.transferCode || String(base.id).toUpperCase(),
    maxHp: baseHp + bonusHp,
    hp: baseHp + bonusHp,
    exp: baseExp + bonusExp,
  };
}

function getRandomEnemy(stageLevel) {
  const base = pickWeightedEnemy(getStageEnemyCandidates(stageLevel));

  return buildEnemyFromBase(base, stageLevel);
}

function getRareChanceEnemy(stageLevel) {
  const rareCandidates = getStageEnemyCandidates(stageLevel).filter((monster) =>
    ["rare", "epic"].includes(monster.rarity)
  );

  if (rareCandidates.length === 0) return null;

  return buildEnemyFromBase(pickWeightedEnemy(rareCandidates), stageLevel);
}

function getWaveInfo(battleIndex) {
  const wave = Math.floor(battleIndex / BATTLES_PER_WAVE) + 1;
  const inWave = (battleIndex % BATTLES_PER_WAVE) + 1;
  return { wave, inWave };
}

function createWaveExpLog() {
  return {
    waves: Array.from({ length: WAVES_PER_STAGE }, () => ({ defeated: 0, exp: 0 })),
    rare: null,
    totalExp: 0,
  };
}

function addBattleToWaveLog(log, completedBattleNumber, exp, enemyName) {
  const nextLog = {
    waves: (log?.waves || createWaveExpLog().waves).map((wave) => ({ ...wave })),
    rare: log?.rare ? { ...log.rare } : null,
    totalExp: (log?.totalExp || 0) + exp,
  };

  if (completedBattleNumber > WAVES_PER_STAGE * BATTLES_PER_WAVE) {
    nextLog.rare = { enemyName, exp };
    return nextLog;
  }

  const waveIndex = Math.floor((completedBattleNumber - 1) / BATTLES_PER_WAVE);
  if (nextLog.waves[waveIndex]) {
    nextLog.waves[waveIndex].defeated += 1;
    nextLog.waves[waveIndex].exp += exp;
  }

  return nextLog;
}

function getBaseMonsterForEvolution(monsterId) {
  const evolved = EVOLVED_MONSTERS.find((monster) => monster.id === monsterId);
  if (!evolved) return ENEMY_VARIANTS.find((monster) => monster.id === monsterId) || null;
  return getBaseMonsterForEvolution(evolved.evolvedFrom);
}

function getCompanionMonster(save) {
  if (!save?.equippedMonsterId) return null;

  const id = save.equippedMonsterId;
  const evolved = EVOLVED_MONSTERS.find((monster) => monster.id === id);
  const base = ENEMY_VARIANTS.find((monster) => monster.id === id) || getBaseMonsterForEvolution(id);
  const monster = evolved || base;

  if (!monster) return null;

  return {
    ...base,
    ...monster,
    image: monster.image || base?.image || "",
    icon: monster.icon || base?.icon || base?.sprite || "✨",
    sprite: monster.sprite || monster.icon || base?.sprite || base?.icon || "✨",
    assistSkill: monster.assistSkill || { name: "応援", effect: "コンボ+3", type: "combo", value: 3 },
  };
}

function getEvolutionStage(monsterId) {
  if (monsterId?.endsWith("_final")) return 2;
  if (monsterId?.endsWith("_evolved")) return 1;
  return 0;
}

function getEvolvedId(monsterId) {
  const evolved = EVOLVED_MONSTERS.find((monster) => monster.evolvedFrom === monsterId);
  return evolved?.id || null;
}

function getEvolutionThreshold(monsterId) {
  return getEvolutionStage(monsterId) === 0 ? 8 : 15;
}

function getEvolutionHint(skillCount, threshold) {
  const ratio = threshold > 0 ? skillCount / threshold : 1;
  if (ratio === 0) return "まだまだこれから…";
  if (ratio < 0.4) return "少しずつ成長中…";
  if (ratio < 0.7) return "なんか様子が変わってきた？";
  if (ratio < 1.0) return "近い！もうすぐかも！";
  return "進化の気配…！";
}

function getCompanionSkillCount(save, monsterId) {
  return save?.companionData?.[monsterId]?.skillCount || 0;
}

function getOwnedCompanionMonsters(save) {
  const ownedIds = new Set([
    ...(save.monstersDefeatedIds || []),
    ...(save.linkedMonsterIds || []),
  ]);

  if (save.equippedMonsterId) {
    ownedIds.add(save.equippedMonsterId);
  }

  return Array.from(ownedIds)
    .map((id) => {
      const evolved = EVOLVED_MONSTERS.find((monster) => monster.id === id);
      const base = ENEMY_VARIANTS.find((monster) => monster.id === id) || getBaseMonsterForEvolution(id);
      const monster = evolved || base;
      if (!monster) return null;
      // 進化済みの上位形がすでに所持リストにあれば基底形は非表示
      const nextEvolved = EVOLVED_MONSTERS.find((m) => m.evolvedFrom === id);
      if (nextEvolved && ownedIds.has(nextEvolved.id)) return null;

      return {
        ...base,
        ...monster,
        image: monster.image || base?.image || "",
        icon: monster.icon || base?.icon || base?.sprite || "✨",
        sprite: monster.sprite || monster.icon || base?.sprite || base?.icon || "✨",
        assistSkill: monster.assistSkill || { name: "応援", effect: "コンボ+3", type: "combo", value: 3 },
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (a.id === save.equippedMonsterId) return -1;
      if (b.id === save.equippedMonsterId) return 1;
      return 0;
    });
}


function shuffleArray(items) {
  const copied = [...items];

  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }

  return copied;
}

function normalizeTransferCode(value) {
  return String(value || "").trim().toUpperCase();
}

function buildQuestionDeck(level, size = REQUIRED_QUESTIONS_PER_STAGE) {
  const pool = CODE_BANK.filter((q) => q.level === level);

  if (pool.length === 0) return [];

  const shuffled = shuffleArray(pool);

  if (shuffled.length >= size) {
    return shuffled.slice(0, size);
  }

  const deck = [...shuffled];

  while (deck.length < size) {
    deck.push(shuffled[deck.length % shuffled.length]);
  }

  return deck;
}

function buildEncounterDeck(level, size = REQUIRED_QUESTIONS_PER_STAGE) {
  const questionDeck = buildQuestionDeck(level, size);

  return questionDeck.map((question) => ({
    question,
    enemy: getRandomEnemy(level),
  }));
}

function getEncounterFromDeck(deck, index, level) {
  if (deck?.[index]?.question && deck?.[index]?.enemy) {
    return deck[index];
  }

  return {
    question: pickQuestion(level, index),
    enemy: getRandomEnemy(level),
  };
}

function getQuestionCountForLevel(level) {
  return CODE_BANK.filter((q) => q.level === level).length || 1;
}

function getQuestionNumberForCount(level, count) {
  const total = getQuestionCountForLevel(level);
  return (count % total) + 1;
}

function pickQuestion(level, count) {
  const pool = CODE_BANK.filter((q) => q.level === level);

  if (pool.length === 0) {
    return {
      level,
      code: "coming_soon = True",
      hint: "このレベルにはまだ問題がありません",
      details:
        "CODE_BANKに問題を追加すると、このステージで遊べるようになります。つまり今は未実装の封印扉です。",
      terms: [
        ["coming_soon", "近日公開という意味。ここでは仮の変数名です。"],
        ["True", "真、ON、成立しているという意味です。"],
      ],
      tips: ["新しい問題を追加すれば、このステージも開放されます。"],
    };
  }

  return pool[count % pool.length];
}

export default function App() {
  const [save, setSave] = useState(loadSave);

  const [selectedMode, setSelectedMode] = useState(() => save.lastSelectedMode);
  const [selectedLevel, setSelectedLevel] = useState(() => save.lastSelectedLevel);
  const [current, setCurrent] = useState(null);
  const [enemy, setEnemy] = useState(null);

  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [resultType, setResultType] = useState(null);
  const [journey, setJourney] = useState(null);
  const [debugHintOpen, setDebugHintOpen] = useState(false);
  const [encounterDeck, setEncounterDeck] = useState([]);
  const [expToast, setExpToast] = useState(null);
  const [waveClearPopup, setWaveClearPopup] = useState(null);
  const [waveExpLog, setWaveExpLog] = useState(createWaveExpLog);
  const [rareChanceActive, setRareChanceActive] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [roundId, setRoundId] = useState(0);

  const [playerHp, setPlayerHp] = useState(100);
  const [combo, setCombo] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [reviewMode, setReviewMode] = useState(false);
  const [effectChanceActive, setEffectChanceActive] = useState(false);
  const [currentEffectQuestion, setCurrentEffectQuestion] = useState(null);
  const [effectTyped, setEffectTyped] = useState("");
  const [pendingEffectResume, setPendingEffectResume] = useState(null);
  const [showEffectChanceIntro, setShowEffectChanceIntro] = useState(false);
  const [shieldActive, setShieldActive] = useState(false);
  const [damageMultiplier, setDamageMultiplier] = useState(1);
  const [expBonusMultiplier, setExpBonusMultiplier] = useState(1);
  const [effectTimeBonus, setEffectTimeBonus] = useState(0);
  const [effectComments, setEffectComments] = useState([]);
  const [showEffectChanceBanner, setShowEffectChanceBanner] = useState(false);
  const [questionsSinceEffect, setQuestionsSinceEffect] = useState(0);
  const [nextEffectAt, setNextEffectAt] = useState(() => getNextEffectChanceAt());
  const [assistGauge, setAssistGauge] = useState(0);
  const [assistChargeMode, setAssistChargeMode] = useState(false);
  const [assistChargeCount, setAssistChargeCount] = useState(0);
  const [assistChargeFull, setAssistChargeFull] = useState(false);
  const [pendingVictory, setPendingVictory] = useState(false);
  const [assistActive, setAssistActive] = useState(false);
  const [assistDisplayCompanion, setAssistDisplayCompanion] = useState(null);
  const [shieldFromAssist, setShieldFromAssist] = useState(false);
  const [damageMultiplierFromAssist, setDamageMultiplierFromAssist] = useState(1);
  const [comboProtectFromAssist, setComboProtectFromAssist] = useState(false);
  const [lastDamageDealt, setLastDamageDealt] = useState(0);
  const [pendingEvolution, setPendingEvolution] = useState(null);
  const [showEvolutionScreen, setShowEvolutionScreen] = useState(false);
  const [evolutionPhase, setEvolutionPhase] = useState(0);
  const [pendingCorrect, setPendingCorrect] = useState(false);

  const [soundEnabled, setSoundEnabled] = useState(() => save.soundEnabled);
  const [flash, setFlash] = useState(null);
  const [monsterComment, setMonsterComment] = useState(null);
  const [shishoBoyaki, setShishoBoyaki] = useState(null);
  const [wrongStreak, setWrongStreak] = useState(0);
  const [timeupStreak, setTimeupStreak] = useState(0);
  const [screenFade, setScreenFade] = useState(null);
  const [recentTitleUnlocks, setRecentTitleUnlocks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [largeTextMode, setLargeTextMode] = useState(false);
  const [menuScreen, setMenuScreen] = useState("title");
  const [debugTutorialPrompted, setDebugTutorialPrompted] = useState(false);
  const [debugLockNotice, setDebugLockNotice] = useState(false);
  const [battleLog, setBattleLog] = useState(
    "コードモンスターの街で冒険の準備中。まずは半角スペースの剣を研いでおこう。"
  );

  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const bgmRef = useRef(null);
  const menuBgmRef = useRef(null);
  const resultSoundSeqRef = useRef(0);
  const journeyTimerRef = useRef(null);
  const wavePopupTimerRef = useRef(null);
  const postEvolutionActionRef = useRef(null);
  const pendingVictoryActionRef = useRef(null);
  const isComposingRef = useRef(false);
  const zenkakuWarningShownRef = useRef(false);
  const typingWrongMessageShownRef = useRef(false);
  const boyakiShownForQuestionRef = useRef(false);

  const stage = LEVELS[selectedLevel];
  const playerLevelInfo = getLevelInfoFromExp(save.exp);
  const debugDungeonUnlocked = playerLevelInfo.playerLevel >= DEBUG_UNLOCK_LEVEL;
  const debugUnlockRemainingExp = Math.max(0, getTotalExpForLevel(DEBUG_UNLOCK_LEVEL) - save.exp);
  const unlockedTitles = getUnlockedTitles(save, playerLevelInfo.playerLevel);
  const activeTitle = getActiveTitle(save, playerLevelInfo.playerLevel);
  const activePassive = activeTitle.passive || { type: "none", value: 0 };
  const timeBonus = activePassive.type === "timeBonus" ? activePassive.value : 0;
  const TIME_LIMIT = (selectedMode === "debug" ? stage.timeLimit + 25 : stage.timeLimit) + timeBonus + effectTimeBonus;
  const remaining = Math.max(0, TIME_LIMIT - elapsed);
  const playerTitle = activeTitle.name;
  const recommendedStage = getRecommendedStage(playerLevelInfo.playerLevel);
  const expPercent = Math.min(
    100,
    (playerLevelInfo.expInLevel / playerLevelInfo.expToNext) * 100
  );
  const fixedBugTypes = save.bugsFixed || [];
  const bugBookTotal = getBugBookEntries().length;
  const monstersSeen = save.monstersSeen || [];
  const monstersDefeatedIds = save.monstersDefeatedIds || [];
  const monsterBookTotal = getMonsterBookEntries().length;
  const adventureMemo = useMemo(() => {
    const clearedLevels = new Set(save.clearedLevels || []);
    const totalPlays = (save.stagePlays || []).reduce((sum, count) => sum + count, 0);
    const nextUnclearedIndex = LEVELS.findIndex((_, index) => !clearedLevels.has(index));

    if (totalPlays === 0) {
      return {
        badge: "はじめの一歩",
        title: "まずはLv.1 はじまりの草原へ",
        body: "半角スペースとクォートの感覚をつかむのじゃ。迷ったら初心者の館に寄ってからで大丈夫。",
        color: "#34d399",
      };
    }

    if (!clearedLevels.has(0)) {
      return {
        badge: "草原踏破",
        title: "Lv.1クリアを目指そう",
        body: "10問クリアできれば基礎の型がかなり固まる。焦らず、記号までよく見て唱えるのじゃ。",
        color: "#22c55e",
      };
    }

    if (!debugDungeonUnlocked) {
      return {
        badge: "修行中",
        title: `デバッグ解放まであと ${debugUnlockRemainingExp} EXP`,
        body: `魔術師Lv.${DEBUG_UNLOCK_LEVEL}になるとデバッグダンジョンが開く。今はノーマルで呪文の形を鍛えよう。`,
        color: "#fbbf24",
      };
    }

    if (debugDungeonUnlocked && !save.debugTutorialCompleted) {
      return {
        badge: "新要素",
        title: "デバッグチュートリアルに挑戦",
        body: "バグ入りコードをそのまま写さず、正しい形に直す練習じゃ。短い練習から始めよう。",
        color: "#fb923c",
      };
    }

    if (nextUnclearedIndex >= 0) {
      const nextStage = LEVELS[nextUnclearedIndex];

      return {
        badge: "次の冒険",
        title: `${nextStage.label} ${nextStage.stageName}へ`,
        body: STAGE_LEARNING_THEMES[nextUnclearedIndex] || "次のPython呪文をゆっくり覚えていこう。",
        color: nextStage.color,
      };
    }

    if (monstersSeen.length < monsterBookTotal) {
      return {
        badge: "図鑑集め",
        title: "未発見モンスターを探そう",
        body: `発見済みは ${monstersSeen.length} / ${monsterBookTotal}体。周回するとまだ見ぬコードモンスターに出会えるぞ。`,
        color: "#38bdf8",
      };
    }

    if ((fixedBugTypes || []).length < bugBookTotal) {
      return {
        badge: "バグ研究",
        title: "バグ図鑑を埋めよう",
        body: `浄化済みは ${(fixedBugTypes || []).length} / ${bugBookTotal}種。デバッグダンジョンで弱点を見抜くのじゃ。`,
        color: "#fb7185",
      };
    }

    return {
      badge: "達人の周回",
      title: "称号と図鑑を磨き込もう",
      body: "ここまで来たら立派なコード魔術師じゃ。お気に入りの称号で、より気持ちよく周回していこう。",
      color: "#a78bfa",
    };
  }, [
    save.clearedLevels,
    save.debugTutorialCompleted,
    save.stagePlays,
    debugDungeonUnlocked,
    debugUnlockRemainingExp,
    monstersSeen.length,
    monsterBookTotal,
    fixedBugTypes,
    bugBookTotal,
  ]);
  const stageQuestionPoolTotal = getQuestionCountForLevel(selectedLevel);
  const currentQuestionNumber = Math.min(questionCount + 1, REQUIRED_QUESTIONS_PER_STAGE);
  const answeredQuestionCount = Math.min(questionCount, REQUIRED_QUESTIONS_PER_STAGE);
  const companion = getCompanionMonster(save);
  const ownedCompanions = getOwnedCompanionMonsters(save);

  const answerCode = current ? getAnswerCode(current) : "";
  const shownCode = current ? getShownCode(current, selectedMode) : "";
  const currentHint = current ? getQuestionHint(current, selectedMode) : "";
  const currentDebug = current ? getDebugChallenge(current) : null;
  const keyHints = current && (selectedLevel <= 1 || playerHp <= 60)
    ? KEY_HINT_MAP.filter(({ symbol }) => answerCode.includes(symbol))
    : [];
  const timedHints = getTimedHints(current, elapsed, TIME_LIMIT, selectedMode);
  const isJourney = Boolean(journey);
  const isBattle = started && !finished && !isJourney && current && enemy;
  const isTypingWrong =
    typed.length > 0 && current && !answerCode.startsWith(typed);

  useEffect(() => {
    setDebugHintOpen(false);
    zenkakuWarningShownRef.current = false;
    typingWrongMessageShownRef.current = false;
    boyakiShownForQuestionRef.current = false;
  }, [current?.id, questionCount, enemy?.id, selectedMode]);

  const prevIsTypingWrongRef = useRef(false);
  useEffect(() => {
    if (isTypingWrong && !prevIsTypingWrongRef.current && isBattle) {
      triggerMonsterComment(enemy, "wrong");
      setWrongStreak((currentStreak) => {
        const nextStreak = currentStreak + 1;
        if (nextStreak >= 2 && !boyakiShownForQuestionRef.current) {
          boyakiShownForQuestionRef.current = true;
          triggerShishoBoyaki(SHISHO_BOYAKI.wrongStreak, 0.4);
        }
        return nextStreak;
      });
      if (!typingWrongMessageShownRef.current) {
        setBattleLog("🔙 赤くなったところまでバックスペースで戻って直そう。Escで全消しもできるよ。");
        typingWrongMessageShownRef.current = true;
      }
    }
    prevIsTypingWrongRef.current = isTypingWrong;
  }, [isTypingWrong, isBattle, enemy]);

  useEffect(() => {
    if (debugDungeonUnlocked || selectedMode !== "debug") return;

    setSelectedMode("normal");
    setBattleLog(`🔒 デバッグダンジョンは魔術師Lv.${DEBUG_UNLOCK_LEVEL}で解放されます。まずはノーマルモードで呪文に慣れよう。`);
  }, [debugDungeonUnlocked, selectedMode]);

  useEffect(() => {
    if (
      !debugDungeonUnlocked ||
      save.debugTutorialCompleted ||
      debugTutorialPrompted ||
      started ||
      finished ||
      journey ||
      menuScreen !== "adventure"
    ) {
      return;
    }

    setDebugTutorialPrompted(true);
    setSelectedMode("debug");
    setMenuScreen("debugTutorial");
    setBattleLog("🎉 デバッグダンジョン解放！ まずは短いチュートリアルで、間違いを直す感覚を掴もう。");
  }, [
    debugDungeonUnlocked,
    save.debugTutorialCompleted,
    debugTutorialPrompted,
    started,
    finished,
    journey,
    menuScreen,
  ]);


  useEffect(() => {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(save));
    } catch {
      // localStorage が使えない環境でもゲーム自体は止めない。
    }
  }, [save]);

  useEffect(() => {
    setSave((prev) => {
      const nextLevel = sanitizeLevel(selectedLevel);

      if (prev.lastSelectedMode === selectedMode && prev.lastSelectedLevel === nextLevel) {
        return prev;
      }

      return {
        ...prev,
        lastSelectedMode: sanitizeMode(selectedMode),
        lastSelectedLevel: nextLevel,
      };
    });
  }, [selectedMode, selectedLevel]);

  useEffect(() => {
    setSave((prev) => (
      prev.soundEnabled === soundEnabled
        ? prev
        : { ...prev, soundEnabled }
    ));
  }, [soundEnabled]);

  useEffect(() => {
    if (!started || finished || journey || assistChargeMode) return;

    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setElapsed((e) => {
        if (e + 1 >= TIME_LIMIT) {
          clearInterval(timerRef.current);
          handleTimeUp();
          return TIME_LIMIT;
        }

        return e + 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [started, finished, journey, assistChargeMode, roundId, TIME_LIMIT]);

  useEffect(() => {
    if (!soundEnabled) {
      stopMenuBgm();
      return;
    }

    if (!started && !finished) {
      startMenuBgm();
    } else {
      stopMenuBgm();
    }
  }, [soundEnabled, started, finished]);

  useEffect(() => {
    if (!showEvolutionScreen || evolutionPhase >= 2) return undefined;

    const delay = evolutionPhase === 0 ? 2500 : 1500;
    const timer = setTimeout(() => {
      setEvolutionPhase((phase) => Math.min(2, phase + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [showEvolutionScreen, evolutionPhase]);

  useEffect(() => {
    if (!assistChargeMode) return undefined;

    function handleChargeKey(e) {
      if (e.code === "Space") {
        e.preventDefault();
        setAssistChargeCount((count) => {
          const next = Math.min(ASSIST_CHARGE_MAX, count + 1);
          if (next >= ASSIST_CHARGE_MAX) {
            setAssistChargeFull(true);
          }
          return next;
        });
      }

      if (e.code === "Enter" && assistChargeFull) {
        e.preventDefault();
        const pendingAction = pendingVictoryActionRef.current;
        pendingVictoryActionRef.current = null;
        setAssistChargeMode(false);
        setAssistChargeFull(false);
        setAssistChargeCount(0);
        triggerAssist(companion, combo);
        if (pendingVictory && pendingAction) {
          setPendingVictory(false);
          setTimeout(() => {
            pendingAction();
          }, 2200);
        } else {
          startTimerAgain();
        }
      }
    }

    document.addEventListener("keydown", handleChargeKey);
    return () => document.removeEventListener("keydown", handleChargeKey);
  }, [assistChargeMode, assistChargeFull, pendingVictory, companion, combo]);

  function focusInput() {
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function resetEffectChanceState() {
    setEffectChanceActive(false);
    setCurrentEffectQuestion(null);
    setEffectTyped("");
    setPendingEffectResume(null);
    setShieldActive(false);
    setDamageMultiplier(1);
    setExpBonusMultiplier(1);
    setEffectTimeBonus(0);
    setEffectComments([]);
    setShowEffectChanceIntro(false);
    setShowEffectChanceBanner(false);
    setQuestionsSinceEffect(0);
    setNextEffectAt(getNextEffectChanceAt());
  }

  function startTimerAgain() {
    setElapsed(0);
    setRoundId((r) => r + 1);
    focusInput();
  }

  function clearWavePopupTimer() {
    if (wavePopupTimerRef.current) {
      clearTimeout(wavePopupTimerRef.current);
      wavePopupTimerRef.current = null;
    }
  }

  function resetWaveRunState() {
    clearWavePopupTimer();
    setExpToast(null);
    setWaveClearPopup(null);
    setWaveExpLog(createWaveExpLog());
    setRareChanceActive(false);
  }

  function showExpToast(exp, enemyName) {
    if (exp <= 0) return;

    setExpToast({ exp, enemyName, key: Date.now() });
    setTimeout(() => setExpToast(null), 1600);
  }

  function showWaveClearPopup(wave, message, onComplete) {
    clearWavePopupTimer();
    clearInterval(timerRef.current);
    setWaveClearPopup({ wave, message, key: Date.now() });
    wavePopupTimerRef.current = setTimeout(() => {
      setWaveClearPopup(null);
      wavePopupTimerRef.current = null;
      onComplete?.();
    }, 2000);
  }

  function startBgm() {
    if (!soundEnabled) return;

    stopBgm();

    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.18;
    bgmRef.current = audio;

    playAudioWithFallback(audio, BGM_FILES.battle);
  }

  function stopBgm() {
    if (!bgmRef.current) return;

    bgmRef.current.pause();
    bgmRef.current.currentTime = 0;
    bgmRef.current = null;
  }

  function startMenuBgm() {
    if (!soundEnabled) return;

    if (menuBgmRef.current && !menuBgmRef.current.paused) {
      return;
    }

    stopMenuBgm();

    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.12;
    menuBgmRef.current = audio;

    playAudioWithFallback(audio, BGM_FILES.menu);
  }

  function stopMenuBgm() {
    if (!menuBgmRef.current) return;

    menuBgmRef.current.pause();
    menuBgmRef.current.currentTime = 0;
    menuBgmRef.current = null;
  }

  function handleStart(level) {
    resultSoundSeqRef.current += 1;
    stopActiveSounds();
    stopMenuBgm();
    playSound("click", soundEnabled);
    resetWaveRunState();
    const activeMode = selectedMode === "debug" && debugDungeonUnlocked ? "debug" : "normal";
    if (activeMode !== selectedMode) {
      setSelectedMode(activeMode);
    }

    startBgm();

    const newEncounterDeck = buildEncounterDeck(level, REQUIRED_QUESTIONS_PER_STAGE);
    const firstEncounter = getEncounterFromDeck(newEncounterDeck, 0, level);
    const newEnemy = firstEncounter.enemy;
    const firstQuestion = firstEncounter.question;
    setSave((prev) => {
      const nextStagePlays = [...(prev.stagePlays || [0, 0, 0, 0])];
      const seen = new Set(prev.monstersSeen || []);
      nextStagePlays[level] = (nextStagePlays[level] || 0) + 1;

      if (newEnemy.id) {
        seen.add(newEnemy.id);
      }

      const nextSave = {
        ...prev,
        stagePlays: nextStagePlays,
        monstersSeen: Array.from(seen),
      };

      return applyTitleUnlocks(prev, nextSave, { show: false });
    });

    setSelectedLevel(level);
    setEncounterDeck(newEncounterDeck);
    setEnemy(newEnemy);
    triggerMonsterComment(newEnemy, "appear");
    triggerEpicBoyaki(newEnemy);
    setCurrent(firstQuestion);
    setPlayerHp(100);
    setCombo(0);
    setQuestionCount(0);
    setTyped("");
    setElapsed(0);
    setReviewMode(false);
    setWrongStreak(0);
    setTimeupStreak(0);
    resetEffectChanceState();
    resetAssistState();
    setStarted(true);
    setFinished(false);
    setResultType(null);
    setRecentTitleUnlocks([]);
    setShowDetails(false);
    setBattleLog(
      activeMode === "debug"
        ? `🐞 ${newEnemy.name} 出現！ バグ憑きコードを正しい形に修復しよう。`
        : `${newEnemy.name} 出現！ お手本コードを正確に唱えよう。`
    );
    setRoundId((r) => r + 1);

    focusInput();
  }

  function handleRetreat() {
    if (journeyTimerRef.current) {
      clearTimeout(journeyTimerRef.current);
    }
    resetWaveRunState();
    setJourney(null);
    setEncounterDeck([]);

    resultSoundSeqRef.current += 1;
    stopActiveSounds();
    stopBgm();
    startMenuBgm();
    clearInterval(timerRef.current);
    setStarted(false);
    setFinished(false);
    setResultType(null);
    setRecentTitleUnlocks([]);
    setReviewMode(false);
    resetEffectChanceState();
    resetAssistState();
    setBattleLog("街へ帰還した。勇気ある撤退もまた立派なデバッグ。");
  }


  function markStageCleared() {
    setSave((prev) => {
      const cleared = new Set(prev.clearedLevels || []);
      cleared.add(selectedLevel);

      const nextSave = {
        ...prev,
        clearedLevels: Array.from(cleared),
      };

      return applyTitleUnlocks(prev, nextSave);
    });
  }

  function finishStageClear(message, shouldLevelUp = false, delay = 500) {
    markStageCleared();
    setReviewMode(false);
    setBattleLog(message);

    const FADE_DURATION = 500;
    if (delay > FADE_DURATION) {
      setTimeout(() => setScreenFade("out"), delay - FADE_DURATION);
    }

    setTimeout(async () => {
      const soundSeq = resultSoundSeqRef.current + 1;
      resultSoundSeqRef.current = soundSeq;

      stopBgm();
      stopActiveSounds();
      setFlash(null);

      setScreenFade("in");
      setFinished(true);
      setResultType("stageClear");

      await playSoundAndWait("victory", soundEnabled);

      if (soundSeq !== resultSoundSeqRef.current) return;

      if (shouldLevelUp) {
        await playSoundAndWait("levelup", soundEnabled);
      }
    }, delay);
  }

  function continueToNextBattle(nextCompletedCount, message, forcedEnemy = null, delay = 650, allowEffectChance = true) {
    const resumeAction = { type: "journey", nextQuestionCount: nextCompletedCount, forcedEnemy, message };

    setBattleLog(message);
    setTimeout(() => {
      if (allowEffectChance && maybeOpenEffectChance(resumeAction, { allowReview: true })) {
        return;
      }

      beginJourneyToNext(nextCompletedCount, forcedEnemy, message);
    }, delay);
  }

  function completeBattleProgress({
    nextCompletedCount,
    gainedExp = 0,
    enemyName = "",
    message,
    stageClearMessage,
    shouldLevelUp = false,
  }) {
    const safeCompletedCount = Math.min(nextCompletedCount, REQUIRED_QUESTIONS_PER_STAGE);

    setQuestionCount(safeCompletedCount);
    setReviewMode(false);
    setTyped("");
    setPendingCorrect(false);
    setFlash(null);

    if (gainedExp > 0) {
      showExpToast(gainedExp, enemyName);
      setWaveExpLog((currentLog) => addBattleToWaveLog(currentLog, safeCompletedCount, gainedExp, enemyName));
    }

    if (safeCompletedCount >= REQUIRED_QUESTIONS_PER_STAGE) {
      setRareChanceActive(true);
      finishStageClear(stageClearMessage || message, shouldLevelUp, 900);
      return;
    }

    const isWaveBoundary = safeCompletedCount % BATTLES_PER_WAVE === 0;
    const isAfterWaveThree = safeCompletedCount === WAVES_PER_STAGE * BATTLES_PER_WAVE;

    if (isAfterWaveThree) {
      const rareEnemy = Math.random() < RARE_CHANCE_BATTLE_RATE
        ? getRareChanceEnemy(selectedLevel)
        : null;

      if (rareEnemy) {
        setRareChanceActive(true);
        showWaveClearPopup(3, "✨ レアチャンス！強敵が現れた！", () => {
          continueToNextBattle(
            safeCompletedCount,
            `✨ レアチャンス！強敵 ${rareEnemy.name} が現れた！最後の呪文で捕まえにいこう。`,
            rareEnemy,
            650,
            false
          );
        });
        return;
      }

      setRareChanceActive(false);
      finishStageClear(
        `${message} 9戦突破！今回はレアチャンスの気配はなかったが、堂々のステージクリア！`,
        shouldLevelUp,
        900
      );
      return;
    }

    if (isWaveBoundary) {
      const { wave } = getWaveInfo(safeCompletedCount - 1);
      showWaveClearPopup(wave, `ウェーブ${wave} クリア！ 次のウェーブが始まります…`, () => {
        continueToNextBattle(
          safeCompletedCount,
          `🌊 ウェーブ${wave + 1}開始！次のコードモンスターを探しに行こう。`
        );
      });
      return;
    }

    continueToNextBattle(safeCompletedCount, message, null, gainedExp > 0 ? 1500 : 650);
  }

  function triggerMonsterComment(enemyObj, eventType) {
    if (!enemyObj?.id) return;
    const data = MONSTER_COMMENTS_MAP[enemyObj.id];
    if (!data?.[eventType]) return;
    const top = Math.floor(Math.random() * 46) + 20;
    setMonsterComment({ text: data[eventType], icon: enemyObj.icon || enemyObj.sprite || "🐉", key: Date.now(), top, eventType });
  }

  function triggerShishoBoyaki(lines, chance) {
    if (!lines?.length) return false;
    if (Math.random() > chance) return false;
    const text = lines[Math.floor(Math.random() * lines.length)];
    const top = Math.floor(Math.random() * 20) + 68;
    setShishoBoyaki({ text, key: Date.now(), top });
    return true;
  }

  function triggerEpicBoyaki(enemyObj) {
    if (enemyObj?.rarity !== "epic") return;
    triggerShishoBoyaki(EPIC_BOYAKI[enemyObj.id] || EPIC_BOYAKI.generic, 0.6);
  }

  function canUseEffectChance() {
    return (save.clearedLevels || []).includes(selectedLevel);
  }

  function openEffectChance(resumeAction) {
    const randomEffect = EFFECT_QUESTIONS[Math.floor(Math.random() * EFFECT_QUESTIONS.length)];

    clearInterval(timerRef.current);
    setCurrentEffectQuestion(randomEffect);
    setPendingEffectResume(resumeAction);
    setEffectChanceActive(true);
    setShowEffectChanceIntro(true);
    setEffectTyped("");
    setShowEffectChanceBanner(true);
    setQuestionsSinceEffect(0);
    setNextEffectAt(getNextEffectChanceAt());
    setTyped("");
    setBattleLog(`⚡ タイピング効果チャンス！「${randomEffect.code}」を唱えると ${randomEffect.effectLabel}`);
    playSound("critical", soundEnabled);

    setTimeout(() => setShowEffectChanceBanner(false), 1800);
  }

  function maybeOpenEffectChance(resumeAction, options = {}) {
    if (!canUseEffectChance() || effectChanceActive || (!options.allowReview && reviewMode)) {
      return false;
    }

    if (questionsSinceEffect + 1 < nextEffectAt) {
      setQuestionsSinceEffect((count) => count + 1);
      return false;
    }

    openEffectChance(resumeAction);
    return true;
  }

  function moveToNextQuestion(nextQuestionCount, message) {
    const nextEncounter = getEncounterFromDeck(encounterDeck, nextQuestionCount, selectedLevel);

    setPendingCorrect(false);
    setCurrent(nextEncounter.question);
    setBattleLog(message);

    setTimeout(() => {
      setFlash(null);
      startTimerAgain();
    }, 350);
  }

  function beginJourneyToNext(nextQuestionCount, forcedEnemy = null, customMessage = null) {
    const totalQuestions = REQUIRED_QUESTIONS_PER_STAGE;
    const nextQuestionNumber = Math.min(nextQuestionCount + 1, REQUIRED_QUESTIONS_PER_STAGE);

    setJourney({
      mode: selectedMode,
      stageLabel: LEVELS[selectedLevel].label,
      stageName: LEVELS[selectedLevel].stageName,
      questionNumber: nextQuestionNumber,
      totalQuestions,
      poolTotal: getQuestionCountForLevel(selectedLevel),
      completedQuestions: Math.min(nextQuestionCount, REQUIRED_QUESTIONS_PER_STAGE),
      tip: ADVENTURE_TIPS[nextQuestionCount % ADVENTURE_TIPS.length],
      message:
        customMessage || (selectedMode === "debug"
          ? "次のバグ憑き呪文へ移動中……"
          : "次のコードモンスターを探して移動中……"),
    });

    journeyTimerRef.current = setTimeout(() => {
      startNextBattle(nextQuestionCount, forcedEnemy, customMessage);
    }, 3200);
  }

  function resumeAfterEffect(resumeAction) {
    setPendingEffectResume(null);
    setEffectChanceActive(false);
    setCurrentEffectQuestion(null);
    setEffectTyped("");
    setShowEffectChanceIntro(false);

    if (!resumeAction) {
      setEffectTimeBonus(0);
      startTimerAgain();
      return;
    }

    if (resumeAction.type === "nextQuestion") {
      moveToNextQuestion(resumeAction.nextQuestionCount, resumeAction.message);
      return;
    }

    if (resumeAction.type === "journey") {
      beginJourneyToNext(resumeAction.nextQuestionCount, resumeAction.forcedEnemy, resumeAction.message);
    }
  }

  function handleEffectQuestionCorrect() {
    const eq = currentEffectQuestion;
    if (!eq) return;

    if (eq.effect.type === "healPlayer") {
      setPlayerHp((hp) => Math.min(100, hp + eq.effect.value));
    } else if (eq.effect.type === "doubleDamage") {
      setDamageMultiplier(eq.effect.value);
    } else if (eq.effect.type === "shield") {
      setShieldActive(true);
    } else if (eq.effect.type === "comboBoost") {
      setCombo((currentCombo) => currentCombo + eq.effect.value);
    } else if (eq.effect.type === "bonusTime") {
      setEffectTimeBonus((bonus) => bonus + eq.effect.value);
    } else if (eq.effect.type === "expBonus") {
      setExpBonusMultiplier(eq.effect.value / 100 + 1);
    }

    const comments = eq.comments.map((text, index) => ({
      text,
      key: `${eq.id}-${Date.now()}-${index}`,
    }));
    const resumeAction = pendingEffectResume;
    setEffectComments(comments);
    setTimeout(() => setEffectComments([]), 3000);
    setBattleLog(`⚡ ${eq.code} → ${eq.effectLabel}`);
    playSound("ok", soundEnabled);

    setTimeout(() => resumeAfterEffect(resumeAction), 650);
  }

  function handleEffectInputChange(event) {
    const value = event.target.value;
    setEffectTyped(value);

    if (currentEffectQuestion && value === currentEffectQuestion.code) {
      handleEffectQuestionCorrect();
    }
  }

  function skipEffectChance() {
    const resumeAction = pendingEffectResume;
    setBattleLog("効果チャンスをスキップした。次の呪文へ進もう。");
    setShowEffectChanceIntro(false);
    resumeAfterEffect(resumeAction);
  }

  function applyTitleUnlocks(prevSave, nextSave, options = {}) {
    const nextPlayerLevel = getLevelInfoFromExp(nextSave.exp).playerLevel;
    const newlyUnlocked = getNewlyUnlockedTitles(prevSave, nextSave, nextPlayerLevel);

    if (newlyUnlocked.length === 0) {
      return nextSave;
    }

    if (options.show !== false) {
      setRecentTitleUnlocks((current) => {
        const byId = new Map(current.map((title) => [title.id, title]));
        newlyUnlocked.forEach((title) => byId.set(title.id, title));
        return Array.from(byId.values());
      });
    }

    return {
      ...nextSave,
      unlockedTitleIds: Array.from(new Set([
        ...(nextSave.unlockedTitleIds || ["apprentice_mage"]),
        ...newlyUnlocked.map((title) => title.id),
      ])),
    };
  }

  function resetAssistState() {
    setAssistGauge(0);
    setAssistChargeMode(false);
    setAssistChargeCount(0);
    setAssistChargeFull(false);
    setPendingVictory(false);
    pendingVictoryActionRef.current = null;
    setAssistActive(false);
    setAssistDisplayCompanion(null);
    setShieldFromAssist(false);
    setDamageMultiplierFromAssist(1);
    setComboProtectFromAssist(false);
    setLastDamageDealt(0);
    setPendingEvolution(null);
    setShowEvolutionScreen(false);
    setEvolutionPhase(0);
    setPendingCorrect(false);
    setWrongStreak(0);
  }

  function triggerAssist(activeCompanion, currentCombo) {
    if (!activeCompanion?.assistSkill) return;

    const skill = activeCompanion.assistSkill;
    setAssistActive(true);
    setAssistDisplayCompanion(activeCompanion);
    playSound("levelup", soundEnabled);

    if (skill.type === "heal") {
      setPlayerHp((hp) => Math.min(100, hp + skill.value));
      if (skill.comboBonus) setCombo((currentComboValue) => currentComboValue + skill.comboBonus);
      if (skill.timeBonus) setEffectTimeBonus((bonus) => bonus + skill.timeBonus);
      if (skill.damageBonus) setDamageMultiplierFromAssist(skill.damageBonus);
    } else if (skill.type === "damage") {
      setDamageMultiplierFromAssist(skill.value);
    } else if (skill.type === "time") {
      setEffectTimeBonus((bonus) => bonus + skill.value);
    } else if (skill.type === "shield") {
      setShieldFromAssist(true);
    } else if (skill.type === "combo") {
      setCombo((currentComboValue) => currentComboValue + skill.value);
      if (skill.damageBonus) setDamageMultiplierFromAssist(skill.damageBonus);
    } else if (skill.type === "comboProtect") {
      setComboProtectFromAssist(true);
    } else if (skill.type === "repeatDamage") {
      setDamageMultiplierFromAssist(lastDamageDealt > 0 ? 2 : 1.5);
    } else if (skill.type === "comboDamage") {
      setDamageMultiplierFromAssist(1 + Math.min(currentCombo * skill.value * 0.1, 2.5));
    } else if (skill.type === "percentDamage") {
      setDamageMultiplierFromAssist(2);
    } else if (skill.type === "lifesteal") {
      setDamageMultiplierFromAssist(1.5);
      setPlayerHp((hp) => Math.min(100, hp + Math.max(10, Math.round(lastDamageDealt * skill.value))));
    }

    setBattleLog(`✨ ${activeCompanion.name}の「${skill.name}」発動！ ${skill.effect}`);

    setSave((prev) => {
      const currentData = prev.companionData?.[activeCompanion.id] || { skillCount: 0, evolutionStage: getEvolutionStage(activeCompanion.id) };
      const nextSkillCount = (currentData.skillCount || 0) + 1;
      const nextCompanionData = {
        ...(prev.companionData || {}),
        [activeCompanion.id]: {
          ...currentData,
          skillCount: nextSkillCount,
          evolutionStage: getEvolutionStage(activeCompanion.id),
        },
      };
      const nextId = nextSkillCount >= getEvolutionThreshold(activeCompanion.id)
        ? getEvolvedId(activeCompanion.id)
        : null;

      if (nextId && !pendingEvolution) {
        const nextMonster = EVOLVED_MONSTERS.find((monster) => monster.id === nextId);
        if (nextMonster) {
          setPendingEvolution({
            fromMonster: activeCompanion,
            toMonster: {
              ...nextMonster,
              image: nextMonster.image || activeCompanion.image,
              icon: nextMonster.icon || nextMonster.sprite || activeCompanion.icon || activeCompanion.sprite,
            },
            nextId,
          });
          setBattleLog(`🌟 ${activeCompanion.name}に進化の予感！ 冒険結果で確認しよう。`);
        }
      }

      return {
        ...prev,
        companionData: nextCompanionData,
      };
    });

    setTimeout(() => {
      setAssistActive(false);
      setAssistDisplayCompanion(null);
    }, 2200);
  }

  function openAssistCharge(activeCompanion) {
    if (!activeCompanion?.assistSkill) return false;

    clearInterval(timerRef.current);
    setAssistChargeMode(true);
    setAssistChargeCount(0);
    setAssistChargeFull(false);
    setAssistGauge(0);
    setBattleLog(`🤝 ${activeCompanion.name}の力が満ちた！スペース長押しでチャージしよう。`);
    playSound("levelup", soundEnabled);
    return true;
  }

  function getAssistGaugeGain(nextCombo) {
    return 15 + Math.min(nextCombo * 2, 20);
  }

  function getScaledAssistGaugeGain(nextCombo) {
    return Math.round(getAssistGaugeGain(nextCombo) * 1.3);
  }

  function gainAssistGauge(activeCompanion, nextCombo, canOpenCharge = true) {
    if (!activeCompanion) return false;

    const gaugeGain = getScaledAssistGaugeGain(nextCombo);
    const nextGauge = assistGauge + gaugeGain;

    if (nextGauge >= 100) {
      if (canOpenCharge) {
        return openAssistCharge(activeCompanion);
      }

      setAssistGauge(100);
      return false;
    }

    setAssistGauge(nextGauge);
    return false;
  }

  function handleTimeUp() {
    if (shieldFromAssist) {
      setShieldFromAssist(false);
      setFlash("ok");
      playSound("ok", soundEnabled);
      setBattleLog("✨ 相棒のシールドが攻撃を防いだ！ もう一度落ち着いて唱えよう。");
      setTimeout(() => {
        setFlash(null);
        setEffectTimeBonus(0);
        startTimerAgain();
      }, 350);
      return;
    }

    if (comboProtectFromAssist) {
      setComboProtectFromAssist(false);
      setFlash("ok");
      playSound("ok", soundEnabled);
      setBattleLog("✨ 相棒がコンボを守った！ ミスしても流れは切れていない。");
      setTimeout(() => {
        setFlash(null);
        setEffectTimeBonus(0);
        startTimerAgain();
      }, 350);
      return;
    }

    if (shieldActive) {
      setShieldActive(false);
      setCombo(0);
      setReviewMode(false);
      setFlash("ok");
      playSound("ok", soundEnabled);
      setBattleLog("🛡️ シールド発動！ 今回の被ダメージを無効化した。もう一度落ち着いて唱えよう。");
      setTimeout(() => {
        setFlash(null);
        setEffectTimeBonus(0);
        startTimerAgain();
      }, 350);
      return;
    }

    const damage = reviewMode ? 24 + selectedLevel * 5 : 18 + selectedLevel * 5;
    const nextHp = Math.max(0, playerHp - damage);

    setPlayerHp(nextHp);
    setCombo(0);
    setTimeupStreak((currentStreak) => {
      const nextStreak = currentStreak + 1;
      if (nextStreak >= 2) {
        triggerShishoBoyaki(SHISHO_BOYAKI.timeupStreak, 0.5);
      }
      return nextStreak;
    });
    if (effectTimeBonus > 0) {
      setEffectTimeBonus(0);
    }
    setReviewMode(false);
    setFlash("ng");
    playSound("ng", soundEnabled);
    setBattleLog(
      `詠唱が間に合わない！ ${damage}ダメージ！ でも大丈夫、タイピング筋は今育っている。`
    );

    triggerMonsterComment(enemy, "timeup");
    setTimeout(() => setFlash(null), 300);

    if (nextHp <= 0) {
      stopBgm();
    }

    setFinished(true);
    setResultType(nextHp <= 0 ? "defeat" : "timeup");
  }

  function handleChange(e) {
    if (!started || finished || !current || !enemy) return;
    if (assistChargeMode) return;
    if (effectChanceActive) return;
    if (pendingCorrect) return;
    if (isComposingRef.current) return;

    const val = e.target.value;

    if (!zenkakuWarningShownRef.current && val.length > typed.length) {
      const added = val.slice(typed.length);
      if (/[^\x20-\x7E]/.test(added)) {
        setBattleLog(
          "⚠️ 全角文字が入ったよ！ キーボード左上の「半角/全角」キーを押して、半角英数モードに切り替えよう。"
        );
        zenkakuWarningShownRef.current = true;
        return;
      }
    }

    setTyped(val);

    if (val === answerCode) {
      clearInterval(timerRef.current);
      setPendingCorrect(true);
      setFlash("ok");
      setBattleLog("✅ 呪文が完成！Enterキーで確定して攻撃しよう。");
    }
  }

  function resolveCorrectAnswer() {
    if (!started || finished || !current || !enemy || !pendingCorrect) return;

    clearInterval(timerRef.current);
    setPendingCorrect(false);
    setWrongStreak(0);
    setTimeupStreak(0);

    const wasReview = reviewMode;
    const isCritical = remaining >= Math.ceil(TIME_LIMIT * 0.6);
    const baseDamage = wasReview ? 50 + selectedLevel * 10 : 40 + selectedLevel * 8;
    const titleDamage = applyTitleDamageBonus(isCritical ? baseDamage + 20 : baseDamage, combo + 1, activePassive);
    const damage = Math.round(titleDamage * damageMultiplier * damageMultiplierFromAssist);
    const nextEnemyHp = Math.max(0, enemy.hp - damage);
    const nextCombo = combo + 1;

    const gainedCastExp = Math.round(
      applyTitleExpBonus(
        (wasReview ? 8 : 5) + (selectedMode === "debug" ? 3 : 0),
        activePassive
      ) * expBonusMultiplier
    );

    setEnemy((prev) => ({
      ...prev,
      hp: nextEnemyHp,
    }));

    setCombo(nextCombo);
    if (damageMultiplier !== 1) {
      setDamageMultiplier(1);
    }
    if (damageMultiplierFromAssist !== 1) {
      setDamageMultiplierFromAssist(1);
    }
    if (effectTimeBonus > 0) {
      setEffectTimeBonus(0);
    }
    setLastDamageDealt(damage);
    const shouldDelayVictoryForAssist = nextEnemyHp <= 0
      && companion
      && assistGauge + getScaledAssistGaugeGain(nextCombo) >= 100;
    const assistChargeStarted = gainAssistGauge(companion, nextCombo, nextEnemyHp > 0 && !wasReview);
    setFlash(isCritical ? "critical" : "ok");
    playSound(isCritical ? "critical" : "ok", soundEnabled);

    setSave((prev) => {
      const debug = selectedMode === "debug" ? getDebugChallenge(current) : null;
      const fixed = new Set(prev.bugsFixed || []);

      if (debug?.bugType) {
        fixed.add(debug.bugType);
      }

      const nextSave = {
        ...prev,
        exp: prev.exp + gainedCastExp,
        totalCasts: prev.totalCasts + 1,
        maxCombo: Math.max(prev.maxCombo, nextCombo),
        bugsFixed: Array.from(fixed),
        debugCleanses: selectedMode === "debug"
          ? (prev.debugCleanses || 0) + 1
          : (prev.debugCleanses || 0),
      };

      return applyTitleUnlocks(prev, nextSave);
    });

    if (nextEnemyHp <= 0) {
      triggerMonsterComment(enemy, "defeat");
    } else if (nextCombo >= 3) {
      triggerMonsterComment(enemy, "combo");
    } else {
      triggerMonsterComment(enemy, "correct");
    }

    if (nextEnemyHp <= 0) {
      const beforeLevel = getLevelInfoFromExp(save.exp).playerLevel;
      const gainedExp = Math.round(
        applyTitleExpBonus(enemy.exp + nextCombo * 4 + (wasReview ? 10 : 0), activePassive) * expBonusMultiplier
      );
      const afterLevel = getLevelInfoFromExp(save.exp + gainedCastExp + gainedExp)
        .playerLevel;
      const shouldLevelUp = afterLevel > beforeLevel;
      const nextCompletedCount = Math.min(questionCount + 1, REQUIRED_QUESTIONS_PER_STAGE);

      setSave((prev) => {
        const nextSave = {
          ...prev,
          exp: prev.exp + gainedExp,
          monstersDefeated: prev.monstersDefeated + 1,
          monstersDefeatedIds: Array.from(new Set([...(prev.monstersDefeatedIds || []), enemy.id].filter(Boolean))),
          maxCombo: Math.max(prev.maxCombo, nextCombo),
        };

        return applyTitleUnlocks(prev, nextSave);
      });

      const continueVictoryResult = () => {
        setQuestionCount(nextCompletedCount);
        setReviewMode(false);

        const defeatMessage = selectedMode === "debug"
          ? `🐞✨ バグ浄化！「${getDebugChallenge(current).bugName}」を修復して ${enemy.name} を討伐！ ${gainedExp}EXP獲得！ ${
              shouldLevelUp ? "魔術師レベルアップ！" : "デバッグ筋が育った！"
            }`
          : `${enemy.name}を討伐！ ${gainedExp}EXP獲得！ ${
              shouldLevelUp ? "魔術師レベルアップ！" : "いい詠唱だった！"
            }`;

        completeBattleProgress({
          nextCompletedCount,
          gainedExp,
          enemyName: enemy.name,
          message: defeatMessage,
          stageClearMessage: `${defeatMessage} そして冒険完走！ ${LEVELS[selectedLevel].stageName} クリア！`,
          shouldLevelUp,
        });
      };

      if (shouldDelayVictoryForAssist && companion) {
        pendingVictoryActionRef.current = continueVictoryResult;
        setPendingVictory(true);
        openAssistCharge(companion);
        return;
      }

      continueVictoryResult();

      return;
    }

    if (!wasReview) {
      setReviewMode(true);
      setTyped("");
      setBattleLog(
        selectedMode === "debug"
          ? `🐞 バグ浄化ヒット！「${getDebugChallenge(current).bugName}」に気づけた！ もう一度、正しい形に修復して完全浄化しよう。`
          : "⚡ 追撃チャンス！敵を倒しきれなかったので、同じ呪文をもう一度唱えると追加ダメージ。成功すると記憶定着ボーナス、タイマーは止まりません。"
      );

      setTimeout(() => {
        setFlash(null);
        if (!assistChargeStarted) {
          startTimerAgain();
        }
      }, 350);

      return;
    }

    const nextQuestionCount = Math.min(questionCount + 1, REQUIRED_QUESTIONS_PER_STAGE);

    const nextMessage = selectedMode === "debug"
      ? `🐞 バグは見抜いたが、${enemy.name}には逃げられた！今回は撃退、次のバグ憑き呪文へ。`
      : `✅ 追撃は成功！ただし ${enemy.name} は倒しきれずに逃げた。今回は撃退、次の呪文へ！`;

    completeBattleProgress({
      nextCompletedCount: nextQuestionCount,
      message: nextMessage,
      stageClearMessage: `${nextMessage} 冒険を走り抜けて ${LEVELS[selectedLevel].stageName} クリア！`,
    });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (pendingCorrect) {
        e.preventDefault();
        resolveCorrectAnswer();
      }
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setTyped("");
      setBattleLog(
        "入力をリセットした！Escは『今の詠唱をいったん消す』ボタンとして使えるよ。"
      );
    }
  }

  function startNextBattle(nextQuestionCount, forcedEnemy = null, customMessage = null) {
    const encounter = getEncounterFromDeck(encounterDeck, nextQuestionCount, selectedLevel);
    const newEnemy = forcedEnemy || encounter.enemy;
    const nextQuestion = encounter.question;
    setSave((prev) => {
      const seen = new Set(prev.monstersSeen || []);

      if (newEnemy.id) {
        seen.add(newEnemy.id);
      }

      const nextSave = {
        ...prev,
        monstersSeen: Array.from(seen),
      };

      return applyTitleUnlocks(prev, nextSave, { show: false });
    });

    setEnemy(newEnemy);
    triggerMonsterComment(newEnemy, "appear");
    triggerEpicBoyaki(newEnemy);
    setCurrent(nextQuestion);
    setFinished(false);
    setResultType(null);
    setRecentTitleUnlocks([]);
    setShowDetails(false);
    setTyped("");
    setPendingCorrect(false);
    setElapsed(0);
    setReviewMode(false);
    setJourney(null);

    setBattleLog(
      customMessage || (selectedMode === "debug"
        ? `${newEnemy.name} 出現！ 次のバグ憑きコードを修復しよう。`
        : `${newEnemy.name} 出現！ 次の呪文へ進もう。`)
    );

    startBgm();
    startTimerAgain();
  }

  function continueBattle() {
    resultSoundSeqRef.current += 1;
    stopActiveSounds();
    stopMenuBgm();
    stopBgm();

    if (journeyTimerRef.current) {
      clearTimeout(journeyTimerRef.current);
    }

    setShowDetails(false);
    setTyped("");
    setPendingCorrect(false);
    setElapsed(0);
    setReviewMode(false);

    if (resultType === "timeup") {
      setFinished(false);
      setResultType(null);
      startBgm();
      setBattleLog(
        selectedMode === "debug"
          ? "同じバグ憑き呪文に再挑戦！どこを直すか、ゆっくり見れば大丈夫。失敗はデバッグの入口です。"
          : "同じ敵に再挑戦！さっきの呪文をもう一度。失敗は復習イベント、経験値の親戚です。"
      );
      startTimerAgain();
      return;
    }

    const nextQuestionCount = questionCount;

    setFinished(false);
    setResultType(null);
    setRecentTitleUnlocks([]);

    if (maybeOpenEffectChance(
      { type: "journey", nextQuestionCount },
      { allowReview: true }
    )) {
      startBgm();
      return;
    }

    beginJourneyToNext(nextQuestionCount);
  }

  function handleResultAction(action) {
    if (pendingEvolution) {
      postEvolutionActionRef.current = action;
      setEvolutionPhase(0);
      setShowEvolutionScreen(true);
      stopActiveSounds();
      stopBgm();
      playSound("levelup", soundEnabled);
      return;
    }

    action();
  }

  function handleEvolutionComplete() {
    const evolution = pendingEvolution;
    const nextAction = postEvolutionActionRef.current || goTown;
    postEvolutionActionRef.current = null;

    if (!evolution?.nextId) {
      setShowEvolutionScreen(false);
      setPendingEvolution(null);
      nextAction();
      return;
    }

    setSave((prev) => ({
      ...prev,
      equippedMonsterId: evolution.nextId,
      companionData: {
        ...(prev.companionData || {}),
        [evolution.nextId]: {
          ...(prev.companionData?.[evolution.nextId] || {}),
          skillCount: 0,
          evolutionStage: getEvolutionStage(evolution.nextId),
        },
      },
    }));

    setBattleLog(`🌟 ${evolution.fromMonster.name}が「${evolution.toMonster.name}」へ進化した！`);
    setShowEvolutionScreen(false);
    setEvolutionPhase(0);
    setPendingEvolution(null);
    nextAction();
  }

  function goTown() {
    if (journeyTimerRef.current) {
      clearTimeout(journeyTimerRef.current);
    }
    resetWaveRunState();
    setJourney(null);
    setEncounterDeck([]);

    resultSoundSeqRef.current += 1;
    stopActiveSounds();
    stopBgm();
    startMenuBgm();
    setStarted(false);
    setFinished(false);
    setResultType(null);
    setRecentTitleUnlocks([]);
    setReviewMode(false);
    setEnemy(null);
    resetEffectChanceState();
    resetAssistState();
    setBattleLog("街へ帰還した。次の冒険に備えよう。");
  }

  function resetSave() {
    if (journeyTimerRef.current) {
      clearTimeout(journeyTimerRef.current);
    }
    setJourney(null);
    setEncounterDeck([]);

    resultSoundSeqRef.current += 1;
    const ok = window.confirm("セーブデータをリセットしますか？");
    if (!ok) return;

    stopActiveSounds();
    stopBgm();
    startMenuBgm();

    localStorage.removeItem(SAVE_KEY);
    const resetState = sanitizeSave(INITIAL_SAVE);
    setSave(resetState);
    setSoundEnabled(resetState.soundEnabled);
    setSelectedMode(resetState.lastSelectedMode);
    setSelectedLevel(resetState.lastSelectedLevel);
    setPlayerHp(100);
    setCombo(0);
    setQuestionCount(0);
    setStarted(false);
    setFinished(false);
    setResultType(null);
    setReviewMode(false);
    setEnemy(null);
    setCurrent(null);
    resetEffectChanceState();
    resetAssistState();
    setTyped("");
    setElapsed(0);
    setBattleLog("セーブデータをリセットした。新たな冒険の始まりだ！");
    setDebugTutorialPrompted(false);
  }

  function handleLinkMonster(monsterId) {
    setSave((prev) => {
      const defeated = new Set(prev.monstersDefeatedIds || []);
      const seen = new Set(prev.monstersSeen || []);
      const linked = new Set(prev.linkedMonsterIds || []);

      if (defeated.has(monsterId) || seen.has(monsterId) || linked.has(monsterId)) {
        return prev;
      }

      linked.add(monsterId);
      return {
        ...prev,
        linkedMonsterIds: Array.from(linked),
      };
    });
  }

  const enemyHpPercent = enemy ? Math.max(0, (enemy.hp / enemy.maxHp) * 100) : 0;
  const playerHpPercent = Math.max(0, playerHp);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/title-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
        fontFamily: "monospace",
        padding: "0 20px 40px",
        color: "#e2e8f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(2, 6, 23, 0.55)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      {journey && <JourneyTransition journey={journey} />}

      {!journey && !started && !finished && (
        <div style={{ width: "100%", maxWidth: 1400, marginTop: 0 }}>
          <TitleHeader />

          <div className="lobby-layout">
            <div className="lobby-layout__left">
              <TitleHero
                soundEnabled={soundEnabled}
                onPlayMenuBgm={() => {
                  playSound("click", soundEnabled);
                  startMenuBgm();
                }}
                monsterSeenCount={monstersSeen.length}
                monsterTotal={monsterBookTotal}
                bugFixedCount={fixedBugTypes.length}
                bugTotal={bugBookTotal}
                totalCasts={save.totalCasts}
                totalPlays={(save.stagePlays || []).reduce((a, b) => a + b, 0)}
                monstersSeen={save.monstersSeen || []}
                clearedLevels={save.clearedLevels || []}
                adventureMemo={adventureMemo}
                onNavigate={(screen) => {
                  playSound("click", soundEnabled);
                  setMenuScreen(screen);
                }}
              />
            </div>

            <div className="lobby-layout__right">

          {menuScreen === "title" && (
            <TitleMainMenu
              playerLevelInfo={playerLevelInfo}
              playerTitle={playerTitle}
              activePassive={activePassive}
              save={save}
              expPercent={expPercent}
              fixedBugTypes={fixedBugTypes}
              bugBookTotal={bugBookTotal}
              monstersSeen={monstersSeen}
              monsterBookTotal={monsterBookTotal}
                battleLog={battleLog}
                largeTextMode={largeTextMode}
                soundEnabled={soundEnabled}
                linkedMonsterCount={(save.linkedMonsterIds || []).length}
                onNavigate={(screen) => {
                  playSound("click", soundEnabled);
                  setMenuScreen(screen);
              }}
              onToggleLargeText={() => setLargeTextMode((value) => !value)}
              onToggleSound={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);

                if (!next) {
                  resultSoundSeqRef.current += 1;
                  stopActiveSounds();
                  stopBgm();
                  stopMenuBgm();
                } else if (started && !finished) {
                  startBgm();
                } else {
                  startMenuBgm();
                }
              }}
              onResetSave={resetSave}
            />
          )}

          {menuScreen === "adventure" && (
            <AdventureMenuScreen
              selectedMode={selectedMode}
              debugDungeonUnlocked={debugDungeonUnlocked}
              debugUnlockLevel={DEBUG_UNLOCK_LEVEL}
              debugUnlockRemainingExp={debugUnlockRemainingExp}
              debugTutorialCompleted={save.debugTutorialCompleted}
              titles={unlockedTitles}
              activeTitleId={activeTitle.id}
              companions={ownedCompanions}
              activeCompanionId={save.equippedMonsterId}
              companionData={save.companionData}
              assistGauge={assistGauge}
              onBack={() => setMenuScreen("title")}
              onSelectTitle={(titleId) => {
                setSave((prev) => ({ ...prev, selectedTitleId: titleId }));
                playSound("click", soundEnabled);
              }}
              onSelectCompanion={(monsterId) => {
                setSave((prev) => ({ ...prev, equippedMonsterId: monsterId }));
                setAssistGauge(0);
                playSound("click", soundEnabled);
              }}
              onSelectMode={(mode) => {
                playSound("click", soundEnabled);
                if (mode === "debug" && !debugDungeonUnlocked) {
                  setDebugLockNotice(true);
                  setBattleLog(`🔒 デバッグダンジョンは魔術師Lv.${DEBUG_UNLOCK_LEVEL}で解放されます。`);
                  playSound("ng", soundEnabled);
                  return;
                }

                setSelectedMode(mode);

                if (mode === "debug" && !save.debugTutorialCompleted) {
                  setDebugTutorialPrompted(true);
                  setMenuScreen("debugTutorial");
                  setBattleLog("🐞 デバッグチュートリアルを開始。まずは日本語の間違い直しから感覚を掴もう。");
                  return;
                }

                setMenuScreen("stageSelect");

                if (mode === "normal") {
                  setBattleLog("ノーマルモード：お手本コードを正確に唱える冒険です。");
                } else {
                  setBattleLog("デバッグダンジョン：間違いを見つけて正しく直す冒険です。");
                }
              }}
            />
          )}

          {debugLockNotice && (
            <div className="debug-lock-modal" role="dialog" aria-modal="true" onClick={() => setDebugLockNotice(false)}>
              <section className="debug-lock-modal__panel" onClick={(event) => event.stopPropagation()}>
                <div className="debug-lock-modal__icon">🔒</div>
                <h2>デバッグダンジョンはまだ封印中</h2>
                <p>
                  魔術師Lv.{DEBUG_UNLOCK_LEVEL}で解放されます。まずはノーマルモードでPython呪文の型に慣れよう。
                </p>
                <button type="button" onClick={() => setDebugLockNotice(false)}>わかった</button>
              </section>
            </div>
          )}

          {menuScreen === "debugTutorial" && (
            <DebugTutorialScreen
              onBack={() => setMenuScreen("adventure")}
              onComplete={() => {
                setSave((prev) => ({ ...prev, debugTutorialCompleted: true }));
                setSelectedMode("debug");
                setMenuScreen("stageSelect");
                setBattleLog("🎉 デバッグチュートリアル完了！ デバッグダンジョンLv.1へ進めます。バグ入りコードはそのまま写さず、正しい形に直そう。");
                playSound("click", soundEnabled);
              }}
            />
          )}

          {menuScreen === "stageSelect" && (
            <StageSelectPanel
              selectedMode={selectedMode}
              save={save}
              recommendedStage={recommendedStage}
              battleLog={battleLog}
              onBack={() => setMenuScreen("adventure")}
              onStartLevel={(level) => handleStart(level)}
            />
          )}

          {menuScreen === "bugbook" && (
            <MenuScreenFrame title="📘 バグ図鑑" onBack={() => setMenuScreen("title")}>
              <BugBookPanel fixedBugTypes={fixedBugTypes} debugCleanses={save.debugCleanses || 0} />
            </MenuScreenFrame>
          )}

          {menuScreen === "monsterbook" && (
            <MenuScreenFrame title="🐲 モンスター図鑑" onBack={() => setMenuScreen("title")}>
              <MonsterBookPanel
                monstersSeen={monstersSeen}
                monstersDefeatedIds={monstersDefeatedIds}
                linkedMonsterIds={save.linkedMonsterIds}
                onLinkMonster={handleLinkMonster}
                initialFilters={save.monsterBookFilters}
                onFiltersChange={(filters) => {
                  setSave((prev) => {
                    const nextFilters = sanitizeMonsterBookFilters(filters);
                    const currentFilters = sanitizeMonsterBookFilters(prev.monsterBookFilters);

                    if (
                      currentFilters.status === nextFilters.status &&
                      currentFilters.rarity === nextFilters.rarity &&
                      currentFilters.habitat === nextFilters.habitat &&
                      currentFilters.search === nextFilters.search
                    ) {
                      return prev;
                    }

                    return {
                      ...prev,
                      monsterBookFilters: nextFilters,
                    };
                  });
                }}
              />
            </MenuScreenFrame>
          )}

          {menuScreen === "transfer" && (
            <MenuScreenFrame title="🔐 転送呪文" onBack={() => setMenuScreen("title")}>
              <TransferCodePanel
                monstersSeen={monstersSeen}
                monstersDefeatedIds={monstersDefeatedIds}
                linkedMonsterIds={save.linkedMonsterIds}
                onLinkMonster={handleLinkMonster}
                onOpenMonsterBook={() => setMenuScreen("monsterbook")}
              />
            </MenuScreenFrame>
          )}

          {menuScreen === "beginner" && (
            <BeginnerGuide
              onBack={() => setMenuScreen("title")}
              onGoAdventure={() => setMenuScreen("adventure")}
            />
          )}
            </div>
          </div>
        </div>
      )}

      {isBattle && (
        <div
          className={largeTextMode ? "battle-card battle-card--large" : "battle-card"}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: largeTextMode ? 940 : 780,
            background: "rgba(15, 23, 42, 0.96)",
            borderRadius: 18,
            padding: 24,
            border: `2px solid ${
              flash === "critical"
                ? "#fbbf24"
                : flash === "ok"
                ? "#4ade80"
                : flash === "ng"
                ? "#ef4444"
                : "#334155"
            }`,
            boxShadow:
              flash === "critical"
                ? "0 0 30px rgba(251,191,36,0.5)"
                : "0 24px 70px rgba(0,0,0,0.4)",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#cbd5e1" }}>
              🛡️ {getBattleModeLabel(selectedMode)} / {stage.label} / {stage.stageName} / {currentQuestionNumber > WAVES_PER_STAGE * BATTLES_PER_WAVE ? "✨ レアチャンス！" : (() => { const { wave, inWave } = getWaveInfo(questionCount); return `ウェーブ${wave}/${WAVES_PER_STAGE}・${inWave}戦目`; })()} / 1問 {TIME_LIMIT}秒
            </span>

            <button
              onClick={handleRetreat}
              style={{
                background: "#7f1d1d",
                color: "#fff",
                border: "none",
                padding: "7px 12px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              🏳️ 街に戻る
            </button>
          </div>

          {companion && (
            <div className="assist-gauge">
              <span>🤝 相棒：{companion.name}</span>
              <b>{assistGauge} / 100</b>
              <div className="assist-gauge__track">
                <div style={{ width: `${Math.min(100, assistGauge)}%` }} />
              </div>
            </div>
          )}

          {assistActive && (assistDisplayCompanion || companion) && (
            <div className="assist-active-overlay">
              {(assistDisplayCompanion || companion).image ? (
                <img
                  src={(assistDisplayCompanion || companion).image}
                  alt={(assistDisplayCompanion || companion).name}
                  className="assist-active-monster"
                />
              ) : (
                <div className="assist-active-monster assist-active-monster--emoji">
                  {(assistDisplayCompanion || companion).icon || (assistDisplayCompanion || companion).sprite || "✨"}
                </div>
              )}
              <p className="assist-active-skill-name">
                💥 {(assistDisplayCompanion || companion).assistSkill.name}
              </p>
              <p className="assist-active-skill-effect">
                {(assistDisplayCompanion || companion).assistSkill.effect}
              </p>
            </div>
          )}

          {assistChargeMode && companion && (
            <div className="assist-charge-overlay">
              <div className="assist-charge-monster">
                {companion.image ? (
                  <img src={companion.image} alt={companion.name} />
                ) : (
                  <span>{companion.icon || companion.sprite || "✨"}</span>
                )}
                <p>{companion.name}</p>
              </div>

              <p className="assist-charge-label">
                {assistChargeFull ? "✨ エンターで発動！！" : "スペース長押し でチャージ！"}
              </p>

              <div className={`assist-charge-bar ${assistChargeFull ? "assist-charge-bar--full" : ""}`}>
                <span>{"█".repeat(assistChargeCount)}</span>
              </div>

              <p className="assist-charge-skill">
                💥 {companion.assistSkill.name}
              </p>
            </div>
          )}

          {effectChanceActive && currentEffectQuestion && (
            <div className="effect-chance-overlay">
              {showEffectChanceIntro ? (
                <div className="effect-chance-intro-card">
                  <div className="effect-chance-intro-title">✨ タイピング効果チャンス！</div>
                  <p>この問題をクリアすると特別な効果が発動するよ！</p>
                  <button
                    type="button"
                    className="effect-chance-intro-button"
                    onClick={() => setShowEffectChanceIntro(false)}
                  >
                    準備OK！
                  </button>
                </div>
              ) : (
                <>
                  {showEffectChanceBanner && (
                <div className="effect-chance-banner">
                  ⚡ タイピング効果チャンス！！
                </div>
                  )}
                  <div className="effect-chance-card">
                    <p className="effect-chance-label">{currentEffectQuestion.effectLabel}</p>
                    <p className="effect-chance-hint">{currentEffectQuestion.hint}</p>
                    <div className="effect-chance-code">{currentEffectQuestion.code}</div>
                    <input
                      className="effect-chance-input"
                      autoFocus
                      value={effectTyped}
                      placeholder={currentEffectQuestion.code}
                      onChange={handleEffectInputChange}
                    />
                    <button type="button" className="effect-chance-skip" onClick={skipEffectChance}>
                      スキップして次へ
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {effectComments.length > 0 && (
            <div className="niconico-comments" aria-hidden="true">
              {effectComments.map((comment, index) => (
                <span
                  key={comment.key}
                  className="niconico-comment"
                  style={{ top: `${15 + index * 14}%`, animationDelay: `${index * 0.22}s` }}
                >
                  {comment.text}
                </span>
              ))}
            </div>
          )}

          {reviewMode && (
            <div
              className="review-chance"
              style={{
                background: "linear-gradient(135deg, rgba(88,28,135,0.96), rgba(120,53,15,0.92))",
                border: "1px solid #fbbf24",
                borderRadius: 14,
                padding: 16,
                marginBottom: 16,
                color: "#fef3c7",
                fontWeight: "bold",
                lineHeight: 1.6,
                fontSize: largeTextMode ? 17 : 15,
                boxShadow: "0 0 24px rgba(251,191,36,0.22)",
              }}
            >
              <div style={{ fontSize: largeTextMode ? 24 : 20, color: "#fde68a", marginBottom: 6 }}>
                ⚡ 追撃チャンス！
              </div>
              <div>敵を倒しきれなかったので、同じ呪文をもう一度唱えると追加ダメージ。</div>
              <div>成功すると記憶定着ボーナス。</div>
              <div style={{ color: "#fca5a5" }}>タイマーは止まらないので、落ち着いて素早く入力しよう。</div>
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <Gauge
              title="🧙‍♂️ プレイヤーHP"
              value={playerHpPercent}
              text={`${playerHp} / 100`}
              color="#22c55e"
            />
            <Gauge
              title={reviewMode ? "⏳ 復習追撃タイマー" : "⏳ 詠唱タイマー"}
              value={(remaining / TIME_LIMIT) * 100}
              text={`${remaining} 秒`}
              color={remaining > TIME_LIMIT * 0.35 ? "#38bdf8" : "#ef4444"}
            />
          </div>

          <section
            className={[
              "battle-enemy-panel",
              `battle-enemy-panel--${enemy.rarity}`,
              flash === "ng" ? "battle-enemy-panel--hit" : "",
              flash === "ok" || flash === "critical" ? "battle-enemy-panel--attack" : "",
            ].filter(Boolean).join(" ")}
            style={{
              "--rarity-color": RARITY_COLORS[enemy.rarity] || "#94a3b8",
              "--rarity-glow": RARITY_GLOW[enemy.rarity] || RARITY_GLOW.common,
            }}
          >
            <div className="battle-enemy-panel__header">
              <div>
                <div className="battle-enemy-panel__eyebrow">
                  ⚠️ モンスターが立ちはだかった！
                </div>
                <div className="battle-enemy-panel__name">{enemy.name}</div>
              </div>
              <div className="battle-enemy-panel__badges">
                <span className="battle-rarity-badge">
                  {RARITY_LABELS[enemy.rarity] || enemy.rarity}
                </span>
                <span className="battle-habitat-badge">{enemy.habitat}</span>
              </div>
            </div>

            <MonsterPortrait enemy={enemy} flash={flash} />

            <div className="battle-enemy-panel__hp">
              <Gauge
                title="敵HP"
                value={enemyHpPercent}
                text={`${enemy.hp} / ${enemy.maxHp}`}
                color="#ef4444"
                variant="enemy"
              />
            </div>

          </section>

          {monsterComment && (
            <div
              key={monsterComment.key}
              className={`monster-comment-flow${monsterComment.eventType === "defeat" ? " monster-comment-flow--defeat" : ""}`}
              style={{ background: LEVELS[selectedLevel]?.color || "#3b82f6", top: `${monsterComment.top}%` }}
            >
              {monsterComment.icon} {monsterComment.text}
            </div>
          )}

          {shishoBoyaki && (
            <div
              key={shishoBoyaki.key}
              className="shisho-boyaki-flow"
              style={{ top: `${shishoBoyaki.top}%` }}
            >
              🧙‍♂️ {shishoBoyaki.text}
            </div>
          )}

          {expToast && (
            <div key={expToast.key} className="exp-toast">
              <span className="exp-toast__name">{expToast.enemyName} 撃破！</span>
              <span className="exp-toast__exp">+{expToast.exp} EXP</span>
            </div>
          )}

          {waveClearPopup && (
            <div key={waveClearPopup.key} className="wave-clear-popup">
              <div className="wave-clear-popup__icon">🌊</div>
              <div className="wave-clear-popup__title">ウェーブ{waveClearPopup.wave} クリア！</div>
              <div className="wave-clear-popup__message">{waveClearPopup.message}</div>
            </div>
          )}

          <div
            style={{
              background: reviewMode
                ? "linear-gradient(135deg, rgba(49,46,129,0.9), rgba(69,26,3,0.86))"
                : "#030712",
              padding: 20,
              borderRadius: 12,
              marginBottom: 16,
              border: reviewMode ? "1px solid #fbbf24" : "1px solid #1f2937",
            }}
          >
            <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 8 }}>
              {selectedMode === "debug" ? "🐞 バグ憑きコード（このまま写さない）" : "🎯 お手本コード"}
            </div>

            <div
              className="spell-code"
              style={{
                fontSize: largeTextMode ? 30 : 24,
                letterSpacing: 1,
                color: selectedMode === "debug" ? "#fb923c" : "#34d399",
                wordBreak: "break-all",
                marginBottom: 12,
              }}
            >
              {selectedMode === "debug" && currentDebug ? (
                <span className="debug-code-highlight">
                  {getHighlightedBuggy(currentDebug.buggy, answerCode).map((seg, idx) =>
                    seg.isError ? (
                      <span key={idx} className="debug-code-highlight__error">
                        {seg.text}
                      </span>
                    ) : (
                      <span key={idx}>{seg.text}</span>
                    )
                  )}
                </span>
              ) : (
                shownCode
              )}
            </div>

            <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 12 }}>
              💡 {currentHint}
            </div>

            {selectedMode === "debug" && currentDebug && (
              <div
                style={{
                  background: "rgba(124, 45, 18, 0.35)",
                  border: "1px solid #f97316",
                  borderRadius: 10,
                  padding: 12,
                  marginBottom: 12,
                  color: "#ffedd5",
                  lineHeight: 1.7,
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                  <b style={{ color: "#fed7aa" }}>
                    {currentDebug.icon} 今回のバグ：{currentDebug.bugName}
                  </b>

                  <button
                    type="button"
                    onClick={() => setDebugHintOpen((v) => !v)}
                    style={{
                      background: "#7c2d12",
                      border: "1px solid #fdba74",
                      color: "#fed7aa",
                      borderRadius: 999,
                      padding: "5px 10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    {debugHintOpen ? "対処法を閉じる ▲" : "詳しい対処法を開く ▼"}
                  </button>
                </div>

                {!debugHintOpen && (
                  <div style={{ marginTop: 6, color: "#fdba74", fontSize: 13 }}>
                    詳しい症状と直し方は、必要になったら開けます。
                  </div>
                )}

                {debugHintOpen && (
                  <div
                    style={{
                      marginTop: 10,
                      borderTop: "1px dashed rgba(253,186,116,0.6)",
                      paddingTop: 10,
                    }}
                  >
                    <div style={{ marginTop: 6 }}>
                      <b>症状：</b>{currentDebug.symptom}
                    </div>
                    <div style={{ marginTop: 6 }}>
                      <b>直し方：</b>{currentDebug.fix}
                    </div>
                    <div style={{ marginTop: 6, color: "#fdba74", fontWeight: "bold" }}>
                      入力するのは、下のバグ入りコードではなく「修復後の正しいコード」です。
                    </div>
                  </div>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowDetails((v) => !v)}
              style={{
                background: showDetails ? "#1e293b" : "#172554",
                border: "1px solid #38bdf8",
                color: "#dbeafe",
                padding: "9px 12px",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: "bold",
                width: "100%",
                marginBottom: 12,
              }}
            >
              {showDetails ? "📖 この呪文の意味を閉じる ▲" : "📖 この呪文の意味を見る ▼"}
            </button>

            {showDetails && current && (
              <SpellMeaningPanel current={current} />
            )}

            {timedHints.length > 0 && (
              <div
                style={{
                  background: "#1e1b4b",
                  border: "1px solid #6366f1",
                  borderRadius: 10,
                  padding: 12,
                  marginBottom: 12,
                  color: "#e0e7ff",
                  lineHeight: 1.7,
                }}
              >
                <b style={{ color: "#fef3c7" }}>🧙 時間経過ヒント</b>
                {timedHints.map((hint, index) => (
                  <div key={index}>・{hint}</div>
                ))}
              </div>
            )}

          <SpellPreview
            target={answerCode}
            typed={typed}
            hideRemaining={selectedMode === "debug"}
          />
        </div>

          {!effectChanceActive && (
          <>
          {selectedLevel <= 1 && (
            <div
              style={{
                background: "rgba(30,64,175,0.25)",
                border: "1px solid #3b82f6",
                borderRadius: 8,
                padding: "8px 12px",
                marginBottom: 8,
                fontSize: 13,
                color: "#93c5fd",
              }}
            >
              💡 入力のコツ：{current?.tips?.[0] || "記号（= ' \" ( ) : *）は半角で。スペースも半角で。大文字小文字はそのまま入力します。"}
            </div>
          )}

          <input
            ref={inputRef}
            className={pendingCorrect ? "answer-pending" : ""}
            value={typed}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => { isComposingRef.current = true; }}
            onCompositionEnd={() => { isComposingRef.current = false; }}
            readOnly={pendingCorrect}
            style={{
              width: "100%",
              background: reviewMode ? "#1e1b4b" : "#030712",
              border: `2px solid ${pendingCorrect ? "#22c55e" : isTypingWrong ? "#ef4444" : reviewMode ? "#fbbf24" : "#4b5563"}`,
              borderRadius: 10,
              padding: 14,
              color: "#fff",
              fontSize: largeTextMode ? 22 : 18,
              boxSizing: "border-box",
              outline: flash === "critical" ? "2px solid #fbbf24" : "none",
            }}
            placeholder="呪文を入力。半角スペースとクォートに注意！"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            inputMode="text"
          />

          {pendingCorrect && (
            <div className="answer-pending-note">
              ✅ 正解入力です。Enterキーで攻撃を確定！
            </div>
          )}

          {keyHints.length > 0 && (
            <div className="key-hint-panel">
              {keyHints.map(({ symbol, hint }) => (
                <span key={symbol} className="key-hint-badge">
                  {symbol === "_" ? (
                    <>
                      <span className="key-hint-symbol key-hint-symbol--underscore">_</span>
                      {" → Shift + ろ"}
                    </>
                  ) : hint}
                </span>
              ))}
            </div>
          )}

          {isTypingWrong && (
            <div style={{ color: "#fca5a5", marginTop: 8, fontSize: 13 }}>
              ⚠️ どこかで違う文字が入ってるかも。Backspaceで戻ればOK。焦らず詠唱！
            </div>
          )}
          </>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: 12,
              marginTop: 16,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "#020617",
                border: "1px solid #334155",
                borderRadius: 12,
                padding: 12,
                fontSize: 18,
                fontWeight: "bold",
                color: "#fb7185",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              🔥 {combo}
            </div>

            <div
              style={{
                background: reviewMode ? "#312e81" : "#020617",
                border: `1px solid ${reviewMode ? "#a78bfa" : "#334155"}`,
                borderRadius: 12,
                padding: 12,
                fontSize: 16,
                color: "#e0e7ff",
                lineHeight: 1.6,
                fontWeight: reviewMode ? "bold" : "normal",
              }}
            >
              {battleLog}
            </div>
          </div>
        </div>
      )}

      {!journey && finished && resultType === "stageClear" && (
        <LevelClearScreen
          stage={LEVELS[selectedLevel]}
          battleLog={battleLog}
          requiredQuestions={REQUIRED_QUESTIONS_PER_STAGE}
          completedBattles={questionCount}
          waveExpLog={waveExpLog}
          rareChanceActive={rareChanceActive}
          combo={combo}
          playerLevel={getLevelInfoFromExp(save.exp).playerLevel}
          title={getPlayerTitle(getLevelInfoFromExp(save.exp).playerLevel)}
          onTown={() => handleResultAction(goTown)}
          isLastStage={selectedLevel >= LEVELS.length - 1}
          onNextStage={() => handleResultAction(() => handleStart(selectedLevel + 1))}
        />
      )}

      {!journey && finished && resultType !== "stageClear" && (
        <div
          className={[
            "result-card",
            resultType === "victory" || resultType === "levelup" ? "result-card--victory" : "",
          ].filter(Boolean).join(" ")}
          style={{
            width: "100%",
            maxWidth: 700,
            background: "rgba(15, 23, 42, 0.96)",
            borderRadius: 18,
            padding: 28,
            textAlign: "center",
            border: "1px solid #334155",
            boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
            boxSizing: "border-box",
          }}
        >
          {resultType === "victory" && (
            <>
              <h2 style={{ color: "#34d399", margin: "0 0 10px 0" }}>🎉 討伐成功！</h2>
              <p style={{ color: "#fbbf24", fontWeight: "bold" }}>{battleLog}</p>
            </>
          )}

          {resultType === "levelup" && (
            <>
              <div className="levelup-marquee" aria-hidden="true">
                <div className="levelup-marquee__track">
                  {[...LEVEL_UP_MARQUEE, ...LEVEL_UP_MARQUEE].map((text, i) => (
                    <span key={i}>{text}</span>
                  ))}
                </div>
              </div>
              <h2 style={{ color: "#fbbf24", margin: "0 0 10px 0" }}>🌟 LEVEL UP！🌟</h2>
              <p style={{ color: "#e0e7ff", fontWeight: "bold" }}>
                魔術師レベルが Lv.{getLevelInfoFromExp(save.exp).playerLevel} になった！
              </p>
              <p style={{ color: "#a7f3d0" }}>
                新称号候補：【{getPlayerTitle(getLevelInfoFromExp(save.exp).playerLevel)}】
              </p>
            </>
          )}

          {resultType === "timeup" && (
            <>
              <h2 style={{ color: "#ef4444", margin: "0 0 10px 0" }}>💀 詠唱失敗！</h2>
              <p style={{ color: "#fca5a5" }}>{battleLog}</p>
            </>
          )}

          {resultType === "defeat" && (
            <>
              <h2 style={{ color: "#ef4444", margin: "0 0 10px 0" }}>☠️ HPが尽きた……</h2>
              <p style={{ color: "#fca5a5" }}>
                街へ戻って体勢を立て直そう。敗北も経験値、ということにしておこう。
              </p>
            </>
          )}

          <div
            style={{
              margin: "18px 0",
              background: "#020617",
              border: "1px solid #334155",
              borderRadius: 12,
              padding: 14,
              textAlign: "left",
            }}
          >
            <ResultLine
              label="🧙‍♂️ 魔術師レベル"
              value={`Lv.${getLevelInfoFromExp(save.exp).playerLevel}`}
            />
            <ResultLine
              label="🏷️ 称号"
              value={getPlayerTitle(getLevelInfoFromExp(save.exp).playerLevel)}
            />
            <ResultLine label="✨ 累計EXP" value={save.exp} />
            <ResultLine label="🪄 正解詠唱数" value={`${save.totalCasts} 回`} />
            <ResultLine label="🔥 今回のコンボ" value={combo} />
            <ResultLine
              label="🧭 ステージ進行"
              value={`${answeredQuestionCount} / ${REQUIRED_QUESTIONS_PER_STAGE} 問達成`}
            />
            {selectedMode === "debug" && currentDebug && (
              <ResultLine label="🐞 浄化したバグ" value={currentDebug.bugName} />
            )}
            {enemy?.baseName && (
              <ResultLine label="🐲 登録モンスター" value={enemy.baseName} />
            )}
          </div>

          {recentTitleUnlocks.length > 0 && (
            <>
              <div className="title-unlock-marquee" aria-hidden="true">
                <div className="title-unlock-marquee__track">
                  {TITLE_UNLOCK_MARQUEE.concat(recentTitleUnlocks.map((title) => title.name)).map((text, i) => (
                    <span key={i}>{text}</span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  marginTop: 16,
                  background: "rgba(251,191,36,0.08)",
                  border: "1px solid #fbbf2466",
                  borderRadius: 12,
                  padding: "12px 16px",
                  textAlign: "left",
                }}
              >
                <b style={{ color: "#fbbf24" }}>🏅 新称号解放！</b>
                {recentTitleUnlocks.map((title) => (
                  <div key={title.id} style={{ marginTop: 8 }}>
                    <span style={{ color: "#f8fafc", fontWeight: "bold" }}>【{title.name}】</span>
                    <small style={{ display: "block", color: "#94a3b8", marginTop: 2 }}>{title.description}</small>
                  </div>
                ))}
              </div>
            </>
          )}

          <button
            onClick={() => setShowDetails(!showDetails)}
            style={{
              background: "#374151",
              color: "#fff",
              border: "none",
              padding: "11px 20px",
              borderRadius: 10,
              cursor: "pointer",
              width: "100%",
              margin: "10px 0",
            }}
          >
            {showDetails ? "📜 解説を閉じる" : "📜 この呪文の超初心者向け解説を見る"}
          </button>

          {showDetails && current && (
            <SpellMeaningPanel current={current} />
          )}

          {resultType !== "defeat" && resultType !== "stageClear" && (
            <button
              onClick={() => handleResultAction(continueBattle)}
              style={{
                padding: "12px 30px",
                background: "linear-gradient(135deg, #059669, #0f766e)",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: "bold",
                width: "100%",
                marginBottom: 10,
              }}
            >
              ⚔️ 続けて戦う
            </button>
          )}

          {(resultType === "defeat" || resultType === "timeup") && (
            <button
              onClick={() => handleResultAction(() => handleStart(selectedLevel))}
              style={{
                padding: "12px 30px",
                background: "linear-gradient(135deg, #b45309, #d97706)",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: "bold",
                width: "100%",
                marginBottom: 10,
              }}
            >
              🔄 もう一度挑戦する
            </button>
          )}

          <button
            onClick={() => handleResultAction(goTown)}
            style={{
              padding: "12px 30px",
              background: (resultType === "defeat" || resultType === "timeup")
                ? "rgba(30,41,59,0.8)"
                : "linear-gradient(135deg, #4f46e5, #7c3aed)",
              color: "#fff",
              border: (resultType === "defeat" || resultType === "timeup")
                ? "1px solid #475569"
                : "none",
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            🏰 タイトル画面へ戻る
          </button>
        </div>
      )}

      {showEvolutionScreen && pendingEvolution && (
        <EvolutionScreen
          evolution={pendingEvolution}
          phase={evolutionPhase}
          onComplete={handleEvolutionComplete}
        />
      )}

      {screenFade && (
        <div
          className={screenFade === "out" ? "screen-fade-overlay screen-fade-out" : "screen-fade-overlay screen-fade-in"}
          onAnimationEnd={() => { if (screenFade === "in") setScreenFade(null); }}
        />
      )}
      </div>
    </div>
  );
}


function EvolutionScreen({ evolution, phase, onComplete }) {
  const comments = [
    "進化！！",
    "強くなった！",
    `${evolution.toMonster.name}！`,
    "すごい！！",
    "かっこいい！",
    "レベルアップ以上！",
    "相棒が変わった！",
    "おめでとう！！",
    "最高だ！",
    "bbbbbbb←おいやめろ",
  ];

  return (
    <div className={`evolution-screen evolution-screen--phase-${phase}`}>
      <div className="evolution-screen__bg" />
      <div className="evolution-screen__content">
        {phase === 0 && (
          <>
            <div className="evolution-screen__single evolution-shake" aria-hidden="true">
              {evolution.fromMonster?.image ? (
                <img src={evolution.fromMonster.image} alt="" className="evolution-screen__monster evolution-screen__monster--single" />
              ) : (
                <span className="evolution-screen__monster evolution-screen__monster--emoji evolution-screen__monster--single">
                  {evolution.fromMonster?.icon || evolution.fromMonster?.sprite || "✨"}
                </span>
              )}
            </div>
            <p className="evolution-screen__from">おや？{evolution.fromMonster.name}の様子が…？</p>
          </>
        )}

        {phase === 1 && (
          <>
            <div className="evolution-screen__flash-core">✨</div>
            <p className="evolution-screen__arrow">光があふれている！</p>
          </>
        )}

        {phase === 2 && (
          <>
            <div className="evolution-screen__single" aria-hidden="true">
              {evolution.toMonster?.image ? (
                <img src={evolution.toMonster.image} alt="" className="evolution-screen__monster evolution-screen__monster--single evolution-screen__monster--complete" />
              ) : (
                <span className="evolution-screen__monster evolution-screen__monster--emoji evolution-screen__monster--single evolution-screen__monster--complete">
                  {evolution.toMonster?.icon || evolution.toMonster?.sprite || "🌟"}
                </span>
              )}
            </div>
            <p className="evolution-screen__arrow">▼ 進化！ ▼</p>
            <p className="evolution-screen__to">{evolution.toMonster.name}</p>
            <p className="evolution-screen__skill">
              ✨ {evolution.toMonster.assistSkill.name}
            </p>
            <p className="evolution-screen__effect">
              {evolution.toMonster.assistSkill.effect}
            </p>
            <button type="button" className="evolution-screen__btn" onClick={onComplete}>
              次へ進む
            </button>
          </>
        )}
      </div>
      <div className="niconico-comments" aria-hidden="true">
        {comments.map((comment, index) => (
          <span
            key={`${comment}-${index}`}
            className="niconico-comment"
            style={{
              top: `${12 + (index % 5) * 13}%`,
              animationDelay: `${index * 0.18}s`,
              fontSize: index < 4 ? "30px" : "22px",
            }}
          >
            {comment}
          </span>
        ))}
      </div>
    </div>
  );
}


function SpellMeaningPanel({ current }) {
  const code = getAnswerCode(current);

  return (
    <div
      style={{
        background: "#030712",
        padding: 16,
        borderRadius: 10,
        textAlign: "left",
        fontSize: 14,
        lineHeight: 1.7,
        border: "1px solid #4b5563",
        marginBottom: 15,
      }}
    >
      <div style={{ marginBottom: 10 }}>
        <span style={{ color: "#f43f5e", fontWeight: "bold" }}>詠唱コード:</span>{" "}
        <code style={{ color: "#60a5fa" }}>{code}</code>
      </div>

      <p style={{ margin: "10px 0", color: "#d1d5db" }}>
        {current?.details || "この呪文の説明は準備中です。"}
      </p>

      <TermList terms={current?.terms || []} />
      <TipList tips={current?.tips || []} />

      <div
        style={{
          marginTop: 12,
          background: "rgba(15,23,42,0.9)",
          border: "1px solid #334155",
          borderRadius: 10,
          padding: 12,
          color: "#cbd5e1",
          fontSize: 13,
        }}
      >
        <b style={{ color: "#fef3c7" }}>🧭 ここで覚えること</b>
        <div style={{ marginTop: 6 }}>
          Pythonでは、スペースや記号も呪文の一部です。
          見た目をそろえるためだけでなく、Pythonが「どこが名前で、どこが値か」を読みやすくするために使います。
        </div>
      </div>
    </div>
  );
}

function LevelClearScreen({
  stage,
  battleLog,
  requiredQuestions,
  completedBattles,
  waveExpLog,
  rareChanceActive,
  combo,
  playerLevel,
  title,
  onTown,
  isLastStage,
  onNextStage,
}) {
  const waveRows = waveExpLog?.waves || [];
  const rareRow = waveExpLog?.rare;
  const totalExp = waveExpLog?.totalExp || 0;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 760,
        background:
          `radial-gradient(circle at top, ${stage.color}30, rgba(15,23,42,0.98) 50%, rgba(2,6,23,0.98))`,
        border: `2px solid ${stage.color}`,
        borderRadius: 22,
        padding: 30,
        textAlign: "center",
        boxShadow: "0 28px 90px rgba(251,191,36,0.28), 0 0 60px rgba(251,191,36,0.12)",
        boxSizing: "border-box",
      }}
    >
      <div className="stage-clear-trophy">🏆</div>

      <div style={{ fontSize: 28, marginBottom: 4 }}>{stage.emoji}</div>

      <div style={{ color: stage.color, fontWeight: 900, marginBottom: 4 }}>
        {stage.label}
      </div>

      <h1 style={{ color: "#fef3c7", margin: "0 0 10px 0", fontSize: "clamp(28px, 5vw, 42px)" }}>
        ステージクリア！
      </h1>

      <div
        style={{
          width: "min(280px, 72%)",
          margin: "0 auto 14px",
          borderBottom: `3px solid ${stage.color}`,
          boxShadow: `0 0 18px ${stage.color}88`,
        }}
      />

      <h2 style={{ color: "#f8fafc", margin: "0 0 16px 0" }}>
        {stage.stageName} 突破！
      </h2>

      <p style={{ color: "#fde68a", fontWeight: "bold", lineHeight: 1.7 }}>
        {battleLog}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 12,
          margin: "20px 0",
          textAlign: "left",
        }}
      >
        <StatusCard label="冒険結果" value={`${completedBattles || requiredQuestions}戦完走`} color="#fbbf24" />
        <StatusCard label="最大コンボ" value={`${combo}`} color="#fb7185" />
        <StatusCard label="魔術師Lv" value={`Lv.${playerLevel}`} color="#38bdf8" />
      </div>

      <div className="wave-result-breakdown">
        <div className="wave-result-breakdown__title">📜 ウェーブ冒険報告</div>
        {waveRows.map((wave, index) => (
          <div key={`wave-${index}`} className="wave-result-breakdown__row">
            <span>ウェーブ{index + 1}</span>
            <b>{wave.defeated}体撃破 / {wave.exp} EXP</b>
          </div>
        ))}
        {rareChanceActive && (
          <div className="wave-result-breakdown__row wave-result-breakdown__row--rare">
            <span>10戦目レア</span>
            <b>{rareRow ? `${rareRow.enemyName} / ${rareRow.exp} EXP` : "出現したが撃退"}</b>
          </div>
        )}
        {!rareChanceActive && (
          <div className="wave-result-breakdown__row">
            <span>10戦目レア</span>
            <b>今回は気配なし</b>
          </div>
        )}
        <div className="wave-result-breakdown__total">
          合計：{totalExp} EXP
        </div>
      </div>

      <div
        style={{
          background: "rgba(2,6,23,0.72)",
          border: "1px solid #334155",
          borderRadius: 14,
          padding: 14,
          color: "#cbd5e1",
          lineHeight: 1.7,
          marginBottom: 18,
        }}
      >
        称号：<b style={{ color: "#a7f3d0" }}>【{title}】</b>
        <br />
        街へ戻って、次のステージや図鑑を確認しよう。
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
        {!isLastStage && (
          <button
            type="button"
            onClick={onNextStage}
            style={{
              padding: "14px 34px",
              background: "linear-gradient(135deg, #059669, #10b981)",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
              maxWidth: 360,
              fontSize: 16,
            }}
          >
            ➡️ 次のステージへ
          </button>
        )}
        <button
          type="button"
          onClick={onTown}
          style={{
            padding: "14px 34px",
            background: isLastStage
              ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
              : "rgba(30,41,59,0.8)",
            color: "#fff",
            border: isLastStage ? "none" : "1px solid #475569",
            borderRadius: 12,
            cursor: "pointer",
            fontWeight: "bold",
            width: "100%",
            maxWidth: 360,
          }}
        >
          🏰 街へ戻る
        </button>
      </div>
    </div>
  );
}

function JourneyTransition({ journey }) {
  const hero = journey.mode === "debug" ? "🐞🧙‍♂️" : "🧙‍♂️";
  const destination = journey.mode === "debug" ? "🐞" : "⚔️";

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 720,
        background: "rgba(15, 23, 42, 0.96)",
        border: "1px solid #334155",
        borderRadius: 18,
        padding: 26,
        textAlign: "center",
        boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
        boxSizing: "border-box",
      }}
    >
      <style>
        {`
          @keyframes codeMonsterWalk {
            0% { left: 0%; transform: translateY(0) scale(1); }
            25% { transform: translateY(-6px) scale(1.04); }
            50% { transform: translateY(0) scale(1); }
            75% { transform: translateY(-6px) scale(1.04); }
            100% { left: calc(100% - 54px); transform: translateY(0) scale(1); }
          }

          @keyframes codeMonsterPathGlow {
            0% { opacity: 0.45; }
            50% { opacity: 1; }
            100% { opacity: 0.45; }
          }
        `}
      </style>

      <div style={{ fontSize: 42, marginBottom: 10 }}>🚶‍♂️✨</div>

      <h2 style={{ color: "#fef3c7", margin: "0 0 8px 0" }}>
        次の冒険へ移動中……
      </h2>

      <div style={{ color: "#cbd5e1", marginBottom: 16, lineHeight: 1.7 }}>
        {journey.message}
        <br />
        <b style={{ color: "#38bdf8" }}>{journey.stageLabel}：{journey.stageName}</b>
      </div>

      <div
        style={{
          background: "#020617",
          border: "1px solid #334155",
          borderRadius: 14,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            position: "relative",
            height: 54,
            background:
              "linear-gradient(90deg, rgba(34,197,94,0.22), rgba(56,189,248,0.18), rgba(251,191,36,0.22))",
            borderRadius: 999,
            border: "1px solid rgba(148,163,184,0.28)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "24px 34px auto 34px",
              borderTop: "3px dotted rgba(226,232,240,0.55)",
              animation: "codeMonsterPathGlow 0.8s infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 0,
              fontSize: 32,
              animation: "codeMonsterWalk 3.05s ease-in-out forwards",
              whiteSpace: "nowrap",
            }}
          >
            {hero}
          </div>
          <div
            style={{
              position: "absolute",
              top: 9,
              right: 12,
              fontSize: 30,
            }}
          >
            {destination}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 10,
          textAlign: "left",
        }}
      >
        <StatusCard
          label="進行"
          value={`${journey.totalQuestions}問中 現在${journey.questionNumber}問目`}
          color="#38bdf8"
        />
        <StatusCard
          label="今回の冒険"
          value={`${journey.totalQuestions}問チャレンジ`}
          color="#a78bfa"
        />
        <StatusCard
          label="回答済み"
          value={`${journey.completedQuestions} / ${journey.totalQuestions} 問`}
          color="#fbbf24"
        />
        <StatusCard
          label="モード"
          value={journey.mode === "debug" ? "デバッグ" : "ノーマル"}
          color={journey.mode === "debug" ? "#f97316" : "#34d399"}
        />
      </div>

      {journey.tip && (
        <div className="journey-tip">
          <div className="journey-tip__label">冒険TIPS</div>
          <div className="journey-tip__text">{journey.tip}</div>
        </div>
      )}
    </div>
  );
}

function formatPassive(passive) {
  if (!passive || passive.type === "none") return null;
  if (passive.type === "damageBonus") return `⚔️ 正解ダメージ +${passive.value}`;
  if (passive.type === "comboBonus") return `🔥 コンボダメージ +${passive.value}%`;
  if (passive.type === "expBonus") return `✨ EXP獲得量 +${Math.round(passive.value * 100)}%`;
  if (passive.type === "timeBonus") return `⏱️ 制限時間 +${passive.value}秒`;
  return null;
}

function TitleMainMenu({
  playerLevelInfo,
  playerTitle,
  activePassive,
  save,
  expPercent,
  fixedBugTypes,
  bugBookTotal,
  monstersSeen,
  monsterBookTotal,
  battleLog,
  largeTextMode,
  soundEnabled,
  linkedMonsterCount,
  onNavigate,
  onToggleLargeText,
  onToggleSound,
  onResetSave,
}) {
  const menuItems = [
    {
      id: "adventure",
      icon: "⚔️",
      title: "冒険モード選択・称号付け替え",
      description: "ノーマル / デバッグダンジョン",
      sub: "呪文を唱えてモンスターを倒そう。称号装備もこちら、強力なパッシブ効果を装備しよう。",
      color: "#fbbf24",
    },
    {
      id: "monsterbook",
      icon: "🐲",
      title: "モンスター図鑑",
      description: `発見 ${monstersSeen.length} / ${monsterBookTotal}体`,
      sub: "詳細なモンスターデータはこちらから。全130体を集めよう。",
      color: "#38bdf8",
    },
    {
      id: "transfer",
      icon: "🔐",
      title: "転送呪文",
      description: `連携済み ${linkedMonsterCount || 0}体`,
      sub: "PC・スマホ・友達とモンスターを共有できる。",
      color: "#a78bfa",
    },
    {
      id: "bugbook",
      icon: "📘",
      title: "バグ図鑑",
      description: `浄化 ${fixedBugTypes.length} / ${bugBookTotal}種`,
      sub: "遭遇したPythonバグの解説をここで確認しよう。",
      color: "#fb7185",
    },
    {
      id: "beginner",
      icon: "🏠",
      title: "初心者の館",
      description: "Pythonの最初の一歩",
      sub: "師匠とゆっくり基礎から確認する。まずはここから。",
      color: "#34d399",
    },
  ];

  return (
    <div className="main-menu">
      <section className="main-menu__status">
        <div>
          <div className="main-menu__eyebrow">現在の冒険者</div>
          <h2>Lv.{playerLevelInfo.playerLevel} / {playerTitle}</h2>
          {formatPassive(activePassive) && (
            <p style={{ margin: "2px 0 4px", fontSize: 12, color: "#fbbf24", fontWeight: "bold" }}>
              パッシブ：{formatPassive(activePassive)}
            </p>
          )}
          <p>累計EXP {save.exp} / 討伐 {save.monstersDefeated}体 / 最大コンボ {save.maxCombo}</p>
        </div>
        <div className="main-menu__exp">
          <span>次のレベルまで</span>
          <b>{playerLevelInfo.expInLevel} / {playerLevelInfo.expToNext}</b>
          <div className="main-menu__expTrack">
            <div style={{ width: `${expPercent}%` }} />
          </div>
        </div>
      </section>

      <div className="main-menu__grid">
        {menuItems.map((item) => (
          <button
            type="button"
            key={item.id}
            className="main-menu__button"
            style={{ "--menu-color": item.color }}
            onClick={() => onNavigate(item.id)}
          >
            <span className="main-menu__icon">{item.icon}</span>
            <span>
              <b>{item.title}</b>
              <small>{item.description}</small>
              {item.sub && <span className="main-menu__sub">{item.sub}</span>}
            </span>
          </button>
        ))}
      </div>

      <div className="main-menu__log">📜 {battleLog}</div>

      <div className="main-menu__settings">
        <button type="button" onClick={onToggleLargeText} className={largeTextMode ? "is-active" : ""}>
          {largeTextMode ? "🔎 大きめ表示 ON" : "🔎 大きめ表示 OFF"}
        </button>
        <button type="button" onClick={onToggleSound} className={soundEnabled ? "is-active" : ""}>
          {soundEnabled ? "🔊 音声 ON" : "🔇 音声 OFF"}
        </button>
        <button type="button" onClick={onResetSave}>
          🧹 セーブデータをリセット
        </button>
      </div>

      <div className="credit-line">presented by Project-Hearthforge ⚒️</div>
    </div>
  );
}

function MenuScreenFrame({ title, onBack, children, backLabel = "← タイトルへ戻る" }) {
  return (
    <section className="menu-screen">
      <div className="menu-screen__header">
        <button type="button" onClick={onBack}>{backLabel}</button>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function AdventureMenuScreen({
  selectedMode,
  debugDungeonUnlocked,
  debugUnlockLevel,
  debugUnlockRemainingExp,
  debugTutorialCompleted,
  titles,
  activeTitleId,
  companions,
  activeCompanionId,
  companionData,
  assistGauge,
  onSelectMode,
  onSelectTitle,
  onSelectCompanion,
  onBack,
}) {
  return (
    <MenuScreenFrame title="⚔️ 冒険モード選択" onBack={onBack}>
      <ModeSelectPanel
        selectedMode={selectedMode}
        debugDungeonUnlocked={debugDungeonUnlocked}
        debugUnlockLevel={debugUnlockLevel}
        debugUnlockRemainingExp={debugUnlockRemainingExp}
        debugTutorialCompleted={debugTutorialCompleted}
        onSelectMode={onSelectMode}
      />
      <TitleCollectionPanel
        titles={titles}
        activeTitleId={activeTitleId}
        onSelectTitle={onSelectTitle}
      />
      <CompanionPanel
        companions={companions}
        activeCompanionId={activeCompanionId}
        companionData={companionData}
        assistGauge={assistGauge}
        onSelectCompanion={onSelectCompanion}
      />
    </MenuScreenFrame>
  );
}

function StageSelectPanel({ selectedMode, save, recommendedStage, battleLog, onStartLevel, onBack }) {
  const modeLabel = selectedMode === "debug" ? "デバッグダンジョン" : "ノーマルモード";
  const modeIcon = selectedMode === "debug" ? "🐞" : "⚔️";

  return (
    <MenuScreenFrame title={`${modeIcon} ${modeLabel} / ステージ選択`} onBack={onBack} backLabel="← 冒険モードへ戻る">
      <div className="stage-select-intro">
        <div className="stage-select-intro__icon">{selectedMode === "debug" ? "🧙‍♀️🔧" : "🧙‍♂️🗺️"}</div>
        <div>
          <b>{modeLabel}で挑戦するステージを選ぼう。</b>
          <p>{battleLog}</p>
        </div>
      </div>

      <div className="stage-select-grid">
        {LEVELS.map((lv, i) => {
          const cleared = save.clearedLevels.includes(i);
          const recommended = i === recommendedStage;
          const questionCount = getQuestionCountForLevel(i);
          const monsterCount = ENEMY_VARIANTS.filter((monster) =>
            Array.isArray(monster.levels) ? monster.levels.includes(i) : true
          ).length;
          const playCount = save.stagePlays?.[i] || 0;
          const [stageLevel, stageTheme] = lv.label.split(/\s+/, 2);

          return (
            <button
              type="button"
              key={lv.label}
              onClick={() => onStartLevel(i)}
              className={`stage-select-card ${recommended ? "stage-select-card--recommended" : ""}`}
              style={{ "--stage-color": lv.color }}
            >
              {recommended && <span className="stage-select-card__recommend">おすすめ</span>}
              <div className="stage-select-card__title">
                <span>{lv.emoji}</span>
                <b>
                  {stageLevel} {lv.stageName}
                  {cleared && <span aria-label="クリア済み"> ✅</span>}
                </b>
              </div>
              <div className="stage-select-card__name">テーマ: {stageTheme || "基礎"}</div>
              <p>{STAGE_LEARNING_THEMES[i] || "学習テーマ準備中"}</p>
              <div className="stage-select-card__meta">
                <span>問題 {questionCount}問</span>
                <span>敵 {monsterCount}体</span>
                <span>挑戦 {playCount}回</span>
                <span>制限 {selectedMode === "debug" ? lv.timeLimit + 25 : lv.timeLimit}秒</span>
              </div>
              <div className={cleared ? "stage-select-card__clear is-cleared" : "stage-select-card__clear"}>
                {cleared ? "✅ クリア済み" : "🌑 未踏破"}
              </div>
            </button>
          );
        })}
      </div>
    </MenuScreenFrame>
  );
}

function DebugTutorialScreen({ onBack, onComplete }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [feedback, setFeedback] = useState(null);
  const step = DEBUG_TUTORIAL_STEPS[stepIndex];
  const progress = `${stepIndex + 1} / ${DEBUG_TUTORIAL_STEPS.length}`;
  const isIntro = step.kind === "intro";
  const isComplete = step.kind === "complete";
  const isQuestion = step.kind === "question";

  const goNext = () => {
    setSelectedChoice("");
    setFeedback(null);

    if (isComplete) {
      onComplete();
      return;
    }

    setStepIndex((current) => Math.min(current + 1, DEBUG_TUTORIAL_STEPS.length - 1));
  };

  const chooseAnswer = (choice) => {
    if (!isQuestion || feedback) return;

    const correct = choice === step.answer;
    setSelectedChoice(choice);
    setFeedback({
      correct,
      message: correct
        ? "正解！ 間違いを見抜けました。"
        : `惜しい！ 正しくは「${step.answer}」です。`,
    });
  };

  return (
    <MenuScreenFrame title="🐞 デバッグチュートリアル" onBack={onBack} backLabel="← 冒険モードへ戻る">
      <div
        style={{
          textAlign: "left",
          background: "linear-gradient(135deg, rgba(88,28,135,0.92), rgba(15,23,42,0.94))",
          border: "1px solid rgba(216,180,254,0.6)",
          borderRadius: 18,
          padding: 18,
          boxShadow: "0 18px 44px rgba(88,28,135,0.28)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            alignItems: "center",
            marginBottom: 14,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#fde68a",
              fontWeight: "bold",
              fontSize: "clamp(1.08rem, 2.6vw, 1.42rem)",
            }}
          >
            <span style={{ fontSize: 34 }}>{step.icon || "🔧"}</span>
            {step.title}
          </span>
          <span style={{ color: "#c4b5fd", fontSize: 14, fontWeight: 900 }}>STEP {progress}</span>
        </div>

        {(isIntro || isComplete) && (
          <div>
            <p style={{ color: "#f8fafc", lineHeight: 1.8, marginTop: 0, fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>{step.body}</p>
            <div
              style={{
                background: "rgba(15,23,42,0.62)",
                border: "1px solid rgba(251,191,36,0.35)",
                borderRadius: 14,
                padding: 12,
                color: "#fef3c7",
                marginBottom: 16,
                fontSize: "clamp(0.98rem, 2.4vw, 1.12rem)",
                lineHeight: 1.7,
              }}
            >
              {isIntro
                ? "ノーマルはお手本を写す冒険。デバッグは、間違いを見つけて直す冒険です。"
                : "このあとステージ選択へ移動します。まずはLv.1から、ゆっくり試してみよう。"}
            </div>
            <button
              type="button"
              onClick={goNext}
              style={{
                width: "100%",
                border: "none",
                borderRadius: 14,
                padding: "13px 16px",
                background: "linear-gradient(135deg, #f59e0b, #f97316)",
                color: "#fff7ed",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {isComplete ? "デバッグLv.1へ進む" : "練習を始める"}
            </button>
          </div>
        )}

        {isQuestion && (
          <div>
            <p style={{ color: "#e9d5ff", lineHeight: 1.7, marginTop: 0, fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>{step.prompt}</p>
            <div
              style={{
                background: "rgba(2,6,23,0.74)",
                border: "1px solid rgba(248,113,113,0.55)",
                borderRadius: 14,
                padding: "14px 16px",
                color: "#fecaca",
                fontFamily: "monospace",
                fontSize: "clamp(1.22rem, 4.2vw, 1.65rem)",
                marginBottom: 14,
                textAlign: "center",
              }}
            >
              {step.buggy}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: 10,
              }}
            >
              {step.choices.map((choice) => {
                const selected = selectedChoice === choice;
                const correct = feedback && choice === step.answer;

                return (
                  <button
                    type="button"
                    key={choice}
                    onClick={() => chooseAnswer(choice)}
                    disabled={Boolean(feedback)}
                    style={{
                      border: `1px solid ${correct ? "#34d399" : selected ? "#fbbf24" : "rgba(148,163,184,0.5)"}`,
                      borderRadius: 14,
                      padding: "14px 12px",
                      background: correct
                        ? "rgba(22,163,74,0.26)"
                        : selected
                          ? "rgba(245,158,11,0.22)"
                          : "rgba(15,23,42,0.72)",
                      color: "#f8fafc",
                      fontWeight: "bold",
                      fontSize: "clamp(1rem, 2.5vw, 1.16rem)",
                      cursor: feedback ? "default" : "pointer",
                    }}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>

            {feedback && (
              <div
                aria-live="polite"
                style={{
                  marginTop: 14,
                  background: feedback.correct ? "rgba(22,163,74,0.24)" : "rgba(245,158,11,0.22)",
                  border: `1px solid ${feedback.correct ? "rgba(74,222,128,0.5)" : "rgba(251,191,36,0.5)"}`,
                  borderRadius: 14,
                  padding: 12,
                  color: "#f8fafc",
                  fontSize: "clamp(0.96rem, 2.3vw, 1.08rem)",
                }}
              >
                <b>{feedback.message}</b>
                <p style={{ margin: "8px 0 0", color: "#dbeafe", lineHeight: 1.6 }}>{step.explanation}</p>
              </div>
            )}

            {feedback && (
              <button
                type="button"
                onClick={goNext}
                style={{
                  width: "100%",
                  marginTop: 14,
                  border: "none",
                  borderRadius: 14,
                  padding: "13px 16px",
                  background: "linear-gradient(135deg, #8b5cf6, #f59e0b)",
                  color: "#fff7ed",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                次へ進む
              </button>
            )}
          </div>
        )}
      </div>
    </MenuScreenFrame>
  );
}

function TitleHeader() {
  const [logoError, setLogoError] = useState(false);
  const logoSrc = "/images/title-logo.png";

  return (
    <div className="title-header">
      <TitleLogo showImageLogo={!logoError} logoSrc={logoSrc} onError={() => setLogoError(true)} />
      <div className="title-header__meta">
        <span className="title-header__badge">PYTHON TYPING RPG</span>
        <p className="title-header__desc">
          Pythonの最初のつまずき、<b>半角スペース・クォート・コロン</b>をRPGで倒すタイピングゲーム。
        </p>
      </div>
    </div>
  );
}

function TitleHero({
  soundEnabled,
  onPlayMenuBgm,
  monsterSeenCount,
  monsterTotal,
  bugFixedCount,
  bugTotal,
  totalCasts,
  totalPlays,
  monstersSeen = [],
  clearedLevels = [],
  adventureMemo,
  onNavigate,
}) {
  const paradeMonsters = useMemo(() => {
    const seenSet = new Set(monstersSeen);
    const candidates = ENEMY_VARIANTS.filter((monster) => seenSet.has(monster.id));

    return candidates
      .map((monster, index) => ({
        monster,
        sortKey: monster.id.split("").reduce((sum, char) => sum + char.charCodeAt(0), index * 31),
      }))
      .sort((a, b) => a.sortKey - b.sortKey)
      .slice(0, 12)
      .map(({ monster }, index) => {
        const seed = monster.id.split("").reduce((sum, char) => sum + char.charCodeAt(0), index * 17);
        const hasImage = Boolean(monster.image);
        const type = hasImage && seed % 10 !== 0 ? "image" : "emoji";
        const bounce = seed % 3;
        const snake = seed % 2;
        const animationName =
          bounce === 0 && snake === 0
            ? "monster-parade-bounce-snake"
            : bounce !== 2
              ? "monster-parade-bounce"
              : snake === 0
                ? "monster-parade-snake"
                : "monster-parade";

        return {
          id: monster.id,
          type,
          image: monster.image,
          icon: monster.icon || monster.sprite || "❓",
          name: monster.name,
          top: type === "image" ? 42 + (seed % 22) : 48 + (seed % 18),
          size: type === "image" ? 40 + (seed % 20) : 24 + (seed % 9),
          duration: 10 + (seed % 8),
          delay: -(seed % 16),
          animationName,
        };
      });
  }, [monstersSeen]);
  const lastClearedLevel = clearedLevels.length > 0 ? Math.max(...clearedLevels) : null;
  const lastStageColor = Number.isInteger(lastClearedLevel) ? LEVELS[lastClearedLevel]?.color : null;
  const paradeGradient = lastStageColor
    ? `linear-gradient(180deg, ${lastStageColor}55 0%, ${lastStageColor}33 100%)`
    : "linear-gradient(180deg, #14532d 0%, #166534 60%, #15803d 100%)";
  const stageBgUrl = Number.isInteger(lastClearedLevel)
    ? `url('/images/stages/lv${lastClearedLevel + 1}.png')`
    : `url('/images/stages/lv0_default.png')`;
  const paradeBackground = `linear-gradient(to bottom, rgba(2,6,23,0.65) 0%, rgba(2,6,23,0.10) 25%, rgba(2,6,23,0.10) 75%, rgba(2,6,23,0.65) 100%), ${stageBgUrl}, ${paradeGradient}`;

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
        background: "rgba(2, 6, 23, 0.72)",
        border: "1px solid rgba(125, 211, 252, 0.35)",
        backdropFilter: "blur(8px)",
        borderRadius: 24,
        padding: "26px 18px 24px",
        boxShadow:
          "0 0 36px rgba(56,189,248,0.22), 0 24px 80px rgba(0,0,0,0.45)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.25), transparent 34%), radial-gradient(circle at 80% 10%, rgba(251,191,36,0.18), transparent 30%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginBottom: 12,
          }}
        >
          {[
            { icon: "🐲", label: "モンスター図鑑", value: `${monsterSeenCount} / ${monsterTotal}体`, color: "#38bdf8" },
            { icon: "📘", label: "バグ図鑑", value: `${bugFixedCount} / ${bugTotal}浄化`, color: "#fb7185" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "rgba(2,6,23,0.62)",
                border: `1px solid ${item.color}44`,
                borderRadius: 10,
                padding: "8px 10px",
                textAlign: "left",
              }}
            >
              <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 2 }}>{item.icon} {item.label}</div>
              <div style={{ fontSize: 15, fontWeight: "bold", color: item.color }}>{item.value}</div>
            </div>
          ))}
        </div>

        <button
          onClick={onPlayMenuBgm}
          disabled={!soundEnabled}
          style={{
            marginTop: 16,
            background: soundEnabled ? "#1e3a8a" : "#334155",
            color: soundEnabled ? "#dbeafe" : "#94a3b8",
            border: "none",
            padding: "9px 16px",
            borderRadius: 999,
            cursor: soundEnabled ? "pointer" : "not-allowed",
            fontWeight: "bold",
          }}
        >
          🎵 メニューBGM再生
        </button>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginTop: 12,
          }}
        >
          {[
            { icon: "⚔️", label: "総詠唱数", value: `${totalCasts} 回` },
            { icon: "🎮", label: "総プレイ", value: `${totalPlays} 回` },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "rgba(2,6,23,0.62)",
                border: "1px solid #33415544",
                borderRadius: 10,
                padding: "8px 10px",
                textAlign: "left",
              }}
            >
              <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 2 }}>{item.icon} {item.label}</div>
              <div style={{ fontSize: 15, fontWeight: "bold", color: "#e2e8f0" }}>{item.value}</div>
            </div>
          ))}
        </div>

        {adventureMemo && (
          <button
            type="button"
            className="adventure-memo"
            style={{ "--memo-color": adventureMemo.color }}
            onClick={() => onNavigate?.("adventure")}
          >
            <div className="adventure-memo__header">
              <span>🧙‍♂️ 師匠からの次の目標</span>
              <b>{adventureMemo.badge}</b>
            </div>
            <strong>{adventureMemo.title}</strong>
            <p>{adventureMemo.body}</p>
            <span className="adventure-memo__cta">タップして冒険へ →</span>
          </button>
        )}

        {paradeMonsters.length > 0 && (
          <div className="monster-parade" style={{ backgroundImage: paradeBackground }}>
            <div className="monster-parade__ground" />
            {paradeMonsters.map((monster) =>
              monster.type === "image" ? (
                <img
                  key={monster.id}
                  src={monster.image}
                  alt={monster.name}
                  className="monster-parade__monster monster-parade__monster--image"
                  style={{
                    top: `${monster.top}%`,
                    width: `${monster.size}px`,
                    animationName: monster.animationName,
                    animationDuration: `${monster.duration}s`,
                    animationDelay: `${monster.delay}s`,
                  }}
                />
              ) : (
                <span
                  key={monster.id}
                  className="monster-parade__monster"
                  title={monster.name}
                  style={{
                    top: `${monster.top}%`,
                    fontSize: `${monster.size}px`,
                    animationName: monster.animationName,
                    animationDuration: `${monster.duration}s`,
                    animationDelay: `${monster.delay}s`,
                  }}
                >
                  {monster.icon}
                </span>
              )
            )}
          </div>
        )}

        <div className="title-links">
          <a
            href="https://twitter.com/intent/tweet?text=PythonをRPGで学ぶゲーム「コードモンスター」遊んでみた！%20%23コードモンスター%20%23Python&url=https://polite-frangollo-ae7109.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="title-links__share"
          >
            𝕏 このゲームをポストする
          </a>
          <div className="title-links__sites">
            <a href="https://polite-frangollo-ae7109.netlify.app/" target="_blank" rel="noopener noreferrer">📱 スマホ版</a>
            <a href="https://github.com/BlackSmith-5001" target="_blank" rel="noopener noreferrer">🐙 作者Github</a>
            <a href="https://note.com/rapid_tucan2305" target="_blank" rel="noopener noreferrer">📝 作者note</a>
            <a href="https://twitter.com/WimhkDO47132527" target="_blank" rel="noopener noreferrer">𝕏 作者X</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleLogo({ showImageLogo, logoSrc, onError }) {
  if (showImageLogo) {
    return (
      <img
        src={logoSrc}
        alt="コードモンスター"
        onError={onError}
        style={{
          width: "min(720px, 94%)",
          maxHeight: 180,
          objectFit: "contain",
          display: "block",
          margin: "4px auto 8px",
          filter: "drop-shadow(0 0 18px rgba(56,189,248,0.45))",
        }}
      />
    );
  }

  return (
    <>
      <div
        style={{
          fontSize: 52,
          lineHeight: 1,
          marginBottom: 8,
          filter: "drop-shadow(0 0 18px rgba(251,191,36,0.35))",
        }}
      >
        🐉⌨️✨
      </div>

      <h1
        style={{
          fontSize: "clamp(42px, 8vw, 76px)",
          fontWeight: 1000,
          color: "#f8fafc",
          margin: "0 0 10px 0",
          letterSpacing: 2,
          textShadow:
            "0 0 12px rgba(56,189,248,0.75), 0 0 32px rgba(168,85,247,0.45)",
        }}
      >
        コードモンスター
      </h1>
    </>
  );
}

function TitleBadge({ children }) {
  return (
    <span
      style={{
        background: "rgba(15,23,42,0.72)",
        border: "1px solid rgba(125,211,252,0.32)",
        color: "#e0f2fe",
        borderRadius: 999,
        padding: "6px 10px",
        fontSize: 12,
        fontWeight: 800,
      }}
    >
      {children}
    </span>
  );
}

function TitleCollectionPanel({ titles, activeTitleId, onSelectTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const unlockedCount = titles.filter((title) => title.unlocked).length;
  const activeTitle = titles.find((title) => title.id === activeTitleId) || titles[0];

  return (
    <section className={`title-collection ${isOpen ? "" : "title-collection--closed"}`}>
      <div className="title-collection__header">
        <div>
          <h3>🏅 称号一覧</h3>
          <p>
            {isOpen
              ? "獲得済み称号を確認して、現在の称号を付け替えられます。装備中の称号パッシブが冒険を少し助けます。"
              : "メニュー整理のため折りたたみ中です。現在の称号と獲得数だけ表示しています。"}
          </p>
        </div>
        <div className="title-collection__active">
          <span>現在の称号</span>
          <b>{activeTitle?.name || "見習い魔術師"}</b>
          <small>{unlockedCount} / {titles.length} 獲得</small>
        </div>
      </div>

      <button
        type="button"
        className="title-collection__toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        {isOpen ? "称号メニューを閉じる ▲" : "称号メニューを開く ▼"}
      </button>

      {isOpen && (
        <div className="title-collection__grid">
          {titles.map((title) => {
            const active = title.id === activeTitleId;
            return (
              <button
                type="button"
                key={title.id}
                className={[
                  "title-card",
                  title.unlocked ? "title-card--unlocked" : "title-card--locked",
                  active ? "title-card--active" : "",
                ].filter(Boolean).join(" ")}
                onClick={() => title.unlocked && onSelectTitle(title.id)}
                disabled={!title.unlocked}
              >
                <span className="title-card__state">{title.unlocked ? active ? "装備中" : "獲得済み" : "未獲得"}</span>
                <strong>{title.unlocked ? title.name : "？？？"}</strong>
                <small>{title.description}</small>
                {title.passive?.type !== "none" && (
                  <small className="title-card__passive">
                    パッシブ：{describePassive(title.passive)}
                  </small>
                )}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}

function CompanionPanel({ companions, activeCompanionId, companionData, assistGauge, onSelectCompanion }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeCompanion = companions.find((monster) => monster.id === activeCompanionId);

  return (
    <section className={`companion-panel ${isOpen ? "" : "companion-panel--closed"}`}>
      <div className="companion-panel__header">
        <div>
          <h3>🤝 相棒モンスター</h3>
          <p>
            討伐済み・転送済みのモンスターから1体を相棒にできます。コンボでゲージが溜まると、戦闘中にアシスト技を発動します。
          </p>
        </div>
        <div className="companion-panel__active">
          <span>現在の相棒</span>
          <b>{activeCompanion?.name || "未設定"}</b>
          <small>{companions.length}体から選択可能</small>
        </div>
      </div>

      <div className="companion-panel__gauge">
        <span>アシストゲージ</span>
        <b>{assistGauge} / 100</b>
        <div className="companion-panel__track">
          <div style={{ width: `${Math.min(100, assistGauge)}%` }} />
        </div>
      </div>

      <button
        type="button"
        className="companion-panel__toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        {isOpen ? "相棒メニューを閉じる ▲" : "相棒メニューを開く ▼"}
      </button>

      {isOpen && (
        <div className="companion-panel__grid">
          {companions.length === 0 ? (
            <div className="companion-panel__empty">
              まだ相棒にできるモンスターがいません。まずはモンスターを討伐、または転送呪文で連携してみよう。
            </div>
          ) : (
            companions.map((monster) => {
              const active = monster.id === activeCompanionId;
              const skillCount = getCompanionSkillCount({ companionData }, monster.id);
              const nextEvolutionId = getEvolvedId(monster.id);
              const threshold = getEvolutionThreshold(monster.id);

              return (
                <button
                  type="button"
                  key={monster.id}
                  className={`companion-card ${active ? "companion-card--active" : ""}`}
                  onClick={() => onSelectCompanion(monster.id)}
                >
                  <span className="companion-card__state">{active ? "相棒中" : "セット"}</span>
                  <span className="companion-card__visual">
                    {monster.image ? (
                      <img src={monster.image} alt={monster.name} />
                    ) : (
                      <span>{monster.icon || monster.sprite || "✨"}</span>
                    )}
                  </span>
                  <strong>{monster.name}</strong>
                  <small>{monster.assistSkill.name}：{monster.assistSkill.effect}</small>
                  <small>
                    {nextEvolutionId ? (
                      <span className="evolution-progress">
                        <span className="evolution-progress__bar">
                          <span style={{ width: `${Math.min(100, (skillCount / threshold) * 100)}%` }} />
                        </span>
                        <span className="evolution-progress__label">
                          {getEvolutionHint(skillCount, threshold)}
                        </span>
                      </span>
                    ) : "最終進化済み ✨"}
                  </small>
                </button>
              );
            })
          )}
        </div>
      )}
    </section>
  );
}


function ModeSelectPanel({
  selectedMode,
  debugDungeonUnlocked,
  debugUnlockLevel,
  debugUnlockRemainingExp,
  debugTutorialCompleted,
  onSelectMode,
}) {
  const modes = [
    {
      id: "normal",
      icon: "⚔️",
      title: "ノーマルモード",
      status: "PLAY",
      description: "お手本コードを見ながら正確に入力。Python呪文の型を覚える基本の冒険。",
      enabled: true,
      color: "#22c55e",
    },
    {
      id: "debug",
      icon: "🐞",
      title: "デバッグダンジョン",
      status: debugDungeonUnlocked
        ? debugTutorialCompleted ? "BETA PLAY" : "TUTORIAL"
        : `LOCKED Lv.${debugUnlockLevel}`,
      description: debugDungeonUnlocked
        ? debugTutorialCompleted
          ? "バグ憑き呪文を正しいコードに修復するモード。ヒント多めで、超初心者でも挑戦できます。"
          : "最初に短いチュートリアルで、日本語の誤字直しからPython修復へ橋渡しします。"
        : `魔術師Lv.${debugUnlockLevel}で解放。まずはノーマルモードでPython呪文の型に慣れよう。`,
      enabled: true,
      locked: !debugDungeonUnlocked,
      color: "#f97316",
    },
  ];

  return (
    <div
      style={{
        background: "rgba(15, 23, 42, 0.86)",
        border: "1px solid #334155",
        borderRadius: 16,
        padding: 16,
        marginBottom: 18,
        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: 12,
        }}
      >
        <h3 style={{ margin: 0, color: "#fef3c7" }}>🎮 冒険モード選択</h3>
        <span style={{ fontSize: 12, color: "#94a3b8" }}>
          どちらの冒険に出るか選ぶと、次にステージ選択へ進みます。
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: 12,
        }}
      >
        {modes.map((mode) => {
          const active = selectedMode === mode.id;

          return (
            <button
              key={mode.id}
              onClick={() => {
                onSelectMode(mode.id);
              }}
              style={{
                background: active
                  ? `linear-gradient(135deg, ${mode.color}33, rgba(2,6,23,0.95))`
                  : "rgba(2,6,23,0.9)",
                border: active ? `2px solid ${mode.color}` : "1px solid #334155",
                borderRadius: 14,
                padding: 14,
                textAlign: "left",
                color: "#e2e8f0",
                cursor: "pointer",
                opacity: mode.locked ? 0.68 : 1,
                boxShadow: active ? `0 0 22px ${mode.color}33` : "none",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <span style={{ fontSize: 26 }}>{mode.icon}</span>
                <span
                  style={{
                    color: active ? "#020617" : mode.color,
                    background: active ? mode.color : "transparent",
                    border: `1px solid ${mode.color}`,
                    borderRadius: 999,
                    padding: "3px 8px",
                    fontSize: 10,
                    fontWeight: 900,
                    height: 20,
                    whiteSpace: "nowrap",
                  }}
                >
                  {mode.status}
                </span>
              </div>

              <div style={{ fontWeight: 900, marginTop: 8 }}>{mode.title}</div>
              <div style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.6, marginTop: 6 }}>
                {mode.description}
              </div>

              {mode.id === "debug" && mode.locked && (
                <div style={{ marginTop: 8, color: "#fdba74", fontSize: 12, fontWeight: 900 }}>
                  あと {debugUnlockRemainingExp} EXP で解放
                </div>
              )}

              {active && (
                <div style={{ marginTop: 8, color: mode.color, fontSize: 12, fontWeight: 900 }}>
                  ✅ 選択中
                </div>
              )}
            </button>
          );
        })}
      </div>

      {!debugDungeonUnlocked && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 12,
            border: "1px solid rgba(251, 146, 60, 0.35)",
            background: "rgba(124, 45, 18, 0.22)",
            color: "#fed7aa",
            fontSize: 13,
            fontWeight: 800,
            lineHeight: 1.6,
          }}
        >
          🔒 デバッグダンジョンはLv.{debugUnlockLevel}で解放されます。解放後は、まず短いチュートリアルで「間違いを直す」感覚を確認します。
          <br />
          あと {debugUnlockRemainingExp} EXP で解放。
        </div>
      )}
    </div>
  );
}


function groupBugEntriesByStage(entries) {
  const groups = LEVELS.map((level, index) => ({
    id: index,
    title: level.stageName,
    label: level.label,
    color: level.color,
    entries: [],
  }));

  const other = {
    id: "all",
    title: "共通バグの記録庫",
    label: "全レベル",
    color: "#94a3b8",
    entries: [],
  };

  (entries || []).forEach((bug) => {
    const stageText = String(bug?.stages || "全レベル");
    let placed = false;

    LEVELS.forEach((level, index) => {
      const matched =
        stageText.includes(level.stageName) ||
        stageText.includes(level.label);

      if (matched) {
        groups[index].entries.push(bug);
        placed = true;
      }
    });

    if (!placed || stageText.includes("全レベル")) {
      other.entries.push(bug);
    }
  });

  return [...groups, other]
    .map((group) => {
      const seen = new Set();

      return {
        ...group,
        entries: group.entries.filter((bug) => {
          const key = bug?.bugType || bug?.name || bug?.no;

          if (!key) return false;
          if (seen.has(key)) return false;

          seen.add(key);
          return true;
        }),
      };
    })
    .filter((group) => group.entries.length > 0);
}

function FullScreenOverlay({ title, onClose, children }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: "rgba(2, 6, 23, 0.96)",
        padding: 12,
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 860,
          margin: "20px auto",
          background: "#0f172a",
          border: "1px solid #334155",
          borderRadius: 18,
          padding: 16,
          boxShadow: "0 24px 90px rgba(0,0,0,0.65)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            background: "#0f172a",
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            alignItems: "center",
            marginBottom: 16,
            paddingBottom: 12,
            borderBottom: "1px solid #334155",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#f8fafc",
              fontSize: 20,
              lineHeight: 1.4,
            }}
          >
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: "#334155",
              color: "#e2e8f0",
              border: "none",
              borderRadius: 10,
              padding: "9px 14px",
              cursor: "pointer",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            ✕ 閉じる
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

function BugBookPanel({ fixedBugTypes, debugCleanses }) {
  const [selectedBug, setSelectedBug] = useState(null);
  const entries = getBugBookEntries();
  const groups = groupBugEntriesByStage(entries);
  const fixedSet = new Set(fixedBugTypes || []);

  return (
    <div
      style={{
        background: "rgba(2, 6, 23, 0.82)",
        border: "1px solid #38bdf8",
        borderRadius: 16,
        padding: 16,
        marginBottom: 18,
        textAlign: "left",
        boxShadow: "0 0 24px rgba(56,189,248,0.16)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: 12,
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 4px 0", color: "#bae6fd" }}>📘 バグ図鑑</h3>
          <div style={{ color: "#cbd5e1", fontSize: 13 }}>
            ダンジョン別に整理しました。項目をクリックすると全画面で詳しい倒し方を見られます。
          </div>
        </div>

        <div
          style={{
            background: "#020617",
            border: "1px solid #334155",
            borderRadius: 12,
            padding: "8px 12px",
            color: "#e0f2fe",
            fontWeight: 900,
            whiteSpace: "nowrap",
          }}
        >
          登録 {fixedSet.size} / {entries.length} ・浄化 {debugCleanses}回
        </div>
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {groups.map((group) => {
          const fixedCount = group.entries.filter((bug) => fixedSet.has(bug?.bugType)).length;

          return (
            <div
              key={group.id}
              style={{
                background: "rgba(15,23,42,0.78)",
                border: `1px solid ${group.color}`,
                borderRadius: 14,
                padding: 14,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                <div>
                  <div style={{ color: group.color, fontWeight: 900 }}>{group.label}</div>
                  <div style={{ color: "#f8fafc", fontSize: 18, fontWeight: 900 }}>{group.title}</div>
                </div>
                <div style={{ color: "#cbd5e1", fontSize: 13 }}>
                  浄化 {fixedCount} / {group.entries.length}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                  gap: 10,
                  marginTop: 12,
                }}
              >
                {group.entries.map((bug) => {
                  const fixed = fixedSet.has(bug?.bugType);

                  return (
                    <button
                      type="button"
                      key={`${group.id}-${bug?.bugType || bug?.no || bug?.name}`}
                      onClick={() => setSelectedBug(bug)}
                      style={{
                        background: fixed
                          ? `linear-gradient(135deg, ${bug.color}24, rgba(2,6,23,0.96))`
                          : "rgba(2,6,23,0.85)",
                        border: fixed ? `2px solid ${bug.color}` : "1px solid #334155",
                        borderRadius: 12,
                        padding: 12,
                        color: "#e2e8f0",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                        <span style={{ fontSize: 22 }}>{bug.icon}</span>
                        <span style={{ color: fixed ? bug.color : "#94a3b8", fontSize: 11, fontWeight: 900 }}>
                          {fixed ? "浄化済み" : "未浄化"}
                        </span>
                      </div>
                      <div style={{ color: bug.color, fontSize: 11, fontWeight: 900, marginTop: 6 }}>
                        No.{bug.no}
                      </div>
                      <div style={{ fontWeight: 900, marginTop: 2 }}>{bug.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {selectedBug && (
        <FullScreenOverlay title={`📘 バグNo.${selectedBug?.no || "???"}`} onClose={() => setSelectedBug(null)}>
          <BugDetail bug={selectedBug} fixed={fixedSet.has(selectedBug?.bugType)} />
        </FullScreenOverlay>
      )}
    </div>
  );
}

function BugDetail({ bug, fixed }) {
  const safeBug = {
    no: bug?.no || "???",
    name: bug?.name || "未設定バグ",
    icon: bug?.icon || "🐞",
    color: bug?.color || "#94a3b8",
    stages: bug?.stages || "全レベル",
    symptom: bug?.symptom || "症状データを準備中です。",
    fix: bug?.fix || "倒し方データを準備中です。",
    beginnerTip: bug?.beginnerTip || "初心者向けメモを準備中です。",
    masterComment: bug?.masterComment || "師匠コメントを準備中です。",
  };

  return (
    <div style={{ lineHeight: 1.7 }}>
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          marginBottom: 16,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#020617",
            border: `2px solid ${safeBug.color}`,
            borderRadius: 18,
            padding: 18,
            textAlign: "center",
            fontSize: 56,
            minWidth: 92,
          }}
        >
          {safeBug.icon}
        </div>

        <div>
          <div style={{ color: safeBug.color, fontWeight: 900 }}>バグNo.{safeBug.no}</div>
          <h1 style={{ margin: "4px 0", color: "#f8fafc" }}>{safeBug.name}</h1>
          <div style={{ color: fixed ? "#86efac" : "#fca5a5", fontWeight: 900 }}>
            {fixed ? "✅ 浄化済み" : "🌑 未浄化"}
          </div>
          <div style={{ color: "#94a3b8", fontSize: 13, marginTop: 4 }}>
            出現場所：{safeBug.stages}
          </div>
        </div>
      </div>

      <DetailBox title="症状" color="#fef3c7">
        {safeBug.symptom}
      </DetailBox>

      <DetailBox title="倒し方" color="#86efac">
        {safeBug.fix}
      </DetailBox>

      <DetailBox title="超初心者向けメモ" color="#bae6fd">
        {safeBug.beginnerTip}
      </DetailBox>

      <div
        style={{
          marginTop: 14,
          background: "rgba(2,6,23,0.72)",
          border: "1px solid #334155",
          borderRadius: 12,
          padding: 14,
          color: "#cbd5e1",
        }}
      >
        🧙‍♀️ 師匠コメント：{safeBug.masterComment}
      </div>
    </div>
  );
}

function DetailBox({ title, color, children }) {
  return (
    <div
      style={{
        background: "#020617",
        border: "1px solid #334155",
        borderRadius: 12,
        padding: 14,
        marginTop: 12,
      }}
    >
      <div style={{ color, fontWeight: 900, marginBottom: 6 }}>{title}</div>
      <div style={{ color: "#e2e8f0" }}>{children}</div>
    </div>
  );
}

function TransferCodePanel({ monstersSeen, monstersDefeatedIds, linkedMonsterIds, onLinkMonster, onOpenMonsterBook }) {
  const [linkCode, setLinkCode] = useState("");
  const [linkResult, setLinkResult] = useState(null);
  const entries = getMonsterBookEntries();
  const seenSet = new Set(monstersSeen || []);
  const defeatedSet = new Set(monstersDefeatedIds || []);
  const linkedSet = new Set(linkedMonsterIds || []);
  const linkedOnlyMonsters = entries.filter((monster) => (
    linkedSet.has(monster.id) && !seenSet.has(monster.id) && !defeatedSet.has(monster.id)
  ));
  const limitedCount = entries.filter((monster) => Array.isArray(monster.levels) && monster.levels.includes("limited")).length;

  function submitLinkCode(event) {
    event.preventDefault();
    const normalizedCode = normalizeTransferCode(linkCode);
    const matchedMonster = entries.find((monster) =>
      [monster.transferCode, monster.password].some((code) => normalizeTransferCode(code) === normalizedCode)
    );

    if (!normalizedCode) {
      setLinkResult({ type: "ng", text: "転送呪文を入力してください。" });
      return;
    }

    if (!matchedMonster) {
      setLinkResult({ type: "ng", text: "この転送呪文に合うモンスターは見つかりませんでした。" });
      return;
    }

    const defeated = defeatedSet.has(matchedMonster.id);
    const seen = seenSet.has(matchedMonster.id);
    const linked = linkedSet.has(matchedMonster.id);
    const limited = Array.isArray(matchedMonster.levels) && matchedMonster.levels.includes("limited");

    if (!defeated && !seen && !linked) {
      onLinkMonster?.(matchedMonster.id);
    }

    setLinkResult({
      type: "ok",
      monster: matchedMonster,
      code: normalizedCode,
      label: limited ? "スマホ限定モンスター" : "通常モンスター",
      text: defeated
        ? `${matchedMonster.name} はすでに討伐済みです。`
        : seen
          ? `${matchedMonster.name} はすでに発見済みです。討伐すると転送呪文が再表示されます。`
          : linked
            ? `${matchedMonster.name} はすでに連携済みです。`
            : `${matchedMonster.name} を連携しました！図鑑で名前・姿・生息地を確認できます。`,
    });
    setLinkCode("");
  }

  return (
    <div className="transfer-panel">
      <section className="transfer-panel__hero">
        <div className="transfer-panel__icon">🔐</div>
        <div>
          <h3>モンスター転送所</h3>
          <p>PC版・スマホ版・友達同士で転送呪文を教え合うと、図鑑にモンスターを連携できます。</p>
        </div>
      </section>

      <div className="transfer-panel__rules">
        <article>
          <b>通常転送</b>
          <span>討伐済みモンスターの転送呪文を入力すると、この端末では「連携済み」として記録されます。</span>
        </article>
        <article>
          <b>限定モンスター</b>
          <span>スマホ版の限定転送呪文も受け取れます。通常冒険には出ず、図鑑で特別枠として楽しめます。</span>
        </article>
      </div>

      <form className="transfer-panel__form" onSubmit={submitLinkCode}>
        <input
          type="text"
          value={linkCode}
          onChange={(event) => {
            setLinkCode(event.target.value);
            setLinkResult(null);
          }}
          placeholder="例: AKA_SLIME / GENBA_YOSHI"
          autoCapitalize="characters"
          spellCheck="false"
        />
        <button type="submit" className="primary-action">転送する</button>
      </form>

      {linkResult && (
        <div className={`transfer-result transfer-result--${linkResult.type}`}>
          {linkResult.monster && (
            <div className="transfer-result__image">
              <img src={linkResult.monster.image} alt={linkResult.monster.name} />
            </div>
          )}
          <div>
            <b>{linkResult.type === "ok" ? "転送成功" : "転送できません"}</b>
            <p>{linkResult.text}</p>
            {linkResult.type === "ok" && (
              <div className="transfer-result__chips">
                <span>{linkResult.label}</span>
                <code>{linkResult.code}</code>
              </div>
            )}
          </div>
        </div>
      )}

      <section className="transfer-panel__summary">
        <div><b>{linkedOnlyMonsters.length}</b><span>連携済み</span></div>
        <div><b>{limitedCount}</b><span>限定対応</span></div>
        <div><b>{entries.length}</b><span>図鑑総数</span></div>
      </section>

      <section className="transfer-panel__linked">
        <div className="transfer-panel__linkedHeader">
          <h3>連携済みモンスター</h3>
          <button type="button" onClick={onOpenMonsterBook}>図鑑で見る</button>
        </div>
        {linkedOnlyMonsters.length === 0 ? (
          <div className="transfer-panel__empty">まだ連携済みモンスターはいません。スマホ版や友達から転送呪文を聞いてみよう。</div>
        ) : (
          <div className="transfer-panel__linkedGrid">
            {linkedOnlyMonsters.map((monster) => (
              <article key={monster.id}>
                <img src={monster.image} alt={monster.name} />
                <div>
                  <b>{monster.name}</b>
                  <span>{monster.habitat}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function MonsterBookPanel({ monstersSeen, monstersDefeatedIds, linkedMonsterIds, onLinkMonster, initialFilters, onFiltersChange }) {
  const [selectedMonster, setSelectedMonster] = useState(null);
  const savedFilters = sanitizeMonsterBookFilters(initialFilters);
  const [statusFilter, setStatusFilter] = useState(savedFilters.status);
  const [rarityFilter, setRarityFilter] = useState(savedFilters.rarity);
  const [habitatFilter, setHabitatFilter] = useState(savedFilters.habitat);
  const [searchText, setSearchText] = useState(savedFilters.search);
  const [linkCode, setLinkCode] = useState("");
  const [linkResult, setLinkResult] = useState(null);
  const entries = getMonsterBookEntries();
  const seenSet = new Set(monstersSeen || []);
  const defeatedSet = new Set(monstersDefeatedIds || []);
  const linkedSet = new Set(linkedMonsterIds || []);
  const habitats = ["はじまりの草原", "ことばの森", "演算の洞窟", "分岐の火山", "関数の海", "リストの遺跡", "繰り返しの塔", "バグの深淵", "その他"];
  const rarityOrder = ["common", "uncommon", "rare", "epic"];
  const search = searchText.trim().toLowerCase();

  useEffect(() => {
    onFiltersChange?.({
      status: statusFilter,
      rarity: rarityFilter,
      habitat: habitatFilter,
      search: searchText,
    });
  }, [statusFilter, rarityFilter, habitatFilter, searchText, onFiltersChange]);

  function submitLinkCode(event) {
    event.preventDefault();

    const normalizedCode = normalizeTransferCode(linkCode);
    const matchedMonster = entries.find((monster) =>
      [monster.transferCode, monster.password].some((code) => normalizeTransferCode(code) === normalizedCode)
    );

    if (!normalizedCode) {
      setLinkResult({ type: "ng", text: "転送呪文を入力してください。" });
      return;
    }

    if (!matchedMonster) {
      setLinkResult({ type: "ng", text: "この転送呪文に合うモンスターは見つかりませんでした。" });
      return;
    }

    const defeated = defeatedSet.has(matchedMonster.id);
    const seen = seenSet.has(matchedMonster.id);
    const linked = linkedSet.has(matchedMonster.id);

    if (!defeated && !seen && !linked) {
      onLinkMonster?.(matchedMonster.id);
    }

    setLinkResult({
      type: "ok",
      text: defeated
        ? `${matchedMonster.name} はすでに討伐済みです。`
        : seen
          ? `${matchedMonster.name} はすでに発見済みです。`
          : linked
            ? `${matchedMonster.name} はすでに連携済みです。`
            : `${matchedMonster.name} を連携しました！図鑑では姿と生息地だけが開放されます。`,
    });
    setLinkCode("");
  }

  const discoveredCount = entries.filter((monster) => seenSet.has(monster.id)).length;
  const defeatedCount = entries.filter((monster) => defeatedSet.has(monster.id)).length;
  const linkedOnlyCount = entries.filter((monster) => linkedSet.has(monster.id) && !seenSet.has(monster.id) && !defeatedSet.has(monster.id)).length;
  const rarityStats = rarityOrder.map((rarity) => ({
    rarity,
    label: RARITY_LABELS[rarity] || rarity,
    color: RARITY_COLORS[rarity] || "#94a3b8",
    seen: entries.filter((monster) => monster.rarity === rarity && seenSet.has(monster.id)).length,
    total: entries.filter((monster) => monster.rarity === rarity).length,
  }));

  const filteredEntries = entries
    .map((monster, index) => {
      const defeated = defeatedSet.has(monster.id);
      const seen = seenSet.has(monster.id);
      const linked = linkedSet.has(monster.id);
      const visible = defeated || seen || linked;
      const statusClass = defeated ? "defeated" : seen ? "seen" : linked ? "linked" : "unseen";

      return { monster, number: index + 1, seen, defeated, linked, visible, statusClass };
    })
    .filter(({ monster, statusClass, visible, defeated }) => {
      if (statusFilter === "seen" && statusClass !== "seen") return false;
      if (statusFilter === "unseen" && visible) return false;
      if (statusFilter === "defeated" && !defeated) return false;
      if (statusFilter === "linked" && statusClass !== "linked") return false;
      if (rarityFilter !== "all" && monster.rarity !== rarityFilter) return false;
      if (habitatFilter !== "all" && monster.habitat !== habitatFilter) return false;
      if (!search) return true;
      return [monster.name, monster.type, monster.description].join(" ").toLowerCase().includes(search);
    });

  return (
    <div className="monster-book">
      <div className="monster-book__header">
        <div>
          <h3 className="monster-book__title">🐲 モンスター図鑑</h3>
          <div className="monster-book__lead">出会ったコードモンスターを確認できます。転送呪文でPC・スマホ・友達同士の図鑑連携もできます。</div>
        </div>
        <div className="monster-book__summary">
          <span>発見 {discoveredCount} / {entries.length}</span>
          <span>討伐 {defeatedCount} / {entries.length}</span>
          <span>連携 {linkedOnlyCount}</span>
          <span>表示 {filteredEntries.length} 件</span>
        </div>
      </div>

      <form className="monster-book__filters" onSubmit={submitLinkCode}>
        <label className="monster-book__field monster-book__field--wide">
          <span>転送呪文（PC/スマホ共通）</span>
          <input
            type="text"
            value={linkCode}
            onChange={(event) => setLinkCode(event.target.value)}
            placeholder="例: AKA_SLIME"
            autoCapitalize="characters"
            spellCheck="false"
          />
        </label>
        <label className="monster-book__field">
          <span>連携</span>
          <button type="submit" className="primary-action">入力する</button>
        </label>
        {linkResult && (
          <div className="monster-book__field monster-book__field--search" style={{ color: linkResult.type === "ok" ? "#bbf7d0" : "#fecaca" }}>
            {linkResult.text}
          </div>
        )}
      </form>

      <div className="monster-book__rarityStats">
        {rarityStats.map((stat) => (
          <div key={stat.rarity} className="monster-book__rarityStat" style={{ "--rarity-color": stat.color }}>
            <span>{stat.label}</span>
            <b>{stat.seen} / {stat.total}</b>
          </div>
        ))}
      </div>

      <div className="monster-book__filters">
        <label className="monster-book__field">
          <span>表示状態</span>
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            <option value="all">すべて</option>
            <option value="seen">発見済み</option>
            <option value="unseen">未発見</option>
            <option value="defeated">討伐済み</option>
            <option value="linked">連携済み</option>
          </select>
        </label>
        <label className="monster-book__field">
          <span>レア度</span>
          <select value={rarityFilter} onChange={(event) => setRarityFilter(event.target.value)}>
            <option value="all">すべて</option>
            {rarityOrder.map((rarity) => <option key={rarity} value={rarity}>{rarity}</option>)}
          </select>
        </label>
        <label className="monster-book__field monster-book__field--wide">
          <span>生息地</span>
          <select value={habitatFilter} onChange={(event) => setHabitatFilter(event.target.value)}>
            <option value="all">すべて</option>
            {habitats.map((habitat) => <option key={habitat} value={habitat}>{habitat}</option>)}
          </select>
        </label>
        <label className="monster-book__field monster-book__field--search">
          <span>検索</span>
          <input type="search" value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="名前・種族・説明文" />
        </label>
      </div>

      <div className="monster-book__grid">
        {filteredEntries.map(({ monster, number, seen, defeated, linked, visible, statusClass }) => {
          const rarityColor = RARITY_COLORS[monster.rarity] || "#94a3b8";
          const statusLabel = defeated ? "討伐済み" : seen ? "発見済み" : linked ? "連携済み" : "未発見";
          return (
            <button
              type="button"
              key={monster.id}
              className={["monster-book-card", visible ? "monster-book-card--seen" : "monster-book-card--unseen", `monster-book-card--${statusClass}`, monster.rarity === "rare" || monster.rarity === "epic" ? "monster-book-card--glow" : ""].filter(Boolean).join(" ")}
              style={{ "--rarity-color": rarityColor, "--rarity-glow": RARITY_GLOW[monster.rarity] || RARITY_GLOW.common }}
              onClick={() => setSelectedMonster({ monster, number, seen, defeated, linked, visible })}
            >
              <div className="monster-book-card__top">
                <span className="monster-book-card__number">No.{String(number).padStart(3, "0")}</span>
                <span className="monster-book-card__status">{statusLabel}</span>
              </div>
              <div className="monster-book-card__imageBox">
                {visible ? <img src={monster.image} alt={monster.name} className="monster-book-card__image" /> : <div className="monster-book-card__unknown">？？？</div>}
              </div>
              <div className="monster-book-card__name">{visible ? monster.name : "？？？"}</div>
              <div className="monster-book-card__meta">
                <span>{RARITY_LABELS[monster.rarity] || monster.rarity}</span>
                <span>{visible ? monster.habitat : "生息地不明"}</span>
              </div>
              {seen && <div className="monster-book-card__type">{monster.type}</div>}
            </button>
          );
        })}
      </div>

      {filteredEntries.length === 0 && <div className="monster-book__empty">条件に合うモンスターはいません。フィルタや検索語を変えてみてください。</div>}

      {selectedMonster && (
        <FullScreenOverlay title={"🐲 " + (selectedMonster.visible ? selectedMonster.monster.name : "未発見モンスター")} onClose={() => setSelectedMonster(null)}>
          <MonsterDetail monster={selectedMonster.monster} number={selectedMonster.number} seen={selectedMonster.seen} defeated={selectedMonster.defeated} linked={selectedMonster.linked} visible={selectedMonster.visible} />
        </FullScreenOverlay>
      )}
    </div>
  );
}

function MonsterDetail({ monster, number, seen, defeated, linked, visible }) {
  const rarityColor = RARITY_COLORS[monster.rarity] || "#94a3b8";
  const [zoomOpen, setZoomOpen] = useState(false);
  const displayName = visible ? monster.name : "？？？";
  const stateLabel = defeated ? "討伐済み / 情報全開放" : seen ? "発見済み / 未討伐" : linked ? "連携済み / 姿と生息地のみ" : "未発見";

  useEffect(() => {
    if (!zoomOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setZoomOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomOpen]);

  return (
    <div className="monster-detail" style={{ "--rarity-color": rarityColor, "--rarity-glow": RARITY_GLOW[monster.rarity] || RARITY_GLOW.common }}>
      <div className="monster-detail__hero">
        <div className={"monster-detail__imageBox " + (visible ? "" : "monster-detail__imageBox--unknown")}>
          {visible ? (
            <button type="button" className="monster-detail__imageButton" onClick={() => setZoomOpen(true)}>
              <img src={monster.image} alt={displayName} className="monster-detail__image" />
            </button>
          ) : (
            <div className="monster-detail__unknown">？？？</div>
          )}
        </div>
        <div className="monster-detail__info">
          <div className="monster-detail__number">No.{String(number).padStart(3, "0")}</div>
          <h1 className="monster-detail__name">{displayName}</h1>
          <div className="monster-detail__badges"><span>{RARITY_LABELS[monster.rarity] || monster.rarity}</span><span>{monster.habitat}</span></div>
          <div className={"monster-detail__state " + (defeated ? "monster-detail__state--defeated" : "")}>{stateLabel}</div>
          <div className="monster-detail__stats"><span>HP {defeated ? monster.hp : "??"}</span><span>EXP {defeated ? monster.exp : "??"}</span></div>
          {visible && (
            <button type="button" className="monster-detail__zoomButton" onClick={() => setZoomOpen(true)}>
              画像を大きく見る
            </button>
          )}
        </div>
      </div>
      <DetailBox title="種族" color={rarityColor}>{seen || defeated ? monster.type : "まだ分かっていません。冒険で出会うと記録されます。"}</DetailBox>
      <DetailBox title="図鑑説明" color="#bae6fd">{defeated ? monster.description : seen ? "冒険で姿と生息地を確認しました。討伐すると詳しい説明と転送呪文が開放されます。" : linked ? "転送呪文で姿と生息地だけが記録されています。冒険で出会うと発見済みになります。" : "未発見のため、説明文はまだ表示されません。"}</DetailBox>
      <DetailBox title="転送呪文" color="#fef3c7">
        {defeated ? <><code style={{ color: "#fbbf24", fontWeight: "bold" }}>{monster.password || monster.transferCode}</code><div style={{ marginTop: 6, color: "#cbd5e1", fontSize: 13 }}>この合言葉で別端末や友達の図鑑に連携できます。</div></> : "転送呪文は討伐後に開放されます。"}
      </DetailBox>

      {zoomOpen && visible && (
        <div className="monster-image-zoom" role="dialog" aria-modal="true" aria-label={`${displayName}の拡大画像`} onClick={() => setZoomOpen(false)}>
          <div className="monster-image-zoom__content" onClick={(event) => event.stopPropagation()}>
            <div className="monster-image-zoom__header">
              <div>
                <div className="monster-image-zoom__number">No.{String(number).padStart(3, "0")}</div>
                <div className="monster-image-zoom__name">{displayName}</div>
              </div>
              <button type="button" className="monster-image-zoom__close" onClick={() => setZoomOpen(false)}>
                閉じる
              </button>
            </div>
            <div className="monster-image-zoom__stage">
              <img src={monster.image} alt={displayName} className="monster-image-zoom__image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BeginnerGuide({ onBack, onGoAdventure }) {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const lessons = [
    {
      id: "how_to_play",
      title: "🎮 このゲームの遊び方",
      body: (
        <>
          <p>コードモンスターは、表示されたPythonコードを入力してモンスターと戦うタイピングRPGです。</p>
          <ul>
            <li>お手本コードを見て、入力欄に同じように打ちます。</li>
            <li>正解すると敵にダメージ。不正解や時間切れではピンチになります。</li>
            <li>1ステージで決められた問題数をこなすとクリアです。</li>
            <li>図鑑には、出会ったモンスターや浄化したバグが記録されます。</li>
          </ul>
        </>
      ),
    },
    {
      id: "spell_basics",
      title: "📜 呪文とは？",
      body: (
        <>
          <p>このゲームでいう「呪文」は、Pythonの短いコードのことです。</p>
          <p>
            たとえば <code>hp = 100</code> は「hpという名前に100を入れる」呪文です。
            文字・記号・スペースまで含めて、できるだけ正確に唱えるのがコツです。
          </p>
          <p>最初は意味が全部わからなくても大丈夫。写しているうちに、少しずつ形が見えてきます。</p>
        </>
      ),
    },
    {
      id: "combo",
      title: "🔥 コンボとは？",
      body: (
        <>
          <p>連続で正解するとコンボが続き、攻撃が少し強くなります。</p>
          <p>
            途中で間違えるとコンボは途切れますが、気にしすぎなくて大丈夫です。
            まずは「ゆっくり正確に」、慣れてきたら「速く正確に」を目指しましょう。
          </p>
          <p>称号によっては、コンボ時のダメージをさらに伸ばせます。</p>
        </>
      ),
    },
    {
      id: "mage_level",
      title: "🧙 魔術師レベル",
      body: (
        <>
          <p>冒険でEXPを集めると、魔術師レベルが上がります。</p>
          <ul>
            <li>レベルが上がると、称号の獲得条件を満たすことがあります。</li>
            <li>称号が増えると、冒険で使えるパッシブ効果も増えていきます。</li>
            <li>デバッグダンジョンは、魔術師Lv.{DEBUG_UNLOCK_LEVEL}で解放されます。</li>
          </ul>
        </>
      ),
    },
    {
      id: "stage_intro",
      title: "🗺️ ステージ紹介",
      body: (
        <>
          <p>まずはLv.1から順番に遊ぶのがおすすめです。</p>
          <ul>
            <li><b>Lv.1 はじまりの草原：</b>変数、半角スペース、クォート、print基礎。</li>
            <li><b>Lv.2 ことばの森：</b>文字列、変数名、True / False、名前の扱い。</li>
            <li><b>Lv.3 演算の洞窟：</b>足し算、引き算、掛け算、割り算、数値計算。</li>
            <li><b>Lv.4 分岐の火山：</b>if、比較演算子、コロン、インデント。</li>
          </ul>
          <p>難しく感じたら、前のステージを周回して図鑑を埋めながら慣れていきましょう。</p>
        </>
      ),
    },
    {
      id: "titles_passive",
      title: "🏷️ 称号とパッシブ",
      body: (
        <>
          <p>称号は、冒険者につける肩書きです。冒険モード選択の中で付け替えできます。</p>
          <p>
            一部の称号にはパッシブ効果があり、正解ダメージ、コンボ、EXP、制限時間などを少し助けてくれます。
            効果は大きすぎませんが、周回がじわっと楽になります。
          </p>
          <p>新しい称号を手に入れたら、冒険モード選択で効果を確認してみましょう。</p>
        </>
      ),
    },
    {
      id: "python",
      title: "🐍 Pythonってなに？",
      body: (
        <>
          Pythonは、コンピューターにお願いを伝えるための言葉です。
          このゲームでは、Pythonの短い命令文を「呪文」として入力します。
        </>
      ),
    },
    {
      id: "variable",
      title: "📦 変数ってなに？",
      body: (
        <>
          変数は、データを入れておく名前つきの箱です。
          <code>hp = 100</code> なら、hpという箱に100を入れています。
        </>
      ),
    },
    {
      id: "equal",
      title: "➡️ = は『同じ』じゃないの？",
      body: (
        <>
          Pythonの <code>=</code> は、数学の「同じ」ではなく「右のものを左の箱に入れる」という意味です。
          <code>name = 'Taro'</code> は、nameという箱に'Taro'を入れる呪文です。
        </>
      ),
    },
    {
      id: "quote",
      title: "❝ クォートってなに？",
      body: (
        <>
          クォートは、文字を囲む記号です。
          <code>'Taro'</code> の左右にある <code>'</code> のことです。
          文字をそのまま置くとPythonが変数名だと思うので、文字はクォートで包みます。
        </>
      ),
    },
    {
      id: "number_string",
      title: "🔢 数値と文字列の違い",
      body: (
        <>
          <code>100</code> は計算できる数字です。
          <code>'100'</code> は数字っぽい見た目の文字です。
          計算したい数字にはクォートを付けません。
        </>
      ),
    },
    {
      id: "boolean",
      title: "✅ True / Falseってなに？",
      body: (
        <>
          <code>True</code> は「はい・ON・そうである」、
          <code>False</code> は「いいえ・OFF・そうではない」という意味です。
          Pythonでは最初の文字を大文字にします。
        </>
      ),
    },
    {
      id: "space",
      title: "⌨️ なんで半角スペースを入れるの？",
      body: (
        <>
          <code>hp = 100</code> のように <code>=</code> の前後に半角スペースを入れるのは、
          Pythonにとっても人間にとっても読みやすくするためです。
          なくても動く場面はありますが、最初は「単語・記号・値を見やすく区切る作法」として覚えるのがおすすめです。
        </>
      ),
    },
    {
      id: "full_space",
      title: "👻 全角スペースはなぜダメ？",
      body: (
        <>
          全角スペースは、日本語入力で入る広い空白です。
          見た目では分かりにくいのに、Pythonから見ると別物です。
          コードでは基本的に半角スペースを使います。
        </>
      ),
    },
    {
      id: "single_quote",
      title: "' の入力",
      body: (
        <>
          日本語キーボードでは多くの場合 <b>Shift + 7</b>。
          英語キーボードではEnterキー左あたりの <b>'</b> キーです。
          <code>'</code> と <code>’</code> は別物なので注意です。
        </>
      ),
    },
    {
      id: "debug",
      title: "🐞 デバッグダンジョン",
      body: (
        <>
          表示されるコードには、わざと間違いがあります。
          そのまま写さず、バグを見つけて、正しいPythonコードに修復して入力します。
        </>
      ),
    },
  ];
  const lesson = lessons.find((item) => item.id === selectedLesson);

  return (
    <MenuScreenFrame title="🏠 初心者の館" onBack={onBack}>
      <div className="beginner-house">
        <div className="beginner-house__master">
          <div className="beginner-house__masterIcon">🧙‍♂️</div>
          <div>
            <b>今日はどうしたんじゃ？</b>
            <p>気になる講座を選ぶのじゃ。最初から全部読まなくて大丈夫じゃよ。</p>
          </div>
        </div>

        {!lesson && (
          <>
            <div className="beginner-house__list">
              {lessons.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setSelectedLesson(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={onGoAdventure}
              style={{
                marginTop: 16,
                width: "100%",
                padding: "12px",
                fontSize: 15,
                background: "#1e40af",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              ⚔️ 読んだら冒険へ出発！ →
            </button>
          </>
        )}

        {lesson && (
          <div className="beginner-house__detail">
            <button type="button" onClick={() => setSelectedLesson(null)}>
              ← 講座一覧へ戻る
            </button>
            <GuideItem title={lesson.title}>{lesson.body}</GuideItem>
          </div>
        )}
      </div>
    </MenuScreenFrame>
  );
}

function GuideItem({ title, children }) {
  return (
    <div
      className="beginner-guide-card"
      style={{
        background: "rgba(15,23,42,0.78)",
        border: "1px solid #334155",
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        color: "#cbd5e1",
      }}
    >
      <div style={{ color: "#fef3c7", fontWeight: 900, marginBottom: 5 }}>
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}

function SpellPreview({ target, typed, hideRemaining = false }) {
  return (
    <div
      style={{
        background: "#020617",
        border: "1px solid #334155",
        borderRadius: 10,
        padding: 12,
      }}
    >
      <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>
        {hideRemaining
          ? "🔍 修復チェック：入力済み部分だけ判定。緑は一致、赤は違うかも。空白は「·」で見える化。"
          : "🔍 詠唱チェック：緑は一致、赤は違うかも。空白は「·」で見える化。"}
      </div>

      <div style={{ fontSize: 20, letterSpacing: 1, wordBreak: "break-all" }}>
        {target.split("").map((char, index) => {
          const inputChar = typed[index];
          const hasInput = inputChar !== undefined;
          const isSpace = char === " ";
          const isMatch = hasInput && inputChar === char;
          const isWrong = hasInput && inputChar !== char;
          const displayChar = isSpace ? "·" : hideRemaining && !hasInput ? "□" : char;

          return (
            <span
              key={`${char}-${index}`}
              style={{
                color: isMatch ? "#34d399" : isWrong ? "#fecaca" : "#94a3b8",
                background: isWrong ? "#7f1d1d" : "transparent",
                borderRadius: 4,
                padding: "0 1px",
              }}
            >
              {displayChar}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function TermList({ terms = [] }) {
  if (!terms.length) return null;

  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ color: "#fbbf24", fontWeight: "bold", marginBottom: 8 }}>
        🧠 用語ミニ辞典
      </div>

      {terms.map(([word, meaning]) => (
        <div
          key={word}
          style={{
            background: "#111827",
            border: "1px solid #374151",
            borderRadius: 8,
            padding: 10,
            marginBottom: 8,
          }}
        >
          <b style={{ color: "#93c5fd" }}>{word}</b>
          <div style={{ color: "#d1d5db", marginTop: 4 }}>{meaning}</div>
        </div>
      ))}
    </div>
  );
}

function TipList({ tips = [] }) {
  if (!tips.length) return null;

  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ color: "#a7f3d0", fontWeight: "bold", marginBottom: 8 }}>
        💡 つまずきポイント
      </div>

      {tips.map((tip, index) => (
        <div
          key={index}
          style={{
            background: "#064e3b",
            border: "1px solid #047857",
            borderRadius: 8,
            padding: 10,
            marginBottom: 8,
            color: "#d1fae5",
          }}
        >
          {tip}
        </div>
      ))}
    </div>
  );
}

function ResultLine({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
      <span>{label}</span>
      <b>{value}</b>
    </div>
  );
}
