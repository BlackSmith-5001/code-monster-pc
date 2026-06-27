# コードモンスター PC版 Web公開手順

## いちばん簡単: Netlify Drop

1. PC版プロジェクトでビルドします。

```powershell
cd "C:\Users\User\spell-typing-game"
npm run build
```

2. ブラウザで Netlify Drop を開きます。

```txt
https://app.netlify.com/drop
```

3. `C:\Users\User\spell-typing-game\dist` フォルダをページにドラッグ&ドロップします。

4. アップロードが終わると公開URLが発行されます。

5. URLを開いて以下を確認します。

- タイトル画面が出る
- 冒険モード選択が押せる
- Lv.1が開始できる
- モンスター画像が出る
- 音声ON/OFFが押せる

## 継続運用向け: NetlifyでGit連携

GitHubにリポジトリを置く場合は、Netlifyで以下の設定にします。

```txt
Build command: npm run build
Publish directory: dist
```

このプロジェクトには `netlify.toml` を追加済みなので、Netlifyが自動で同じ設定を読み取れます。

## Vercelで公開する場合

VercelにプロジェクトをImportして、設定は基本そのままでOKです。

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

## GitHub Pagesで公開する場合の注意

GitHub Pagesで `https://ユーザー名.github.io/spell-typing-game/` のようなURLに置く場合、Viteの `base` 設定が必要になることがあります。

その場合は `vite.config.js` に以下を入れます。

```js
export default defineConfig({
  base: "/spell-typing-game/",
  plugins: [react()],
});
```

ただし、Netlify/Vercelではこの `base` 変更は不要です。まずはNetlify DropかVercelがおすすめです。

## 公開前チェック

```powershell
cd "C:\Users\User\spell-typing-game"
npm run build
npm run preview
```

`npm run preview` 後に表示されるURLを開き、ローカルで動作確認してから公開すると安全です。
