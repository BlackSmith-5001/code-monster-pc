# コードモンスター（PC版）

**Pythonの呪文を打って、モンスターと戦う。** Pythonの最初のつまずき（半角スペース・クォート・コロン）を、RPGで体に覚えさせるタイピングゲームです。

> A typing RPG for Python beginners. Type short Python "spells" to defeat monsters, collect them, and learn the first stumbling blocks of Python (half-width spaces, quotes, colons). Built with React + Vite. Keyboard (JIS layout hints) required.

## どんなゲーム？

画面に出る **お手本コード**（例: `hp = 100`）を、そのまま入力して攻撃します。速く正確に打てるとクリティカル。倒しきれなかった敵には、同じ呪文をもう一度唱える **追撃チャンス** が発生します。

「わからない人が、わかる人の視座に立つことは難しい。だから、わかる側が、わからない側に視座を落とす」。そんな考えで、つまずきそうな場所を先回りして助ける作りにしています。

- 空白を `·` で見える化する **詠唱チェック**（全角スペースの罠が見える）
- `'` は `Shift + 7`、のような **キー入力のヒント**
- 全角文字を打った瞬間の **やさしい警告**
- 正解した呪文が何をするかを、1行で見せる **実行結果の表示**（例: `📦 箱[hp] の中身: 100`）
- クリア時の **「今回の冒険で唱えた呪文」おさらい**
- 師匠が相談に乗る **初心者の館**

## 主な機能

| 機能 | 内容 |
|---|---|
| **ステージ** | Lv.1 はじまりの草原（変数）／Lv.2 ことばの森（文字列）／Lv.3 演算の洞窟（計算）／Lv.4 分岐の火山（条件分岐） |
| **問題** | 全384問。解説・用語ミニ辞典・入力のコツ付き |
| **ウェーブ制** | 1ステージは3戦×3ウェーブ。9戦を終えると、確率で強敵が現れる「レアチャンス」 |
| **デバッグダンジョン** | バグ入りコードを見抜いて、正しい形に直す（魔術師Lv.5で解放）。バグ図鑑は14種 |
| **モンスター図鑑** | 通常モンスター130体（うち現在集められるのは123体）＋進化モンスター41体。イラスト・説明つき |
| **相棒と進化** | 討伐したモンスターを相棒にして、アシストスキルを発動。使い込むと進化 |
| **称号** | 条件を満たすと獲得。ダメージやEXPが少し有利になるパッシブ効果つき |
| **タイピング効果チャンス** | 周回中にたまに出現。唱えるとHP回復やダメージ倍加などの効果 |
| **転送呪文** | PC版・スマホ版・友達の間で、モンスターを連携できる合言葉 |
| **演出** | ニコニコ風の流れるコメント、モンスターのセリフ、師匠のボヤき |

セーブデータはブラウザの `localStorage` に保存されます。

## 動かし方

Node.js が必要です。

```bash
npm install
```

```bash
npm run dev
```

ブラウザで表示されたURL（通常は `http://localhost:5173`）を開いてください。

そのほかのコマンド:

```bash
npm run build
```

```bash
npm run lint
```

```bash
npm run validate:questions
```

`validate:questions` は、全問題のデータを検査します（全角文字の混入、Pythonとして不適切な書き方、デバッグ用データの欠落など）。問題を追加・編集したときに実行してください。

## 構成

```
src/
  App.jsx                    ゲーム本体
  data/
    questions.js             問題データ（全384問）
    enemies.js               モンスター図鑑データ（通常＋進化）
    bugs.js                  バグ図鑑データ
    levels.js                ステージ定義
    comments.js              モンスターのセリフ
    boyaki.js                師匠のボヤき
  utils/executionPreview.js  呪文の実行結果表示
scripts/validate_questions.mjs   問題データの検査
public/images, public/sounds     画像・音声
```

公開手順は [WEB_DEPLOY_GUIDE.md](WEB_DEPLOY_GUIDE.md)、モンスター画像の管理は [monster_image_manifest.md](monster_image_manifest.md) にあります。

## 制作体制

人間と複数のAIで役割を分けて作っています。最終判断と「違和感を見つける」役目は、人間が持っています。

| 担当 | 役割 |
|---|---|
| 制作者（人間） | 世界観、最終判断、実機プレイでの違和感の検出 |
| Gemini | 企画、アイデア、モンスター案、問題データの作成 |
| Claude Code | 設計、仕様整理、リスクの洗い出し、レビュー |
| Codex | 実装、検証、ビルド確認 |

AIへの指示のルールは [AGENTS.md](AGENTS.md) / [CLAUDE.md](CLAUDE.md) にまとめています。モンスターのイラストはAIで生成し、制作者が選別・調整しています。

Project-Hearthforge の一員として制作しています。

## 関連

- 📱 スマホ版（タップでコードを見抜くパズルRPG）: https://polite-frangollo-ae7109.netlify.app/
- 🐙 作者 GitHub: https://github.com/BlackSmith-5001
- 📝 作者 note: https://note.com/rapid_tucan2305

## クレジット

- BGM・効果音：魔王魂（https://maou.audio/）— [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## ライセンス

- **ソースコード**（`src/`、`scripts/`、設定ファイル）は [MIT License](LICENSE) です。
- **画像・ロゴ・キャラクター・世界観・問題文と解説文**（`public/images/` 以下、および `src/data/` の文章データ）は、**MITの対象外**です。無断での転載・再配布・転用はご遠慮ください。
- **音声**（`public/sounds/`）は、MITの対象外です。各提供元の利用規約に従います（上記クレジット参照）。音声ファイルを単体で取り出しての再配布はしないでください。

プログラミング学習の参考にコードを読んだり、動かして遊んだりすることは自由です。
