# 分割 Step 1：データだけ外出し

## 置き場所

このフォルダを、Vite/Reactプロジェクトの `src/data/` として置いてください。

```txt
src/
├─ App.jsx
└─ data/
   ├─ index.js
   ├─ levels.js
   ├─ questions.js
   ├─ enemies.js
   └─ bugs.js
```

## App.jsx 側でやること

App.jsx の先頭付近、React import の下にこれを追加します。

```js
import {
  LEVELS,
  CODE_BANK,
  ENEMY_VARIANTS,
  RARITY_LABELS,
  RARITY_COLORS,
  getMonsterBookEntries,
  getMonsterInfo,
  BUG_LIBRARY,
  getBugInfo,
  getBugBookEntries,
} from "./data";
```

そのあと App.jsx 内に残っている以下の定義を削除します。

```txt
const LEVELS = [...]
const ENEMY_VARIANTS = [...]
const RARITY_LABELS = {...}
const RARITY_COLORS = {...}
function getMonsterBookEntries() {...}
function getMonsterInfo(...) {...}
const BUG_LIBRARY = {...}
function getBugInfo(...) {...}
function getBugBookEntries() {...}
const CODE_BANK = [...]
```

## 注意

まずは `src/data` の作成と import 追加だけでOKです。
一気にコンポーネント分割まではしない方が安全です。
