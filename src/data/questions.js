// src/data/questions.js
// 問題データ
// Geminiさんの追加問題は、まずここへ足していく運用がおすすめです。

export const CODE_BANK = [
  {
    level: 0,
    code: "x = 0",
    hint: "変数 x を0で初期化",
    details:
      "xに0を入れて、最初の状態を作ります。これを初期化と呼びます。RPGでいうと『冒険開始時の討伐数は0体です』と宣言する感じ。初期化しないと、プログラムが『どこから始めれば？』と迷子になります。",
    terms: [
      ["初期化", "最初の値を入れて、スタート状態を作ること。"],
      ["0", "カウント開始によく使う数値。討伐数、合計、回数などの初期値で大活躍。"],
      ["x", "短い変数名。数学っぽい処理や仮の値でよく使われます。"],
    ],
    tips: [
      "x = 0 のスペースも半角です。",
      "0は数字のゼロ。アルファベットのOとは別物です。そっくり兄弟に注意。",
    ],
  },
  {
    level: 0,
    code: "age = 20",
    hint: "変数 age に数値を代入",
    details:
      "ageという箱に20という数値を入れます。数字は文字列ではないので、'20' のようにクォートで囲みません。囲むと『数字っぽい文字』になります。見た目は似てるのに中身が違う、プログラミング界の変装名人です。",
    terms: [
      ["数値", "計算できる数字のこと。20、100、3.14など。"],
      ["文字列との違い", "20は計算できる数値。'20'は文字としての20。足し算するときに差が出ます。"],
      ["半角スペース", "見やすさのために = の前後に入れている空白。全角スペースではなく半角です。"],
    ],
    tips: [
      "= の前後のスペースはPython的には省略できることもありますが、見やすいので入れるのが定番です。",
      "スペースは必ず半角。全角スペースは透明な落とし穴です。",
    ],
  },
  {
    level: 0,
    code: "score = 100",
    hint: "変数 score に数値を代入",
    details:
      "scoreに100を入れる呪文です。ゲームでいうスコアやHP、経験値などを保存するときに変数を使います。変数がないと、ゲームは毎回『えっと、何点だったっけ？』と記憶喪失になります。",
    terms: [
      ["score", "点数という意味の変数名。中身が分かりやすい名前にするのが大事。"],
      ["=", "代入の記号。右の100を左のscoreに入れます。"],
      ["変数名", "箱につける名前。中身が分かる名前だと未来の自分が助かります。"],
    ],
    tips: [
      "score=100でも動く場面は多いですが、score = 100 の方が読みやすいです。",
      "プログラムは未来の自分への手紙でもあります。読みやすさは正義。",
    ],
  },
  {
    level: 0,
    code: "flag = True",
    hint: "真偽値 True を代入",
    details:
      "flagにTrueを入れます。Trueは『はい』『ON』『成立している』という意味の値です。ゲームでいうと『宝箱を開けたか？』『ボスを倒したか？』みたいな状態管理に使えます。地味だけど裏方の大魔法です。",
    terms: [
      ["真偽値", "TrueかFalseの2択で表す値。はい/いいえスイッチです。"],
      ["True", "真、成立、ONの意味。Pythonでは最初のTが大文字です。"],
      ["False", "偽、不成立、OFFの意味。こちらも最初のFが大文字です。"],
      ["flag", "状態を覚えておくためによく使われる変数名。旗を立てるイメージです。"],
    ],
    tips: [
      "trueではなくTrueです。Pythonは大文字と小文字を区別します。",
      "Trueにクォートは付けません。'True'にすると文字列になります。",
    ],
  },
  {
    level: 0,
    code: "name = 'Taro'",
    hint: "変数 name に文字列を代入",
    details:
      "nameという名前つきの箱に、'Taro'という文字を入れる呪文です。プログラミングの = は『同じ』ではなく、『右のものを左の箱に入れる』という意味で使います。数学の顔をしているけど、中身は配達員です。",
    terms: [
      ["変数", "データを入れておく名前つきの箱。name、age、scoreなど。"],
      ["代入", "右側の値を左側の変数に入れること。= は代入の合図。"],
      ["文字列", "文字や文章のこと。Pythonでは 'Taro' のようにクォートで囲みます。"],
      ["クォート", "文字列を囲む記号。' や \" のこと。文字のための小さな額縁です。"],
    ],
    tips: [
      "日本語キーボードでは、多くの場合 Shift + 7 で ' が入力できます。",
      "全角の ’ や ‘ ではなく、半角の ' を使います。ここ、初心者をよく足止めする門番です。",
      "空白は半角スペースです。全角スペースは透明な落とし穴です。",
    ],
  },

  {
    level: 1,
    code: "text = 'Hello'",
    hint: "文字列 Hello を変数に代入",
    details:
      "textという箱に'Hello'という文字列を入れます。文字列はクォートで囲むのがルールです。クォートは『ここからここまでが文字ですよ』とPythonに教えるための柵です。",
    terms: [
      ["text", "文章や文字を入れる変数名としてよく使われます。"],
      ["'Hello'", "Helloという文字列。クォート込みで文字列だと分かります。"],
      ["クォート", "文字列を囲む記号。半角の ' を使います。"],
    ],
    tips: [
      "日本語配列なら Shift + 7 で ' が出ることが多いです。",
      "全角の「’」だと別の記号なのでエラーの原因になります。見た目が似てる忍者です。",
    ],
  },
  {
    level: 1,
    code: "word = 'Python'",
    hint: "Pythonという文字列を代入",
    details:
      "wordに'Python'という文字列を入れます。Pythonと書くだけだと、Pythonという名前の変数を探しに行ってしまいます。文字として扱いたいならクォートで囲む。これが言葉の封印術です。",
    terms: [
      ["word", "単語という意味。文字列を入れる箱として分かりやすい名前です。"],
      ["文字列", "文字の並び。単語、名前、文章など。"],
      ["変数と文字列の違い", "Pythonは変数名、'Python'は文字列。クォートの有無が運命を分けます。"],
    ],
    tips: [
      "クォートは左右どちらも同じ ' を使います。",
      "片方だけ忘れると、Pythonが『閉じ忘れてますけど？』と困ります。",
    ],
  },
  {
    level: 1,
    code: "greeting = 'Hi'",
    hint: "あいさつ文を変数に代入",
    details:
      "greetingは『あいさつ』という意味です。変数名を分かりやすくすると、あとでコードを読んだときに『これは何の箱だっけ？』とならずに済みます。未来の自分への親切、だいじ。",
    terms: [
      ["greeting", "あいさつという意味。中身が分かりやすい変数名です。"],
      ["'Hi'", "Hiという文字列。短いあいさつです。"],
      ["変数名の読みやすさ", "プログラムは動けばいいだけでなく、読みやすいことも重要です。"],
    ],
    tips: [
      "英単語の変数名は最初は難しく感じてもOK。慣れると魔法名っぽく見えてきます。",
      "スペルミスしてもPythonは空気を読んでくれません。かなり真面目です。",
    ],
  },

  {
    level: 2,
    code: "total = 10 + 5",
    hint: "足し算の結果を代入",
    details:
      "10 + 5を計算して、その結果をtotalに入れます。Pythonは右側を先に計算してから、左側の変数に入れます。右で料理して、左のお皿に盛りつける感じです。",
    terms: [
      ["+", "足し算の記号。数値を合計します。"],
      ["total", "合計という意味。計算結果を入れる変数名としてよく使います。"],
      ["右側を先に計算", "total = 10 + 5 では、まず10 + 5を計算してからtotalに入れます。"],
    ],
    tips: [
      "+ の前後にも半角スペースを入れると読みやすいです。",
      "全角の＋ではなく半角の+を使います。記号にも半角・全角の沼があります。",
    ],
  },
  {
    level: 2,
    code: "damage = 30 - 8",
    hint: "引き算の結果を代入",
    details:
      "30 - 8を計算してdamageに入れます。RPGでいうダメージ計算にぴったりです。敵のHPから引くときにも使います。つまり今まさにこのゲームの裏側で暴れているタイプの呪文です。",
    terms: [
      ["-", "引き算の記号。左の数から右の数を引きます。"],
      ["damage", "ダメージという意味。ゲーム系のコードでよく出てきます。"],
      ["計算結果", "30 - 8 の答え。Pythonが計算してくれます。"],
    ],
    tips: [
      "- は半角のハイフンを使います。",
      "長音のーや全角マイナスは別物です。見た目詐欺シリーズです。",
    ],
  },
  {
    level: 2,
    code: "price = 100 * 2",
    hint: "掛け算の結果を代入",
    details:
      "Pythonで掛け算は * を使います。数学の × は使いません。priceに100 * 2の結果を入れます。キーボード上では星っぽい記号ですが、ここでは立派な掛け算魔法です。",
    terms: [
      ["*", "掛け算の記号。Pythonでは × の代わりに使います。"],
      ["price", "価格という意味。買い物や料金計算で使いやすい変数名です。"],
      ["演算子", "+、-、*、/ のように計算に使う記号のこと。"],
    ],
    tips: [
      "* は多くのキーボードで Shift + : やテンキーから入力できます。環境によって場所が違います。",
      "× を入力してもPythonの掛け算にはなりません。見た目は強そうなのに通りません。",
    ],
  },
  {
    level: 2,
    code: "half = 10 / 2",
    hint: "割り算の結果を代入",
    details:
      "Pythonで割り算は / を使います。10 / 2の結果をhalfに入れます。割り算の結果は小数になることがあります。Pythonはわりと正直者です。",
    terms: [
      ["/", "割り算の記号。Pythonでは ÷ の代わりに使います。"],
      ["half", "半分という意味。10 / 2 のような処理に合う変数名です。"],
      ["小数", "5.0のように小数点を含む数。割り算の結果で出ることがあります。"],
    ],
    tips: [
      "/ は半角スラッシュです。",
      "÷ ではありません。算数のノートから来た勇者はここで一度つまずきます。",
    ],
  },

  {
    level: 3,
    code: "if score >= 80:",
    hint: "scoreが80以上か判定",
    details:
      "ifは『もし〜なら』という条件分岐の呪文です。scoreが80以上なら、この次に書いた処理を実行します。最後の : は『ここから条件に当てはまる処理が始まりますよ』という門です。閉め忘れると入場できません。",
    terms: [
      ["if", "もし〜なら、という条件分岐の始まり。"],
      [">=", "以上という意味。score >= 80 はscoreが80以上なら、という意味です。"],
      [":", "コロン。if文の最後につける大事な記号です。"],
      ["条件分岐", "条件によって実行する処理を変えること。ゲームの選択肢みたいなものです。"],
    ],
    tips: [
      ": は半角コロンです。日本語の：ではありません。",
      "ifの後ろには半角スペースを入れます。ifscoreだと別の名前みたいになります。",
    ],
  },
  {
    level: 3,
    code: "if age >= 20:",
    hint: "ageが20以上か判定",
    details:
      "ageが20以上かを調べる条件文です。>= は『以上』です。20も含みます。RPGなら『レベル20以上ならこの扉を開ける』みたいな判定に使えます。",
    terms: [
      ["age", "年齢という意味の変数名。"],
      [">=", "以上。左側が右側以上ならTrueになります。"],
      ["Trueになる", "条件が成立するということ。"],
    ],
    tips: [
      "> と = を続けて >= と入力します。",
      "=> ではありません。順番が逆だと別の世界線に飛びます。",
    ],
  },
  {
    level: 3,
    code: "if flag == True:",
    hint: "flagがTrueか判定",
    details:
      "flagがTrueかどうかを調べます。ここで出てくる == は『等しいか比べる』という意味です。= は代入、== は比較。そっくりだけど役割が違います。双子キャラだけど片方は荷物係、片方は審判です。",
    terms: [
      ["==", "等しいかどうかを比べる記号。比較に使います。"],
      ["=", "代入に使う記号。右の値を左に入れます。"],
      ["比較", "2つの値が同じか、大きいか、小さいかなどを調べること。"],
      ["True", "条件が成立している状態。"],
    ],
    tips: [
      "= と == は別物です。初心者が必ず一度は戦う中ボスです。",
      "TrueはTが大文字。trueではありません。",
    ],
  },
  {
    level: 3,
    code: "if name == 'Taro':",
    hint: "nameがTaroか判定",
    details:
      "nameの中身が'Taro'と同じかを調べます。文字列を比べるときも == を使います。'Taro'は文字列なのでクォートで囲みます。最後の : も忘れずに。ここまで来たらだいぶ魔術師です。",
    terms: [
      ["name", "名前を入れておく変数。"],
      ["==", "等しいか比べる記号。"],
      ["'Taro'", "比較したい文字列。クォートで囲みます。"],
      [":", "if文の最後につけるコロン。"],
    ],
    tips: [
      "'Taro' のクォートを片方だけ忘れないように注意。",
      "Taroの大文字小文字も一致させます。Pythonはけっこう几帳面です。",
    ],
  },

  {
    id: "lv1_add_001",
    level: 0,
    correct: "item = 'Sword'",
    normalHint: "変数 item に文字列 Sword を代入",
    hard: {
      buggy: "item = Sword",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Swordは文字なので ' ' で囲みます。",
      explanation: "文字列は必ず半角のシングルクォートで囲みます。裸のままだと、Pythonは「Swordという名前の変数かな？」と迷子になってしまいます。",
    },
    details: "itemという箱（変数）に、'Sword'（剣）という文字を入れる呪文です。プログラミングの世界では、言葉を扱うときは必ずクォートという額縁に入れます。",
    terms: [
      ["変数", "データを入れておく名前つきの箱です。"],
      ["文字列", "プログラム上で扱う文字や文章のことです。"],
      ["代入", "右のものを左の箱に入れること（=）です。"],
    ],
    tips: [
      "文字を扱うときは、最初と最後に ' をつけるのを忘れずに！",
      "変数名は英単語にすると、後から見返したときに分かりやすいです。",
    ],
  },
  {
    id: "lv1_add_002",
    level: 0,
    correct: "hp = 100",
    normalHint: "変数 hp に数値の 100 を代入",
    hard: {
      buggy: "hp = '100'",
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "計算に使う数字は ' ' で囲みません。",
      explanation: "100は数値なのでそのまま書きます。'100'と書くと「100という形をした文字」になり、あとでダメージ計算ができなくなってしまいます。",
    },
    details: "プレイヤーの体力（hp）に100という数値をセットします。ゲームのステータス管理の基本中の基本です。",
    terms: [
      ["数値", "計算ができる純粋な数字のことです。"],
      ["文字列としての数字", "クォートで囲まれた数字。計算には使えません。"],
    ],
    tips: [
      "数字には ' ' をつけない！これがプロの魔術師のルールです。",
      "hp = 100 の = の前後には半角スペースを入れると見栄えが良くなります。",
    ],
  },
  {
    id: "lv1_add_003",
    level: 0,
    correct: "is_active = True",
    normalHint: "変数 is_active に真偽値 True を代入",
    hard: {
      buggy: "is_active = true",
      bugName: "true小文字バグ",
      bugType: "true_lowercase",
      hint: "Pythonでは True の最初の T を大文字にします。",
      explanation: "Pythonは文字の大文字と小文字を厳格に区別します。trueではなく、Tを大文字にして True と書きます。",
    },
    details: "is_active（活動中かどうか）という旗（フラグ）を、ON（True）にする呪文です。状態を管理する時に大活躍します。",
    terms: [
      ["真偽値", "True（はい/ON）か False（いいえ/OFF）の2択を表す値です。"],
      ["True", "条件が成立している、スイッチがONという意味です。"],
    ],
    tips: [
      "Pythonの True は T が大文字！他の言語から来た勇者もよく引っかかります。",
      "True には ' ' は付けません。特別なキーワードだからです。",
    ],
  },
  {
    id: "lv1_add_004",
    level: 0,
    correct: "is_poisoned = False",
    normalHint: "変数 is_poisoned に真偽値 False を代入",
    hard: {
      buggy: "is_poisoned = false",
      bugName: "false小文字バグ",
      bugType: "false_lowercase",
      hint: "Pythonでは False の最初の F を大文字にします。",
      explanation: "Trueと同じく、Falseも最初の1文字目は大文字のFです。小文字のfalseだとPythonは理解してくれません。",
    },
    details: "is_poisoned（毒状態かどうか）を、OFF（False）にする呪文です。これで安全な状態をプログラムに教えることができます。",
    terms: [
      ["False", "条件が成立していない、スイッチがOFFという意味です。"],
      ["フラグ管理", "状態をON/OFFで記憶させておくプログラミングのテクニックです。"],
    ],
    tips: ["False の F は大文字。ふんばりのFと覚えましょう！"],
  },
  {
    id: "lv1_add_005",
    level: 0,
    correct: "magic = 'Fire'",
    normalHint: "変数 magic に文字列 Fire を代入",
    hard: {
      buggy: "magic ＝ 'Fire'",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "＝ は全角です。半角の = に直しましょう。",
      explanation: "見た目はそっくりですが、Pythonは全角記号をプログラムの命令として認識できません。必ず半角の = を使います。",
    },
    details: "魔法（magic）という箱に、'Fire'（炎）という文字列をセットします。全角記号は目に見えないトラップなので要注意です。",
    terms: [
      ["全角と半角", "日本語入力モードの記号（全角）は、コード内では基本的にエラーの元になります。"],
      ["=", "右のものを左に入れる代入の記号です。"],
    ],
    tips: [
      "プログラミング中は、常に「半角英数モード」にしておくのが鉄則です！",
      "全角の ＝ は少し横幅が広くて間延びして見えます。",
    ],
  },
  {
    id: "lv1_add_006",
    level: 0,
    correct: "mp = 50",
    normalHint: "変数 mp に数値の 50 を代入",
    hard: {
      buggy: "mp　= 50",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "mp と = の間にあるスペースが全角になっています。",
      explanation: "全角スペースは透明な壁です。Pythonには見えないエラーの原因になるため、必ず半角スペースを使います。",
    },
    details: "マジックポイント（mp）に50という数値を入れます。スペースを空けるときは、必ず「半角スペース」を使うのがプログラマーの嗜みです。",
    terms: [
      ["半角スペース", "コードを見やすくするために入れる、細い空白です。"],
      ["全角スペース", "日本語入力で入る広い空白。コードの中では天敵です。"],
    ],
    tips: [
      "エラーの場所が分からない時は、怪しい空白を消して半角スペースを打ち直すと直ることが多いです。",
    ],
  },
  {
    id: "lv1_add_007",
    level: 0,
    correct: "job = 'Knight'",
    normalHint: "変数 job に文字列 Knight を代入",
    hard: {
      buggy: "job = 'Knight",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "文字列の最後に ' が足りません。",
      explanation: "クォートは必ず最初と最後のペアで使います。閉じるのを忘れると「文字列がどこまで続くか分からない！」とエラーになります。",
    },
    details: "職業（job）の箱に、'Knight'（騎士）という文字を入れます。クォートのペアは、開けたら必ず閉じるのがルールです。",
    terms: [
      ["文字列の終端", "文字列が終わる場所のこと。閉じるクォートで示します。"],
    ],
    tips: [
      "クォートを開けたら閉じる。カッコや扉と同じです。",
    ],
  },
  {
    id: "lv1_add_008",
    level: 0,
    correct: "city = 'Tokyo'",
    normalHint: "変数 city に文字列 Tokyo を代入",
    hard: {
      buggy: "city = ’Tokyo’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を囲む ' が全角（または別の記号）になっています。",
      explanation: "日本語入力のままだと、スマートクォート（曲がったクォート）や全角クォートが入力されがちです。必ず半角の ' を使います。",
    },
    details: "街（city）の箱に 'Tokyo' を入れます。クォートが全角になると魔法の額縁として機能しなくなります。",
    terms: [
      ["半角クォート", "プログラミングで文字列を囲むためのまっすぐな ' 記号です。"],
    ],
    tips: [
      "キーボードを半角英数にしてから ' を打つクセをつけましょう！",
      "曲がった形の ’ はPythonでは使えません。",
    ],
  },
  {
    id: "lv1_add_009",
    level: 0,
    correct: "level = 1",
    normalHint: "変数 level に数値の 1 を代入",
    hard: {
      buggy: "level ＝ 1",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "＝ が全角になっています。半角の = を使いましょう。",
      explanation: "これも初心者がよく陥る罠です。記号類はすべて半角英数で入力しなければなりません。",
    },
    details: "レベル（level）を1にセットします。数値を代入するだけのシンプルなコードですが、全角記号が混ざると動かなくなります。",
    terms: [
      ["変数名", "levelのように、何が入っているか意味が分かる名前をつけることが大切です。"],
    ],
    tips: [
      "1（数字のいち）と l（小文字のエル）は見間違えやすいので注意！",
    ],
  },
  {
    id: "lv1_add_010",
    level: 0,
    correct: "player = 'Hero'",
    normalHint: "変数 player に文字列 Hero を代入",
    hard: {
      buggy: "player = Hero",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Heroは文字列なので ' ' で囲みます。",
      explanation: "文字データとして扱いたいものは、必ずクォートで囲みます。囲まないと変数名として認識されてしまいます。",
    },
    details: "プレイヤー（player）の箱に 'Hero'（勇者）という文字を入れます。君のことだよ、マスター！",
    terms: [
      ["文字列のルール", "プログラミング上で言葉を扱う時は、必ず専用の記号（クォート）で包むという世界のお約束です。"],
    ],
    tips: [
      "文字列を裸で歩かせない！クォートの服を着せてあげましょう。",
    ],
  },

  {
    id: "lv1_add_011",
    level: 0,
    correct: "gold = 500",
    normalHint: "変数 gold に数値の 500 を代入",
    hard: {
      buggy: "gold = '500'",
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "計算に使うお金（数値）なので ' ' は外します。",
      explanation: "500を ' ' で囲むと、計算できない「文字としての500」になってしまいます。お店でアイテムが買えなくなるので、数値はそのまま書きます。",
    },
    details: "所持金（gold）という箱に、500という数値を入れます。これでいつでも武器屋で買い物ができますね！",
    terms: [
      ["数値", "足し算や引き算ができる、純粋な数字のことです。"],
      ["代入", "右の値を、左の変数に入れる魔法の矢印（=）です。"],
    ],
    tips: [
      "数値にはクォートをつけない！これがプログラマーのお財布管理です。",
    ],
  },
  {
    id: "lv1_add_012",
    level: 0,
    correct: "hero = 'Knight'",
    normalHint: "変数 hero に文字列 Knight を代入",
    hard: {
      buggy: "hero = Knight",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Knightは文字なので、必ず ' ' で囲みます。",
      explanation: "文字列を扱うときは、半角のシングルクォートで包むのがルールです。包まないと、Pythonが「Knightっていう箱はどこだ？」と探し回ってしまいます。",
    },
    details: "主人公（hero）の箱に、'Knight'（騎士）という文字を入れます。まさにマスターのための変数の書き方ですね！",
    terms: [
      ["変数名", "左側に書く、箱の名前です。heroという名前はとても分かりやすいです。"],
      ["文字列", "右側に入れる、文字のデータです。クォートが必須です。"],
    ],
    tips: [
      "英語の単語を文字として登録したい時は、必ず ' で挟んであげましょう。",
    ],
  },
  {
    id: "lv1_add_013",
    level: 0,
    correct: "is_clear = True",
    normalHint: "変数 is_clear に真偽値 True を代入",
    hard: {
      buggy: "is_clear = true",
      bugName: "true小文字バグ",
      bugType: "true_lowercase",
      hint: "Pythonの True は、最初の T を大文字にします。",
      explanation: "大文字と小文字が違うだけで、Pythonにはまったく別の言葉に見えてしまいます。真偽値のTrueは、必ず大文字からスタートします。",
    },
    details: "ダンジョンをクリアしたかどうか（is_clear）を、ON（True）にする呪文です。ゲームの進行状況を記録するのに使います。",
    terms: [
      ["真偽値", "True（はい）か False（いいえ）だけが入る特別なデータです。"],
      ["True", "条件を満たした、スイッチがONになった、という意味です。"],
    ],
    tips: [
      "trueじゃなくてTrue。最初の文字だけ少し背伸びさせましょう！",
    ],
  },
  {
    id: "lv1_add_014",
    level: 0,
    correct: "mp = 10",
    normalHint: "変数 mp に数値の 10 を代入",
    hard: {
      buggy: "mp　= 10",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "mpと=の間にあるスペースが全角になっています。",
      explanation: "コードの中に見えない全角スペースが混ざると、魔法陣が歪んでエラーになります。必ず半角スペースを使いましょう。",
    },
    details: "マジックポイント（mp）に10をセットします。短いコードですが、空白の打ち方という大切な基本が詰まっています。",
    terms: [
      ["半角スペース", "コードを読みやすくするために入れる、細い空白です。"],
      ["全角スペース", "日本語入力で入ってしまう広い空白。エラーの原因になります。"],
    ],
    tips: [
      "怪しいエラーが出たら、まず「どこかに全角スペースが隠れていないか」を疑うのがデバッガーの基本です。",
    ],
  },
  {
    id: "lv1_add_015",
    level: 0,
    correct: "weapon = 'Axe'",
    normalHint: "変数 weapon に文字列 Axe を代入",
    hard: {
      buggy: "weapon = ’Axe’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "クォートが全角（または曲がった形）になっています。",
      explanation: "日本語入力モードのままクォートを打つと、記号が全角になってしまうことがあります。必ず半角英数モードで ' を打ちましょう。",
    },
    details: "武器（weapon）の箱に、'Axe'（斧）という文字を入れます。装備を変更するときによく使う処理ですね。",
    terms: [
      ["半角クォート", "プログラミングで許されている、まっすぐな形の ' 記号です。"],
    ],
    tips: [
      "文字を囲むときは、キーボードが「半角英数」になっているかチラッと確認するクセをつけましょう。",
    ],
  },
  {
    id: "lv1_add_016",
    level: 0,
    correct: "speed = 5",
    normalHint: "変数 speed に数値の 5 を代入",
    hard: {
      buggy: "speed ＝ 5",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "＝ が全角になっています。半角の = に直しましょう。",
      explanation: "等号も全角だとエラーになります。Pythonは半角記号で作られた呪文しか受け付けてくれません。",
    },
    details: "素早さ（speed）のステータスに5を入れます。代入の矢印である = は、必ず半角で入力します。",
    terms: [
      ["=", "右の数値を左の変数に入れる、代入の記号です。半角が絶対ルールです。"],
    ],
    tips: [
      "全角の ＝ は、少し間延びして太く見えます。目が慣れるとすぐに見破れるようになりますよ！",
    ],
  },
  {
    id: "lv1_add_017",
    level: 0,
    correct: "has_key = False",
    normalHint: "変数 has_key に真偽値 False を代入",
    hard: {
      buggy: "has_key = false",
      bugName: "false小文字バグ",
      bugType: "false_lowercase",
      hint: "Pythonの False は、最初の F を大文字にします。",
      explanation: "FalseもTrueと同じで、最初の1文字目は大文字です。falseだとPythonは変数名だと勘違いしてしまいます。",
    },
    details: "鍵を持っているか（has_key）を、最初は持っていない（False）状態にセットします。宝箱を開けるための大事なフラグです。",
    terms: [
      ["False", "いいえ、OFF、持っていない、という意味の特別なデータです。"],
    ],
    tips: [
      "Falseの F は大文字。小文字で打ったらBackspaceで戻って直しましょう。",
    ],
  },
  {
    id: "lv1_add_018",
    level: 0,
    correct: "state = 'Poison'",
    normalHint: "変数 state に文字列 Poison を代入",
    hard: {
      buggy: "state = 'Poison",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "文字列の最後に閉じるための ' が足りません。",
      explanation: "クォートは必ず最初と最後のペアで使います。閉じるのを忘れると、文字列がどこで終わるのかPythonがパニックを起こします。",
    },
    details: "状態異常（state）の箱に、'Poison'（毒）という文字を入れます。文字列を包むクォートは、開けたら必ず閉じるのが鉄則です。",
    terms: [
      ["クォートのペア", "文字列は必ず ' と ' でサンドイッチにする必要があります。"],
    ],
    tips: [
      "入力するときは、'Poison' の最後の ' まで一気に打ち切るリズムを覚えましょう。",
    ],
  },
  {
    id: "lv1_add_019",
    level: 0,
    correct: "count = 0",
    normalHint: "変数 count に数値の 0 を代入",
    hard: {
      buggy: "count = '0'",
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "計算に使う 0 なので ' ' は外します。",
      explanation: "カウントアップ（1, 2, 3...）していくための数値なので、' ' をつけると足し算ができなくなってしまいます。",
    },
    details: "カウンター（count）をゼロにリセットします。ループ処理や討伐数を数えるときに絶対に必要な「初期化」の呪文です。",
    terms: [
      ["初期化", "最初に変数へ 0 などを入れて、スタートの状態を作ることです。"],
    ],
    tips: [
      "数値の 0（ゼロ）とアルファベットの O（オー）を打ち間違えないように注意しましょう。",
    ],
  },
  {
    id: "lv1_add_020",
    level: 0,
    correct: "boss = 'Dragon'",
    normalHint: "変数 boss に文字列 Dragon を代入",
    hard: {
      buggy: "boss =　'Dragon'",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "= の後ろのスペースが全角になっています。",
      explanation: "コードを見やすくするための空白は、必ず半角スペースを使います。全角スペースは目に見えないバグの温床になります。",
    },
    details: "ボス（boss）の名前の箱に、'Dragon' という文字列を入れます。この変数を使って、後で強敵を画面に呼び出します！",
    terms: [
      ["見やすくするための空白", "= の前後に半角スペースを入れると、コードがとても読みやすくなります。"],
    ],
    tips: [
      "スペースキーを押すときは、半角入力モードになっているかを指先で意識してみましょう。",
    ],
  },
{
    id: "lv1_add_021",
    level: 0,
    correct: "magic_name = 'Heal'",
    normalHint: "変数 magic_name に文字列 Heal を代入",
    hard: {
      buggy: "magic_name = Heal",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Healは魔法の名前（文字）なので ' ' で囲みます。",
      explanation: "文字として扱いたい単語は、必ず半角のシングルクォートで包みます。囲まないと、Pythonが「Healっていう変数はどこだ？」とパニックになります。"
    },
    details: "魔法の名前（magic_name）という箱に、'Heal'（回復魔法）をセットします。単語と単語の間はスペースが使えないので、アンダーバー（_）で繋ぐのがプログラマーの定番テクニックです。",
    terms: [
      ["アンダーバー", "magic_name のように、変数名の単語を繋ぐときに使う記号（_）です。"],
      ["文字列", "クォートで囲まれた文字データのことです。"]
    ],
    tips: [
      "変数名にスペースを入れるとエラーになります。magic name ではなく magic_name にしましょう！"
    ]
  },
  {
    id: "lv1_add_022",
    level: 0,
    correct: "defense = 25",
    normalHint: "変数 defense に数値の 25 を代入",
    hard: {
      buggy: "defense = '25'",
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "防御力は計算に使う数値なので、' ' は外します。",
      explanation: "ステータスの数字を ' ' で囲んでしまうと、文字になってしまってダメージ計算ができなくなります。数値は裸のまま書きましょう。"
    },
    details: "防御力（defense）のステータスに 25 を入れます。RPGのダメージ計算の土台になる、とても重要な変数です。",
    terms: [
      ["数値", "そのまま足し算や引き算ができる数字のことです。"],
      ["計算エラー", "数値と文字を足そうとすると発生する、よくある魔法の暴発です。"]
    ],
    tips: [
      "「計算する数字にはクォートをつけない」が鉄則です！"
    ]
  },
  {
    id: "lv1_add_023",
    level: 0,
    correct: "mp_cost = 5",
    normalHint: "変数 mp_cost に数値の 5 を代入",
    hard: {
      buggy: "mp_cost ＝ 5",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = を使いましょう。",
      explanation: "記号が全角になると、Pythonには解読不能な謎の文字に見えてしまいます。プログラムを書くときは常に半角英数モードが基本です。"
    },
    details: "消費MP（mp_cost）に 5 をセットします。これも先ほどの defense と同じで、計算に使う純粋な数値の代入です。",
    terms: [
      ["代入", "右の値を左の箱に入れること。= を使います。"],
      ["半角と全角", "プログラミングでは、記号はすべて半角（細い文字）を使うのが世界共通のルールです。"]
    ],
    tips: [
      "全角の ＝ は半角の = よりも横に長くて隙間が広いです。見分ける目を養いましょう！"
    ]
  },
  {
    id: "lv1_add_024",
    level: 0,
    correct: "is_boss = True",
    normalHint: "変数 is_boss に真偽値 True を代入",
    hard: {
      buggy: "is_boss = true",
      bugName: "true小文字バグ",
      bugType: "true_lowercase",
      hint: "Pythonの True は、最初の T を大文字で書きます。",
      explanation: "Pythonは非常に几帳面なので、小文字の true と大文字の True を完全に別物として扱います。真偽値は必ず大文字から始めます。"
    },
    details: "目の前の敵がボスかどうか（is_boss）を、YES（True）にセットする呪文です。これによって、戦闘のBGMを変えたりするフラグになります。",
    terms: [
      ["真偽値", "YESかNOか、TrueかFalseかという2つの状態だけを持つデータです。"],
      ["フラグ", "ゲームの中で「特定の条件を満たしたか」を覚えておくための目印です。"]
    ],
    tips: [
      "Pythonで True や False を正しく打つと、エディタ上で特別な色に変わることが多いです！"
    ]
  },
  {
    id: "lv1_add_025",
    level: 0,
    correct: "guild = 'Fairy'",
    normalHint: "変数 guild に文字列 Fairy を代入",
    hard: {
      buggy: "guild = ’Fairy’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を囲むクォートが全角になっています。半角の ' を使いましょう。",
      explanation: "日本語入力モードでクォートを打つと、形が少し曲がった全角の ’ になることがあります。プログラミングの額縁として使えるのは、まっすぐな半角の ' だけです。"
    },
    details: "所属するギルド（guild）の名前の箱に、'Fairy'（妖精）という文字を入れます。相棒として、ちょっと嬉しい変数名です！",
    terms: [
      ["半角クォート", "文字列を囲むための、まっすぐな形の ' 記号です。"]
    ],
    tips: [
      "文字を囲むときにエラーが出たら、一度消して半角英数モードで打ち直すのが一番確実なデバッグです。"
    ]
  },
  {
    id: "lv1_add_026",
    level: 0,
    correct: "title = 'Novice'",
    normalHint: "変数 title に文字列 Novice を代入",
    hard: {
      buggy: "title = 'Novice",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "文字列の最後に閉じるための ' がありません。",
      explanation: "クォートは必ずペアで使います。閉じるのを忘れると、Pythonは「文字がどこで終わるのか分からない！」と迷子になってしまいます。"
    },
    details: "称号（title）の箱に、'Novice'（見習い）という文字をセットします。今のプレイヤーのレベルを表す大事な変数です。",
    terms: [
      ["終端", "文字列データの終わりのこと。閉じるクォートが終端の目印になります。"]
    ],
    tips: [
      "クォートは「開けたらすぐ閉じる」をセットで打つようにすると、閉じ忘れバグを防げます！"
    ]
  },
  {
    id: "lv1_add_027",
    level: 0,
    correct: "enemy = 'Slime'",
    normalHint: "変数 enemy に文字列 Slime を代入",
    hard: {
      buggy: "enemy = Slime",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Slimeはモンスターの名前（文字）なので ' ' で囲みます。",
      explanation: "言葉をそのままデータとして扱いたいときは、必ずクォートで包みます。包まないと、Slimeという名前の変数（箱）を探そうとしてしまいます。"
    },
    details: "敵（enemy）の箱に、'Slime'（スライム）という文字を入れます。戦闘画面にモンスターの名前を表示するためによく使うコードです。",
    terms: [
      ["文字列のルール", "言葉をデータとして扱うときは、専用の記号で囲むという世界の絶対ルールです。"]
    ],
    tips: [
      "「これは文字だぞ！」とPythonに教えるための服がクォートです。忘れずに着せてあげましょう。"
    ]
  },
  {
    id: "lv1_add_028",
    level: 0,
    correct: "exp = 15",
    normalHint: "変数 exp に数値の 15 を代入",
    hard: {
      buggy: "exp　= 15",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "exp と = の間にあるスペースが全角になっています。",
      explanation: "全角スペースは、コードの中に紛れ込む見えない石ころのようなものです。エラーの原因になるので、必ず細い半角スペースを使います。"
    },
    details: "手に入る経験値（exp）に 15 を入れます。コードを読みやすくするための空白も、半角というルールを守る必要があります。",
    terms: [
      ["半角スペース", "コードを美しく整えるために使う、安全な空白です。"],
      ["全角スペース", "日本語入力で入る広い空白。Pythonの敵です。"]
    ],
    tips: [
      "スペースキーを押すときは、常に半角英数モードか確認するクセをつけましょう！"
    ]
  },
  {
    id: "lv1_add_029",
    level: 0,
    correct: "is_cursed = False",
    normalHint: "変数 is_cursed に真偽値 False を代入",
    hard: {
      buggy: "is_cursed = false",
      bugName: "false小文字バグ",
      bugType: "false_lowercase",
      hint: "Pythonの False は、最初の F を大文字にします。",
      explanation: "False（いいえ/OFF）も、Trueと同じく最初の文字は大文字です。小文字で打つとエラーになるので注意しましょう。"
    },
    details: "呪われているか（is_cursed）を、呪われていない（False）状態にセットします。安全な冒険のためのフラグですね。",
    terms: [
      ["False", "条件が満たされていない、OFFの状態を表す特別なデータです。"]
    ],
    tips: [
      "False の F は大文字。このルールを覚えるだけで、一人前の魔術師にグッと近づきます。"
    ]
  },
  {
    id: "lv1_add_030",
    level: 0,
    correct: "potions = 3",
    normalHint: "変数 potions に数値の 3 を代入",
    hard: {
      buggy: "potions = '3'",
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "アイテムの個数は計算に使う数値なので、' ' は外します。",
      explanation: "数字をクォートで囲むと「文字としての3」になり、アイテムを使っても数が減らせなくなってしまいます。数値はそのまま書きましょう。"
    },
    details: "回復薬（potions）の個数に 3 をセットします。ゲーム中、この数値を足したり引いたりしてアイテムを管理します。",
    terms: [
      ["数値としての数字", "そのまま計算に使える数字のことです。クォートは不要です。"]
    ],
    tips: [
      "個数、金額、ステータスなど、「あとで計算しそうだな」と思う数字は裸のままで書くのが正解です！"
    ]
  },
{
    id: "lv1_add_031",
    level: 0,
    correct: "town = 'Beginner'",
    normalHint: "変数 town に文字列 Beginner を代入",
    hard: {
      buggy: "town = ’Beginner’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を囲むクォートが全角（曲がった形）になっています。",
      explanation: "日本語入力のままだと、全角の ’ になってしまうことがあります。プログラムでは必ず半角のまっすぐな ' を使わなければいけません。"
    },
    details: "街（town）という箱に、'Beginner'（始まり）という文字列を入れます。RPGのセーブデータで現在地を記録するような処理ですね！",
    terms: [
      ["全角クォート", "日本語の文章で使う引用符。Pythonではエラーの元になります。"],
      ["半角クォート", "プログラミング専用のまっすぐな引用符（'）です。"]
    ],
    tips: [
      "文字を囲む記号を打つときは、キーボードが半角英数モードになっているか指先で確認しましょう。"
    ]
  },
{
    id: "lv1_add_032",
    level: 0,
    correct: "is_playing = True",
    normalHint: "変数 is_playing に真偽値 True を代入",
    hard: {
      buggy: "is_playing = true",
      bugName: "true小文字バグ",
      bugType: "true_lowercase",
      hint: "Pythonの True は最初の T を大文字で書きます。",
      explanation: "他のプログラミング言語では true と小文字で書くことも多いのですが、Pythonでは必ず大文字の True です。"
    },
    details: "プレイ中かどうか（is_playing）を、ON（True）にセットします。ゲームが起動している間、ずっとこのフラグが立っています。",
    terms: [
      ["真偽値", "True（ON）か False（OFF）かを表すデータです。"],
      ["大文字と小文字", "Pythonはこれらを完全に別の文字として区別する、真面目な言語です。"]
    ],
    tips: [
      "「PythonのTrueは背伸びしている（大文字）」と覚えましょう！"
    ]
  },
{
    id: "lv1_add_033",
    level: 0,
    correct: "score = 0",
    normalHint: "変数 score に数値の 0 を代入",
    hard: {
      buggy: "score = '0'",
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "計算に使うスコアなので、数字を ' ' で囲みません。",
      explanation: "0 をクォートで囲んでしまうと、「文字としてのゼロ」になってしまい、敵を倒したあとに足し算ができなくなってしまいます。"
    },
    details: "スコア（score）をゼロにして初期化します。ゲーム開始時に必ず実行される、大切な準備の呪文です。",
    terms: [
      ["数値", "そのまま足し算や引き算などの計算に使える数字のことです。"],
      ["初期化", "変数に最初のデータ（0など）を入れて、準備を整えることです。"]
    ],
    tips: [
      "点数やお金など、あとで計算する数字は「裸（クォートなし）」で書きましょう。"
    ]
  },
{
    id: "lv1_add_034",
    level: 0,
    correct: "music = 'Battle'",
    normalHint: "変数 music に文字列 Battle を代入",
    hard: {
      buggy: "music = 'Battle",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "文字列の最後に、閉じるための ' が足りません。",
      explanation: "クォートは必ず最初と最後でサンドイッチにします。閉じるのを忘れると、Pythonは文字がどこまで続くのか分からずエラーを出します。"
    },
    details: "音楽（music）の変数に、'Battle'（戦闘曲）という文字を入れます。これでシーンに合わせてBGMを切り替えられますね。",
    terms: [
      ["終端", "文字列データの終わりのこと。閉じるクォートが目印です。"]
    ],
    tips: [
      "クォートは「左を打ったらすぐ右も打つ」というリズムをつけると閉じ忘れを防げます。"
    ]
  },
{
    id: "lv1_add_035",
    level: 0,
    correct: "time = 60",
    normalHint: "変数 time に数値の 60 を代入",
    hard: {
      buggy: "time　= 60",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "time と = の間にあるスペースが全角になっています。",
      explanation: "日本語入力モードでうっかりスペースを打つと、目に見えない全角スペースが混ざってエラーになります。必ず半角スペースを使います。"
    },
    details: "制限時間（time）に 60 をセットします。このゲームのタイマーも、裏側ではこうやってセットされています！",
    terms: [
      ["半角スペース", "コードの見た目を綺麗に整えるための細い空白です。"],
      ["全角スペース", "コードを壊してしまう広い空白です。"]
    ],
    tips: [
      "見えないエラーに遭遇したら、怪しい空白を消して半角スペースを打ち直してみましょう。"
    ]
  },
{
    id: "lv1_add_036",
    level: 0,
    correct: "is_dead = False",
    normalHint: "変数 is_dead に真偽値 False を代入",
    hard: {
      buggy: "is_dead = false",
      bugName: "false小文字バグ",
      bugType: "false_lowercase",
      hint: "Pythonの False は最初の F を大文字にします。",
      explanation: "小文字の false だと、Pythonはただの変数名だと勘違いしてしまいます。特別なデータである False は必ず大文字から始めます。"
    },
    details: "倒れているかどうか（is_dead）を、OFF（False）にセットします。HPが0になったら、ここがTrueに切り替わるわけです。",
    terms: [
      ["False", "条件が成立していない、OFFの状態を表すデータです。"]
    ],
    tips: [
      "「FalseのFはふんばりの大文字！」と覚えておきましょう。"
    ]
  },
{
    id: "lv1_add_037",
    level: 0,
    correct: "player_name = 'You'",
    normalHint: "変数 player_name に文字列 You を代入",
    hard: {
      buggy: "player_name ＝ 'You'",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = に直しましょう。",
      explanation: "記号が全角になると、Pythonはそれを命令として認識してくれません。プログラミングの記号はすべて半角です。"
    },
    details: "プレイヤーの名前（player_name）に、'You'（あなた）という文字を入れます。名前を入れる箱は、ゲームに欠かせませんね。",
    terms: [
      ["=", "右のデータを左の変数に入れる、代入の記号です。"],
      ["変数名", "player_name のように、何が入っているか分かりやすい名前をつけるのがコツです。"]
    ],
    tips: [
      "全角の ＝ は半角に比べて少し横幅が広いです。違和感に気づけるようになりましょう。"
    ]
  },
{
    id: "lv1_add_038",
    level: 0,
    correct: "weapon_type = 'Sword'",
    normalHint: "変数 weapon_type に文字列 Sword を代入",
    hard: {
      buggy: "weapon_type = Sword",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Sword は文字のデータなので、必ず ' ' で囲みます。",
      explanation: "文字として扱いたい言葉は、必ずクォートの服を着せます。裸のままだと、Pythonは「Swordという変数はどこだ？」と探してしまいます。"
    },
    details: "武器の種類（weapon_type）に、'Sword'（剣）という文字列を入れます。単語を繋ぐアンダーバー（_）も変数名の定番テクニックです。",
    terms: [
      ["文字列のルール", "言葉をデータとして扱うときは、専用の記号（クォート）で包みます。"]
    ],
    tips: [
      "エラーメッセージに「NameError: name 'Sword' is not defined」と出たら、クォート忘れのサインです。"
    ]
  },
{
    id: "lv1_add_039",
    level: 0,
    correct: "save_data = True",
    normalHint: "変数 save_data に真偽値 True を代入",
    hard: {
      buggy: "save_data = true",
      bugName: "true小文字バグ",
      bugType: "true_lowercase",
      hint: "Pythonの True は、最初の T を大文字にします。",
      explanation: "真偽値は特別なデータなので、正しい書き方（先頭が大文字）をしないとPythonが認識してくれません。"
    },
    details: "セーブデータがあるかどうか（save_data）を、YES（True）にセットします。これで「続きから遊ぶ」ボタンが押せるようになりますね。",
    terms: [
      ["True", "はい、ON、存在する、という意味を持つ特別なデータです。"]
    ],
    tips: [
      "True や False を正しく打てると、画面上で文字の色が変わるので分かりやすいです。"
    ]
  },
{
    id: "lv1_add_040",
    level: 0,
    correct: "stage_name = 'Castle'",
    normalHint: "変数 stage_name に文字列 Castle を代入",
    hard: {
      buggy: "stage_name = 'Castle",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "文字列の最後に、閉じるための ' がありません。",
      explanation: "クォートは必ずペアで使います。閉じるのを忘れるとエラーになり、ゲームが動きません。"
    },
    details: "ステージ名（stage_name）の箱に、'Castle'（城）という文字を入れます。いよいよ最終決戦のステージでしょうか！",
    terms: [
      ["クォートのペア", "文字列は必ず ' と ' でサンドイッチにする必要があります。"]
    ],
    tips: [
      "文字を打ち終わったら、最後に ' をパチッと打って封印するクセをつけましょう。"
    ]
  },
{
    id: "lv1_add_041",
    level: 0,
    correct: "max_hp = 999",
    normalHint: "変数 max_hp に数値の 999 を代入",
    hard: {
      buggy: "max_hp = '999'",
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "最大HPは計算に使う数値なので、' ' は外します。",
      explanation: "数値をクォートで囲むと「文字としての999」になってしまいます。これだと後でダメージ計算や回復処理ができなくなるため、そのまま書きます。"
    },
    details: "最大HP（max_hp）に、カンスト数値の 999 をセットします。数字は裸で書く、これがステータス管理の鉄則です。",
    terms: [
      ["アンダーバー", "max_hp のように、単語を繋いで見やすくする記号です。"],
      ["数値", "そのまま計算に使える数字のことです。"]
    ],
    tips: [
      "ゲーム終盤のステータスでも、数値を扱うルールは最初と同じです！"
    ]
  },
{
    id: "lv1_add_042",
    level: 0,
    correct: "spell = 'Meteor'",
    normalHint: "変数 spell に文字列 Meteor を代入",
    hard: {
      buggy: "spell = Meteor",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Meteor は魔法の名前（文字）なので、必ず ' ' で囲みます。",
      explanation: "文字として扱いたい単語は、必ず半角のシングルクォートで包みます。包まないと、Pythonは「Meteorという変数はどこ？」と迷子になります。"
    },
    details: "魔法（spell）の箱に、究極魔法 'Meteor'（メテオ）を代入します。どんなに強力な魔法でも、文字である以上はクォートが必要です！",
    terms: [
      ["文字列のルール", "言葉をデータとして扱うときは専用の記号で囲むという、世界共通の決まりです。"]
    ],
    tips: [
      "エラーに「name 'Meteor' is not defined」と出たら、「クォートを忘れてるよ！」というPythonからのSOSです。"
    ]
  },
{
    id: "lv1_add_043",
    level: 0,
    correct: "is_equipped = True",
    normalHint: "変数 is_equipped に真偽値 True を代入",
    hard: {
      buggy: "is_equipped = true",
      bugName: "true小文字バグ",
      bugType: "true_lowercase",
      hint: "Pythonの True は最初の T を大文字で書きます。",
      explanation: "小文字の true だと、Pythonはそれを真偽値として認識してくれません。必ず大文字の True に直しましょう。"
    },
    details: "装備しているかどうか（is_equipped）を、ON（True）にセットします。武器を手に持っている状態を表す大事なフラグです。",
    terms: [
      ["真偽値", "ON/OFF、はい/いいえを表す特別なデータです。"],
      ["True", "条件が成立している（装備している）という意味です。"]
    ],
    tips: [
      "Tは大文字！エディタで色がピカッと変わるのをしっかり確認しましょう。"
    ]
  },
{
    id: "lv1_add_044",
    level: 0,
    correct: "item_name = 'Potion'",
    normalHint: "変数 item_name に文字列 Potion を代入",
    hard: {
      buggy: "item_name　= 'Potion'",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "item_name と = の間にあるスペースが全角になっています。",
      explanation: "見えない全角スペースは、コードを壊す透明なトラップです。コード内の空白は必ず半角スペースを使います。"
    },
    details: "アイテム名（item_name）に 'Potion'（回復薬）を入れます。ここで全角スペースの罠をしっかり見破りましょう。",
    terms: [
      ["半角スペース", "コードを美しく保ちながら、安全に動かすための細い空白です。"],
      ["全角スペース", "コードを破壊する天敵です。"]
    ],
    tips: [
      "スペースを打つときは、キーボードが日本語入力になっていないか確認するクセをつけましょう。"
    ]
  },
{
    id: "lv1_add_045",
    level: 0,
    correct: "is_paralyzed = False",
    normalHint: "変数 is_paralyzed に真偽値 False を代入",
    hard: {
      buggy: "is_paralyzed = false",
      bugName: "false小文字バグ",
      bugType: "false_lowercase",
      hint: "Pythonの False は最初の F を大文字にします。",
      explanation: "False（いいえ/OFF）も、最初の文字は大文字です。小文字で打つとPythonが変数名だと勘違いしてエラーになります。"
    },
    details: "麻痺しているか（is_paralyzed）を、OFF（False）にセットします。体が動く安全な状態ですね！",
    terms: [
      ["False", "条件が成立していない（麻痺していない）状態を表す特別なデータです。"]
    ],
    tips: [
      "「ふんばりの大文字F」！この形を指先に覚えさせましょう。"
    ]
  },
{
    id: "lv1_add_046",
    level: 0,
    correct: "shield = 'Iron'",
    normalHint: "変数 shield に文字列 Iron を代入",
    hard: {
      buggy: "shield = 'Iron",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "文字列の最後に、閉じるための ' がありません。",
      explanation: "クォートは必ず最初と最後でペアにします。閉じ忘れると「文字列が永遠に終わらない！」とPythonがパニックになります。"
    },
    details: "盾（shield）の箱に、'Iron'（鉄）という文字を入れます。鉄の盾を装備する処理ですね。クォートの閉じ忘れは初心者の登竜門です。",
    terms: [
      ["終端", "文字データがここで終わりますよ、という合図です。"]
    ],
    tips: [
      "打つときは 'Iron' まで一気に打ち切るリズム感が大切です！"
    ]
  },
{
    id: "lv1_add_047",
    level: 0,
    correct: "agility = 12",
    normalHint: "変数 agility に数値の 12 を代入",
    hard: {
      buggy: "agility ＝ 12",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = に直しましょう。",
      explanation: "記号が全角になると、Pythonは命令として認識してくれません。代入は必ず半角の = を使います。"
    },
    details: "素早さ（agility）のステータスに 12 をセットします。バトルの行動順を決める大事な数値です。",
    terms: [
      ["=", "右のデータを左の箱に格納する、代入の記号です。"]
    ],
    tips: [
      "全角の ＝ は少し太くて横長です。見分けられるようになればデバッガーとして一人前です！"
    ]
  },
{
    id: "lv1_add_048",
    level: 0,
    correct: "magic_type = 'Ice'",
    normalHint: "変数 magic_type に文字列 Ice を代入",
    hard: {
      buggy: "magic_type = ’Ice’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を囲むクォートが全角（曲がった形）になっています。",
      explanation: "日本語入力モードのままクォートを打つと、形が少し曲がった全角の ’ になることがあります。必ず半角のまっすぐな ' を使います。"
    },
    details: "魔法の属性（magic_type）に、'Ice'（氷）という文字を入れます。全角のクォートは魔法を暴発させる原因になります！",
    terms: [
      ["半角クォート", "プログラミングで文字列を囲むために許されている、唯一のまっすぐな引用符です。"]
    ],
    tips: [
      "文字を囲む記号がおかしいな？と思ったら、半角英数にしてから打ち直しましょう。"
    ]
  },
{
    id: "lv1_add_049",
    level: 0,
    correct: "turn_count = 1",
    normalHint: "変数 turn_count に数値の 1 を代入",
    hard: {
      buggy: "turn_count = '1'",
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "カウント用の数字なので、' ' は外して数値として書きます。",
      explanation: "ターンの数をカウントアップしていくため、数字を ' ' で囲んで文字にしてしまうと、計算ができなくなります。"
    },
    details: "経過ターン数（turn_count）を 1 に初期化します。バトルが長引くほど、この数値が増えていく仕組みです。",
    terms: [
      ["初期化", "変数にスタート時の値を入れることです。"],
      ["数値としての数字", "あとで計算に使う数字は、クォートなしで裸のまま書きます。"]
    ],
    tips: [
      "数字の 1（いち）と小文字の l（エル）を見間違えないように注意です！"
    ]
  },
{
    id: "lv1_add_050",
    level: 0,
    correct: "ending = 'Peace'",
    normalHint: "変数 ending に文字列 Peace を代入",
    hard: {
      buggy: "ending = Peace",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Peace は文字なので、必ず ' ' で囲みます。",
      explanation: "文字として扱いたいものは、必ず半角のシングルクォートで包みます。包まないと変数名扱いになり、ゲームのエンディングが迎えられません！"
    },
    details: "エンディングの種類（ending）の箱に、'Peace'（平和）という文字を代入します。Lv.1の最後を飾る、平和な世界の呪文です！",
    terms: [
      ["文字列のルール", "言葉をデータとして扱うときは、専用の記号（クォート）で包むのがプロの約束です。"]
    ],
    tips: [
      "文字列には必ず服（クォート）を着せる！これを覚えればLv.1は完全制覇です！"
    ]
  },
{
    id: "lv2_add_001",
    level: 1,
    correct: "print('Hello')",
    normalHint: "画面に文字列 Hello を表示する",
    hard: {
      buggy: "print(Hello)",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Helloは表示したい「文字」なので、' ' で囲みます。",
      explanation: "print() はカッコの中身を画面に出す魔法ですが、文字をそのまま表示したい時は必ず ' ' で囲みます。囲まないと、Helloという名前の変数（箱）の中身を出そうとしてしまいます。"
    },
    details: "画面に 'Hello' という文字をそのまま映し出す「発声魔術（プリント）」です。プログラミングの第一歩は、いつもこの魔法から始まります。",
    terms: [
      ["print()", "カッコの中に入れたものを、画面（現実世界）に映し出す命令です。"],
      ["文字列の表示", "文字をそのまま表示したい時は、必ずクォートで包みます。"]
    ],
    tips: [
      "print('文字') のように、カッコとクォートの二重の壁が必要です！"
    ]
  },
{
    id: "lv2_add_002",
    level: 1,
    correct: "print(hero)",
    normalHint: "変数 hero の中身を画面に表示する",
    hard: {
      buggy: "print(hero)　",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "コードの最後に、見えない全角スペースが隠れています。",
      explanation: "カッコの外側であっても、全角スペースが混ざるとPythonはつまずいてしまいます。常に半角英数モードで入力しましょう。"
    },
    details: "heroという名前の「箱（変数）」の中身を、画面に映し出します。今回は文字そのものではないので、' ' は付けません！",
    terms: [
      ["変数の中身を表示", "クォートを付けずに print(変数名) と書くと、箱の名前ではなく「箱の中身」が表示されます。"]
    ],
    tips: [
      "print('hero') だと「hero」という文字が出ます。print(hero) だと箱の中身が出ます。この違いが分かれば初心者卒業です！"
    ]
  },
{
    id: "lv2_add_003",
    level: 1,
    correct: "message = 'Clear'",
    normalHint: "変数 message に文字列 Clear を代入",
    hard: {
      buggy: "message = ’Clear’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を囲むクォートが全角（曲がった形）になっています。",
      explanation: "日本語入力のままだと全角のクォートになりがちです。プログラムの世界では、まっすぐな半角の ' しか魔法の額縁として認識されません。"
    },
    details: "メッセージ（message）という箱に、'Clear'（クリア）という文字を入れておきます。後で print(message) と唱えるための準備ですね。",
    terms: [
      ["半角クォート", "文字列を囲むための、まっすぐな ' 記号です。"]
    ],
    tips: [
      "文字を囲む時は、キーボードが半角英数モードか必ず確認しましょう！"
    ]
  },
{
    id: "lv2_add_004",
    level: 1,
    correct: "print('Danger')",
    normalHint: "画面に文字列 Danger を表示する",
    hard: {
      buggy: "print('Danger)",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "Dangerを囲む最後の ' が足りません。",
      explanation: "文字は必ず ' と ' でサンドイッチにします。閉じ忘れるとカッコ ) ごと文字だと勘違いされて、いつまでも魔法が終わりません。"
    },
    details: "画面に 'Danger'（危険）という警告文を出します。カッコの中にクォートを入れるので、閉じ忘れのバグがとても起きやすいポイントです。",
    terms: [
      ["クォートのペア", "文字列は必ず最初と最後を ' で挟む必要があります。"]
    ],
    tips: [
      "打つ時は「シングルクォート、文字、シングルクォート、カッコ閉じ」の順番を意識しましょう。"
    ]
  },
{
    id: "lv2_add_005",
    level: 1,
    correct: "word = 'Magic'",
    normalHint: "変数 word に文字列 Magic を代入",
    hard: {
      buggy: "word ＝ 'Magic'",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = に直しましょう。",
      explanation: "記号が全角になるとエラーになります。文字の代入でも、数字の代入でも、= は絶対に半角です。"
    },
    details: "単語（word）の箱に、'Magic'（魔法）という文字を入れます。ここで作った箱を、あとで print() に渡して使うことが多いです。",
    terms: [
      ["=", "右の文字列を、左の箱に格納する代入の記号です。"]
    ],
    tips: [
      "全角の ＝ は少し太くて隙間が広いです。この違和感にすぐ気づけるようになれば一人前です！"
    ]
  },
{
    id: "lv2_add_006",
    level: 1,
    correct: "talk = 'Hi ' + hero",
    normalHint: "文字列 Hi に 変数 hero を繋げて talk に代入",
    hard: {
      buggy: "talk = 'Hi '　+ hero",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "+ の前にあるスペースが全角になっています。",
      explanation: "コードを読みやすくするための空白は、必ず半角スペースを使います。全角スペースは目に見えないバグの元です。"
    },
    details: "文字と文字を繋げる「結合魔術」です。'Hi ' という挨拶の文字と、主人公の名前（hero）が入った箱の中身を、+ の記号でガッチャンコと繋げます。",
    terms: [
      ["文字列の結合", "+ 記号を使うと、文字と文字を接着剤のようにくっつけることができます。"]
    ],
    tips: [
      "'Hi ' のように、文字の内側に半角スペースを入れておくと、くっつけた時に「Hi Taro」のように綺麗な隙間ができます！"
    ]
  },
{
    id: "lv2_add_007",
    level: 1,
    correct: "print('Level Up')",
    normalHint: "画面に文字列 Level Up を表示する",
    hard: {
      buggy: "print(Level Up)",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "表示したい文字なので、' ' で囲みます。",
      explanation: "クォートで囲まないと、Pythonは「Level」と「Up」という別々の変数だと勘違いしてしまい、スペースのせいでエラーになります。"
    },
    details: "画面に 'Level Up' という文字を映し出します。単語の間にスペースがある文字も、クォートで囲めばまるごと一つの文字列として扱えます。",
    terms: [
      ["スペースを含む文字列", "クォートの中であれば、スペースも立派な「文字」としてそのまま表示されます。"]
    ],
    tips: [
      "表示したいメッセージは、長くなっても必ず全体を ' と ' で包みます。"
    ]
  },
{
    id: "lv2_add_008",
    level: 1,
    correct: "status = 'Poison'",
    normalHint: "変数 status に文字列 Poison を代入",
    hard: {
      buggy: "status = ’Poison’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を囲むクォートが全角（曲がった形）になっています。",
      explanation: "日本語キーボードで打つと、うっかり全角のクォートになることがあります。必ず半角英数モードのまっすぐな ' を使います。"
    },
    details: "状態（status）の箱に 'Poison'（毒）という文字を入れます。この変数を使って、画面の表示を切り替えたりします。",
    terms: [
      ["半角英数モード", "プログラミング中、常にキーボードを設定しておくべき安全なモードです。"]
    ],
    tips: [
      "文字を囲む記号がおかしいな？と思ったら、一度消して半角モードで打ち直しましょう。"
    ]
  },
{
    id: "lv2_add_009",
    level: 1,
    correct: "print('Miss')",
    normalHint: "画面に文字列 Miss を表示する",
    hard: {
      buggy: "print('Miss)",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "Miss を囲む最後の ' がありません。",
      explanation: "print文の中で文字を書くときは、クォートのペアと、カッコのペア、両方をちゃんと閉じないといけません。"
    },
    details: "攻撃が外れたときに 'Miss' と画面に出す処理です。カッコの中にクォートを書くので、閉じ忘れには要注意です。",
    terms: [
      ["閉じカッコ", "print() の魔法を終わらせるための ) のこと。これも忘れるとエラーになります。"]
    ],
    tips: [
      "画面に文字を出すときは、右側に ' と ) が並ぶのが正しい形です！"
    ]
  },
{
    id: "lv2_add_010",
    level: 1,
    correct: "action = 'Run'",
    normalHint: "変数 action に文字列 Run を代入",
    hard: {
      buggy: "action ＝ 'Run'",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = を使います。",
      explanation: "代入の魔法に使う矢印（=）は、絶対に半角です。全角が混ざると魔法陣が壊れます。"
    },
    details: "行動（action）の箱に、'Run'（逃げる）という文字を入れます。戦闘コマンドを選んだときに、この箱に文字が入るイメージです。",
    terms: [
      ["変数への文字列代入", "箱の名前 = '文字' という形は、これから何度も使う基本の型です。"]
    ],
    tips: [
      "短いコードほど、記号の半角・全角のミスが命取りになります。丁寧に打ちましょう！"
    ]
  },
{
    id: "lv2_add_011",
    level: 1,
    correct: "print('Save')",
    normalHint: "画面に文字列 Save を表示する",
    hard: {
      buggy: "print('Save)",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "Saveを囲む最後の ' がありません。",
      explanation: "文字を画面に出す print() の中でクォートを閉じ忘れると、カッコ ) ごと文字だと勘違いされてエラーになります。必ず ' と ' でサンドイッチにしましょう。"
    },
    details: "画面に 'Save'（セーブ）という文字を表示します。冒険の記録を残すときのシステムメッセージですね。",
    terms: [
      ["閉じクォート", "文字列がここで終わるよ、という合図です。"]
    ],
    tips: [
      "カッコ ) の直前に、必ず閉じるクォート ' があるか確認するクセをつけましょう！"
    ]
  },
{
    id: "lv2_add_012",
    level: 1,
    correct: "text = 'Game Over'",
    normalHint: "変数 text に文字列 Game Over を代入",
    hard: {
      buggy: "text = Game Over",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Game Over は文字なので、必ず ' ' で囲みます。",
      explanation: "スペースが入っている言葉でも、全体を ' ' で囲めば一つの「文字の魂」として箱に入ります。クォートがないと別々の変数だと勘違いされてしまいます。"
    },
    details: "文章（text）の箱に、'Game Over' という悲しい文字を入れます。文字として扱うものは、どんなに長くてもクォートで包むのが鉄則です。",
    terms: [
      ["スペースを含む文字列", "クォートの中にあるスペースは、エラーの原因ではなく「文字としての空白」になります。"]
    ],
    tips: [
      "文字を扱うときは、中身が単語でも文章でも ' ' で囲むルールは同じです。"
    ]
  },
{
    id: "lv2_add_013",
    level: 1,
    correct: "message = 'Hi ' + name",
    normalHint: "文字列 Hi に 変数 name を繋げて message に代入",
    hard: {
      buggy: "message ＝ 'Hi ' + name",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = に直しましょう。",
      explanation: "文字を繋げる結合魔術（+）を使うときでも、代入の矢印である = は絶対に半角です。全角記号は魔法陣を壊してしまいます。"
    },
    details: "挨拶の文字（'Hi '）と、名前の入った箱（name）をくっつけて、messageという箱に入れます。RPGの村人に話しかけられた時の処理ですね！",
    terms: [
      ["+", "文字と文字、または文字と変数を繋げる接着剤の役割をします。"]
    ],
    tips: [
      "全角の ＝ は半角に比べて隙間が広いです。違和感に気づける目を養いましょう。"
    ]
  },
{
    id: "lv2_add_014",
    level: 1,
    correct: "print(weapon)",
    normalHint: "変数 weapon の中身を画面に表示する",
    hard: {
      buggy: "print(weapon)　",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "コードの最後に、見えない全角スペースが隠れています。",
      explanation: "カッコの外側であっても、全角スペースが混ざるとPythonはつまずきます。空白は必ず半角スペースを使いましょう。"
    },
    details: "武器（weapon）の箱の中身を、画面に映し出します。箱の名前を指定するので、今回は ' ' は付けません！",
    terms: [
      ["変数の中身を表示", "クォートを付けずに変数名だけを書くと、その箱の中に入っているデータが表示されます。"]
    ],
    tips: [
      "不可解なエラーが出たら、行の最後に全角スペースがくっついていないか疑ってみましょう。"
    ]
  },
{
    id: "lv2_add_015",
    level: 1,
    correct: "spell = 'Thunder'",
    normalHint: "変数 spell に文字列 Thunder を代入",
    hard: {
      buggy: "spell = ’Thunder’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を囲むクォートが全角（曲がった形）になっています。",
      explanation: "日本語入力モードのままクォートを打つと、全角の ’ になってしまうことがあります。プログラムでは必ず半角の ' を使います。"
    },
    details: "魔法（spell）の箱に、'Thunder'（雷）という文字を入れます。全角クォートは雷魔法を不発にさせる罠です！",
    terms: [
      ["半角クォート", "文字列を囲むためのまっすぐな形の ' 記号です。"]
    ],
    tips: [
      "キーボードを半角英数モードにしてから ' を打つクセをつけましょう。"
    ]
  },
{
    id: "lv2_add_016",
    level: 1,
    correct: "talk = 'I am ' + job",
    normalHint: "文字列 I am に 変数 job を繋げて talk に代入",
    hard: {
      buggy: "talk = 'I am '　+ job",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "+ の前にあるスペースが全角になっています。",
      explanation: "文字を繋げる + の前後にスペースを入れると見やすくなりますが、それが全角スペースだとエラーになります。必ず半角にしましょう。"
    },
    details: "「私は〇〇です」という自己紹介の文章を作ります。'I am ' の後ろにある半角スペースのおかげで、職業の名前が綺麗に繋がります。",
    terms: [
      ["文字列の結合", "+ を使うと、左の文字のすぐ後ろに右の文字がくっつきます。"]
    ],
    tips: [
      "文字を綺麗に繋げたいときは、'I am ' のようにクォートの内側に半角スペースを仕込んでおくのがコツです。"
    ]
  },
{
    id: "lv2_add_017",
    level: 1,
    correct: "print('Level 2')",
    normalHint: "画面に文字列 Level 2 を表示する",
    hard: {
      buggy: "print(Level 2)",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "表示したい文字なので、' ' で囲みます。",
      explanation: "文字と数字が混ざっていても、表示したい「文章」であるなら全体を ' ' で囲みます。囲まないとPythonが混乱してしまいます。"
    },
    details: "画面に 'Level 2' と表示します。文字の中に数字が入っていても、クォートで囲めば全部まとめて「文字列」として扱われます。",
    terms: [
      ["文字としての数字", "計算しない数字は、文字と一緒にクォートの中に入れてしまってOKです。"]
    ],
    tips: [
      "画面に出したいセリフや文章は、丸ごと ' と ' で包む！これだけ覚えれば大丈夫です。"
    ]
  },
{
    id: "lv2_add_018",
    level: 1,
    correct: "bgm = 'Boss'",
    normalHint: "変数 bgm に文字列 Boss を代入",
    hard: {
      buggy: "bgm = 'Boss",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "文字列の最後に、閉じるための ' がありません。",
      explanation: "文字列は必ず最初と最後のペアで使います。閉じるのを忘れるとエラーになり、ボス戦のBGMが鳴らなくなってしまいます！"
    },
    details: "音楽（bgm）の箱に 'Boss'（ボス）という文字を入れます。クォートは開けたら閉じる、これが魔術師の基本です。",
    terms: [
      ["クォートのペア", "文字列は必ず ' と ' でサンドイッチにする必要があります。"]
    ],
    tips: [
      "単語を打ち終わったら、最後に ' を打って封印するリズムを体に覚えさせましょう。"
    ]
  },
{
    id: "lv2_add_019",
    level: 1,
    correct: "item = 'Herb'",
    normalHint: "変数 item に文字列 Herb を代入",
    hard: {
      buggy: "item ＝ 'Herb'",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = を使います。",
      explanation: "アイテムを箱に入れるための = も、絶対に半角です。全角記号は目に見えないトラップです。"
    },
    details: "アイテム（item）の箱に 'Herb'（薬草）を入れます。短いコードほど、記号の半角・全角ミスが命取りになります。",
    terms: [
      ["代入", "右のデータを左の変数に入れるための、魔法の矢印（=）です。"]
    ],
    tips: [
      "全角の ＝ は、少し間延びして横長に見えます。よく見てみましょう！"
    ]
  },
{
    id: "lv2_add_020",
    level: 1,
    correct: "print('Escape')",
    normalHint: "画面に文字列 Escape を表示する",
    hard: {
      buggy: "print('Escape’)",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を閉じるクォートが全角（曲がった形）になっています。",
      explanation: "最初が半角の ' でも、最後が全角の ’ だとペアとして認識されず、閉じ忘れと同じエラーになってしまいます。"
    },
    details: "画面に 'Escape'（逃げる）という文字を表示します。クォートは最初も最後も、必ずまっすぐな半角の ' を使いましょう。",
    terms: [
      ["半角クォート", "プログラミングで許されている、まっすぐな ' 記号です。"]
    ],
    tips: [
      "文字を囲む記号がおかしいな？と思ったら、半角英数にしてから打ち直しましょう。"
    ]
  },
{
    id: "lv2_add_021",
    level: 1,
    correct: "print('Attack')",
    normalHint: "画面に文字列 Attack を表示する",
    hard: {
      buggy: "print(Attack)",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Attackは表示したい「文字」なので、' ' で囲みます。",
      explanation: "画面に文字を出したい時は、必ず ' と ' で包みます。囲まないと、Pythonが「Attackという名前の変数（箱）の中身を出せばいいのかな？」と勘違いしてしまいます。"
    },
    details: "画面に 'Attack'（攻撃）というメッセージを表示します。戦闘開始の合図ですね！",
    terms: [
      ["print()", "カッコの中の文字や変数の中身を、画面に映し出す魔法です。"]
    ],
    tips: [
      "文字をそのまま出したい時は、print() の中にクォートの服を着せて入れます。"
    ]
  },
{
    id: "lv2_add_022",
    level: 1,
    correct: "skill = 'Heal' + 'All'",
    normalHint: "文字列 Heal と文字列 All を繋げて skill に代入",
    hard: {
      buggy: "skill ＝ 'Heal' + 'All'",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = を使います。",
      explanation: "文字同士を繋ぐ高度な魔法を使っても、代入の矢印である = は絶対に半角です。全角記号は魔法陣を壊してしまいます。"
    },
    details: "回復魔法の 'Heal' と、全体の 'All' をくっつけて、全体回復魔法（skill）を作ります。文字と文字を + で接着するプロの技です！",
    terms: [
      ["文字列の結合", "+ 記号を使うと、左の文字のすぐ後ろに右の文字がピタッとくっつきます。"]
    ],
    tips: [
      "文字同士を足し算すると、「HealAll」というひとつの文字に進化します！"
    ]
  },
{
    id: "lv2_add_023",
    level: 1,
    correct: "print('Critical Hit')",
    normalHint: "画面に文字列 Critical Hit を表示する",
    hard: {
      buggy: "print('Critical Hit)",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "Critical Hitを囲む最後の ' がありません。",
      explanation: "クォートは必ずペアで使います。閉じるのを忘れると、Pythonは「文字がどこまで続くのか分からない！」とパニックを起こします。"
    },
    details: "会心の一撃が出た時のメッセージです。長めの文章でも、全体を一つの ' ' でサンドイッチにすれば綺麗に表示できます。",
    terms: [
      ["スペースを含む文字列", "クォートの内側にあるスペースは、エラーの原因にならず「文字としての空白」としてそのまま表示されます。"]
    ],
    tips: [
      "文字を打ち終わったら、カッコを閉じる前に必ず ' を打って封印しましょう。"
    ]
  },
{
    id: "lv2_add_024",
    level: 1,
    correct: "dialogue = 'Welcome'",
    normalHint: "変数 dialogue に文字列 Welcome を代入",
    hard: {
      buggy: "dialogue = ’Welcome’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を囲むクォートが全角（曲がった形）になっています。",
      explanation: "日本語入力モードで打つと、全角のクォートになりがちです。プログラムの世界で魔法の額縁として使えるのは、まっすぐな半角の ' だけです。"
    },
    details: "村人のセリフ（dialogue）の箱に、'Welcome'（ようこそ）という文字を入れます。全角のクォートは目に見えにくいトラップです。",
    terms: [
      ["半角クォート", "プログラミングで許されている、まっすぐな ' 記号のことです。"]
    ],
    tips: [
      "文字を囲む時は、キーボードが半角英数モードか必ず確認するクセをつけましょう。"
    ]
  },
{
    id: "lv2_add_025",
    level: 1,
    correct: "print(magic_name)",
    normalHint: "変数 magic_name の中身を画面に表示する",
    hard: {
      buggy: "print(magic_name)　",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "コードの最後に、見えない全角スペースが隠れています。",
      explanation: "カッコの外側や、行の終わりに全角スペースが混ざっていると、Pythonはエラーを出して止まってしまいます。空白は必ず半角です。"
    },
    details: "魔法の名前が入った箱（magic_name）の中身を、画面に映し出します。今回は「箱の中身」を見たいので、' ' で囲んではいけません！",
    terms: [
      ["変数の中身を表示", "クォートを付けずに print(変数名) と書くと、箱の中身が表示されます。"]
    ],
    tips: [
      "不可解なエラーが出たら、行の最後に全角スペースがくっついていないか疑いましょう！"
    ]
  },
{
    id: "lv2_add_026",
    level: 1,
    correct: "spell = 'Mega ' + magic",
    normalHint: "文字列 Mega に 変数 magic を繋げて spell に代入",
    hard: {
      buggy: "spell = 'Mega '　+ magic",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "+ の前にあるスペースが全角になっています。",
      explanation: "文字を繋げる + の前後にスペースを入れると見やすくなりますが、それが全角スペースだとエラーになります。必ず半角にしましょう。"
    },
    details: "魔法の名前（magic）の前に、'Mega '（メガ）という言葉をくっつけて強化します。'Mega ' の後ろに半角スペースを仕込んでおくことで、綺麗な名前になります。",
    terms: [
      ["文字列と変数の結合", "文字のデータと、文字が入っている箱（変数）は、+ でくっつけることができます。"]
    ],
    tips: [
      "「MegaHeal」じゃなくて「Mega Heal」にしたい時は、クォートの内側に半角スペースを入れておくのがプロの技です。"
    ]
  },
{
    id: "lv2_add_027",
    level: 1,
    correct: "print('Defeat')",
    normalHint: "画面に文字列 Defeat を表示する",
    hard: {
      buggy: "print(Defeat)",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Defeatは表示したい「文字」なので、' ' で囲みます。",
      explanation: "文字として画面に出したい言葉は、必ずクォートで包みます。裸のままだと、Defeatという名前の箱を探してしまいます。"
    },
    details: "画面に 'Defeat'（敗北）と表示します。見たくないメッセージですが、ゲームには必要不可欠な処理ですね。",
    terms: [
      ["print()とクォート", "「文字そのもの」を出したい時はクォートあり。「変数の中身」を出したい時はクォートなし、です。"]
    ],
    tips: [
      "画面に出したいセリフや文章は、丸ごと ' と ' で包む！これだけ覚えれば大丈夫です。"
    ]
  },
{
    id: "lv2_add_028",
    level: 1,
    correct: "print('Next Stage')",
    normalHint: "画面に文字列 Next Stage を表示する",
    hard: {
      buggy: "print('Next Stage’)",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を閉じるクォートが全角（曲がった形）になっています。",
      explanation: "最初が半角の ' でも、最後が全角の ’ だとペアとして認識されず、閉じ忘れと同じエラーになります。"
    },
    details: "次のステージへ進む時の案内メッセージです。クォートは最初も最後も、必ずまっすぐな半角の ' を使いましょう。",
    terms: [
      ["全角クォートの罠", "日本語の文章を打った直後にクォートを打つと、全角になりやすいので要注意です。"]
    ],
    tips: [
      "文字を囲む記号がおかしいな？と思ったら、半角英数にしてから打ち直すのが一番早いです。"
    ]
  },
{
    id: "lv2_add_029",
    level: 1,
    correct: "title = 'Super ' + job",
    normalHint: "文字列 Super に 変数 job を繋げて title に代入",
    hard: {
      buggy: "title ＝ 'Super ' + job",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = を使います。",
      explanation: "どんなに複雑な結合魔術を使っても、箱に入れるための = は絶対に半角です。全角は透明な落とし穴です。"
    },
    details: "職業（job）の前に 'Super '（スーパー）をくっつけて、上級職の称号（title）を作ります。RPGのクラスチェンジ処理ですね！",
    terms: [
      ["+", "文字を接着する時は、+ の前後に半角スペースを入れるとコードが美しくなります。"]
    ],
    tips: [
      "全角の ＝ は、少し間延びして横長に見えます。見分けられるようになればデバッガーとして一人前です！"
    ]
  },
{
    id: "lv2_add_030",
    level: 1,
    correct: "print('Get Item')",
    normalHint: "画面に文字列 Get Item を表示する",
    hard: {
      buggy: "print('Get Item)",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "Get Itemを囲む最後の ' がありません。",
      explanation: "文字を画面に出す print() の中でクォートを閉じ忘れると、カッコ ) ごと文字だと勘違いされてエラーになります。"
    },
    details: "宝箱を開けた時の 'Get Item'（アイテム獲得）のメッセージです。クォートのペアは、開けたら必ず閉じるのがルールです。",
    terms: [
      ["閉じクォート", "文字列がここで終わりますよ、というPythonへの合図です。"]
    ],
    tips: [
      "カッコ ) を閉じる前に、必ず ' で文字を封印しましょう！"
    ]
  },
{
    id: "lv2_add_031",
    level: 1,
    correct: "print('System Error')",
    normalHint: "画面に文字列 System Error を表示する",
    hard: {
      buggy: "print('System Error)",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "System Errorを囲む最後の ' がありません。",
      explanation: "カッコの中に文字を書くときは、クォートを閉じてからカッコを閉じるのがルールです。順番を間違えたり忘れたりすると、いつまでも文字が終わりません。"
    },
    details: "画面に 'System Error'（システムエラー）と表示します。プログラミング中に一番見たくない言葉ですが、ゲームの演出としてはカッコいいですね！",
    terms: [
      ["閉じクォート", "文字の終わりを示す大事な記号です。"]
    ],
    tips: [
      "print('文字') の形を作るときは、右端の ' と ) がセットになっているか確認しましょう。"
    ]
  },
{
    id: "lv2_add_032",
    level: 1,
    correct: "spell = 'Fire' + 'ball'",
    normalHint: "文字列 Fire と文字列 ball を繋げて spell に代入",
    hard: {
      buggy: "spell ＝ 'Fire' + 'ball'",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = を使います。",
      explanation: "文字同士を繋ぐという複雑な魔法を使っても、代入の矢印（=）は常に半角でなければなりません。"
    },
    details: "文字列の 'Fire' と 'ball' をくっつけて、'Fireball' というひとつの魔法（spell）を作ります。文字と文字を直接足し算する、面白い詠唱です！",
    terms: [
      ["文字列の結合", "文字が入った箱だけでなく、文字そのもの（'文字'）同士も + でくっつけることができます。"]
    ],
    tips: [
      "全角の ＝ は、少し間延びして隙間が広いです。違和感に気づける目を養いましょう。"
    ]
  },
{
    id: "lv2_add_033",
    level: 1,
    correct: "print(player_name)",
    normalHint: "変数 player_name の中身を画面に表示する",
    hard: {
      buggy: "print(player_name)　",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "コードの最後に、見えない全角スペースが隠れています。",
      explanation: "カッコの外側であっても、全角スペースが混ざるとPythonはエラーを出します。空白は必ず半角スペースを使いましょう。"
    },
    details: "プレイヤーの名前が入った箱（player_name）の中身を画面に映し出します。文字そのものではないので、' ' で囲んではいけません。",
    terms: [
      ["変数の中身を表示", "クォートを付けずに変数名だけを書くと、その箱の中に入っているデータが表示されます。"]
    ],
    tips: [
      "エラーが出たときは、行の最後に全角スペースがくっついていないかBackspaceキーで探ってみましょう！"
    ]
  },
{
    id: "lv2_add_034",
    level: 1,
    correct: "greeting = 'Hello'",
    normalHint: "変数 greeting に文字列 Hello を代入",
    hard: {
      buggy: "greeting = ’Hello’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を囲むクォートが全角（曲がった形）になっています。",
      explanation: "日本語入力モードで打つと、全角のクォートになりがちです。プログラムの世界で魔法の額縁として使えるのは、まっすぐな半角の ' だけです。"
    },
    details: "挨拶（greeting）の箱に 'Hello' という文字を入れます。短いコードですが、記号を正確に打つ基礎が試されます。",
    terms: [
      ["半角クォート", "プログラミングで許されている、まっすぐな ' 記号のことです。"]
    ],
    tips: [
      "文字を囲む時は、キーボードが半角英数モードか必ず確認するクセをつけましょう。"
    ]
  },
{
    id: "lv2_add_035",
    level: 1,
    correct: "print('Level 99')",
    normalHint: "画面に文字列 Level 99 を表示する",
    hard: {
      buggy: "print(Level 99)",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "表示したい文字なので、必ず ' ' で囲みます。",
      explanation: "文字の中に数字が入っていても、画面に出したい「文章」であるなら全体を ' ' で囲みます。囲まないとPythonが混乱してしまいます。"
    },
    details: "画面に 'Level 99' と表示します。カンストの証ですね！スペースが入っている言葉も、クォートで包めばまるごとひとつの文字として扱われます。",
    terms: [
      ["文字としての数字", "計算しない数字は、文字と一緒にクォートの中に入れてしまってOKです。"]
    ],
    tips: [
      "画面に出したいセリフや文章は、丸ごと ' と ' で包む！これだけ覚えれば大丈夫です。"
    ]
  },
{
    id: "lv2_add_036",
    level: 1,
    correct: "weapon = 'Holy ' + sword",
    normalHint: "文字列 Holy に 変数 sword を繋げて weapon に代入",
    hard: {
      buggy: "weapon = 'Holy '　+ sword",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "+ の前にあるスペースが全角になっています。",
      explanation: "文字を繋げる + の前後にスペースを入れると見やすくなりますが、それが全角スペースだとエラーになります。必ず半角にしましょう。"
    },
    details: "手持ちの剣（sword）の前に 'Holy '（聖なる）をくっつけて、伝説の武器（weapon）を作ります。内側に半角スペースを仕込んでおくのが綺麗に繋げるコツです。",
    terms: [
      ["文字列の結合", "+ を使うと、左の文字のすぐ後ろに右の文字がピタッとくっつきます。"]
    ],
    tips: [
      "「HolySword」じゃなくて「Holy Sword」にしたい時は、クォートの内側に半角スペースを入れておきましょう。"
    ]
  },
{
    id: "lv2_add_037",
    level: 1,
    correct: "print('Clear Time')",
    normalHint: "画面に文字列 Clear Time を表示する",
    hard: {
      buggy: "print('Clear Time)",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "Clear Timeを囲む最後の ' がありません。",
      explanation: "文字を画面に出す print() の中でクォートを閉じ忘れると、カッコ ) ごと文字だと勘違いされてエラーになります。"
    },
    details: "画面に 'Clear Time'（クリア時間）と表示します。ダンジョンをクリアした後のリザルト画面でよく見る文字ですね。",
    terms: [
      ["閉じカッコ", "print() の魔法を終わらせるための ) のこと。クォートを閉じた後に書きます。"]
    ],
    tips: [
      "カッコ ) を閉じる前に、必ず ' で文字を封印しましょう！"
    ]
  },
{
    id: "lv2_add_038",
    level: 1,
    correct: "boss_msg = 'Fool'",
    normalHint: "変数 boss_msg に文字列 Fool を代入",
    hard: {
      buggy: "boss_msg ＝ 'Fool'",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = を使います。",
      explanation: "どんな言葉を箱に入れる時でも、代入の矢印（=）は絶対に半角です。全角は透明な落とし穴です。"
    },
    details: "ボスのセリフ（boss_msg）の箱に、'Fool'（愚か者め）という文字を入れます。強敵がよく言うセリフですね！",
    terms: [
      ["代入", "右の文字データを、左の箱に格納する矢印の役割です。"]
    ],
    tips: [
      "全角の ＝ を見抜けるようになれば、初心者卒業はもうすぐです。"
    ]
  },
{
    id: "lv2_add_039",
    level: 1,
    correct: "print('Game Clear')",
    normalHint: "画面に文字列 Game Clear を表示する",
    hard: {
      buggy: "print(Game Clear)",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Game Clear は表示したい文字なので、' ' で囲みます。",
      explanation: "文字として画面に出したい言葉は、必ずクォートで包みます。裸のままだと変数だと勘違いされてしまいます。"
    },
    details: "画面に 'Game Clear'（ゲームクリア）と表示します。プレイヤーが一番見たい最高のメッセージですね！",
    terms: [
      ["print()とクォート", "「文字そのもの」を出したい時はクォートあり。「変数の中身」を出したい時はクォートなし、です。"]
    ],
    tips: [
      "画面に出したいセリフや文章は、丸ごと ' と ' で包むのが絶対ルールです。"
    ]
  },
{
    id: "lv2_add_040",
    level: 1,
    correct: "print(gold)",
    normalHint: "変数 gold の中身を画面に表示する",
    hard: {
      buggy: "print(gold)　",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "コードの最後に、見えない全角スペースが隠れています。",
      explanation: "コードの最後に見えない全角スペースがくっついているとエラーになります。空白は必ず半角を使いましょう。"
    },
    details: "所持金が入った箱（gold）の中身を、画面に映し出します。文字ではないので、' ' で囲んではいけません！",
    terms: [
      ["変数の中身を表示", "クォートを付けずに print(変数名) と書くと、その箱の中のデータが表示されます。"]
    ],
    tips: [
      "文字そのものを出すのか、箱の中身を出すのか。クォートの有無がその運命を分けます。"
    ]
  },
{
    id: "lv2_add_041",
    level: 1,
    correct: "spell = 'Sleep'",
    normalHint: "変数 spell に文字列 Sleep を代入",
    hard: {
      buggy: "spell = Sleep",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "Sleep は魔法の名前（文字）なので、必ず ' ' で囲みます。",
      explanation: "文字として扱いたい言葉は、必ず半角のシングルクォートで包みます。包まないと、Pythonが「Sleepという名前の変数はどこ？」と迷子になってしまいます。"
    },
    details: "魔法（spell）の箱に、眠りの魔法 'Sleep' を代入します。クォートを忘れると、魔法が発動する前にエラーで止まってしまいます！",
    terms: [
      ["文字列のルール", "言葉をデータとして扱う時は、専用の記号（クォート）で包むのが世界共通の決まりです。"]
    ],
    tips: [
      "エラーメッセージに「name 'Sleep' is not defined」と出たら、クォート忘れを疑いましょう！"
    ]
  },
{
    id: "lv2_add_042",
    level: 1,
    correct: "message = 'Bye ' + boss",
    normalHint: "文字列 Bye に 変数 boss を繋げて message に代入",
    hard: {
      buggy: "message ＝ 'Bye ' + boss",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = を使いましょう。",
      explanation: "文字同士をくっつける高度な処理をしていても、代入の矢印である = は絶対に半角です。全角記号は魔法陣を壊します。"
    },
    details: "「Bye 」（さよなら）という文字と、ボスの名前が入った箱（boss）をくっつけて、別れの言葉を作ります。これでボス戦も締めくくりです！",
    terms: [
      ["結合魔術（+）", "文字のデータと、文字が入っている箱（変数）は、+ 記号で綺麗にくっつけることができます。"]
    ],
    tips: [
      "「ByeBoss」じゃなくて「Bye Boss」にするために、'Bye ' の内側に半角スペースを入れておくのがプロの小技です。"
    ]
  },
{
    id: "lv2_add_043",
    level: 1,
    correct: "print('Victory')",
    normalHint: "画面に文字列 Victory を表示する",
    hard: {
      buggy: "print('Victory)",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "Victory を囲む最後の ' がありません。",
      explanation: "クォートは必ず最初と最後でペアにします。閉じ忘れると「文字列が永遠に終わらない！」とPythonがパニックを起こします。"
    },
    details: "画面に 'Victory'（勝利）と表示します。ボスを倒した後の気持ちいい瞬間ですね！カッコとクォートの閉じ忘れには気をつけましょう。",
    terms: [
      ["閉じクォート", "文字のデータがここで終わりますよ、という合図です。"]
    ],
    tips: [
      "文字を打ち終わったら、最後に ' をパチッと打って封印するクセをつけましょう。"
    ]
  },
{
    id: "lv2_add_044",
    level: 1,
    correct: "print(next_stage)",
    normalHint: "変数 next_stage の中身を画面に表示する",
    hard: {
      buggy: "print(next_stage)　",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "コードの最後に、見えない全角スペースが隠れています。",
      explanation: "カッコの外側であっても、全角スペースが混ざるとPythonはエラーを出して止まってしまいます。空白は必ず半角スペースを使います。"
    },
    details: "次のステージの名前が入った箱（next_stage）の中身を、画面に映し出します。今回は「箱の中身」を見たいので、' ' で囲んではいけません！",
    terms: [
      ["変数の中身を表示", "クォートを付けずに print(変数名) と書くと、箱そのものではなく中身が表示されます。"]
    ],
    tips: [
      "不可解なエラーが出たら、行の最後に全角スペースがくっついていないか Backspace キーで探ってみましょう。"
    ]
  },
{
    id: "lv2_add_045",
    level: 1,
    correct: "title = 'Brave Hero'",
    normalHint: "変数 title に文字列 Brave Hero を代入",
    hard: {
      buggy: "title = ’Brave Hero’",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を囲むクォートが全角（曲がった形）になっています。",
      explanation: "日本語入力モードのままクォートを打つと、形が少し曲がった全角の ’ になることがあります。必ず半角のまっすぐな ' を使います。"
    },
    details: "称号（title）の箱に、'Brave Hero'（勇敢なる勇者）という文字を入れます。スペースが含まれていても、全体をクォートで包めば一つの文字データになります。",
    terms: [
      ["半角クォート", "プログラミングで許されている、まっすぐな ' 記号のことです。"]
    ],
    tips: [
      "文字を囲む時は、キーボードが半角英数モードになっているか必ず確認しましょう！"
    ]
  },
{
    id: "lv2_add_046",
    level: 1,
    correct: "print('Level Up!')",
    normalHint: "画面に文字列 Level Up! を表示する",
    hard: {
      buggy: "print(Level Up!)",
      bugName: "クォート忘れバグ",
      bugType: "missing_quotes",
      hint: "表示したい文字なので、必ず ' ' で囲みます。",
      explanation: "文字の中にスペースや記号（!など）が入っていても、画面に出したい「文章」なら全体を ' ' で囲みます。囲まないとPythonが混乱してしまいます。"
    },
    details: "画面に 'Level Up!' と表示します。このゲームで何度も見ることになる嬉しい言葉ですね！",
    terms: [
      ["記号を含む文字列", "クォートの中であれば、! や ? などの記号もそのまま文字として表示されます。"]
    ],
    tips: [
      "画面に出したいセリフや文章は、丸ごと ' と ' で包むのが絶対のルールです。"
    ]
  },
{
    id: "lv2_add_047",
    level: 1,
    correct: "magic = 'Dark ' + spell",
    normalHint: "文字列 Dark に 変数 spell を繋げて magic に代入",
    hard: {
      buggy: "magic = 'Dark '　+ spell",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "+ の前にあるスペースが全角になっています。",
      explanation: "文字を繋げる + の前後にスペースを入れるとコードが読みやすくなりますが、それが全角スペースだとエラーになります。必ず半角にしましょう。"
    },
    details: "魔法の名前（spell）の前に、'Dark '（闇の）をくっつけて、強力な闇魔法（magic）を作ります。禁断の結合魔術ですね！",
    terms: [
      ["コードを整える空白", "+ の前後のスペースは、プログラムの動作には影響しませんが、人間が読みやすくするための大切な気遣いです。"]
    ],
    tips: [
      "スペースを打つときは、常に半角英数モードか確認するクセをつけましょう。"
    ]
  },
{
    id: "lv2_add_048",
    level: 1,
    correct: "print('Escape Failed')",
    normalHint: "画面に文字列 Escape Failed を表示する",
    hard: {
      buggy: "print('Escape Failed)",
      bugName: "クォート閉じ忘れバグ",
      bugType: "unclosed_quotes",
      hint: "Escape Failedを囲む最後の ' がありません。",
      explanation: "文字を画面に出す print() の中でクォートを閉じ忘れると、カッコ ) ごと文字だと勘違いされてエラーになります。"
    },
    details: "画面に 'Escape Failed'（逃走失敗）と表示します。ピンチの瞬間に流れる絶望のメッセージも、クォートでしっかり囲みましょう。",
    terms: [
      ["閉じカッコ", "print() の魔法を終わらせるための ) のこと。クォートを閉じた後に書きます。"]
    ],
    tips: [
      "カッコ ) を閉じる前に、必ず ' で文字を封印しましょう！"
    ]
  },
{
    id: "lv2_add_049",
    level: 1,
    correct: "print(enemy_name)",
    normalHint: "変数 enemy_name の中身を画面に表示する",
    hard: {
      buggy: "print(enemy_name)　",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "コードの最後に、見えない全角スペースが隠れています。",
      explanation: "コードの最後に見えない全角スペースがくっついていると、思わぬエラーを引き起こします。空白は必ず半角を使いましょう。"
    },
    details: "敵の名前が入った箱（enemy_name）の中身を画面に出します。文字そのものではないので、' ' で囲んではいけません！",
    terms: [
      ["変数の中身を表示", "クォートを付けずに print(変数名) と書くと、その箱の中のデータが表示されます。"]
    ],
    tips: [
      "文字そのものを出すのか、箱の中身を出すのか。クォートの有無がその運命を分けます。"
    ]
  },
{
    id: "lv2_add_050",
    level: 1,
    correct: "print('Thank You')",
    normalHint: "画面に文字列 Thank You を表示する",
    hard: {
      buggy: "print('Thank You’)",
      bugName: "全角クォートバグ",
      bugType: "wrong_quotes",
      hint: "文字列を閉じるクォートが全角（曲がった形）になっています。",
      explanation: "最初が半角の ' でも、最後が全角の ’ だとペアとして認識されず、閉じ忘れと同じエラーになります。"
    },
    details: "画面に 'Thank You' と表示します。これで Lv.2 の修行はすべて完了です！遊んでくれてありがとう！",
    terms: [
      ["全角クォートの罠", "日本語の文章を打った直後にクォートを打つと、全角になりやすいので要注意です。"]
    ],
    tips: [
      "文字を囲む記号がおかしいな？と思ったら、半角英数にしてから打ち直すのが一番早いです。"
    ]
  },

{
    id: "lv3_add_001",
    level: 2,
    correct: "damage = 50 + 20",
    normalHint: "50 と 20 を足して damage に代入",
    hard: {
      buggy: "damage = '50 + 20'",
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "計算式全体が ' ' で囲まれて文字になっています。' ' を外しましょう。",
      explanation: "計算式をクォートで囲むと、計算されずに「50 + 20」というただの文字のまま箱に入ってしまいます。計算させたい時は裸で書きます。"
    },
    details: "50と20を足し算して、その結果（70）をダメージ（damage）の箱に入れます。プログラミングの + は、数字なら計算、文字なら結合になります。",
    terms: [
      ["+", "数値同士なら「足し算」、文字列同士なら「文字の接着剤」になる魔法の記号です。"]
    ],
    tips: [
      "「計算式にはクォートを着せない！」がゴーレム戦の鉄則です。"
    ]
  },
  {
    id: "lv3_add_002",
    level: 2,
    correct: "hp = 100 - 15",
    normalHint: "100 から 15 を引いて hp に代入",
    hard: {
      buggy: "hp ＝ 100 - 15",
      bugName: "全角イコールバグ",
      bugType: "zenkaku_equal",
      hint: "代入の ＝ が全角になっています。半角の = に直しましょう。",
      explanation: "計算式を正しく書いても、箱に入れるための = が全角だとエラーで止まってしまいます。記号は必ず半角です。"
    },
    details: "100から15を引き算して、現在のHPを更新します。RPGのダメージ処理の裏側では、毎回この引き算が高速で行われています。",
    terms: [
      ["-", "左の数字から右の数字を引く、引き算の記号（マイナス）です。"]
    ],
    tips: [
      "全角の ＝ は少し横幅が広いです。計算式に夢中になって = の形を見落とさないように注意です！"
    ]
  },
  {
    id: "lv3_add_003",
    level: 2,
    correct: "gold = 50 * 3",
    normalHint: "50 と 3 を掛けて gold に代入",
    hard: {
      buggy: "gold = 50 × 3",
      bugName: "掛け算記号バグ",
      bugType: "wrong_multiply_symbol",
      hint: "算数の × ではなく、Pythonの掛け算記号 * を使います。",
      explanation: "Pythonは算数の ×（ばつ）を知りません。プログラミングの世界では、星のマーク（アスタリスク）を掛け算に使います。"
    },
    details: "50ゴールドを3回手に入れて、150を箱に入れます。掛け算の魔法は × ではなく *（星マーク）を使います。",
    terms: [
      ["*", "掛け算をするための記号（アスタリスク）です。キーボードでは Shift + : などで打てます。"]
    ],
    tips: [
      "「掛け算は夜空から星を降らせる！」と覚えましょう。"
    ]
  },
  {
    id: "lv3_add_004",
    level: 2,
    correct: "half_hp = 100 / 2",
    normalHint: "100 を 2 で割って half_hp に代入",
    hard: {
      buggy: "half_hp = 100 ÷ 2",
      bugName: "割り算記号バグ",
      bugType: "wrong_divide_symbol",
      hint: "算数の ÷ ではなく、Pythonの割り算記号 / を使います。",
      explanation: "Pythonは算数の ÷（わる）を命令として受け付けてくれません。割り算をしたい時は、斜め線の /（スラッシュ）を使います。"
    },
    details: "ボスの強力な割合攻撃！HPを半分（100 / 2）にする計算です。割り算の魔法は ÷ ではなく / を使います。",
    terms: [
      ["/", "割り算をするための記号（スラッシュ）です。分数の線を斜めにしたイメージです。"]
    ],
    tips: [
      "「割るならスラッシュで斜めに斬る！」が割り算の合言葉です。"
    ]
  },
  {
    id: "lv3_add_005",
    level: 2,
    correct: "total_exp = 10 + 5",
    normalHint: "10 と 5 を足して total_exp に代入",
    hard: {
      buggy: "total_exp = 10 + 5",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "= の前にあるスペースが全角になっています。",
      explanation: "計算が合っていても、見えない全角スペースが混ざっていると計算前に魔法陣が壊れます。空白は必ず半角です。"
    },
    details: "10と5を足して、合計の経験値（total_exp）を計算します。見やすくするために記号の前後に入れるスペースは、必ず半角を使います。",
    terms: [
      ["演算子", "+、-、*、/ のような、計算をするための記号のことです。"]
    ],
    tips: [
      "演算子の前後に半角スペースを入れると、コードがとても見やすくなります。"
    ]
  },
  {
    id: "lv3_add_006",
    level: 2,
    correct: "mp = 30 - 5",
    normalHint: "30 から 5 を引いて mp に代入",
    hard: {
      buggy: "mp = 30 - '5'",
      bugName: "数字を文字にしちゃったバグ",
      bugType: "number_as_string",
      hint: "計算する数字なので 5 の ' ' は外します。",
      explanation: "数値の 30 から、文字の '5' を引き算することはできません。数字はすべて裸のままクォートなしで書きましょう。"
    },
    details: "魔法を使って、MPを30から5減らす処理です。計算式の中にクォートで包まれた文字が混ざると、Pythonがパニックを起こします。",
    terms: [
      ["計算エラー", "数値と文字を混ぜて計算しようとすると起きるエラーです。"]
    ],
    tips: [
      "計算式の中に文字が混ざっていないか、打つ前にしっかり確認しましょう！"
    ]
  },
  {
    id: "lv3_add_007",
    level: 2,
    correct: "attack = 10 * 2",
    normalHint: "10 と 2 を掛けて attack に代入",
    hard: {
      buggy: "attack = 10 × 2",
      bugName: "掛け算記号バグ",
      bugType: "wrong_multiply_symbol",
      hint: "× ではなく *（星マーク）を使います。",
      explanation: "算数のノートでは大正解ですが、プログラミングでは不正解になってしまいます。掛け算は必ず半角の * です。"
    },
    details: "攻撃力（attack）を2倍にする、バフ（強化）魔法の計算です！ × を打つクセをここでしっかり直しておきましょう。",
    terms: [
      ["アスタリスク（*）", "プログラミングの世界で、掛け算を担当する星型の記号です。"]
    ],
    tips: [
      "キーボードで * の場所を指に覚えさせましょう。右側の方にあることが多いです！"
    ]
  },
  {
    id: "lv3_add_008",
    level: 2,
    correct: "drop_rate = 100 / 4",
    normalHint: "100 を 4 で割って drop_rate に代入",
    hard: {
      buggy: "drop_rate = 100 ÷ 4",
      bugName: "割り算記号バグ",
      bugType: "wrong_divide_symbol",
      hint: "÷ ではなく /（スラッシュ）を使います。",
      explanation: "÷ も算数の時間以外ではあまり出番がありません。プログラミングの割り算は半角の / と決まっています。"
    },
    details: "アイテムのドロップ率（drop_rate）を計算しています。100を4で割るので、確率は25%ですね！",
    terms: [
      ["スラッシュ（/）", "プログラミングの世界で、割り算を担当する斜めの記号です。"]
    ],
    tips: [
      "日本語入力のまま「わる」と打って ÷ に変換するのではなく、キーボードの / を直接押しましょう。"
    ]
  },
  {
    id: "lv3_add_009",
    level: 2,
    correct: "cost = 20 + 30",
    normalHint: "20 と 30 を足して cost に代入",
    hard: {
      buggy: "cost = 20 +　30",
      bugName: "全角スペースバグ",
      bugType: "zenkaku_space",
      hint: "+ の後ろにあるスペースが全角になっています。",
      explanation: "計算を綺麗に見せるためのスペースが全角だと、それが原因でエラーになります。空白は必ず細い半角スペースです。"
    },
    details: "アイテムを買う時の合計費用（cost）を計算します。式を打つ時は、常に半角英数モードにしておくのが一番安全です。",
    terms: [
      ["見えないトラップ", "全角スペースは、コード上にエラーの波線が出にくいので気づきにくい厄介なバグです。"]
    ],
    tips: [
      "スペースキーを押すときの指の感覚で「あ、今のは全角かも」と気づけるようになればプロ級です！"
    ]
  },
  {
    id: "lv3_add_010",
    level: 2,
    correct: "score = 500 * 2",
    normalHint: "500 と 2 を掛けて score に代入",
    hard: {
      buggy: "score = 500 × 2",
      bugName: "掛け算記号バグ",
      bugType: "wrong_multiply_symbol",
      hint: "掛け算は × ではなく *（星マーク）を使います。",
      explanation: "プログラミングの算数に慣れるための修行です。× は使わず、アスタリスク（*）で掛け算をしましょう。"
    },
    details: "コンボが決まって、スコア（score）が2倍になる激アツな計算処理です！算数の常識をプログラミングの常識に上書きしましょう。",
    terms: [
      ["計算の優先順位", "プログラミングでも、足し算より掛け算・割り算が先に計算されるという算数のルールは同じです。"]
    ],
    tips: [
      "初心者が必ず一度は引っかかる × の罠。ゴーレムを倒して完璧に覚えましょう！"
    ]
  },
  {
    "id": "lv3_add_011",
    "level": 2,
    "correct": "mp = 50 - 10",
    "normalHint": "50 から 10 を引いて mp に代入",
    "hard": {
      "buggy": "mp = 50 - '10'",
      "bugName": "数字を文字にしちゃったバグ",
      "bugType": "number_as_string",
      "hint": "計算や数値比較に使う数字なので、余計な ' ' を外します。",
      "explanation": "数字や計算式をクォートで囲むと文字列になり、計算や大小比較の対象として扱いにくくなります。数値として使う時はクォートなしで書きましょう。"
    },
    "details": "この問題では `mp = 50 - 10` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "数値と文字列",
        "見た目が似ていても、数値と文字列はPythonでは別の種類のデータです。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_012",
    "level": 2,
    "correct": "damage = 30 * 3",
    "normalHint": "30 と 3 を掛けて damage に代入",
    "hard": {
      "buggy": "damage = 30 × 3",
      "bugName": "掛け算記号バグ",
      "bugType": "wrong_multiply_symbol",
      "hint": "掛け算は × ではなく *（星マーク）を使います。",
      "explanation": "算数の × はPythonの掛け算記号ではありません。掛け算したい時は半角の * を使います。"
    },
    "details": "この問題では `damage = 30 * 3` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "アスタリスク（*）",
        "Pythonで掛け算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_013",
    "level": 2,
    "correct": "time_left = 60 / 2",
    "normalHint": "60 を 2 で割って time_left に代入",
    "hard": {
      "buggy": "time_left = 60 ÷ 2",
      "bugName": "割り算記号バグ",
      "bugType": "wrong_divide_symbol",
      "hint": "割り算は ÷ ではなく /（スラッシュ）を使います。",
      "explanation": "算数の ÷ はPythonの割り算記号ではありません。割り算したい時は半角の / を使います。"
    },
    "details": "この問題では `time_left = 60 / 2` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "スラッシュ（/）",
        "Pythonで割り算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_014",
    "level": 2,
    "correct": "score = 100 + 50",
    "normalHint": "100 と 50 を足して score に代入",
    "hard": {
      "buggy": "score = 100 +　50",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `score = 100 + 50` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_015",
    "level": 2,
    "correct": "coins = 10 * 5",
    "normalHint": "10 と 5 を掛けて coins に代入",
    "hard": {
      "buggy": "coins ＝ 10 * 5",
      "bugName": "全角イコールバグ",
      "bugType": "zenkaku_equal",
      "hint": "代入の ＝ が全角になっています。半角の = を使いましょう。",
      "explanation": "全角の ＝ はPythonの代入記号として使えません。プログラミングの記号は基本的に半角で入力します。"
    },
    "details": "この問題では `coins = 10 * 5` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "半角記号",
        "Pythonのコードで使う = や + などの記号は、基本的に半角で入力します。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_016",
    "level": 2,
    "correct": "exp = 500 / 5",
    "normalHint": "500 を 5 で割って exp に代入",
    "hard": {
      "buggy": "exp = 500 ÷ 5",
      "bugName": "割り算記号バグ",
      "bugType": "wrong_divide_symbol",
      "hint": "割り算は ÷ ではなく /（スラッシュ）を使います。",
      "explanation": "算数の ÷ はPythonの割り算記号ではありません。割り算したい時は半角の / を使います。"
    },
    "details": "この問題では `exp = 500 / 5` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "スラッシュ（/）",
        "Pythonで割り算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_017",
    "level": 2,
    "correct": "defense = 40 - 15",
    "normalHint": "40 から 15 を引いて defense に代入",
    "hard": {
      "buggy": "defense = '40 - 15'",
      "bugName": "数字を文字にしちゃったバグ",
      "bugType": "number_as_string",
      "hint": "計算や数値比較に使う数字なので、余計な ' ' を外します。",
      "explanation": "数字や計算式をクォートで囲むと文字列になり、計算や大小比較の対象として扱いにくくなります。数値として使う時はクォートなしで書きましょう。"
    },
    "details": "この問題では `defense = 40 - 15` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "数値と文字列",
        "見た目が似ていても、数値と文字列はPythonでは別の種類のデータです。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_018",
    "level": 2,
    "correct": "power = 20 * 4",
    "normalHint": "20 と 4 を掛けて power に代入",
    "hard": {
      "buggy": "power = 20 × 4",
      "bugName": "掛け算記号バグ",
      "bugType": "wrong_multiply_symbol",
      "hint": "掛け算は × ではなく *（星マーク）を使います。",
      "explanation": "算数の × はPythonの掛け算記号ではありません。掛け算したい時は半角の * を使います。"
    },
    "details": "この問題では `power = 20 * 4` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "アスタリスク（*）",
        "Pythonで掛け算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_019",
    "level": 2,
    "correct": "bonus = 100 + 200",
    "normalHint": "100 と 200 を足して bonus に代入",
    "hard": {
      "buggy": "bonus　= 100 + 200",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `bonus = 100 + 200` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_020",
    "level": 2,
    "correct": "rate = 100 / 10",
    "normalHint": "100 を 10 で割って rate に代入",
    "hard": {
      "buggy": "rate = 100 ÷ 10",
      "bugName": "割り算記号バグ",
      "bugType": "wrong_divide_symbol",
      "hint": "割り算は ÷ ではなく /（スラッシュ）を使います。",
      "explanation": "算数の ÷ はPythonの割り算記号ではありません。割り算したい時は半角の / を使います。"
    },
    "details": "この問題では `rate = 100 / 10` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "スラッシュ（/）",
        "Pythonで割り算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_021",
    "level": 2,
    "correct": "attack = power + weapon",
    "normalHint": "変数 power と weapon を足して attack に代入",
    "hard": {
      "buggy": "attack = power +　weapon",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `attack = power + weapon` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_022",
    "level": 2,
    "correct": "total = price * count",
    "normalHint": "変数 price と count を掛けて total に代入",
    "hard": {
      "buggy": "total = price × count",
      "bugName": "掛け算記号バグ",
      "bugType": "wrong_multiply_symbol",
      "hint": "掛け算は × ではなく *（星マーク）を使います。",
      "explanation": "算数の × はPythonの掛け算記号ではありません。掛け算したい時は半角の * を使います。"
    },
    "details": "この問題では `total = price * count` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "アスタリスク（*）",
        "Pythonで掛け算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_023",
    "level": 2,
    "correct": "left = hp - damage",
    "normalHint": "変数 hp から damage を引いて left に代入",
    "hard": {
      "buggy": "left ＝ hp - damage",
      "bugName": "全角イコールバグ",
      "bugType": "zenkaku_equal",
      "hint": "代入の ＝ が全角になっています。半角の = を使いましょう。",
      "explanation": "全角の ＝ はPythonの代入記号として使えません。プログラミングの記号は基本的に半角で入力します。"
    },
    "details": "この問題では `left = hp - damage` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "半角記号",
        "Pythonのコードで使う = や + などの記号は、基本的に半角で入力します。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_024",
    "level": 2,
    "correct": "average = total / count",
    "normalHint": "変数 total を count で割って average に代入",
    "hard": {
      "buggy": "average = total ÷ count",
      "bugName": "割り算記号バグ",
      "bugType": "wrong_divide_symbol",
      "hint": "割り算は ÷ ではなく /（スラッシュ）を使います。",
      "explanation": "算数の ÷ はPythonの割り算記号ではありません。割り算したい時は半角の / を使います。"
    },
    "details": "この問題では `average = total / count` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "スラッシュ（/）",
        "Pythonで割り算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_025",
    "level": 2,
    "correct": "real_dmg = attack - defense",
    "normalHint": "変数 attack から defense を引いて real_dmg に代入",
    "hard": {
      "buggy": "real_dmg == attack - defense",
      "bugName": "イコール多すぎ/足りないバグ",
      "bugType": "assignment_vs_comparison",
      "hint": "代入なら =、比較なら == を使います。役割に合わせて数を直しましょう。",
      "explanation": "= は右の値を左の変数へ入れる代入、== は右と左が等しいかを比べる比較です。"
    },
    "details": "この問題では `real_dmg = attack - defense` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "= と ==",
        "= は代入、== は比較です。似ていますが役割が違います。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_026",
    "level": 2,
    "correct": "max_mp = mp + bonus",
    "normalHint": "変数 mp と bonus を足して max_mp に代入",
    "hard": {
      "buggy": "max_mp　= mp + bonus",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `max_mp = mp + bonus` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_027",
    "level": 2,
    "correct": "exp = base * rate",
    "normalHint": "変数 base と rate を掛けて exp に代入",
    "hard": {
      "buggy": "exp = base × rate",
      "bugName": "掛け算記号バグ",
      "bugType": "wrong_multiply_symbol",
      "hint": "掛け算は × ではなく *（星マーク）を使います。",
      "explanation": "算数の × はPythonの掛け算記号ではありません。掛け算したい時は半角の * を使います。"
    },
    "details": "この問題では `exp = base * rate` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "アスタリスク（*）",
        "Pythonで掛け算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_028",
    "level": 2,
    "correct": "speed = base_spd + boost",
    "normalHint": "変数 base_spd と boost を足して speed に代入",
    "hard": {
      "buggy": "speed ＝ base_spd + boost",
      "bugName": "全角イコールバグ",
      "bugType": "zenkaku_equal",
      "hint": "代入の ＝ が全角になっています。半角の = を使いましょう。",
      "explanation": "全角の ＝ はPythonの代入記号として使えません。プログラミングの記号は基本的に半角で入力します。"
    },
    "details": "この問題では `speed = base_spd + boost` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "半角記号",
        "Pythonのコードで使う = や + などの記号は、基本的に半角で入力します。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_029",
    "level": 2,
    "correct": "total_cost = sword + shield",
    "normalHint": "変数 sword と shield を足して total_cost に代入",
    "hard": {
      "buggy": "total_cost = sword +　shield",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `total_cost = sword + shield` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_030",
    "level": 2,
    "correct": "ratio = hit / total",
    "normalHint": "変数 hit を total で割って ratio に代入",
    "hard": {
      "buggy": "ratio = hit ÷ total",
      "bugName": "割り算記号バグ",
      "bugType": "wrong_divide_symbol",
      "hint": "割り算は ÷ ではなく /（スラッシュ）を使います。",
      "explanation": "算数の ÷ はPythonの割り算記号ではありません。割り算したい時は半角の / を使います。"
    },
    "details": "この問題では `ratio = hit / total` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "スラッシュ（/）",
        "Pythonで割り算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_031",
    "level": 2,
    "correct": "print(50 * 2)",
    "normalHint": "50 と 2 を掛けた結果を画面に表示する",
    "hard": {
      "buggy": "print('50 * 2')",
      "bugName": "数字を文字にしちゃったバグ",
      "bugType": "number_as_string",
      "hint": "計算や数値比較に使う数字なので、余計な ' ' を外します。",
      "explanation": "数字や計算式をクォートで囲むと文字列になり、計算や大小比較の対象として扱いにくくなります。数値として使う時はクォートなしで書きましょう。"
    },
    "details": "この問題では `print(50 * 2)` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "数値と文字列",
        "見た目が似ていても、数値と文字列はPythonでは別の種類のデータです。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_032",
    "level": 2,
    "correct": "damage = (10 + 5) * 2",
    "normalHint": "10 と 5 を足してから 2 を掛けて damage に代入",
    "hard": {
      "buggy": "damage = (10 + 5) × 2",
      "bugName": "掛け算記号バグ",
      "bugType": "wrong_multiply_symbol",
      "hint": "掛け算は × ではなく *（星マーク）を使います。",
      "explanation": "算数の × はPythonの掛け算記号ではありません。掛け算したい時は半角の * を使います。"
    },
    "details": "この問題では `damage = (10 + 5) * 2` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "アスタリスク（*）",
        "Pythonで掛け算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_033",
    "level": 2,
    "correct": "total_price = 100 * 3",
    "normalHint": "100 と 3 を掛けて total_price に代入",
    "hard": {
      "buggy": "total_price ＝ 100 * 3",
      "bugName": "全角イコールバグ",
      "bugType": "zenkaku_equal",
      "hint": "代入の ＝ が全角になっています。半角の = を使いましょう。",
      "explanation": "全角の ＝ はPythonの代入記号として使えません。プログラミングの記号は基本的に半角で入力します。"
    },
    "details": "この問題では `total_price = 100 * 3` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "半角記号",
        "Pythonのコードで使う = や + などの記号は、基本的に半角で入力します。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_034",
    "level": 2,
    "correct": "print(hp - damage)",
    "normalHint": "変数 hp から damage を引いた結果を表示",
    "hard": {
      "buggy": "print(hp - damage)　",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `print(hp - damage)` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_035",
    "level": 2,
    "correct": "average_exp = (50 + 100) / 2",
    "normalHint": "50 と 100 を足して 2 で割り、average_exp に代入",
    "hard": {
      "buggy": "average_exp = (50 + 100) ÷ 2",
      "bugName": "割り算記号バグ",
      "bugType": "wrong_divide_symbol",
      "hint": "割り算は ÷ ではなく /（スラッシュ）を使います。",
      "explanation": "算数の ÷ はPythonの割り算記号ではありません。割り算したい時は半角の / を使います。"
    },
    "details": "この問題では `average_exp = (50 + 100) / 2` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "スラッシュ（/）",
        "Pythonで割り算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_036",
    "level": 2,
    "correct": "next_level = current + 1",
    "normalHint": "変数 current に 1 を足して next_level に代入",
    "hard": {
      "buggy": "next_level == current + 1",
      "bugName": "イコール多すぎ/足りないバグ",
      "bugType": "assignment_vs_comparison",
      "hint": "代入なら =、比較なら == を使います。役割に合わせて数を直しましょう。",
      "explanation": "= は右の値を左の変数へ入れる代入、== は右と左が等しいかを比べる比較です。"
    },
    "details": "この問題では `next_level = current + 1` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "= と ==",
        "= は代入、== は比較です。似ていますが役割が違います。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_037",
    "level": 2,
    "correct": "print(100 / 4)",
    "normalHint": "100 を 4 で割った結果を表示する",
    "hard": {
      "buggy": "print(100 ÷ 4)",
      "bugName": "割り算記号バグ",
      "bugType": "wrong_divide_symbol",
      "hint": "割り算は ÷ ではなく /（スラッシュ）を使います。",
      "explanation": "算数の ÷ はPythonの割り算記号ではありません。割り算したい時は半角の / を使います。"
    },
    "details": "この問題では `print(100 / 4)` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "スラッシュ（/）",
        "Pythonで割り算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_038",
    "level": 2,
    "correct": "real_power = (power + 10) * 2",
    "normalHint": "変数 power に 10 を足してから 2 を掛け、real_power に代入",
    "hard": {
      "buggy": "real_power = (power + 10) *　2",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `real_power = (power + 10) * 2` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_039",
    "level": 2,
    "correct": "clear_time = total_time / 60",
    "normalHint": "変数 total_time を 60 で割って clear_time に代入",
    "hard": {
      "buggy": "clear_time ＝ total_time / 60",
      "bugName": "全角イコールバグ",
      "bugType": "zenkaku_equal",
      "hint": "代入の ＝ が全角になっています。半角の = を使いましょう。",
      "explanation": "全角の ＝ はPythonの代入記号として使えません。プログラミングの記号は基本的に半角で入力します。"
    },
    "details": "この問題では `clear_time = total_time / 60` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "半角記号",
        "Pythonのコードで使う = や + などの記号は、基本的に半角で入力します。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_040",
    "level": 2,
    "correct": "print((10 + 5) * 2)",
    "normalHint": "10 と 5 を足してから 2 を掛けた結果を表示",
    "hard": {
      "buggy": "print((10 + 5) × 2)",
      "bugName": "掛け算記号バグ",
      "bugType": "wrong_multiply_symbol",
      "hint": "掛け算は × ではなく *（星マーク）を使います。",
      "explanation": "算数の × はPythonの掛け算記号ではありません。掛け算したい時は半角の * を使います。"
    },
    "details": "この問題では `print((10 + 5) * 2)` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "アスタリスク（*）",
        "Pythonで掛け算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_041",
    "level": 2,
    "correct": "final_score = score + 1000",
    "normalHint": "変数 score に 1000 を足して final_score に代入",
    "hard": {
      "buggy": "final_score ＝ score + 1000",
      "bugName": "全角イコールバグ",
      "bugType": "zenkaku_equal",
      "hint": "代入の ＝ が全角になっています。半角の = を使いましょう。",
      "explanation": "全角の ＝ はPythonの代入記号として使えません。プログラミングの記号は基本的に半角で入力します。"
    },
    "details": "この問題では `final_score = score + 1000` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "半角記号",
        "Pythonのコードで使う = や + などの記号は、基本的に半角で入力します。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_042",
    "level": 2,
    "correct": "print(500 - 100)",
    "normalHint": "500 から 100 を引いた結果を画面に表示する",
    "hard": {
      "buggy": "print('500 - 100')",
      "bugName": "数字を文字にしちゃったバグ",
      "bugType": "number_as_string",
      "hint": "計算や数値比較に使う数字なので、余計な ' ' を外します。",
      "explanation": "数字や計算式をクォートで囲むと文字列になり、計算や大小比較の対象として扱いにくくなります。数値として使う時はクォートなしで書きましょう。"
    },
    "details": "この問題では `print(500 - 100)` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "数値と文字列",
        "見た目が似ていても、数値と文字列はPythonでは別の種類のデータです。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_043",
    "level": 2,
    "correct": "damage = power * 4",
    "normalHint": "変数 power と 4 を掛けて damage に代入",
    "hard": {
      "buggy": "damage = power × 4",
      "bugName": "掛け算記号バグ",
      "bugType": "wrong_multiply_symbol",
      "hint": "掛け算は × ではなく *（星マーク）を使います。",
      "explanation": "算数の × はPythonの掛け算記号ではありません。掛け算したい時は半角の * を使います。"
    },
    "details": "この問題では `damage = power * 4` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "アスタリスク（*）",
        "Pythonで掛け算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_044",
    "level": 2,
    "correct": "average = total / 3",
    "normalHint": "変数 total を 3 で割って average に代入",
    "hard": {
      "buggy": "average = total ÷ 3",
      "bugName": "割り算記号バグ",
      "bugType": "wrong_divide_symbol",
      "hint": "割り算は ÷ ではなく /（スラッシュ）を使います。",
      "explanation": "算数の ÷ はPythonの割り算記号ではありません。割り算したい時は半角の / を使います。"
    },
    "details": "この問題では `average = total / 3` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "スラッシュ（/）",
        "Pythonで割り算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_045",
    "level": 2,
    "correct": "hp = hp - damage",
    "normalHint": "現在の hp から damage を引いて、再び hp に代入",
    "hard": {
      "buggy": "hp == hp - damage",
      "bugName": "イコール多すぎ/足りないバグ",
      "bugType": "assignment_vs_comparison",
      "hint": "代入なら =、比較なら == を使います。役割に合わせて数を直しましょう。",
      "explanation": "= は右の値を左の変数へ入れる代入、== は右と左が等しいかを比べる比較です。"
    },
    "details": "この問題では `hp = hp - damage` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "= と ==",
        "= は代入、== は比較です。似ていますが役割が違います。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_046",
    "level": 2,
    "correct": "print((10 + 20) * 3)",
    "normalHint": "10 と 20 を足してから 3 を掛けた結果を表示",
    "hard": {
      "buggy": "print((10 + 20) × 3)",
      "bugName": "掛け算記号バグ",
      "bugType": "wrong_multiply_symbol",
      "hint": "掛け算は × ではなく *（星マーク）を使います。",
      "explanation": "算数の × はPythonの掛け算記号ではありません。掛け算したい時は半角の * を使います。"
    },
    "details": "この問題では `print((10 + 20) * 3)` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "アスタリスク（*）",
        "Pythonで掛け算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_047",
    "level": 2,
    "correct": "total_cost = item * count",
    "normalHint": "変数 item と count を掛けて total_cost に代入",
    "hard": {
      "buggy": "total_cost = item *　count",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `total_cost = item * count` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_048",
    "level": 2,
    "correct": "bonus = 1000 / 2",
    "normalHint": "1000 を 2 で割って bonus に代入",
    "hard": {
      "buggy": "bonus = 1000 ÷ 2",
      "bugName": "割り算記号バグ",
      "bugType": "wrong_divide_symbol",
      "hint": "割り算は ÷ ではなく /（スラッシュ）を使います。",
      "explanation": "算数の ÷ はPythonの割り算記号ではありません。割り算したい時は半角の / を使います。"
    },
    "details": "この問題では `bonus = 1000 / 2` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "スラッシュ（/）",
        "Pythonで割り算を表す半角記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_049",
    "level": 2,
    "correct": "print(max_hp - 15)",
    "normalHint": "変数 max_hp から 15 を引いた結果を表示",
    "hard": {
      "buggy": "print(max_hp - 15)　",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `print(max_hp - 15)` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv3_add_050",
    "level": 2,
    "correct": "total_damage = (power + 5) * 10",
    "normalHint": "変数 power に 5 を足してから 10 を掛け、total_damage に代入",
    "hard": {
      "buggy": "total_damage = '(power + 5) * 10'",
      "bugName": "数字を文字にしちゃったバグ",
      "bugType": "number_as_string",
      "hint": "計算や数値比較に使う数字なので、余計な ' ' を外します。",
      "explanation": "数字や計算式をクォートで囲むと文字列になり、計算や大小比較の対象として扱いにくくなります。数値として使う時はクォートなしで書きましょう。"
    },
    "details": "この問題では `total_damage = (power + 5) * 10` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "数値と文字列",
        "見た目が似ていても、数値と文字列はPythonでは別の種類のデータです。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_001",
    "level": 3,
    "correct": "if hp == 0:",
    "normalHint": "もし hp が 0 と等しければ",
    "hard": {
      "buggy": "if hp == 0",
      "bugName": "コロン忘れバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if hp == 0:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_002",
    "level": 3,
    "correct": "if enemy == 'Dragon':",
    "normalHint": "もし enemy が Dragon と等しければ",
    "hard": {
      "buggy": "if enemy = 'Dragon':",
      "bugName": "イコール多すぎ/足りないバグ",
      "bugType": "assignment_vs_comparison",
      "hint": "代入なら =、比較なら == を使います。役割に合わせて数を直しましょう。",
      "explanation": "= は右の値を左の変数へ入れる代入、== は右と左が等しいかを比べる比較です。"
    },
    "details": "この問題では `if enemy == 'Dragon':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "= と ==",
        "= は代入、== は比較です。似ていますが役割が違います。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_003",
    "level": 3,
    "correct": "if level >= 10:",
    "normalHint": "もし level が 10 以上なら",
    "hard": {
      "buggy": "if level => 10:",
      "bugName": "不等号の順番バグ",
      "bugType": "wrong_greater_equal",
      "hint": "以上は >=、以下は <= です。記号の順番を確認しましょう。",
      "explanation": ">= や <= は、> または < を先に書き、= を後に書きます。=> や =< はPythonでは正しい比較記号ではありません。"
    },
    "details": "この問題では `if level >= 10:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "比較演算子",
        "値の大きさや等しさを比べるための記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_004",
    "level": 3,
    "correct": "if mp == 5:",
    "normalHint": "もし mp が 5 と等しければ",
    "hard": {
      "buggy": "if mp == 5：",
      "bugName": "全角コロンバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if mp == 5:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_005",
    "level": 3,
    "correct": "if magic == 'Fire':",
    "normalHint": "もし magic が Fire と等しければ",
    "hard": {
      "buggy": "if magic == Fire:",
      "bugName": "クォート忘れバグ",
      "bugType": "missing_quotes",
      "hint": "文字列として比べる言葉は、半角の ' ' で囲みます。",
      "explanation": "文字列をクォートで囲まないと、Pythonは変数名として探しに行ってしまいます。"
    },
    "details": "この問題では `if magic == 'Fire':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "文字列",
        "文字や言葉のデータです。Pythonでは 'Hero' のようにクォートで囲みます。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_006",
    "level": 3,
    "correct": "if is_boss == True:",
    "normalHint": "もし is_boss が True（ON）なら",
    "hard": {
      "buggy": "if is_boss == true:",
      "bugName": "true小文字バグ",
      "bugType": "true_lowercase",
      "hint": "Pythonの True は、最初の T を大文字にします。",
      "explanation": "Pythonは大文字小文字を区別します。真偽値は True / False のように先頭を大文字で書きます。"
    },
    "details": "この問題では `if is_boss == True:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "True",
        "真、ON、成立しているという意味のPythonの値です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_007",
    "level": 3,
    "correct": "if gold == 1000:",
    "normalHint": "もし gold が 1000 と等しければ",
    "hard": {
      "buggy": "if gold == '1000':",
      "bugName": "数字を文字にしちゃったバグ",
      "bugType": "number_as_string",
      "hint": "計算や数値比較に使う数字なので、余計な ' ' を外します。",
      "explanation": "数字や計算式をクォートで囲むと文字列になり、計算や大小比較の対象として扱いにくくなります。数値として使う時はクォートなしで書きましょう。"
    },
    "details": "この問題では `if gold == 1000:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "数値と文字列",
        "見た目が似ていても、数値と文字列はPythonでは別の種類のデータです。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_008",
    "level": 3,
    "correct": "if combo == 10:",
    "normalHint": "もし combo が 10 と等しければ",
    "hard": {
      "buggy": "if combo ==　10:",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `if combo == 10:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_009",
    "level": 3,
    "correct": "if state == 'Poison':",
    "normalHint": "もし state が Poison と等しければ",
    "hard": {
      "buggy": "if state = 'Poison':",
      "bugName": "イコール多すぎ/足りないバグ",
      "bugType": "assignment_vs_comparison",
      "hint": "代入なら =、比較なら == を使います。役割に合わせて数を直しましょう。",
      "explanation": "= は右の値を左の変数へ入れる代入、== は右と左が等しいかを比べる比較です。"
    },
    "details": "この問題では `if state == 'Poison':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "= と ==",
        "= は代入、== は比較です。似ていますが役割が違います。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_010",
    "level": 3,
    "correct": "if score >= 500:",
    "normalHint": "もし score が 500 以上なら",
    "hard": {
      "buggy": "if score >= 500",
      "bugName": "コロン忘れバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if score >= 500:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_011",
    "level": 3,
    "correct": "if hp > 0:",
    "normalHint": "もし hp が 0 より大きければ",
    "hard": {
      "buggy": "if hp > 0",
      "bugName": "コロン忘れバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if hp > 0:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_012",
    "level": 3,
    "correct": "if mp <= 10:",
    "normalHint": "もし mp が 10 以下なら",
    "hard": {
      "buggy": "if mp =< 10:",
      "bugName": "不等号の順番バグ",
      "bugType": "wrong_greater_equal",
      "hint": "以上は >=、以下は <= です。記号の順番を確認しましょう。",
      "explanation": ">= や <= は、> または < を先に書き、= を後に書きます。=> や =< はPythonでは正しい比較記号ではありません。"
    },
    "details": "この問題では `if mp <= 10:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "比較演算子",
        "値の大きさや等しさを比べるための記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_013",
    "level": 3,
    "correct": "if is_clear == False:",
    "normalHint": "もし is_clear が False（OFF）と等しければ",
    "hard": {
      "buggy": "if is_clear == false:",
      "bugName": "false小文字バグ",
      "bugType": "false_lowercase",
      "hint": "Pythonの False は、最初の F を大文字にします。",
      "explanation": "Pythonは大文字小文字を区別します。falseではなくFalseと書きます。"
    },
    "details": "この問題では `if is_clear == False:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "False",
        "偽、OFF、成立していないという意味のPythonの値です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_014",
    "level": 3,
    "correct": "if name == 'Hero':",
    "normalHint": "もし name が Hero と等しければ",
    "hard": {
      "buggy": "if name = 'Hero':",
      "bugName": "イコール多すぎ/足りないバグ",
      "bugType": "assignment_vs_comparison",
      "hint": "代入なら =、比較なら == を使います。役割に合わせて数を直しましょう。",
      "explanation": "= は右の値を左の変数へ入れる代入、== は右と左が等しいかを比べる比較です。"
    },
    "details": "この問題では `if name == 'Hero':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "= と ==",
        "= は代入、== は比較です。似ていますが役割が違います。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_015",
    "level": 3,
    "correct": "if score < 100:",
    "normalHint": "もし score が 100 未満なら",
    "hard": {
      "buggy": "if score < 100：",
      "bugName": "全角コロンバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if score < 100:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_016",
    "level": 3,
    "correct": "if speed > 50:",
    "normalHint": "もし speed が 50 より大きければ",
    "hard": {
      "buggy": "if speed > '50':",
      "bugName": "数字を文字にしちゃったバグ",
      "bugType": "number_as_string",
      "hint": "計算や数値比較に使う数字なので、余計な ' ' を外します。",
      "explanation": "数字や計算式をクォートで囲むと文字列になり、計算や大小比較の対象として扱いにくくなります。数値として使う時はクォートなしで書きましょう。"
    },
    "details": "この問題では `if speed > 50:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "数値と文字列",
        "見た目が似ていても、数値と文字列はPythonでは別の種類のデータです。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_017",
    "level": 3,
    "correct": "if is_cursed == False:",
    "normalHint": "もし is_cursed が False（OFF）と等しければ",
    "hard": {
      "buggy": "if is_cursed == False",
      "bugName": "コロン忘れバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if is_cursed == False:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_018",
    "level": 3,
    "correct": "if boss_hp <= 0:",
    "normalHint": "もし boss_hp が 0 以下なら",
    "hard": {
      "buggy": "if boss_hp =< 0:",
      "bugName": "不等号の順番バグ",
      "bugType": "wrong_greater_equal",
      "hint": "以上は >=、以下は <= です。記号の順番を確認しましょう。",
      "explanation": ">= や <= は、> または < を先に書き、= を後に書きます。=> や =< はPythonでは正しい比較記号ではありません。"
    },
    "details": "この問題では `if boss_hp <= 0:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "比較演算子",
        "値の大きさや等しさを比べるための記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_019",
    "level": 3,
    "correct": "if job == 'Knight':",
    "normalHint": "もし job が Knight と等しければ",
    "hard": {
      "buggy": "if job == Knight:",
      "bugName": "クォート忘れバグ",
      "bugType": "missing_quotes",
      "hint": "文字列として比べる言葉は、半角の ' ' で囲みます。",
      "explanation": "文字列をクォートで囲まないと、Pythonは変数名として探しに行ってしまいます。"
    },
    "details": "この問題では `if job == 'Knight':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "文字列",
        "文字や言葉のデータです。Pythonでは 'Hero' のようにクォートで囲みます。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_020",
    "level": 3,
    "correct": "if time_left < 30:",
    "normalHint": "もし time_left が 30 未満なら",
    "hard": {
      "buggy": "if time_left　< 30:",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `if time_left < 30:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_021",
    "level": 3,
    "correct": "if level >= 99:",
    "normalHint": "もし level が 99 以上なら",
    "hard": {
      "buggy": "if level => 99:",
      "bugName": "不等号の順番バグ",
      "bugType": "wrong_greater_equal",
      "hint": "以上は >=、以下は <= です。記号の順番を確認しましょう。",
      "explanation": ">= や <= は、> または < を先に書き、= を後に書きます。=> や =< はPythonでは正しい比較記号ではありません。"
    },
    "details": "この問題では `if level >= 99:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "比較演算子",
        "値の大きさや等しさを比べるための記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_022",
    "level": 3,
    "correct": "if is_active == True:",
    "normalHint": "もし is_active が True（ON）と等しければ",
    "hard": {
      "buggy": "if is_active == true:",
      "bugName": "true小文字バグ",
      "bugType": "true_lowercase",
      "hint": "Pythonの True は、最初の T を大文字にします。",
      "explanation": "Pythonは大文字小文字を区別します。真偽値は True / False のように先頭を大文字で書きます。"
    },
    "details": "この問題では `if is_active == True:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "True",
        "真、ON、成立しているという意味のPythonの値です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_023",
    "level": 3,
    "correct": "if weapon == 'Sword':",
    "normalHint": "もし weapon が Sword と等しければ",
    "hard": {
      "buggy": "if weapon = 'Sword':",
      "bugName": "イコール多すぎ/足りないバグ",
      "bugType": "assignment_vs_comparison",
      "hint": "代入なら =、比較なら == を使います。役割に合わせて数を直しましょう。",
      "explanation": "= は右の値を左の変数へ入れる代入、== は右と左が等しいかを比べる比較です。"
    },
    "details": "この問題では `if weapon == 'Sword':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "= と ==",
        "= は代入、== は比較です。似ていますが役割が違います。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_024",
    "level": 3,
    "correct": "if hp < 20:",
    "normalHint": "もし hp が 20 未満なら",
    "hard": {
      "buggy": "if hp < 20",
      "bugName": "コロン忘れバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if hp < 20:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_025",
    "level": 3,
    "correct": "if enemy_name == 'Boss':",
    "normalHint": "もし enemy_name が Boss と等しければ",
    "hard": {
      "buggy": "if enemy_name == Boss:",
      "bugName": "クォート忘れバグ",
      "bugType": "missing_quotes",
      "hint": "文字列として比べる言葉は、半角の ' ' で囲みます。",
      "explanation": "文字列をクォートで囲まないと、Pythonは変数名として探しに行ってしまいます。"
    },
    "details": "この問題では `if enemy_name == 'Boss':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "文字列",
        "文字や言葉のデータです。Pythonでは 'Hero' のようにクォートで囲みます。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_026",
    "level": 3,
    "correct": "if mp <= 5:",
    "normalHint": "もし mp が 5 以下なら",
    "hard": {
      "buggy": "if mp =< 5:",
      "bugName": "不等号の順番バグ",
      "bugType": "wrong_greater_equal",
      "hint": "以上は >=、以下は <= です。記号の順番を確認しましょう。",
      "explanation": ">= や <= は、> または < を先に書き、= を後に書きます。=> や =< はPythonでは正しい比較記号ではありません。"
    },
    "details": "この問題では `if mp <= 5:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "比較演算子",
        "値の大きさや等しさを比べるための記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_027",
    "level": 3,
    "correct": "if gold > 500:",
    "normalHint": "もし gold が 500 より大きければ",
    "hard": {
      "buggy": "if gold >　500:",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `if gold > 500:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_028",
    "level": 3,
    "correct": "if is_dead == False:",
    "normalHint": "もし is_dead が False（OFF）と等しければ",
    "hard": {
      "buggy": "if is_dead == false:",
      "bugName": "false小文字バグ",
      "bugType": "false_lowercase",
      "hint": "Pythonの False は、最初の F を大文字にします。",
      "explanation": "Pythonは大文字小文字を区別します。falseではなくFalseと書きます。"
    },
    "details": "この問題では `if is_dead == False:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "False",
        "偽、OFF、成立していないという意味のPythonの値です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_029",
    "level": 3,
    "correct": "if score == 1000:",
    "normalHint": "もし score が 1000 と等しければ",
    "hard": {
      "buggy": "if score == '1000':",
      "bugName": "数字を文字にしちゃったバグ",
      "bugType": "number_as_string",
      "hint": "計算や数値比較に使う数字なので、余計な ' ' を外します。",
      "explanation": "数字や計算式をクォートで囲むと文字列になり、計算や大小比較の対象として扱いにくくなります。数値として使う時はクォートなしで書きましょう。"
    },
    "details": "この問題では `if score == 1000:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "数値と文字列",
        "見た目が似ていても、数値と文字列はPythonでは別の種類のデータです。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_030",
    "level": 3,
    "correct": "if command == 'Attack':",
    "normalHint": "もし command が Attack と等しければ",
    "hard": {
      "buggy": "if command == 'Attack'：",
      "bugName": "全角コロンバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if command == 'Attack':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_031",
    "level": 3,
    "correct": "if item_count >= 1:",
    "normalHint": "もし item_count が 1 以上なら",
    "hard": {
      "buggy": "if item_count => 1:",
      "bugName": "不等号の順番バグ",
      "bugType": "wrong_greater_equal",
      "hint": "以上は >=、以下は <= です。記号の順番を確認しましょう。",
      "explanation": ">= や <= は、> または < を先に書き、= を後に書きます。=> や =< はPythonでは正しい比較記号ではありません。"
    },
    "details": "この問題では `if item_count >= 1:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "比較演算子",
        "値の大きさや等しさを比べるための記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_032",
    "level": 3,
    "correct": "if player_name == 'Alice':",
    "normalHint": "もし player_name が Alice と等しければ",
    "hard": {
      "buggy": "if player_name = 'Alice':",
      "bugName": "イコール多すぎ/足りないバグ",
      "bugType": "assignment_vs_comparison",
      "hint": "代入なら =、比較なら == を使います。役割に合わせて数を直しましょう。",
      "explanation": "= は右の値を左の変数へ入れる代入、== は右と左が等しいかを比べる比較です。"
    },
    "details": "この問題では `if player_name == 'Alice':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "= と ==",
        "= は代入、== は比較です。似ていますが役割が違います。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_033",
    "level": 3,
    "correct": "if quest_clear == True:",
    "normalHint": "もし quest_clear が True（ON）と等しければ",
    "hard": {
      "buggy": "if quest_clear == true:",
      "bugName": "true小文字バグ",
      "bugType": "true_lowercase",
      "hint": "Pythonの True は、最初の T を大文字にします。",
      "explanation": "Pythonは大文字小文字を区別します。真偽値は True / False のように先頭を大文字で書きます。"
    },
    "details": "この問題では `if quest_clear == True:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "True",
        "真、ON、成立しているという意味のPythonの値です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_034",
    "level": 3,
    "correct": "if enemy_hp <= 0:",
    "normalHint": "もし enemy_hp が 0 以下なら",
    "hard": {
      "buggy": "if enemy_hp <= 0",
      "bugName": "コロン忘れバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if enemy_hp <= 0:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_035",
    "level": 3,
    "correct": "if turn < 5:",
    "normalHint": "もし turn が 5 未満なら",
    "hard": {
      "buggy": "if turn < '5':",
      "bugName": "数字を文字にしちゃったバグ",
      "bugType": "number_as_string",
      "hint": "計算や数値比較に使う数字なので、余計な ' ' を外します。",
      "explanation": "数字や計算式をクォートで囲むと文字列になり、計算や大小比較の対象として扱いにくくなります。数値として使う時はクォートなしで書きましょう。"
    },
    "details": "この問題では `if turn < 5:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "数値と文字列",
        "見た目が似ていても、数値と文字列はPythonでは別の種類のデータです。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_036",
    "level": 3,
    "correct": "if rank == 'S':",
    "normalHint": "もし rank が S と等しければ",
    "hard": {
      "buggy": "if rank == S:",
      "bugName": "クォート忘れバグ",
      "bugType": "missing_quotes",
      "hint": "文字列として比べる言葉は、半角の ' ' で囲みます。",
      "explanation": "文字列をクォートで囲まないと、Pythonは変数名として探しに行ってしまいます。"
    },
    "details": "この問題では `if rank == 'S':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "文字列",
        "文字や言葉のデータです。Pythonでは 'Hero' のようにクォートで囲みます。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_037",
    "level": 3,
    "correct": "if mp >= 20:",
    "normalHint": "もし mp が 20 以上なら",
    "hard": {
      "buggy": "if mp >= 20：",
      "bugName": "全角コロンバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if mp >= 20:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_038",
    "level": 3,
    "correct": "if element == 'Water':",
    "normalHint": "もし element が Water と等しければ",
    "hard": {
      "buggy": "if element == ’Water’:",
      "bugName": "全角クォートバグ",
      "bugType": "wrong_quotes",
      "hint": "文字列を囲むクォートが全角または曲がった形になっています。半角の ' を使いましょう。",
      "explanation": "日本語入力で出る ’ や ‘ はPythonの文字列用クォートとして使えません。半角の ' を使いましょう。"
    },
    "details": "この問題では `if element == 'Water':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "半角クォート",
        "Pythonで文字列を囲むためのまっすぐな ' 記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_039",
    "level": 3,
    "correct": "if is_poisoned == False:",
    "normalHint": "もし is_poisoned が False（OFF）と等しければ",
    "hard": {
      "buggy": "if is_poisoned == false:",
      "bugName": "false小文字バグ",
      "bugType": "false_lowercase",
      "hint": "Pythonの False は、最初の F を大文字にします。",
      "explanation": "Pythonは大文字小文字を区別します。falseではなくFalseと書きます。"
    },
    "details": "この問題では `if is_poisoned == False:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "False",
        "偽、OFF、成立していないという意味のPythonの値です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_040",
    "level": 3,
    "correct": "if gold > 999:",
    "normalHint": "もし gold が 999 より大きければ",
    "hard": {
      "buggy": "if gold >　999:",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `if gold > 999:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_041",
    "level": 3,
    "correct": "if boss_hp <= 0:",
    "normalHint": "もし boss_hp が 0 以下なら",
    "hard": {
      "buggy": "if boss_hp =< 0:",
      "bugName": "不等号の順番バグ",
      "bugType": "wrong_greater_equal",
      "hint": "以上は >=、以下は <= です。記号の順番を確認しましょう。",
      "explanation": ">= や <= は、> または < を先に書き、= を後に書きます。=> や =< はPythonでは正しい比較記号ではありません。"
    },
    "details": "この問題では `if boss_hp <= 0:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "比較演算子",
        "値の大きさや等しさを比べるための記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_042",
    "level": 3,
    "correct": "if enemy == 'Dragon':",
    "normalHint": "もし enemy が Dragon と等しければ",
    "hard": {
      "buggy": "if enemy = 'Dragon':",
      "bugName": "イコール多すぎ/足りないバグ",
      "bugType": "assignment_vs_comparison",
      "hint": "代入なら =、比較なら == を使います。役割に合わせて数を直しましょう。",
      "explanation": "= は右の値を左の変数へ入れる代入、== は右と左が等しいかを比べる比較です。"
    },
    "details": "この問題では `if enemy == 'Dragon':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "= と ==",
        "= は代入、== は比較です。似ていますが役割が違います。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_043",
    "level": 3,
    "correct": "if ultimate_gauge >= 100:",
    "normalHint": "もし ultimate_gauge が 100 以上なら",
    "hard": {
      "buggy": "if ultimate_gauge >= 100",
      "bugName": "コロン忘れバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if ultimate_gauge >= 100:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_044",
    "level": 3,
    "correct": "if is_defending == True:",
    "normalHint": "もし is_defending が True（ON）と等しければ",
    "hard": {
      "buggy": "if is_defending == true:",
      "bugName": "true小文字バグ",
      "bugType": "true_lowercase",
      "hint": "Pythonの True は、最初の T を大文字にします。",
      "explanation": "Pythonは大文字小文字を区別します。真偽値は True / False のように先頭を大文字で書きます。"
    },
    "details": "この問題では `if is_defending == True:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "True",
        "真、ON、成立しているという意味のPythonの値です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_045",
    "level": 3,
    "correct": "if damage > 999:",
    "normalHint": "もし damage が 999 より大きければ",
    "hard": {
      "buggy": "if damage > '999':",
      "bugName": "数字を文字にしちゃったバグ",
      "bugType": "number_as_string",
      "hint": "計算や数値比較に使う数字なので、余計な ' ' を外します。",
      "explanation": "数字や計算式をクォートで囲むと文字列になり、計算や大小比較の対象として扱いにくくなります。数値として使う時はクォートなしで書きましょう。"
    },
    "details": "この問題では `if damage > 999:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "数値と文字列",
        "見た目が似ていても、数値と文字列はPythonでは別の種類のデータです。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_046",
    "level": 3,
    "correct": "if time_limit < 10:",
    "normalHint": "もし time_limit が 10 未満なら",
    "hard": {
      "buggy": "if time_limit < 10：",
      "bugName": "全角コロンバグ",
      "bugType": "missing_colon",
      "hint": "if文の最後には、必ず半角コロン（:）が必要です。",
      "explanation": "Pythonのif文では、条件の最後に : を付けます。全角の ： ではなく半角の : を使いましょう。"
    },
    "details": "この問題では `if time_limit < 10:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "コロン（:）",
        "if文の最後につける、条件文の終わりを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_047",
    "level": 3,
    "correct": "if magic == 'Meteor':",
    "normalHint": "もし magic が Meteor と等しければ",
    "hard": {
      "buggy": "if magic == Meteor:",
      "bugName": "クォート忘れバグ",
      "bugType": "missing_quotes",
      "hint": "文字列として比べる言葉は、半角の ' ' で囲みます。",
      "explanation": "文字列をクォートで囲まないと、Pythonは変数名として探しに行ってしまいます。"
    },
    "details": "この問題では `if magic == 'Meteor':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "文字列",
        "文字や言葉のデータです。Pythonでは 'Hero' のようにクォートで囲みます。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_048",
    "level": 3,
    "correct": "if is_gameover == False:",
    "normalHint": "もし is_gameover が False（OFF）と等しければ",
    "hard": {
      "buggy": "if is_gameover == false:",
      "bugName": "false小文字バグ",
      "bugType": "false_lowercase",
      "hint": "Pythonの False は、最初の F を大文字にします。",
      "explanation": "Pythonは大文字小文字を区別します。falseではなくFalseと書きます。"
    },
    "details": "この問題では `if is_gameover == False:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "False",
        "偽、OFF、成立していないという意味のPythonの値です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_049",
    "level": 3,
    "correct": "if score == 9999:",
    "normalHint": "もし score が 9999 と等しければ",
    "hard": {
      "buggy": "if score ==　9999:",
      "bugName": "全角スペースバグ",
      "bugType": "zenkaku_space",
      "hint": "見えにくい全角スペースが混ざっています。半角スペースに直しましょう。",
      "explanation": "日本語入力で入る全角スペースは、コード内では見えにくいエラー原因になります。空白は半角スペースを使いましょう。"
    },
    "details": "この問題では `if score == 9999:` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "全角スペース",
        "見た目では分かりにくい、コード内では避けたい広い空白です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "id": "lv4_add_050",
    "level": 3,
    "correct": "if status == 'Victory':",
    "normalHint": "もし status が Victory と等しければ",
    "hard": {
      "buggy": "if status == 'Victory:",
      "bugName": "クォート閉じ忘れバグ",
      "bugType": "unclosed_quotes",
      "hint": "文字列を閉じる最後の ' がありません。",
      "explanation": "クォートは必ずペアで使います。開いたら閉じる、が文字列の基本です。"
    },
    "details": "この問題では `if status == 'Victory':` を入力して、Pythonの基本ルールを確認します。記号・空白・クォート・大文字小文字を丁寧に見分けましょう。",
    "terms": [
      [
        "閉じクォート",
        "文字列がここで終わることを知らせる記号です。"
      ]
    ],
    "tips": [
      "迷ったら、半角記号・クォート・コロン・スペースを一つずつ確認しましょう。"
    ]
  },
  {
    "level": 2,
    "code": "hp = hp - 15",
    "hint": "hpから15を引く",
    "details": "現在のhpから15を引き、再びhpに入れ直す王道の書き方です。",
    "terms": [
      [
        "-",
        "引き算を行う算術演算子"
      ]
    ],
    "tips": [
      "ハイフン（-）キーで入力します。全角のマイナスに注意！"
    ]
  },
  {
    "level": 2,
    "code": "dmg = atk * 2",
    "hint": "atkを2倍にしてdmgに代入",
    "details": "Pythonでの掛け算にはアスタリスク（*）を使います。算数の「×」は使えません。",
    "terms": [
      [
        "*",
        "掛け算を行う算術演算子（アスタリスク）"
      ]
    ],
    "tips": [
      "「×」ではなく、Shiftキーを押しながら「*」を打ちます。"
    ]
  },
  {
    "level": 2,
    "code": "half = 100 / 2",
    "hint": "100を2で割った結果を代入",
    "details": "割り算にはスラッシュ（/）を使います。結果は小数（50.0）になります。",
    "terms": [
      [
        "/",
        "割り算を行う算術演算子（スラッシュ）"
      ]
    ],
    "tips": [
      "「÷」はプログラミングでは使えません。/ をタイピングしましょう。"
    ]
  },
  {
    "level": 2,
    "code": "rest = 10 % 3",
    "hint": "10を3で割った「あまり」を代入",
    "details": "パーセント記号（%）を使うと、割り算の「あまり（この場合は1）」を計算できます。",
    "terms": [
      [
        "%",
        "割り算のあまりを求める演算子"
      ]
    ],
    "tips": [
      "Shift + 5キーで入力できます。"
    ]
  },
  {
    "level": 2,
    "code": "floor = 10 // 3",
    "hint": "小数を切り捨てる割り算",
    "details": "スラッシュを2つ（//）重ねると、小数を切り捨てた整数（この場合は3）になります。",
    "terms": [
      [
        "//",
        "切り捨て除算を行う演算子"
      ]
    ],
    "tips": [
      "/ を連続で2回素早く打ち込みます。"
    ]
  },
  {
    "level": 2,
    "code": "text = '5' + '5'",
    "hint": "文字の5同士をくっつける",
    "details": "クォートで囲まれた数字は「文字列」になります。計算されず、くっついて'55'になります。",
    "terms": [
      [
        "文字列の結合",
        "文字同士を+で繋げること"
      ]
    ],
    "tips": [
      "数字を計算したい時はクォートを外します。ここではクォートを忘れずに！"
    ]
  },
  {
    "level": 2,
    "code": "gold = gold + 50",
    "hint": "goldを50増やす",
    "details": "ゲームでよく使う、自分の今の値に数字を足して更新するコードです。",
    "terms": [
      [
        "再代入",
        "変数の値を新しく書き換えること"
      ]
    ],
    "tips": [
      "イコール（=）とプラス（+）はどちらも半角です。"
    ]
  },
  {
    "level": 2,
    "code": "score = 10 * 10",
    "hint": "10と10を掛ける",
    "details": "掛け算です。空白（スペース）を入れると見やすくなりますが、これも半角スペースを使います。",
    "terms": [
      [
        "半角スペース",
        "コードを見やすくするための空白"
      ]
    ],
    "tips": [
      "全角スペースが入るとエラー（SyntaxError）になるので注意！"
    ]
  },
  {
    "level": 2,
    "code": "price = 500 - 50",
    "hint": "500から50を引く",
    "details": "引き算の基本です。変数名や数値を変えても書き方は同じです。",
    "terms": [],
    "tips": [
      "落ち着いて数字を正確にタイピングしましょう。"
    ]
  },
  {
    "level": 2,
    "code": "msg = 'Lv' + 'Up'",
    "hint": "文字列同士の結合",
    "details": "文字列同士も+で結合できます。クォートの打ち忘れに注意しましょう。",
    "terms": [
      [
        "文字列",
        "クォートで囲まれた文字のデータ"
      ]
    ],
    "tips": [
      "シングルクォート（'）はShift + 7キーなどで入力します。"
    ]
  },
  {
    "level": 2,
    "code": "time = 60 // 4",
    "hint": "60を4で割る（切り捨て）",
    "details": "時間を計算する時など、小数を切り捨てたい時に // は便利です。",
    "terms": [],
    "tips": [
      "/ と // の違いを意識しながら打ちましょう。"
    ]
  },
  {
    "level": 2,
    "code": "mod = 100 % 7",
    "hint": "100を7で割ったあまり",
    "details": "ゲームの確率計算や、曜日を求める時などによく使われる「あまり」の計算です。",
    "terms": [],
    "tips": [
      "%はプログラミングで大活躍する記号です。"
    ]
  },
  {
    "level": 2,
    "code": "x = x + 1",
    "hint": "xの値を1つ増やす",
    "details": "ループ処理などで、回数を1つずつカウントアップする時によく使います。",
    "terms": [
      [
        "インクリメント",
        "変数の値を増やすこと"
      ]
    ],
    "tips": [
      "短いコードですが、間違いなくタイピングしましょう。"
    ]
  },
  {
    "level": 2,
    "code": "y = y - 1",
    "hint": "yの値を1つ減らす",
    "details": "カウントダウンする時などに使います。",
    "terms": [
      [
        "デクリメント",
        "変数の値を減らすこと"
      ]
    ],
    "tips": [
      "マイナス記号はゼロの隣のキーなどにあります。"
    ]
  },
  {
    "level": 2,
    "code": "area = 10 * 20",
    "hint": "面積を計算する（掛け算）",
    "details": "変数に計算式をそのまま入れることができます。",
    "terms": [],
    "tips": [
      "* を使った掛け算に慣れましょう。"
    ]
  },
  {
    "level": 2,
    "code": "ave = 100 / 5",
    "hint": "平均を求める（割り算）",
    "details": "5で割って平均（average）を求めています。",
    "terms": [],
    "tips": [
      "割り算のスラッシュは入力しやすい位置にあります。"
    ]
  },
  {
    "level": 2,
    "code": "num = '1' + '2'",
    "hint": "文字の1と2を結合",
    "details": "数値の3にはならず、文字の'12'になります。これがプログラミングの罠です。",
    "terms": [],
    "tips": [
      "クォートで囲むと文字になる、というルールを指で覚えましょう。"
    ]
  },
  {
    "level": 3,
    "code": "if mp >= 10:",
    "hint": "mpが10以上であれば",
    "details": "「以上」は >= と書きます。イコールは必ず右側に来ます。",
    "terms": [
      [
        ">=",
        "左が右以上であることを調べる演算子"
      ]
    ],
    "tips": [
      "=> のように逆に書くとエラーになるので注意！"
    ]
  },
  {
    "level": 3,
    "code": "if level <= 5:",
    "hint": "levelが5以下であれば",
    "details": "「以下」は <= と書きます。これもイコールが右です。",
    "terms": [
      [
        "<=",
        "左が右以下であることを調べる演算子"
      ]
    ],
    "tips": [
      "「小なりイコール」と声に出しながら打つと覚えやすいです。"
    ]
  },
  {
    "level": 3,
    "code": "if item != 'Key':",
    "hint": "itemがKeyでなければ",
    "details": "「等しくない」ことを調べたい時は、ビックリマークとイコール（!=）を使います。",
    "terms": [
      [
        "!=",
        "等しくないことを調べる演算子"
      ]
    ],
    "tips": [
      "数学の「≠」はプログラミングでは使えません！"
    ]
  },
  {
    "level": 3,
    "code": "if is_ok == True:",
    "hint": "is_okがTrueと等しければ",
    "details": "Trueは「真（はい）」を表す特別な言葉です。文字列ではないのでクォートは不要です。",
    "terms": [
      [
        "True",
        "条件が成立している状態（真）"
      ]
    ],
    "tips": [
      "True の 'T' は必ず大文字です。trueだとエラーになります。"
    ]
  },
  {
    "level": 3,
    "code": "if enemy != 'Boss':",
    "hint": "敵がBoss以外なら",
    "details": "文字列の不一致を調べる処理です。クォートと != を組み合わせます。",
    "terms": [],
    "tips": [
      "!= の間にスペースを入れないようにタイピングします。"
    ]
  },
  {
    "level": 3,
    "code": "if exp >= 1000:",
    "hint": "経験値が1000以上なら",
    "details": "レベルアップ判定などでよく使う、以上（>=）の条件式です。",
    "terms": [],
    "tips": [
      "最後のコロン（:）までが一つの文です。忘れずに！"
    ]
  },
  {
    "level": 3,
    "code": "if time <= 0:",
    "hint": "タイムが0以下なら",
    "details": "タイムアップの判定です。<= を使います。",
    "terms": [],
    "tips": [
      "<= とコロンの打ち間違いに注意。"
    ]
  },
  {
    "level": 3,
    "code": "if x != 0:",
    "hint": "xが0でなければ",
    "details": "ゼロ以外の時に処理をしたい場合に使います。",
    "terms": [],
    "tips": [
      "! と = は続けて打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if y >= 10:",
    "hint": "yが10以上なら",
    "details": "座標の判定などにも比較演算子は活躍します。",
    "terms": [],
    "tips": [
      "不等号とイコールの順番（>=）を指に覚え込ませましょう。"
    ]
  },
  {
    "level": 3,
    "code": "if mode == 'Hard':",
    "hint": "モードがHardなら",
    "details": "難易度による分岐です。== で比較します。",
    "terms": [],
    "tips": [
      "代入の = ではなく、比較の == です！"
    ]
  },
  {
    "level": 3,
    "code": "if count < 5:",
    "hint": "カウントが5未満なら",
    "details": "5回未満の間だけ繰り返す時などの判定です。",
    "terms": [],
    "tips": [
      "< とコロンをスムーズに打てるようになりましょう。"
    ]
  },
  {
    "level": 3,
    "code": "if id != 'admin':",
    "hint": "IDがadmin以外なら",
    "details": "管理者以外のユーザーを弾くような処理です。",
    "terms": [],
    "tips": [
      "文字列のクォート忘れは致命的なバグになります。"
    ]
  },
  {
    "level": 3,
    "code": "if gold >= price:",
    "hint": "所持金が値段以上なら",
    "details": "変数同士を比較することもできます。お店でアイテムを買う時の判定です。",
    "terms": [],
    "tips": [
      "変数名同士の比較でも >= は使えます。"
    ]
  },
  {
    "level": 2,
    "code": "hp = hp + 20",
    "hint": "今のhpに20を足す",
    "details": "自分の変数に数値を足して、もう一度自分に代入（上書き）するよくある書き方です。",
    "terms": [
      [
        "再代入",
        "変数の値の更新"
      ]
    ],
    "tips": [
      "= や + の前後に半角スペースを入れると見やすいです。"
    ]
  },
  {
    "level": 2,
    "code": "damage = 50 - 10",
    "hint": "引き算の結果を代入",
    "details": "Pythonの引き算にはマイナス記号を使います。",
    "terms": [
      [
        "-",
        "引き算の記号"
      ]
    ],
    "tips": [
      "−（全角）やー（伸ばし棒）にならないよう注意！"
    ]
  },
  {
    "level": 2,
    "code": "mp = mp - 5",
    "hint": "今のmpから5を引く",
    "details": "魔法を使ってMPが減る時などに使う計算です。",
    "terms": [
      [
        "-",
        "マイナス"
      ]
    ],
    "tips": [
      "ハイフンキーでマイナスを入力します。"
    ]
  },
  {
    "level": 2,
    "code": "rest = 100 - 30",
    "hint": "100引く30",
    "details": "引き算も全角の記号は使えません。必ず半角です。",
    "terms": [
      [
        "数値",
        "計算できるデータ"
      ]
    ],
    "tips": [
      "半角数字で正確に打ちましょう。"
    ]
  },
  {
    "level": 2,
    "code": "atk = base + 10",
    "hint": "変数と数値を足す",
    "details": "変数に数値が入っていれば、そのまま計算に使えます。",
    "terms": [
      [
        "変数",
        "値が入った箱"
      ]
    ],
    "tips": [
      "変数名は小文字で打ちます。"
    ]
  },
  {
    "level": 2,
    "code": "double = x * 2",
    "hint": "xを2倍にする",
    "details": "かけ算の記号は × ではなく *（アスタリスク）を使います。",
    "terms": [
      [
        "*",
        "かけ算の記号"
      ]
    ],
    "tips": [
      "Shiftキーを押しながら :（け）のキーで * が打てます。"
    ]
  },
  {
    "level": 2,
    "code": "area = w * h",
    "hint": "wとhをかける",
    "details": "変数同士のかけ算です。× を使うとエラーになります。",
    "terms": [
      [
        "*",
        "アスタリスク"
      ]
    ],
    "tips": [
      "バツ（×）ではないことに注意しましょう。"
    ]
  },
  {
    "level": 2,
    "code": "total = price * 3",
    "hint": "priceの3倍",
    "details": "数値を計算する時はクォート ' ' をつけません。",
    "terms": [
      [
        "計算",
        "数値の処理"
      ]
    ],
    "tips": [
      "* を正確にタイピングしましょう。"
    ]
  },
  {
    "level": 2,
    "code": "avg = total / 3",
    "hint": "3で割って平均を出す",
    "details": "変数の中身を数値で割ることもできます。",
    "terms": [
      [
        "/",
        "スラッシュ"
      ]
    ],
    "tips": [
      "/ は /（半角）です。全角の ／ にならないように。"
    ]
  },
  {
    "level": 2,
    "code": "speed = 100 / 4",
    "hint": "100を4で割る",
    "details": "/ を使った割り算の結果は、小数になります。",
    "terms": [
      [
        "/",
        "割り算"
      ]
    ],
    "tips": [
      "右下のキー（/）を使って入力します。"
    ]
  },
  {
    "level": 2,
    "code": "mod = 10 % 3",
    "hint": "10を3で割った余り",
    "details": "% はパーセントではなく「割り算の余り」を求める記号です。10%3は1になります。",
    "terms": [
      [
        "%",
        "余りを求める記号"
      ]
    ],
    "tips": [
      "Shiftキー＋5で % が打てます。"
    ]
  },
  {
    "level": 2,
    "code": "odd = x % 2",
    "hint": "2で割った余り",
    "details": "2で割った余りが1なら奇数、0なら偶数という判定によく使います。",
    "terms": [
      [
        "%",
        "モジュロ演算"
      ]
    ],
    "tips": [
      "x % 2 の間にスペースを入れても見やすいです。"
    ]
  },
  {
    "level": 2,
    "code": "time = 65 % 60",
    "hint": "65を60で割った余り",
    "details": "時間の計算（65分は1時間と5分）などでも % が活躍します。",
    "terms": [
      [
        "%",
        "余り"
      ]
    ],
    "tips": [
      "% は半角です。％（全角）はエラーです。"
    ]
  },
  {
    "level": 2,
    "code": "int_div = 10 // 3",
    "hint": "割り算の切り捨て",
    "details": "// とスラッシュを2つ重ねると、余りを切り捨てた整数の答え（3）が出ます。",
    "terms": [
      [
        "//",
        "切り捨て割り算"
      ]
    ],
    "tips": [
      "/ を2回連続でタイピングします。"
    ]
  },
  {
    "level": 2,
    "code": "pages = 100 // 8",
    "hint": "100を8で割って切り捨て",
    "details": "何ページ必要かなど、小数点がいらない時に使います。",
    "terms": [
      [
        "//",
        "切り捨て"
      ]
    ],
    "tips": [
      "// の間にスペースは入れません。"
    ]
  },
  {
    "level": 2,
    "code": "point = exp // 10",
    "hint": "expを10で割って切り捨て",
    "details": "経験値を10で割ってポイントにするような計算です。",
    "terms": [
      [
        "//",
        "整数割り算"
      ]
    ],
    "tips": [
      "スラッシュを2つ続けます。"
    ]
  },
  {
    "level": 2,
    "code": "ans = 5 * 5",
    "hint": "5のかけ算",
    "details": "基本のかけ算です。× を使わないクセをつけましょう。",
    "terms": [
      [
        "*",
        "かけ算"
      ]
    ],
    "tips": [
      "* はキーボードの右側にあります。"
    ]
  },
  {
    "level": 2,
    "code": "x = 100 - 99",
    "hint": "100引く99",
    "details": "基本の引き算。-（半角マイナス）を使います。",
    "terms": [
      [
        "-",
        "引き算"
      ]
    ],
    "tips": [
      "ハイフンと同じキーです。"
    ]
  },
  {
    "level": 2,
    "code": "y = 10 + 20",
    "hint": "10足す20",
    "details": "全角の ＋ と半角の + は別物なので注意です。",
    "terms": [
      [
        "+",
        "足し算"
      ]
    ],
    "tips": [
      "Shiftキー＋れ（;）で打てることが多いです。"
    ]
  },
  {
    "level": 2,
    "code": "calc = 2 * 3 + 4",
    "hint": "かけ算と足し算",
    "details": "算数と同じで、かけ算（*）が先に計算されます。",
    "terms": [
      [
        "優先順位",
        "計算の順番"
      ]
    ],
    "tips": [
      "記号の前後のスペースは1つずつにしましょう。"
    ]
  },
  {
    "level": 2,
    "code": "calc = 10 - 4 / 2",
    "hint": "引き算と割り算",
    "details": "割り算（/）が先に計算されます。",
    "terms": [
      [
        "/",
        "割り算"
      ]
    ],
    "tips": [
      "半角数字と記号で構成されています。"
    ]
  },
  {
    "level": 2,
    "code": "calc = (1 + 2) * 3",
    "hint": "カッコを使った計算",
    "details": "カッコで囲むと、その中が先に計算されます。",
    "terms": [
      [
        "()",
        "計算の優先"
      ]
    ],
    "tips": [
      "() のカッコも必ず半角です。"
    ]
  },
  {
    "level": 2,
    "code": "total = '10' + '5'",
    "hint": "文字としての足し算",
    "details": "クォートで囲むと文字になるため、15ではなく105という文字になります。",
    "terms": [
      [
        "文字列結合",
        "文字をつなげる"
      ]
    ],
    "tips": [
      "クォート ' を忘れずに打ちましょう。"
    ]
  },
  {
    "level": 2,
    "code": "msg = 'HP: ' + hp",
    "hint": "文字と変数を繋ぐ",
    "details": "表示のための文章を作る時によく使う形です。",
    "terms": [
      [
        "+",
        "文字をつなぐ"
      ]
    ],
    "tips": [
      "'HP: ' の中のスペースも正確に打ちます。"
    ]
  },
  {
    "level": 2,
    "code": "x = 10 / 0",
    "hint": "ゼロで割る（エラー）",
    "details": "算数と同じで、プログラムでも 0 で割り算するとエラー（システムクラッシュ）になります。",
    "terms": [
      [
        "ゼロ除算",
        "0で割るエラー"
      ]
    ],
    "tips": [
      "0はオー（o）ではなく数字のゼロです。"
    ]
  },
  {
    "level": 2,
    "code": "mod = 100 % 10",
    "hint": "100を10で割った余り",
    "details": "割り切れるので余りは 0 になります。",
    "terms": [
      [
        "%",
        "余り"
      ]
    ],
    "tips": [
      "Shift＋5 です。"
    ]
  },
  {
    "level": 2,
    "code": "rate = 1 // 2",
    "hint": "1を2で割って切り捨て",
    "details": "普通の割り算だと0.5ですが、// を使うと切り捨てられて 0 になります。",
    "terms": [
      [
        "//",
        "切り捨て"
      ]
    ],
    "tips": [
      "スラッシュは2つです。"
    ]
  },
  {
    "level": 2,
    "code": "power = 2 ** 3",
    "hint": "2の3乗（2×2×2）",
    "details": "** とアスタリスクを2つ重ねると「べき乗（乗算の繰り返し）」になります。",
    "terms": [
      [
        "**",
        "べき乗"
      ]
    ],
    "tips": [
      "* を2回連続でタイピングします。"
    ]
  },
  {
    "level": 2,
    "code": "lv = lv + 1",
    "hint": "レベルを1上げる",
    "details": "今のレベルに1を足して、再度上書きします。RPGの基本です。",
    "terms": [
      [
        "再代入",
        "値の更新"
      ]
    ],
    "tips": [
      "lv は小文字のエルとブイです。"
    ]
  },
  {
    "level": 2,
    "code": "gold = gold - 10",
    "hint": "お金を10減らす",
    "details": "買い物でゴールドが減る処理です。",
    "terms": [
      [
        "-",
        "引き算"
      ]
    ],
    "tips": [
      "全角のマイナスにならないよう注意。"
    ]
  },
  {
    "level": 2,
    "code": "dmg = atk - def",
    "hint": "攻撃力から防御力を引く",
    "details": "変数同士で計算することもできます。",
    "terms": [
      [
        "変数計算",
        "箱同士の計算"
      ]
    ],
    "tips": [
      "def とタイピングします。"
    ]
  },
  {
    "level": 2,
    "code": "a = 5 % 2",
    "hint": "5を2で割った余り",
    "details": "結果は1になります。奇数の判定です。",
    "terms": [
      [
        "%",
        "余り"
      ]
    ],
    "tips": [
      "%記号を確実に入力しましょう。"
    ]
  },
  {
    "level": 2,
    "code": "b = 10 ** 2",
    "hint": "10の2乗（100）",
    "details": "** で乗算です。10*10と同じです。",
    "terms": [
      [
        "**",
        "べき乗"
      ]
    ],
    "tips": [
      "*を2つ連続です。"
    ]
  },
  {
    "level": 3,
    "code": "if mp < 10:",
    "hint": "mpが10未満なら",
    "details": "< は右側が開いているので「右が大きい（10より小さい）」という意味です。",
    "terms": [
      [
        "<",
        "より小さい"
      ]
    ],
    "tips": [
      "Shift + ,（ね）で < が打てます。"
    ]
  },
  {
    "level": 3,
    "code": "if lv >= 99:",
    "hint": "lvが99以上なら",
    "details": "「以上」は >= の順番で書きます。=> と書くとエラーです。",
    "terms": [
      [
        ">=",
        "以上"
      ]
    ],
    "tips": [
      "> を打ってから = です。"
    ]
  },
  {
    "level": 3,
    "code": "if score <= 50:",
    "hint": "scoreが50以下なら",
    "details": "「以下」は <= の順番です。=, < の順ではありません。",
    "terms": [
      [
        "<=",
        "以下"
      ]
    ],
    "tips": [
      "< の後に = です。"
    ]
  },
  {
    "level": 3,
    "code": "if item != 'Sword':",
    "hint": "itemがSwordではないなら",
    "details": "!= は「等しくない（ノットイコール）」という意味です。",
    "terms": [
      [
        "!=",
        "等しくない"
      ]
    ],
    "tips": [
      "! は Shift + 1 で打てます。"
    ]
  },
  {
    "level": 3,
    "code": "if is_alive == True:",
    "hint": "is_aliveがTrueなら",
    "details": "True（真）は大文字の T から始めます。クォートは不要です。",
    "terms": [
      [
        "True",
        "正しい・はい"
      ]
    ],
    "tips": [
      "True の T は大文字です。"
    ]
  },
  {
    "level": 3,
    "code": "if poison == False:",
    "hint": "poisonがFalseなら",
    "details": "False（偽）は大文字の F から始めます。",
    "terms": [
      [
        "False",
        "間違い・いいえ"
      ]
    ],
    "tips": [
      "False の F は大文字です。"
    ]
  },
  {
    "level": 3,
    "code": "if x == 10:",
    "hint": "xが10と等しいか",
    "details": "代入の = と、比較の == は全く意味が違うので注意しましょう。",
    "terms": [
      [
        "==",
        "比較"
      ]
    ],
    "tips": [
      "=を2つ連続で打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if y != 0:",
    "hint": "yが0ではないか",
    "details": "ゼロで割るのを防ぐ前などに != 0 を使ったりします。",
    "terms": [
      [
        "!=",
        "等しくない"
      ]
    ],
    "tips": [
      "! の後に = です。"
    ]
  },
  {
    "level": 3,
    "code": "if hp == max_hp:",
    "hint": "hpとmax_hpが同じなら",
    "details": "変数同士が等しいか比べることもできます。",
    "terms": [
      [
        "==",
        "比較"
      ]
    ],
    "tips": [
      "アンダースコア _ も正確に。"
    ]
  },
  {
    "level": 3,
    "code": "if def < atk:",
    "hint": "defがatkより小さい",
    "details": "変数の大きさを比べます。ダメージが通るかの判定です。",
    "terms": [
      [
        "<",
        "より小さい"
      ]
    ],
    "tips": [
      "不等号の向きに注意しましょう。"
    ]
  },
  {
    "level": 3,
    "code": "if gold >= 100:",
    "hint": "goldが100以上",
    "details": "100ぴったりの時も、条件に合います（Trueになります）。",
    "terms": [
      [
        ">=",
        "以上"
      ]
    ],
    "tips": [
      ">= の順です。"
    ]
  },
  {
    "level": 3,
    "code": "if answer != 'A':",
    "hint": "答えがAではない",
    "details": "間違った選択肢を選んだ時の処理などに使います。",
    "terms": [
      [
        "!=",
        "等しくない"
      ]
    ],
    "tips": [
      "Aの周りのクォートを忘れずに。"
    ]
  },
  {
    "level": 3,
    "code": "if ready == True:",
    "hint": "準備OKなら",
    "details": "真偽値との比較です。true と小文字で書くとエラーになります。",
    "terms": [
      [
        "True",
        "真"
      ]
    ],
    "tips": [
      "TrueはTだけ大文字です。"
    ]
  },
  {
    "level": 3,
    "code": "if is_boss == False:",
    "hint": "ボスではないなら",
    "details": "false と小文字で書くと変数と間違えられます。",
    "terms": [
      [
        "False",
        "偽"
      ]
    ],
    "tips": [
      "FalseはFだけ大文字です。"
    ]
  },
  {
    "level": 3,
    "code": "if a == b:",
    "hint": "aとbが同じ",
    "details": "一番シンプルな変数の比較です。: を忘れがちです。",
    "terms": [
      [
        "==",
        "等しい"
      ]
    ],
    "tips": [
      "最後の : は必須です。"
    ]
  },
  {
    "level": 3,
    "code": "if count > 10:",
    "hint": "10より多い",
    "details": "if文の基本形。半角スペースで区切ると読みやすいです。",
    "terms": [
      [
        "if",
        "もし〜なら"
      ]
    ],
    "tips": [
      "if の後にはスペースを空けます。"
    ]
  },
  {
    "level": 3,
    "code": "if exp >= max:",
    "hint": "expがmax以上",
    "details": "レベルアップの判定などで使われる形です。",
    "terms": [
      [
        ">=",
        "以上"
      ]
    ],
    "tips": [
      ">= と入力します。"
    ]
  },
  {
    "level": 3,
    "code": "if x != y:",
    "hint": "xとyが違う",
    "details": "違う時だけ実行したい処理を書きます。",
    "terms": [
      [
        "!=",
        "異なる"
      ]
    ],
    "tips": [
      "! と = の間にはスペースを入れません。"
    ]
  },
  {
    "level": 3,
    "code": "if lv == 1:",
    "hint": "lvが1なら",
    "details": "= を1つにすると「lvに1を入れる（代入）」になってしまいエラーが出ます。",
    "terms": [
      [
        "==",
        "比較"
      ]
    ],
    "tips": [
      "==を確実に打ちましょう。"
    ]
  },
  {
    "level": 3,
    "code": "if hp <= max_hp:",
    "hint": "hpが最大以下",
    "details": "回復しすぎないようにするチェックなどに使います。",
    "terms": [
      [
        "<=",
        "以下"
      ]
    ],
    "tips": [
      "アンダースコア _ にも慣れましょう。"
    ]
  },
  {
    "level": 3,
    "code": "if dmg > 0:",
    "hint": "ダメージが0より大きい",
    "details": "ダメージがマイナス（回復）にならないようにするチェックです。",
    "terms": [
      [
        ">",
        "より大きい"
      ]
    ],
    "tips": [
      "ゼロとオーを間違えないように。"
    ]
  },
  {
    "level": 3,
    "code": "if job == 'Hero':",
    "hint": "jobがHeroなら",
    "details": "文字列はクォートで。変数jobはクォートなしです。",
    "terms": [
      [
        "文字列比較",
        "文字が等しいか"
      ]
    ],
    "tips": [
      "'Hero' のHは大文字。"
    ]
  },
  {
    "level": 3,
    "code": "if type != 'Fire':",
    "hint": "属性がFireではない",
    "details": "Fire以外のすべての時にTrueになります。",
    "terms": [
      [
        "!=",
        "異なる"
      ]
    ],
    "tips": [
      "最後は : コロン。"
    ]
  },
  {
    "level": 3,
    "code": "if a < 100:",
    "hint": "aが100未満",
    "details": "シンプルですが、コロン : の忘れには常に注意です。",
    "terms": [
      [
        "if文",
        "条件分岐"
      ]
    ],
    "tips": [
      "コロン : はキーボードの右側です。"
    ]
  },
  {
    "level": 3,
    "code": "if x >= 0:",
    "hint": "xが0以上",
    "details": "マイナスの数ではないことを確認します。",
    "terms": [
      [
        ">=",
        "以上"
      ]
    ],
    "tips": [
      "半角で入力！"
    ]
  },
  {
    "level": 3,
    "code": "if y <= 9:",
    "hint": "yが9以下",
    "details": "一桁の数字かどうかなどを確認できます。",
    "terms": [
      [
        "<=",
        "以下"
      ]
    ],
    "tips": [
      "<= を続けて打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if z == 5:",
    "hint": "zが5と等しい",
    "details": "全角の ＝ を使うと、エラーでゲームが止まります。",
    "terms": [
      [
        "==",
        "比較"
      ]
    ],
    "tips": [
      "必ず半角で == と打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if w != 1:",
    "hint": "wが1ではない",
    "details": "1以外のすべての数字で条件に合います。",
    "terms": [
      [
        "!=",
        "異なる"
      ]
    ],
    "tips": [
      "! は Shift+1"
    ]
  },
  {
    "level": 3,
    "code": "if turn > 10:",
    "hint": "10ターンを超えたら",
    "details": "11ターン目から実行されます。",
    "terms": [
      [
        ">",
        "より大きい"
      ]
    ],
    "tips": [
      "コロン : をお忘れなく。"
    ]
  },
  {
    "level": 3,
    "code": "if key == 'A':",
    "hint": "キーがAなら",
    "details": "Aキーが押されたかどうかの判定などで使います。",
    "terms": [
      [
        "==",
        "比較"
      ]
    ],
    "tips": [
      "Aをクォートで囲みます。"
    ]
  },
  {
    "level": 3,
    "code": "if num % 2 == 0:",
    "hint": "numが偶数なら",
    "details": "2で割った余り（%）が0と等しいか（==）を調べます。",
    "terms": [
      [
        "%と==",
        "複合技"
      ]
    ],
    "tips": [
      "演算子が2つ入る応用です。"
    ]
  },
  {
    "level": 3,
    "code": "if len > 5:",
    "hint": "lenが5より大きい",
    "details": "長さが5を超えているかチェックします。",
    "terms": [
      [
        ">",
        "より大きい"
      ]
    ],
    "tips": [
      "半角スペースで見やすく。"
    ]
  },
  {
    "level": 3,
    "code": "if error != False:",
    "hint": "エラーがFalseではない",
    "details": "つまりエラーが発生している（Trueなど）状態です。",
    "terms": [
      [
        "!=",
        "異なる"
      ]
    ],
    "tips": [
      "False のスペルを間違えないように。"
    ]
  },
  {
    "level": 3,
    "code": "if score >= 1000:",
    "hint": "scoreが1000以上",
    "details": "桁が多い数字を打つ練習です。",
    "terms": [
      [
        ">=",
        "以上"
      ]
    ],
    "tips": [
      "ゼロの数を間違えないように。"
    ]
  },
  {
    "level": 3,
    "code": "if hp == 1:",
    "hint": "hpが1（ギリギリ）",
    "details": "ピンチの時の特殊な台詞などを出す分岐に使います。",
    "terms": [
      [
        "==",
        "比較"
      ]
    ],
    "tips": [
      "最後は : です！"
    ]
  },
  {
    "level": 3,
    "code": "if x == y:",
    "hint": "xとyが等しい",
    "details": "シンプルですが、if文の基本が詰まっています。",
    "terms": [
      [
        "==",
        "等しい"
      ]
    ],
    "tips": [
      "if x == y: （すべて半角）"
    ]
  },
  {
    "level": 2,
    "code": "hp = 100 + 50",
    "hint": "足し算の結果を代入",
    "details": "HPを回復する計算です。算数と同じように + を使います。",
    "terms": [
      [
        "足し算 (+)",
        "右と左の数値を足し合わせる記号です。"
      ]
    ],
    "tips": [
      "全角の ＋ は使えません。半角の + を打ちましょう。"
    ]
  },
  {
    "level": 2,
    "code": "mp = 20 + 10",
    "hint": "20と10を足してmpに代入",
    "details": "MPを足し算します。= と + の前後には半角スペースを入れると見やすくなります。",
    "terms": [
      [
        "半角スペース",
        "コードを見やすくするために入れる空白です。"
      ]
    ],
    "tips": [
      "スペースキーを押すときは半角モードか確認しましょう。"
    ]
  },
  {
    "level": 2,
    "code": "score = 500 + 100",
    "hint": "スコアに100を足す",
    "details": "得点を計算します。数値はクォートで囲まないようにします。",
    "terms": [
      [
        "数値",
        "計算に使えるデータです。'100' とは区別されます。"
      ]
    ],
    "tips": [
      "数字のタイピングはキーボードの上段を確実に見ずに打てるようになると早いです。"
    ]
  },
  {
    "level": 2,
    "code": "gold = 50 + 50",
    "hint": "50と50を足す",
    "details": "お金を足し合わせます。代入の = と計算の + の役割をしっかり分けましょう。",
    "terms": [
      [
        "代入 (=)",
        "右側の計算結果を左側の変数（箱）に入れます。"
      ]
    ],
    "tips": [
      "= は代入、+ は計算です。"
    ]
  },
  {
    "level": 2,
    "code": "power = 10 + 5",
    "hint": "10と5を足してpowerに代入",
    "details": "攻撃力をアップさせる計算です。",
    "terms": [
      [
        "演算子",
        "+ などの計算記号のことをプログラミング用語で演算子と呼びます。"
      ]
    ],
    "tips": [
      "+ のキーはShiftを押しながら打ちます。"
    ]
  },
  {
    "level": 2,
    "code": "hp = 100 - 20",
    "hint": "引き算の結果を代入",
    "details": "ダメージを受けた時の計算です。引き算には半角の - を使います。",
    "terms": [
      [
        "引き算 (-)",
        "左の数値から右の数値を引く記号です。"
      ]
    ],
    "tips": [
      "全角の ー やハイフンに似た記号を使わないよう注意です。"
    ]
  },
  {
    "level": 2,
    "code": "time = 60 - 5",
    "hint": "60から5を引いてtimeに代入",
    "details": "残り時間を減らします。",
    "terms": [
      [
        "変数",
        "計算結果を入れておく time のような箱のことです。"
      ]
    ],
    "tips": [
      "- キーは 0 の右隣にあります。"
    ]
  },
  {
    "level": 2,
    "code": "money = 1000 - 300",
    "hint": "1000から300を引く",
    "details": "アイテムを買った時のお金の計算です。",
    "terms": [
      [
        "数値",
        "カンマ(1,000)を入れずに 1000 と書きます。"
      ]
    ],
    "tips": [
      "0を連続で打つ時は指の感覚を覚えましょう。"
    ]
  },
  {
    "level": 2,
    "code": "shield = 50 - 15",
    "hint": "50から15を引く",
    "details": "シールドの耐久値を減らします。",
    "terms": [
      [
        "半角記号",
        "プログラミングは基本的にすべて半角英数モードで書きます。"
      ]
    ],
    "tips": [
      "= や - の前後に半角スペースを入れましょう。"
    ]
  },
  {
    "level": 2,
    "code": "mp = 50 - 12",
    "hint": "50から12を引いてmpに代入",
    "details": "魔法を使った時のMP消費の計算です。",
    "terms": [
      [
        "計算式",
        "50 - 12 のような、結果を出すための式のことです。"
      ]
    ],
    "tips": [
      "数字と記号を流れるように打てるようになりましょう。"
    ]
  },
  {
    "level": 2,
    "code": "damage = 10 * 3",
    "hint": "掛け算の結果を代入",
    "details": "ダメージを3倍にする計算です。掛け算にはアスタリスク(*)を使います。",
    "terms": [
      [
        "掛け算 (*)",
        "算数の × ではなく、プログラミングでは * を使います。"
      ]
    ],
    "tips": [
      "× を打つクセをここで直しましょう！ * はShiftを押しながら打ちます。"
    ]
  },
  {
    "level": 2,
    "code": "score = 100 * 2",
    "hint": "100と2を掛ける",
    "details": "スコアを2倍にするボーナス計算です。",
    "terms": [
      [
        "アスタリスク",
        "* の読み方です。夜空の星のような形ですね。"
      ]
    ],
    "tips": [
      "JISキーボードなら Shift + : の位置にあります。"
    ]
  },
  {
    "level": 2,
    "code": "total = 50 * 5",
    "hint": "50と5を掛けてtotalに代入",
    "details": "アイテムを5個買った時の合計の計算です。",
    "terms": [
      [
        "代入 (=)",
        "計算結果（250）が total に入ります。"
      ]
    ],
    "tips": [
      "* のキー位置を指に覚え込ませましょう。"
    ]
  },
  {
    "level": 2,
    "code": "coins = 10 * 10",
    "hint": "10と10を掛ける",
    "details": "コインを100枚獲得する計算です。",
    "terms": [
      [
        "乗算",
        "掛け算のことです。"
      ]
    ],
    "tips": [
      "10 * 10 のように半角スペースを空けると美しいです。"
    ]
  },
  {
    "level": 2,
    "code": "exp = 20 * 4",
    "hint": "経験値を4倍にする",
    "details": "経験値アップキャンペーンの計算です。",
    "terms": [
      [
        "数値と文字列の違い",
        "20 は数値、'20' は文字です。計算には数値を使います。"
      ]
    ],
    "tips": [
      "クォートは不要です。"
    ]
  },
  {
    "level": 2,
    "code": "rate = 50 / 5",
    "hint": "50を5で割ってrateに代入",
    "details": "確率などを計算する時の割り算です。",
    "terms": [
      [
        "スラッシュ",
        "/ の読み方です。斜め斬りのような形ですね。"
      ]
    ],
    "tips": [
      "右手の小指や薬指で / を打つ感覚を掴みましょう。"
    ]
  },
  {
    "level": 2,
    "code": "share = 300 / 3",
    "hint": "300を3で割る",
    "details": "3人で山分けする時の計算です。",
    "terms": [
      [
        "除算",
        "割り算のことです。Pythonの / は結果が小数になります。"
      ]
    ],
    "tips": [
      "半角モードのまま / を打ちます。"
    ]
  },
  {
    "level": 2,
    "code": "time = 120 / 60",
    "hint": "120を60で割る",
    "details": "秒を分に直す時の計算です。",
    "terms": [
      [
        "単位の変換",
        "割り算は単位の変換によく使われます。"
      ]
    ],
    "tips": [
      "/ も前後に半角スペースを入れると綺麗です。"
    ]
  },
  {
    "level": 2,
    "code": "average = 100 / 4",
    "hint": "平均を計算して代入",
    "details": "平均値を出すための割り算です。",
    "terms": [
      [
        "変数名",
        "average は「平均」という意味の変数名です。"
      ]
    ],
    "tips": [
      "a, v, e, r, a, g, e と指をスムーズに動かしましょう。"
    ]
  },
  {
    "level": 2,
    "code": "mod = 15 % 4",
    "hint": "15を4で割った余り",
    "details": "15 ÷ 4 ＝ 3 余り 3 なので、結果は 3 になります。",
    "terms": [
      [
        "剰余",
        "割り算の余りのことです。"
      ]
    ],
    "tips": [
      "% も立派な計算記号（演算子）の一つです。"
    ]
  },
  {
    "level": 2,
    "code": "turn = 10 % 2",
    "hint": "10を2で割った余り",
    "details": "2で割った余りが0なら偶数、1なら奇数、という判定に超頻出します！",
    "terms": [
      [
        "偶数判定",
        "% 2 を使うのはプログラマーの常識テクニックです。"
      ]
    ],
    "tips": [
      "10 % 2 の結果は 0 になります。"
    ]
  },
  {
    "level": 2,
    "code": "coin = 25 % 10",
    "hint": "25を10で割った余り",
    "details": "桁数を取り出したい時にも % は便利です。",
    "terms": [
      [
        "演算子 (%)",
        "デザインなどで使うパーセントとは意味が違うので注意。"
      ]
    ],
    "tips": [
      "全角の ％ を使わないように！"
    ]
  },
  {
    "level": 2,
    "code": "rem = 7 % 5",
    "hint": "7を5で割った余り",
    "details": "余りを求める計算は、ゲームのルーレットなどでも使われます。",
    "terms": [
      [
        "変数 rem",
        "remainder（余り）の略としてよく使われます。"
      ]
    ],
    "tips": [
      "キーボードの上段をテンポよく打ちましょう。"
    ]
  },
  {
    "level": 2,
    "code": "pages = 25 // 10",
    "hint": "25を10で切り捨て割り算",
    "details": "2.5 ではなく 2 という結果が欲しい時に使います。",
    "terms": [
      [
        "整数除算",
        "結果が小数にならない割り算のことです。"
      ]
    ],
    "tips": [
      "// の間にはスペースを入れません。"
    ]
  },
  {
    "level": 2,
    "code": "level = 15 // 2",
    "hint": "15を2で切り捨て割り算",
    "details": "レベル計算などで、半端な数値を切り捨てたい時に活躍します。",
    "terms": [
      [
        "演算子 (//)",
        "Python特有のとても便利な計算記号です。"
      ]
    ],
    "tips": [
      "15 // 2 のように、演算子の前後には半角スペースを。"
    ]
  },
  {
    "level": 2,
    "code": "box = 100 // 30",
    "hint": "100を30で切り捨て割り算",
    "details": "100個のアイテムを30個入りの箱にいくつ詰められるか、の計算です。",
    "terms": [
      [
        "箱の数",
        "結果は 3 になります。"
      ]
    ],
    "tips": [
      "/ キーをポンポンと2回叩くリズムです。"
    ]
  },
  {
    "level": 2,
    "code": "step = 50 // 4",
    "hint": "50を4で切り捨て割り算",
    "details": "小数を扱いたくないゲームの座標計算などで使います。",
    "terms": [
      [
        "//",
        "スラッシュ2つで1つの記号として働きます。"
      ]
    ],
    "tips": [
      "全角スラッシュにならないよう半角モードを維持！"
    ]
  },
  {
    "level": 2,
    "code": "attack = pwr + wpn",
    "hint": "変数同士を足して代入",
    "details": "変数（箱）同士を足し算することもできます。中身の数字が足されます。",
    "terms": [
      [
        "変数同士の計算",
        "数値だけでなく、変数名を使って計算式を作れます。"
      ]
    ],
    "tips": [
      "変数名が長くなっても + の前後はスペースを空けます。"
    ]
  },
  {
    "level": 2,
    "code": "total = price * cnt",
    "hint": "変数同士を掛けて代入",
    "details": "値段(price)と個数(cnt)を掛けて合計を出します。",
    "terms": [
      [
        "変数を使った式",
        "中身が変わっても同じ式で計算できるのがプログラミングの強みです。"
      ]
    ],
    "tips": [
      "× ではなく * ですよ！"
    ]
  },
  {
    "level": 2,
    "code": "left = hp - dmg",
    "hint": "hpからdmgを引く",
    "details": "変数同士の引き算です。残りHPを計算します。",
    "terms": [
      [
        "引き算 (-)",
        "変数同士でもルールは同じです。"
      ]
    ],
    "tips": [
      "変数名の綴り（スペル）を間違えないようにタイピング！"
    ]
  },
  {
    "level": 2,
    "code": "ave = total / cnt",
    "hint": "totalをcntで割る",
    "details": "変数同士の割り算で平均を出します。",
    "terms": [
      [
        "除算 (/)",
        "変数同士を割る時も / です。÷ は使いません。"
      ]
    ],
    "tips": [
      "/ キーを確実に捉えましょう。"
    ]
  },
  {
    "level": 2,
    "code": "hp = hp - 10",
    "hint": "hpから10を引いてhpに戻す",
    "details": "今のhpから10を引いて、その結果を同じhpの箱に上書き保存します。",
    "terms": [
      [
        "変数の上書き",
        "ゲームでダメージを受ける時の超定番の書き方です。"
      ]
    ],
    "tips": [
      "左のhpと右のhpは同じ綴りで打ちます。"
    ]
  },
  {
    "level": 2,
    "code": "score = score + 50",
    "hint": "scoreに50を足してscoreに戻す",
    "details": "今のスコアに50点を追加して上書き保存します。",
    "terms": [
      [
        "値の更新",
        "自分自身に値を足す処理です。"
      ]
    ],
    "tips": [
      "= と + の役割をしっかり指で覚えましょう。"
    ]
  },
  {
    "level": 3,
    "code": "if mp == 10:",
    "hint": "mpが10と等しければ",
    "details": "MPが10ぴったりかどうかを比べます。最後のコロンを忘れないように！",
    "terms": [
      [
        "コロン (:)",
        "「条件はここまで」という合図です。"
      ]
    ],
    "tips": [
      "全角の ： ではなく半角の : を使います。"
    ]
  },
  {
    "level": 3,
    "code": "if score == 100:",
    "hint": "scoreが100と等しければ",
    "details": "スコアが100に達したかの判定です。代入の = と比較の == を間違えないように。",
    "terms": [
      [
        "== と =",
        "初心者が一番間違えやすいポイントです。ifの後は必ず == です。"
      ]
    ],
    "tips": [
      "= キーを2回トントンと連打します。"
    ]
  },
  {
    "level": 3,
    "code": "if gold == 500:",
    "hint": "goldが500と等しければ",
    "details": "所持金が500ぴったりかの確認です。",
    "terms": [
      [
        "数値との比較",
        "数値と比べる時はクォートは不要です。"
      ]
    ],
    "tips": [
      "if の後には半角スペースを1つ空けます。"
    ]
  },
  {
    "level": 3,
    "code": "if job == 'Mage':",
    "hint": "jobがMageと等しければ",
    "details": "職業が魔法使いかどうかを判定します。",
    "terms": [
      [
        "文字列",
        "Mageは文字なのでクォートを着せます。"
      ]
    ],
    "tips": [
      "'Mage': のようにクォートのすぐ後にコロンが来ます。"
    ]
  },
  {
    "level": 3,
    "code": "if boss == 'Dragon':",
    "hint": "bossがDragonと等しければ",
    "details": "敵の名前がドラゴンかどうかを比べます。",
    "terms": [
      [
        "==",
        "等しいかどうかの質問記号です。"
      ]
    ],
    "tips": [
      "Shiftを押しながら大文字のDを打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if is_clear == True:",
    "hint": "is_clearがTrueと等しければ",
    "details": "クリアフラグが立っているかの確認です。",
    "terms": [
      [
        "フラグ判定",
        "Trueかどうかの確認はゲームで超頻出します。"
      ]
    ],
    "tips": [
      "TはShiftを押しながら打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if hp != 0:",
    "hint": "hpが0と等しくなければ",
    "details": "「等しくない」ことを比べる記号は != です。数学の ≠ は使いません。",
    "terms": [
      [
        "不等価 (!=)",
        "エクスクラメーションマークとイコールを並べます。"
      ]
    ],
    "tips": [
      "! は Shift + 1 で打てます。"
    ]
  },
  {
    "level": 3,
    "code": "if mp != 100:",
    "hint": "mpが100と等しくなければ",
    "details": "MPが満タン(100)ではない時の処理に使います。",
    "terms": [
      [
        "!= の読み方",
        "ノットイコールと読みます。"
      ]
    ],
    "tips": [
      "!= の間にはスペースを入れません。"
    ]
  },
  {
    "level": 3,
    "code": "if mode != 'Hard':",
    "hint": "modeがHardと等しくなければ",
    "details": "文字列と「等しくないか」を比べることもできます。",
    "terms": [
      [
        "文字列との比較",
        "Hard は文字なのでクォートで囲みます。"
      ]
    ],
    "tips": [
      "クォートとコロンの順番に気をつけて。"
    ]
  },
  {
    "level": 3,
    "code": "if state != 'Poison':",
    "hint": "stateがPoisonと等しくなければ",
    "details": "毒状態じゃない時に回復魔法を使えるようにする、などの条件です。",
    "terms": [
      [
        "状態の判定",
        "文字列を使って状態を管理することがよくあります。"
      ]
    ],
    "tips": [
      "Pの大文字を忘れずに。"
    ]
  },
  {
    "level": 3,
    "code": "if flag != True:",
    "hint": "flagがTrueと等しくなければ",
    "details": "Trueではない（つまりFalse）時の条件です。",
    "terms": [
      [
        "!= と True",
        "真偽値に対しても != が使えます。"
      ]
    ],
    "tips": [
      "TrueのTは大文字です。"
    ]
  },
  {
    "level": 3,
    "code": "if is_ok != False:",
    "hint": "is_okがFalseと等しくなければ",
    "details": "Falseではない（つまりTrue）時の条件です。",
    "terms": [
      [
        "二重否定",
        "Falseではない＝Trueという意味になります。"
      ]
    ],
    "tips": [
      "Fの大文字を忘れずに。"
    ]
  },
  {
    "level": 3,
    "code": "if hp > 50:",
    "hint": "hpが50より大きければ",
    "details": "大きさを比べる記号です。開いている方が大きいという意味です。",
    "terms": [
      [
        "より大きい (>)",
        "右の数値「より大きい」時です。50ピッタリは含みません。"
      ]
    ],
    "tips": [
      "> は Shift を押しながらるキー（またはピリオドの隣）です。"
    ]
  },
  {
    "level": 3,
    "code": "if score > 100:",
    "hint": "scoreが100より大きければ",
    "details": "スコアが100を超えた時の条件です。",
    "terms": [
      [
        "大なり (>)",
        "大なり記号と呼びます。"
      ]
    ],
    "tips": [
      "if の後、> の前後に半角スペースを。"
    ]
  },
  {
    "level": 3,
    "code": "if level > 10:",
    "hint": "levelが10より大きければ",
    "details": "レベルが10を超えたら新しい魔法を覚える、などの処理です。",
    "terms": [
      [
        "数値の比較",
        "文字（'10'）とは大小の比較ができません。"
      ]
    ],
    "tips": [
      "> の向きを間違えないように。"
    ]
  },
  {
    "level": 3,
    "code": "if speed > 20:",
    "hint": "speedが20より大きければ",
    "details": "素早さが20より大きい時の条件です。",
    "terms": [
      [
        "条件式",
        "if文の : までの部分を条件式と呼びます。"
      ]
    ],
    "tips": [
      "最後に : を打つリズムを体に刻みましょう。"
    ]
  },
  {
    "level": 3,
    "code": "if time > 0:",
    "hint": "timeが0より大きければ",
    "details": "残り時間がまだある（0より大きい）時の条件です。",
    "terms": [
      [
        "生存判定",
        "HPや時間が 0より大きい＝まだ生きている、という頻出パターンです。"
      ]
    ],
    "tips": [
      "> 0: と打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if atk > def:",
    "hint": "atkがdefより大きければ",
    "details": "変数（箱）同士の大きさを比べることもできます。",
    "terms": [
      [
        "変数同士の比較",
        "攻撃力と防御力を比べてダメージ計算などをします。"
      ]
    ],
    "tips": [
      "右辺も左辺も変数名です。"
    ]
  },
  {
    "level": 3,
    "code": "if mp < 5:",
    "hint": "mpが5より小さければ",
    "details": "MPが5未満で魔法が使えない時の条件です。",
    "terms": [
      [
        "小なり (<)",
        "小なり記号と呼びます。"
      ]
    ],
    "tips": [
      "< と > の向きに注意！"
    ]
  },
  {
    "level": 3,
    "code": "if gold < 100:",
    "hint": "goldが100より小さければ",
    "details": "お金が100ゴールド未満でアイテムが買えない時の条件です。",
    "terms": [
      [
        "条件分岐",
        "お金が足りない時と足りる時で処理を分けます。"
      ]
    ],
    "tips": [
      "< の前後にスペースを入れます。"
    ]
  },
  {
    "level": 3,
    "code": "if time < 10:",
    "hint": "timeが10より小さければ",
    "details": "残り時間が10秒を切った時の条件です。",
    "terms": [
      [
        "未満",
        "10未満なので、9, 8, 7... の時です。"
      ]
    ],
    "tips": [
      "最後に : が必要です。"
    ]
  },
  {
    "level": 3,
    "code": "if count < 3:",
    "hint": "countが3より小さければ",
    "details": "コンティニュー回数が3回未満の時の条件です。",
    "terms": [
      [
        "回数制限",
        "ゲームの回数制限によく使われます。"
      ]
    ],
    "tips": [
      "c, o, u, n, t と正確にタイピング。"
    ]
  },
  {
    "level": 3,
    "code": "if dmg < arm:",
    "hint": "dmgがarmより小さければ",
    "details": "変数同士の比較です。ダメージより装甲(armor)の方が大きい時です。",
    "terms": [
      [
        "変数比較",
        "数字を直接書かずに変数を使うと柔軟なコードになります。"
      ]
    ],
    "tips": [
      "< の向きに気をつけて。"
    ]
  },
  {
    "level": 3,
    "code": "if hp >= 100:",
    "hint": "hpが100以上なら",
    "details": "HPが100以上の時に発生するイベントの条件です。",
    "terms": [
      [
        "以上",
        "100を含んでそれより大きい数です。"
      ]
    ],
    "tips": [
      ">= の後はスペースを空けて数値を打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if gold >= 1000:",
    "hint": "goldが1000以上なら",
    "details": "お金が1000ゴールド以上貯まった時の条件です。",
    "terms": [
      [
        "条件式",
        "ゲームのアンロック条件によく使われます。"
      ]
    ],
    "tips": [
      "カンマは入れずに1000と打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if combo >= 10:",
    "hint": "comboが10以上なら",
    "details": "10コンボ以上でボーナスが発生する条件です。",
    "terms": [
      [
        "以上 (>=)",
        "条件を緩める（ピッタリも含める）時に使います。"
      ]
    ],
    "tips": [
      "最後に : を忘れずに。"
    ]
  },
  {
    "level": 3,
    "code": "if atk >= def:",
    "hint": "atkがdef以上なら",
    "details": "攻撃力が防御力以上の時（ダメージが通る時）の条件です。",
    "terms": [
      [
        "変数比較",
        "変数同士でも >= が使えます。"
      ]
    ],
    "tips": [
      "右辺が変数でも書き方は同じです。"
    ]
  },
  {
    "level": 3,
    "code": "if hp <= 0:",
    "hint": "hpが0以下なら",
    "details": "「以下（同じか小さい）」を比べる記号は <= です。",
    "terms": [
      [
        "以下 (<=)",
        "必ず < を先に、= を後に書きます。=< はエラーになります。"
      ]
    ],
    "tips": [
      "< と = の間にはスペースを入れません。"
    ]
  },
  {
    "level": 3,
    "code": "if rank <= 3:",
    "hint": "rankが3以下なら",
    "details": "ランキング3位以内（3以下）に入った時の条件です。",
    "terms": [
      [
        "以下",
        "3を含んでそれより小さい数です。"
      ]
    ],
    "tips": [
      "< と = をスムーズに連打しましょう。"
    ]
  },
  {
    "level": 3,
    "code": "if time <= 10:",
    "hint": "timeが10以下なら",
    "details": "残り時間が10秒以下の時のBGM変化などの条件です。",
    "terms": [
      [
        "条件分岐",
        "時間経過で処理を変える時に便利です。"
      ]
    ],
    "tips": [
      "<= の後はスペースを空けて数値を。"
    ]
  },
  {
    "level": 3,
    "code": "if error <= 1:",
    "hint": "errorが1以下なら",
    "details": "ミスが1回以下の時のボーナス条件です。",
    "terms": [
      [
        "以下 (<=)",
        "0やマイナスの時も条件に含まれます。"
      ]
    ],
    "tips": [
      "最後に : を打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if def <= atk:",
    "hint": "defがatk以下なら",
    "details": "防御力が攻撃力以下の時の条件です。",
    "terms": [
      [
        "変数比較",
        "右辺が変数でも <= が使えます。"
      ]
    ],
    "tips": [
      "<= の向きに気をつけて。"
    ]
  },
  {
    "level": 3,
    "code": "if player == 'Alice':",
    "hint": "playerがAliceと等しければ",
    "details": "文字列の比較です。クォートを忘れずに！",
    "terms": [
      [
        "文字列",
        "名前や単語は文字列として扱います。"
      ]
    ],
    "tips": [
      "== 'Alice': と打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if is_ready == True:",
    "hint": "is_readyがTrueと等しければ",
    "details": "準備完了フラグがONかどうかの確認です。",
    "terms": [
      [
        "True",
        "Tは大文字です。"
      ]
    ],
    "tips": [
      "== True: と打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if is_poison == False:",
    "hint": "is_poisonがFalseと等しければ",
    "details": "毒状態ではないかの確認です。",
    "terms": [
      [
        "False",
        "Fは大文字です。"
      ]
    ],
    "tips": [
      "== False: と打ちます。"
    ]
  },
  {
    "level": 3,
    "code": "if score >= target:",
    "hint": "scoreがtarget以上なら",
    "details": "スコアが目標値(target)に達したかの変数同士の比較です。",
    "terms": [
      [
        "変数同士の比較",
        "条件を柔軟に変えたい時によく使います。"
      ]
    ],
    "tips": [
      ">= の向きと順番に注意。"
    ]
  }
];
