import { CODE_BANK } from "../src/data/questions.js";
import { BUG_LIBRARY } from "../src/data/bugs.js";

const bugTypes = new Set(
  Object.entries(BUG_LIBRARY).flatMap(([key, bug]) => [
    key,
    bug?.no,
    bug?.type,
    bug?.id,
  ].filter(Boolean))
);
const builtins = ["len", "str", "list", "dict", "type", "input", "print", "max", "min", "sum", "id"];
let warnings = 0;

for (const q of CODE_BANK) {
  const correct = q.correct ?? q.code;
  const id = q.id || `(no id, correct="${correct}")`;

  if (!correct) {
    console.warn(`[WARN] ${id}: correct/code が未定義`);
    warnings++;
    continue;
  }

  if (/[^\x20-\x7E\n]/.test(correct)) {
    console.warn(`[WARN] ${id}: correct に全角文字が含まれる → "${correct}"`);
    warnings++;
  }

  if (/==\s*(True|False)/.test(correct)) {
    console.warn(`[WARN] ${id}: == True/False パターン（Pythonアンチパターン） → "${correct}"`);
    warnings++;
  }

  for (const builtin of builtins) {
    const builtinPattern = new RegExp(`^${builtin}\\s*=|if\\s+${builtin}\\s*[<>=!]`);
    if (builtinPattern.test(correct)) {
      console.warn(`[WARN] ${id}: 組み込み名 "${builtin}" を変数として使用 → "${correct}"`);
      warnings++;
    }
  }

  const level = q.level ?? 0;
  if (level >= 1 && !q.hard) {
    console.warn(`[WARN] ${id}: Lv${level + 1}なのに hard が未定義`);
    warnings++;
  }

  if (q.hard) {
    const buggy = q.hard.buggy ?? q.hard.code;
    if (buggy === correct) {
      console.warn(`[WARN] ${id}: hard.buggy が correct と同一`);
      warnings++;
    }

    if (q.hard.bugType && !bugTypes.has(q.hard.bugType)) {
      console.warn(`[WARN] ${id}: hard.bugType が BUG_LIBRARY に存在しない → "${q.hard.bugType}"`);
      warnings++;
    }
  }
}

if (warnings === 0) {
  console.log(`✅ 全 ${CODE_BANK.length} 問チェック完了。警告なし。`);
} else {
  console.log(`\n⚠️ ${warnings} 件の警告があります。`);
  process.exit(1);
}
