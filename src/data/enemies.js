// src/data/enemies.js
// モンスター図鑑と出現候補データ。
// 画像は public/images/monsters 配下に配置し、/images/monsters/<file>.png で参照します。

export const ENEMY_VARIANTS = [
  {
    "id": "aka_slime",
    "name": "アカスライム",
    "rarity": "common",
    "type": "スライム",
    "habitat": "はじまりの草原",
    "description": "クォートの近くでよく転ぶ、ちょっと強気なスライム。",
    "levels": [
      0
    ],
    "image": "/images/monsters/01_アカスライム.png",
    "transferCode": "AKA_SLIME",
    "password": "AKA_SLIME",
    "icon": "🟣",
    "sprite": "🟣",
    "hp": 70,
    "exp": 14
  },
  {
    "id": "ao_slime",
    "name": "アオスライム",
    "rarity": "common",
    "type": "スライム",
    "habitat": "はじまりの草原",
    "description": "水で出来ているという説が有力だ。",
    "levels": [
      0
    ],
    "image": "/images/monsters/02_アオスライム.png",
    "transferCode": "AO_SLIME",
    "password": "AO_SLIME",
    "icon": "💧",
    "sprite": "💧",
    "hp": 71,
    "exp": 15
  },
  {
    "id": "midori_slime",
    "name": "ミドリスライム",
    "rarity": "common",
    "type": "スライム",
    "habitat": "はじまりの草原",
    "description": "はじまりの草原ではのんびりと草に紛れている姿をよく見かけるぞ。",
    "levels": [
      0
    ],
    "image": "/images/monsters/03_ミドリスライム.png",
    "transferCode": "MIDORI_SLIME",
    "password": "MIDORI_SLIME",
    "icon": "🌿",
    "sprite": "🌿",
    "hp": 73,
    "exp": 15
  },
  {
    "id": "kiiro_slime",
    "name": "キイロスライム",
    "rarity": "common",
    "type": "スライム",
    "habitat": "ことばの森",
    "description": "食べることがだいすきで食べた木の実がからだの中にある姿が目撃されている。",
    "levels": [
      1
    ],
    "image": "/images/monsters/04_キイロスライム.png",
    "transferCode": "KIIRO_SLIME",
    "password": "KIIRO_SLIME",
    "icon": "🟡",
    "sprite": "🟡",
    "hp": 74,
    "exp": 16
  },
  {
    "id": "murasaki_slime",
    "name": "ムラサキスライム",
    "rarity": "common",
    "type": "スライム",
    "habitat": "ことばの森",
    "description": "暗い場所がすきで湿った森のこかげに生息しているぞ。",
    "levels": [
      1
    ],
    "image": "/images/monsters/05_ムラサキスライム.png",
    "transferCode": "MURASAKI_SLIME",
    "password": "MURASAKI_SLIME",
    "icon": "🟣",
    "sprite": "🟣",
    "hp": 75,
    "exp": 16
  },
  {
    "id": "rainbow_slime",
    "name": "レインボースライム",
    "rarity": "rare",
    "type": "スライム",
    "habitat": "はじまりの草原",
    "description": "なんか派手。とにかく派手。でも派手なだけじゃない頑張りやさん。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/06_レインボースライム.png",
    "transferCode": "RAINBOW_SLIME",
    "password": "RAINBOW_SLIME",
    "icon": "🌈",
    "sprite": "🌈",
    "hp": 133,
    "exp": 40
  },
  {
    "id": "kokko",
    "name": "コッコー",
    "rarity": "common",
    "type": "鳥",
    "habitat": "ことばの森",
    "description": "どこ？こっこー。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/07_コッコー.png",
    "transferCode": "KOKKO",
    "password": "KOKKO",
    "icon": "🐤",
    "sprite": "🐤",
    "hp": 73,
    "exp": 15
  },
  {
    "id": "space_man",
    "name": "スペースマン",
    "rarity": "epic",
    "type": "ヒーロー",
    "habitat": "はじまりの草原",
    "description": "とにかく間を空けたがる。ソーシャルディスタンスの化身。",
    "levels": [
      0
    ],
    "image": "/images/monsters/08_スペースマン.png",
    "transferCode": "SPACE_MAN",
    "password": "SPACE_MAN",
    "icon": "🧑‍🚀",
    "sprite": "🧑‍🚀",
    "hp": 191,
    "exp": 66
  },
  {
    "id": "keyboard_dragon",
    "name": "キーボードドラゴン",
    "rarity": "epic",
    "type": "ドラゴン",
    "habitat": "分岐の火山",
    "description": "PC限定。キー入力の気配を感じると目を覚ますドラゴン。",
    "levels": [
      3
    ],
    "image": "/images/monsters/09_キーボードドラゴン.png",
    "transferCode": "KEYBOARD_DRAGON",
    "password": "KEYBOARD_DRAGON",
    "icon": "🐉",
    "sprite": "🐉",
    "hp": 197,
    "exp": 68
  },
  {
    "id": "mouse",
    "name": "マウス",
    "rarity": "rare",
    "type": "動物",
    "habitat": "はじまりの草原",
    "description": "世界三大マウスのひとつ。あとの二つは不明。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/10_マウス.png",
    "transferCode": "MOUSE",
    "password": "MOUSE",
    "icon": "🖱️",
    "sprite": "🖱️",
    "hp": 131,
    "exp": 39
  },
  {
    "id": "mandragora",
    "name": "マンドラゴラ",
    "rarity": "common",
    "type": "植物",
    "habitat": "ことばの森",
    "description": "別に歩いたりはしない。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/11_マンドラゴラ.png",
    "transferCode": "MANDRAGORA",
    "password": "MANDRAGORA",
    "icon": "🌱",
    "sprite": "🌱",
    "hp": 77,
    "exp": 16
  },
  {
    "id": "enter_dragon",
    "name": "エンタードラゴン",
    "rarity": "epic",
    "type": "ドラゴン",
    "habitat": "分岐の火山",
    "description": "黒い方のラスボスとは関係がない。",
    "levels": [
      3
    ],
    "image": "/images/monsters/12_エンタードラゴン.png",
    "transferCode": "ENTER_DRAGON",
    "password": "ENTER_DRAGON",
    "icon": "🐉",
    "sprite": "🐉",
    "hp": 200,
    "exp": 70
  },
  {
    "id": "space_slime",
    "name": "スペーススライム",
    "rarity": "common",
    "type": "スライム",
    "habitat": "その他",
    "description": "宇宙空間、キーボードのすき間。半角スペースを食べて消してしまうぬるぬるスライム。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/13_スペーススライム.png",
    "transferCode": "SPACE_SLIME",
    "password": "SPACE_SLIME",
    "icon": "🫧",
    "sprite": "🫧",
    "hp": 78,
    "exp": 17
  },
  {
    "id": "quote_bat",
    "name": "クォートバット",
    "rarity": "common",
    "type": "コウモリ",
    "habitat": "ことばの森",
    "description": "暗い洞窟、文字列の巣穴。文字列のクォートを奪い去るコウモリ。",
    "levels": [
      1
    ],
    "image": "/images/monsters/14_クォートバット.png",
    "transferCode": "QUOTE_BAT",
    "password": "QUOTE_BAT",
    "icon": "🦇",
    "sprite": "🦇",
    "hp": 75,
    "exp": 16
  },
  {
    "id": "colon_ghost",
    "name": "コロンゴースト",
    "rarity": "uncommon",
    "type": "幽霊",
    "habitat": "分岐の火山",
    "description": "コードブロックの境界、静かな墓地。行末のコロンを消してしまう幽霊。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/15_コロンゴースト.png",
    "transferCode": "COLON_GHOST",
    "password": "COLON_GHOST",
    "icon": "👻",
    "sprite": "👻",
    "hp": 102,
    "exp": 26
  },
  {
    "id": "equal_slime",
    "name": "イコールスライム",
    "rarity": "uncommon",
    "type": "スライム",
    "habitat": "演算の洞窟",
    "description": "判定式の沼、比較演算子の湿地。= と == を入れ替えてくるスライム。",
    "levels": [
      0,
      1,
      2
    ],
    "image": "/images/monsters/16_イコールスライム.png",
    "transferCode": "EQUAL_SLIME",
    "password": "EQUAL_SLIME",
    "icon": "🫧",
    "sprite": "🫧",
    "hp": 104,
    "exp": 27
  },
  {
    "id": "true_fairy",
    "name": "トゥルーフェアリー",
    "rarity": "rare",
    "type": "妖精",
    "habitat": "ことばの森",
    "description": "真偽の森、光る花畑。True と false を入れ替えてしまういたずら好きの妖精。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/17_トゥルーフェアリー.png",
    "transferCode": "TRUE_FAIRY",
    "password": "TRUE_FAIRY",
    "icon": "🧚",
    "sprite": "🧚",
    "hp": 136,
    "exp": 41
  },
  {
    "id": "asterisk_mush",
    "name": "アスタリスクマッシュ",
    "rarity": "rare",
    "type": "キノコ",
    "habitat": "演算の洞窟",
    "description": "演算子の森、胞子舞う草むら。かけ算の * をバツの × にすり替えるキノコ。",
    "levels": [
      2
    ],
    "image": "/images/monsters/18_アスタリスクマッシュ.png",
    "transferCode": "ASTERISK_MUSH",
    "password": "ASTERISK_MUSH",
    "icon": "🍄",
    "sprite": "🍄",
    "hp": 139,
    "exp": 42
  },
  {
    "id": "slash_snail",
    "name": "スラッシュスネイル",
    "rarity": "rare",
    "type": "カタツムリ",
    "habitat": "その他",
    "description": "湿ったパスの道、割り算の小川。割り算の / を ÷ に変えてしまうのろのろカタツムリ。",
    "levels": [
      0,
      1,
      2
    ],
    "image": "/images/monsters/19_スラッシュスネイル.png",
    "transferCode": "SLASH_SNAIL",
    "password": "SLASH_SNAIL",
    "icon": "🐌",
    "sprite": "🐌",
    "hp": 142,
    "exp": 43
  },
  {
    "id": "crater_drake",
    "name": "クレータードレイク",
    "rarity": "epic",
    "type": "ドレイク",
    "habitat": "分岐の火山",
    "description": "火山のクレーター、比較演算子の岩場。不等号の向きをひっくり返すドレイク。",
    "levels": [
      3
    ],
    "image": "/images/monsters/20_クレータードレイク.png",
    "transferCode": "CRATER_DRAKE",
    "password": "CRATER_DRAKE",
    "icon": "🐲",
    "sprite": "🐲",
    "hp": 203,
    "exp": 70
  },
  {
    "id": "indent_ooze",
    "name": "インデントウーズ",
    "rarity": "epic",
    "type": "ウーズ",
    "habitat": "分岐の火山",
    "description": "インデントの迷路、コードの段差地帯。インデントをズラしてコードを崩す液体。",
    "levels": [
      3
    ],
    "image": "/images/monsters/21_インデントウーズ.png",
    "transferCode": "INDENT_OOZE",
    "password": "INDENT_OOZE",
    "icon": "🫠",
    "sprite": "🫠",
    "hp": 206,
    "exp": 71
  },
  {
    "id": "misspellagon",
    "name": "ミススペラゴン",
    "rarity": "epic",
    "type": "ドラゴン",
    "habitat": "ことばの森",
    "description": "変数名の山脈、スペルミスの氷原。変数名の1文字をこっそり変える伝説のドラゴン。",
    "levels": [
      1
    ],
    "image": "/images/monsters/22_ミススペラゴン.png",
    "transferCode": "MISSPELLAGON",
    "password": "MISSPELLAGON",
    "icon": "🐉",
    "sprite": "🐉",
    "hp": 189,
    "exp": 64
  },
  {
    "id": "fullwide_ogre",
    "name": "フルワイドオーガ",
    "rarity": "uncommon",
    "type": "鬼",
    "habitat": "演算の洞窟",
    "description": "半角しか通れない洞窟に住む鬼。全角スペースをばらまく。",
    "levels": [
      2
    ],
    "image": "/images/monsters/23_フルワイドオーガ.png",
    "transferCode": "FULLWIDE_OGRE",
    "password": "FULLWIDE_OGRE",
    "icon": "👹",
    "sprite": "👹",
    "hp": 107,
    "exp": 28
  },
  {
    "id": "quote_eater",
    "name": "クォートイーター",
    "rarity": "common",
    "type": "トカゲ",
    "habitat": "ことばの森",
    "description": "文字列の終わりを食べてしまうトカゲ。name = 'Taro みたいな呪文を生み出す。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/24_クォートイーター.png",
    "transferCode": "QUOTE_EATER",
    "password": "QUOTE_EATER",
    "icon": "🦎",
    "sprite": "🦎",
    "hp": 78,
    "exp": 17
  },
  {
    "id": "colon_cobra",
    "name": "コロンコブラ",
    "rarity": "common",
    "type": "毒蛇",
    "habitat": "分岐の火山",
    "description": "行末の : を盗んでいく毒蛇。if hp > 0 を好む。",
    "levels": [
      3
    ],
    "image": "/images/monsters/25_コロンコブラ.png",
    "transferCode": "COLON_COBRA",
    "password": "COLON_COBRA",
    "icon": "🐍",
    "sprite": "🐍",
    "hp": 80,
    "exp": 17
  },
  {
    "id": "double_equal_knight",
    "name": "ダブルイコールナイト",
    "rarity": "rare",
    "type": "騎士",
    "habitat": "演算の洞窟",
    "description": "判定と代入を混乱させる騎士。if hp = 0 を投げつけてくる。",
    "levels": [
      2
    ],
    "image": "/images/monsters/26_ダブルイコールナイト.png",
    "transferCode": "DOUBLE_EQUAL_KNIGHT",
    "password": "DOUBLE_EQUAL_KNIGHT",
    "icon": "🛡️",
    "sprite": "🛡️",
    "hp": 145,
    "exp": 44
  },
  {
    "id": "false_wisp",
    "name": "フォールスウィスプ",
    "rarity": "uncommon",
    "type": "迷い火",
    "habitat": "ことばの森",
    "description": "小文字の false を囁く迷い火。alive = false で初心者を森に迷わせる。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/27_フォールスウィスプ.png",
    "transferCode": "FALSE_WISP",
    "password": "FALSE_WISP",
    "icon": "🔥",
    "sprite": "🔥",
    "hp": 99,
    "exp": 25
  },
  {
    "id": "true_angel",
    "name": "トゥルーエンジェル",
    "rarity": "rare",
    "type": "天使",
    "habitat": "分岐の火山",
    "description": "美しい見た目に反して、True を true に変えてしまう困った天使。",
    "levels": [
      3
    ],
    "image": "/images/monsters/28_トゥルーエンジェル.png",
    "transferCode": "TRUE_ANGEL",
    "password": "TRUE_ANGEL",
    "icon": "👼",
    "sprite": "👼",
    "hp": 148,
    "exp": 45
  },
  {
    "id": "zero_divider",
    "name": "ゼロディバイダー",
    "rarity": "epic",
    "type": "古竜",
    "habitat": "分岐の火山",
    "description": "禁断の 10 / 0 を操る古竜。二つ名は計算を終わらせる者。",
    "levels": [
      3
    ],
    "image": "/images/monsters/29_ゼロディバイダー.png",
    "transferCode": "ZERO_DIVIDER",
    "password": "ZERO_DIVIDER",
    "icon": "🐲",
    "sprite": "🐲",
    "hp": 215,
    "exp": 74
  },
  {
    "id": "paren_golem",
    "name": "パレンゴーレム",
    "rarity": "common",
    "type": "巨人",
    "habitat": "関数の海",
    "description": "括弧でできた巨人。たまに腕を落として print(\"Hello\" を作る。",
    "levels": [
      4
    ],
    "image": "/images/monsters/30_パレンゴーレム.png",
    "transferCode": "PAREN_GOLEM",
    "password": "PAREN_GOLEM",
    "icon": "🗿",
    "sprite": "🗿",
    "hp": 81,
    "exp": 18
  },
  {
    "id": "tab_phantom",
    "name": "タブファントム",
    "rarity": "uncommon",
    "type": "亡霊",
    "habitat": "分岐の火山",
    "description": "インデントの迷宮に棲む亡霊。スペースとタブを混ぜてコードを崩壊させる。",
    "levels": [
      3
    ],
    "image": "/images/monsters/31_タブファントム.png",
    "transferCode": "TAB_PHANTOM",
    "password": "TAB_PHANTOM",
    "icon": "👻",
    "sprite": "👻",
    "hp": 110,
    "exp": 29
  },
  {
    "id": "lineage_worm",
    "name": "リネージュワーム",
    "rarity": "rare",
    "type": "虫",
    "habitat": "演算の洞窟",
    "description": "改行を食べる虫。if hp > 0: print(\"OK\") みたいな呪文を無理やり繋げようとする。",
    "levels": [
      2
    ],
    "image": "/images/monsters/32_リネージュワーム.png",
    "transferCode": "LINEAGE_WORM",
    "password": "LINEAGE_WORM",
    "icon": "🐛",
    "sprite": "🐛",
    "hp": 144,
    "exp": 43
  },
  {
    "id": "halfspace_rabbit",
    "name": "ハーフスペースラビット",
    "rarity": "common",
    "type": "ウサギ",
    "habitat": "分岐の火山",
    "description": "if文の後ろのスペースを奪い去るウサギ。if(x > 0): のようなバグを引き起こす。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/33_ハーフスペースラビット.png",
    "transferCode": "HALFSPACE_RABBIT",
    "password": "HALFSPACE_RABBIT",
    "icon": "🐰",
    "sprite": "🐰",
    "hp": 80,
    "exp": 17
  },
  {
    "id": "overwrite_orc",
    "name": "オーバーライトオーク",
    "rarity": "uncommon",
    "type": "オーク",
    "habitat": "ことばの森",
    "description": "変数を上書きしてしまうオーク。初心者が前の値どこ行ったと叫ぶ原因。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/34_オーバーライトオーク.png",
    "transferCode": "OVERWRITE_ORC",
    "password": "OVERWRITE_ORC",
    "icon": "👹",
    "sprite": "👹",
    "hp": 107,
    "exp": 28
  },
  {
    "id": "number_mimic",
    "name": "ナンバーミミック",
    "rarity": "rare",
    "type": "ミミック",
    "habitat": "演算の洞窟",
    "description": "数値をクォートで囲んで文字に変えてしまうミミック。見た目は数字だが中身は文字。",
    "levels": [
      2
    ],
    "image": "/images/monsters/35_ナンバーミミック.png",
    "transferCode": "NUMBER_MIMIC",
    "password": "NUMBER_MIMIC",
    "icon": "🎁",
    "sprite": "🎁",
    "hp": 145,
    "exp": 44
  },
  {
    "id": "string_snake",
    "name": "ストリングスネーク",
    "rarity": "uncommon",
    "type": "蛇",
    "habitat": "演算の洞窟",
    "description": "文字列と数値を混ぜて \"5\" + 5 のようなエラーを吐き出す蛇。",
    "levels": [
      0,
      1,
      2
    ],
    "image": "/images/monsters/36_ストリングスネーク.png",
    "transferCode": "STRING_SNAKE",
    "password": "STRING_SNAKE",
    "icon": "🐍",
    "sprite": "🐍",
    "hp": 104,
    "exp": 27
  },
  {
    "id": "plus_goblin",
    "name": "プラスゴブリン",
    "rarity": "common",
    "type": "ゴブリン",
    "habitat": "演算の洞窟",
    "description": "文字列の結合を失敗させるゴブリン。name + age で初心者を泣かせる。",
    "levels": [
      0,
      1,
      2
    ],
    "image": "/images/monsters/37_プラスゴブリン.png",
    "transferCode": "PLUS_GOBLIN",
    "password": "PLUS_GOBLIN",
    "icon": "👺",
    "sprite": "👺",
    "hp": 81,
    "exp": 18
  },
  {
    "id": "comma_crow",
    "name": "コンマクロウ",
    "rarity": "common",
    "type": "カラス",
    "habitat": "リストの遺跡",
    "description": "カンマを奪い去るカラス。print(\"A\" \"B\") や [1 2 3] のような構文をばらまく。",
    "levels": [
      5
    ],
    "image": "/images/monsters/38_コンマクロウ.png",
    "transferCode": "COMMA_CROW",
    "password": "COMMA_CROW",
    "icon": "🐦",
    "sprite": "🐦",
    "hp": 77,
    "exp": 16
  },
  {
    "id": "bracket_spider",
    "name": "ブラケットスパイダー",
    "rarity": "uncommon",
    "type": "クモ",
    "habitat": "リストの遺跡",
    "description": "[]の片方を閉め忘れるクモ。八本足のうち一本がいつも足りない。",
    "levels": [
      5
    ],
    "image": "/images/monsters/39_ブラケットスパイダー.png",
    "transferCode": "BRACKET_SPIDER",
    "password": "BRACKET_SPIDER",
    "icon": "🕷️",
    "sprite": "🕷️",
    "hp": 110,
    "exp": 29
  },
  {
    "id": "kakko_crab",
    "name": "カッコクラブ",
    "rarity": "common",
    "type": "カニ",
    "habitat": "関数の海",
    "description": "()の片方を閉め忘れるカニ。ハサミが片方ない。",
    "levels": [
      0,
      1,
      4
    ],
    "image": "/images/monsters/40_カッコクラブ.png",
    "transferCode": "KAKKO_CRAB",
    "password": "KAKKO_CRAB",
    "icon": "🦀",
    "sprite": "🦀",
    "hp": 78,
    "exp": 17
  },
  {
    "id": "dent_mole",
    "name": "デントモグラ",
    "rarity": "common",
    "type": "モグラ",
    "habitat": "分岐の火山",
    "description": "インデントを削り取るモグラ。地面を掘ってコードの行を沈める。",
    "levels": [
      0
    ],
    "image": "/images/monsters/41_デントモグラ.png",
    "transferCode": "DENT_MOLE",
    "password": "DENT_MOLE",
    "icon": "⛏️",
    "sprite": "⛏️",
    "hp": 80,
    "exp": 17
  },
  {
    "id": "outdent_mole",
    "name": "アウトデントモグラ",
    "rarity": "common",
    "type": "モグラ",
    "habitat": "分岐の火山",
    "description": "インデントを無駄に増やしてしまうモグラ。デントモグラの亜種。",
    "levels": [
      0
    ],
    "image": "/images/monsters/42_アウトデントモグラ.png",
    "transferCode": "OUTDENT_MOLE",
    "password": "OUTDENT_MOLE",
    "icon": "⛏️",
    "sprite": "⛏️",
    "hp": 81,
    "exp": 18
  },
  {
    "id": "typo_kobold",
    "name": "タイポコボルト",
    "rarity": "common",
    "type": "コボルト",
    "habitat": "ことばの森",
    "description": "変数名のタイポを引き起こすコボルト。score を socre にしてしまう。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/43_タイポコボルト.png",
    "transferCode": "TYPO_KOBOLD",
    "password": "TYPO_KOBOLD",
    "icon": "👺",
    "sprite": "👺",
    "hp": 78,
    "exp": 17
  },
  {
    "id": "camel_wolf",
    "name": "キャメルウルフ",
    "rarity": "uncommon",
    "type": "狼",
    "habitat": "ことばの森",
    "description": "命名規則を混ぜ合わせる狼。playerName と player_name を混在させる。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/44_キャメルウルフ.png",
    "transferCode": "CAMEL_WOLF",
    "password": "CAMEL_WOLF",
    "icon": "🐺",
    "sprite": "🐺",
    "hp": 107,
    "exp": 28
  },
  {
    "id": "under_bird",
    "name": "アンダーバード",
    "rarity": "common",
    "type": "鳥",
    "habitat": "ことばの森",
    "description": "アンダースコアを奪い去る鳥。player_name を playername に変えて飛び去る。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/45_アンダーバード.png",
    "transferCode": "UNDER_BIRD",
    "password": "UNDER_BIRD",
    "icon": "🐦",
    "sprite": "🐦",
    "hp": 77,
    "exp": 16
  },
  {
    "id": "return_wraith",
    "name": "リターンレイス",
    "rarity": "rare",
    "type": "亡霊",
    "habitat": "関数の海",
    "description": "関数から戻ってこない亡霊。returnを忘れさせてしまう。",
    "levels": [
      4
    ],
    "image": "/images/monsters/46_リターンレイス.png",
    "transferCode": "RETURN_WRAITH",
    "password": "RETURN_WRAITH",
    "icon": "👻",
    "sprite": "👻",
    "hp": 146,
    "exp": 45
  },
  {
    "id": "none_golem",
    "name": "ノンゴーレム",
    "rarity": "rare",
    "type": "石像",
    "habitat": "関数の海",
    "description": "Noneの誤用を広める石像。noneと書かせてエラーを誘う。",
    "levels": [
      4
    ],
    "image": "/images/monsters/47_ノンゴーレム.png",
    "transferCode": "NONE_GOLEM",
    "password": "NONE_GOLEM",
    "icon": "🗿",
    "sprite": "🗿",
    "hp": 145,
    "exp": 44
  },
  {
    "id": "bool_bee",
    "name": "ブールビー",
    "rarity": "common",
    "type": "蜂",
    "habitat": "分岐の火山",
    "description": "TrueとFalseを混乱させる蜂。トゥルーフェアリーの手下。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/48_ブールビー.png",
    "transferCode": "BOOL_BEE",
    "password": "BOOL_BEE",
    "icon": "🐝",
    "sprite": "🐝",
    "hp": 80,
    "exp": 17
  },
  {
    "id": "loop_wyvern",
    "name": "ループワイバーン",
    "rarity": "epic",
    "type": "ワイバーン",
    "habitat": "繰り返しの塔",
    "description": "永遠に飛び続ける竜。無限ループを引き起こす。",
    "levels": [
      6
    ],
    "image": "/images/monsters/49_ループワイバーン.png",
    "transferCode": "LOOP_WYVERN",
    "password": "LOOP_WYVERN",
    "icon": "🐉",
    "sprite": "🐉",
    "hp": 212,
    "exp": 73
  },
  {
    "id": "error_collector",
    "name": "エラーコレクター",
    "rarity": "epic",
    "type": "キメラ",
    "habitat": "バグの深淵",
    "description": "クォート忘れ、コロン忘れ、スペース忘れを同時に引き起こす最悪のキメラ。",
    "levels": [
      7
    ],
    "image": "/images/monsters/50_エラーコレクター.png",
    "transferCode": "ERROR_COLLECTOR",
    "password": "ERROR_COLLECTOR",
    "icon": "🧬",
    "sprite": "🧬",
    "hp": 218,
    "exp": 75
  },
  {
    "id": "bug_leaf",
    "name": "バグリーフ",
    "rarity": "common",
    "type": "植物",
    "habitat": "はじまりの草原",
    "description": "草むらにまぎれて小さなバグの芽を出す葉っぱのモンスター。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/51_バグリーフ.png",
    "transferCode": "BUG_LEAF",
    "password": "BUG_LEAF",
    "icon": "🍃",
    "sprite": "🍃",
    "hp": 73,
    "exp": 15
  },
  {
    "id": "snippet_sheep",
    "name": "スニペットシープ",
    "rarity": "common",
    "type": "羊",
    "habitat": "はじまりの草原",
    "description": "短いコード片を毛玉のように集めて眠る、ふわふわの羊。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/52_スニペットシープ.png",
    "transferCode": "SNIPPET_SHEEP",
    "password": "SNIPPET_SHEEP",
    "icon": "🐑",
    "sprite": "🐑",
    "hp": 74,
    "exp": 16
  },
  {
    "id": "semicolon_ferret",
    "name": "セミコロンフェレット",
    "rarity": "common",
    "type": "フェレット",
    "habitat": "はじまりの草原",
    "description": "いらないセミコロンをこっそり拾って走り去るすばしっこい子。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/53_セミコロンフェレット.png",
    "transferCode": "SEMICOLON_FERRET",
    "password": "SEMICOLON_FERRET",
    "icon": "❔",
    "sprite": "❔",
    "hp": 75,
    "exp": 16
  },
  {
    "id": "double_quote_rabbit",
    "name": "ダブルクォートラビット",
    "rarity": "common",
    "type": "ウサギ",
    "habitat": "ことばの森",
    "description": "二つのダブルクォートを耳飾りにして、文字列の入口で跳ねている。",
    "levels": [
      1
    ],
    "image": "/images/monsters/54_ダブルクォートラビット.png",
    "transferCode": "DOUBLE_QUOTE_RABBIT",
    "password": "DOUBLE_QUOTE_RABBIT",
    "icon": "🐰",
    "sprite": "🐰",
    "hp": 75,
    "exp": 16
  },
  {
    "id": "dot_squirrel",
    "name": "ドットリス",
    "rarity": "common",
    "type": "リス",
    "habitat": "ことばの森",
    "description": "小さなドットを木の実みたいに集める。メソッド呼び出しの近くが好き。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/55_ドットリス.png",
    "transferCode": "DOT_SQUIRREL",
    "password": "DOT_SQUIRREL",
    "icon": "•",
    "sprite": "•",
    "hp": 77,
    "exp": 16
  },
  {
    "id": "case_moth",
    "name": "ケースモス",
    "rarity": "uncommon",
    "type": "蛾",
    "habitat": "ことばの森",
    "description": "大文字と小文字の光に引き寄せられ、名前の表記をふわりと揺らす。",
    "levels": [
      0
    ],
    "image": "/images/monsters/56_ケースモス.png",
    "transferCode": "CASE_MOTH",
    "password": "CASE_MOTH",
    "icon": "🦋",
    "sprite": "🦋",
    "hp": 99,
    "exp": 25
  },
  {
    "id": "name_tag_wisp",
    "name": "ネームタグウィスプ",
    "rarity": "uncommon",
    "type": "迷い火",
    "habitat": "ことばの森",
    "description": "変数名の名札を付け替える青白い迷い火。呼びたい相手を少し迷わせる。",
    "levels": [
      0
    ],
    "image": "/images/monsters/57_ネームタグウィスプ.png",
    "transferCode": "NAME_TAG_WISP",
    "password": "NAME_TAG_WISP",
    "icon": "🔥",
    "sprite": "🔥",
    "hp": 102,
    "exp": 26
  },
  {
    "id": "console_crab",
    "name": "コンソールクラブ",
    "rarity": "uncommon",
    "type": "カニ",
    "habitat": "ことばの森",
    "description": "ログの貝殻を背負ったカニ。console の文字を見ると横歩きで寄ってくる。",
    "levels": [
      1
    ],
    "image": "/images/monsters/58_コンソールクラブ.png",
    "transferCode": "CONSOLE_CRAB",
    "password": "CONSOLE_CRAB",
    "icon": "🦀",
    "sprite": "🦀",
    "hp": 104,
    "exp": 27
  },
  {
    "id": "comment_fox",
    "name": "コメントフォックス",
    "rarity": "rare",
    "type": "狐",
    "habitat": "はじまりの草原",
    "description": "コメントのしっぽでコードを隠す。親切そうで少しだけいたずら好き。",
    "levels": [
      0
    ],
    "image": "/images/monsters/59_コメントフォックス.png",
    "transferCode": "COMMENT_FOX",
    "password": "COMMENT_FOX",
    "icon": "🦊",
    "sprite": "🦊",
    "hp": 133,
    "exp": 40
  },
  {
    "id": "syntax_pegasus",
    "name": "シンタックスペガサス",
    "rarity": "epic",
    "type": "ペガサス",
    "habitat": "ことばの森",
    "description": "きれいな構文の風に乗って現れる翼ある馬。乱れた文を一瞬で見抜く。",
    "levels": [
      1
    ],
    "image": "/images/monsters/60_シンタックスペガサス.png",
    "transferCode": "SYNTAX_PEGASUS",
    "password": "SYNTAX_PEGASUS",
    "icon": "🪽",
    "sprite": "🪽",
    "hp": 186,
    "exp": 63
  },
  {
    "id": "cursor_pudding",
    "name": "カーソルプディング",
    "rarity": "common",
    "type": "スライム",
    "habitat": "はじまりの草原",
    "description": "点滅するカーソルを頭に乗せた、ぷるぷるのプリン型スライム。入力待ちが得意。",
    "levels": [
      0
    ],
    "image": "/images/monsters/61_カーソルプディング.png",
    "transferCode": "CURSOR_PUDDING",
    "password": "CURSOR_PUDDING",
    "icon": "🍮",
    "sprite": "🍮",
    "hp": 73,
    "exp": 15
  },
  {
    "id": "pixel_sprout",
    "name": "ピクセルスプラウト",
    "rarity": "common",
    "type": "植物",
    "habitat": "はじまりの草原",
    "description": "四角い葉っぱを持つ小さな芽。近くで見るとドット絵みたいに見える。",
    "levels": [
      0
    ],
    "image": "/images/monsters/62_ピクセルスプラウト.png",
    "transferCode": "PIXEL_SPROUT",
    "password": "PIXEL_SPROUT",
    "icon": "🌱",
    "sprite": "🌱",
    "hp": 71,
    "exp": 15
  },
  {
    "id": "hash_hedge",
    "name": "ハッシュヘッジ",
    "rarity": "common",
    "type": "植物",
    "habitat": "はじまりの草原",
    "description": "井げた模様の枝を広げる生け垣モンスター。コメントの入口を守っている。",
    "levels": [
      0
    ],
    "image": "/images/monsters/63_ハッシュヘッジ.png",
    "transferCode": "HASH_HEDGE",
    "password": "HASH_HEDGE",
    "icon": "#",
    "sprite": "#",
    "hp": 75,
    "exp": 16
  },
  {
    "id": "byte_mouse",
    "name": "バイトマウス",
    "rarity": "common",
    "type": "動物",
    "habitat": "はじまりの草原",
    "description": "小さなデータのかけらを頬袋にためこむ。走るとビットの足跡が残る。",
    "levels": [
      0
    ],
    "image": "/images/monsters/64_バイトマウス.png",
    "transferCode": "BYTE_MOUSE",
    "password": "BYTE_MOUSE",
    "icon": "🐭",
    "sprite": "🐭",
    "hp": 74,
    "exp": 16
  },
  {
    "id": "tap_toad",
    "name": "タップトード",
    "rarity": "common",
    "type": "カエル",
    "habitat": "はじまりの草原",
    "description": "キーを押す音に合わせて跳ねるカエル。短い舌でミスタイプをつつく。",
    "levels": [
      0
    ],
    "image": "/images/monsters/65_タップトード.png",
    "transferCode": "TAP_TOAD",
    "password": "TAP_TOAD",
    "icon": "🐸",
    "sprite": "🐸",
    "hp": 77,
    "exp": 16
  },
  {
    "id": "mini_cache_cat",
    "name": "ミニキャッシュキャット",
    "rarity": "common",
    "type": "猫",
    "habitat": "はじまりの草原",
    "description": "覚えた単語をしっぽの中にしまう小さな猫。たまに古い答えを出してくる。",
    "levels": [
      0
    ],
    "image": "/images/monsters/66_ミニキャッシュキャット.png",
    "transferCode": "MINI_CACHE_CAT",
    "password": "MINI_CACHE_CAT",
    "icon": "🐱",
    "sprite": "🐱",
    "hp": 78,
    "exp": 17
  },
  {
    "id": "memo_mushroom",
    "name": "メモマッシュルーム",
    "rarity": "common",
    "type": "キノコ",
    "habitat": "はじまりの草原",
    "description": "傘に短いメモの模様を浮かべるキノコ。覚えたことを忘れにくい。",
    "levels": [
      0
    ],
    "image": "/images/monsters/67_メモマッシュルーム.png",
    "transferCode": "MEMO_MUSHROOM",
    "password": "MEMO_MUSHROOM",
    "icon": "🍄",
    "sprite": "🍄",
    "hp": 75,
    "exp": 16
  },
  {
    "id": "soft_bug",
    "name": "ソフトバグ",
    "rarity": "common",
    "type": "虫",
    "habitat": "はじまりの草原",
    "description": "見た目はやわらかいが、放っておくと小さな不具合を連れてくる。",
    "levels": [
      0
    ],
    "image": "/images/monsters/68_ソフトバグ.png",
    "transferCode": "SOFT_BUG",
    "password": "SOFT_BUG",
    "icon": "🐛",
    "sprite": "🐛",
    "hp": 73,
    "exp": 15
  },
  {
    "id": "line_seed",
    "name": "ラインシード",
    "rarity": "common",
    "type": "植物",
    "habitat": "はじまりの草原",
    "description": "一行だけの呪文を実らせる種。水をあげるとコードの芽が伸びる。",
    "levels": [
      0
    ],
    "image": "/images/monsters/69_ラインシード.png",
    "transferCode": "LINE_SEED",
    "password": "LINE_SEED",
    "icon": "🌾",
    "sprite": "🌾",
    "hp": 80,
    "exp": 17
  },
  {
    "id": "blink_bunny",
    "name": "ブリンクバニー",
    "rarity": "common",
    "type": "ウサギ",
    "habitat": "はじまりの草原",
    "description": "点滅する耳を持つウサギ。見失ったカーソルの場所を教えてくれる。",
    "levels": [
      0
    ],
    "image": "/images/monsters/70_ブリンクバニー.png",
    "transferCode": "BLINK_BUNNY",
    "password": "BLINK_BUNNY",
    "icon": "🐰",
    "sprite": "🐰",
    "hp": 81,
    "exp": 18
  },
  {
    "id": "bracket_bloom",
    "name": "ブラケットブルーム",
    "rarity": "uncommon",
    "type": "花",
    "habitat": "はじまりの草原",
    "description": "花びらが角括弧のように開く不思議な花。閉じ忘れを見つけると揺れる。",
    "levels": [
      0
    ],
    "image": "/images/monsters/71_ブラケットブルーム.png",
    "transferCode": "BRACKET_BLOOM",
    "password": "BRACKET_BLOOM",
    "icon": "🌸",
    "sprite": "🌸",
    "hp": 99,
    "exp": 25
  },
  {
    "id": "patch_porcupine",
    "name": "パッチポーキュパイン",
    "rarity": "uncommon",
    "type": "獣",
    "habitat": "はじまりの草原",
    "description": "背中の針が小さな修正パッチになっている。仲間のほころびを直す。",
    "levels": [
      0
    ],
    "image": "/images/monsters/72_パッチポーキュパイン.png",
    "transferCode": "PATCH_PORCUPINE",
    "password": "PATCH_PORCUPINE",
    "icon": "🧩",
    "sprite": "🧩",
    "hp": 104,
    "exp": 27
  },
  {
    "id": "token_turtle",
    "name": "トークンタートル",
    "rarity": "uncommon",
    "type": "カメ",
    "habitat": "はじまりの草原",
    "description": "甲羅に小さな記号を並べて歩くカメ。ゆっくりだが解析は正確。",
    "levels": [
      0
    ],
    "image": "/images/monsters/73_トークンタートル.png",
    "transferCode": "TOKEN_TURTLE",
    "password": "TOKEN_TURTLE",
    "icon": "🐢",
    "sprite": "🐢",
    "hp": 110,
    "exp": 29
  },
  {
    "id": "log_lantern",
    "name": "ログランタン",
    "rarity": "uncommon",
    "type": "ランタン",
    "habitat": "はじまりの草原",
    "description": "過去のログを淡く照らすランタン。困った時だけふわりと明るくなる。",
    "levels": [
      0
    ],
    "image": "/images/monsters/74_ログランタン.png",
    "transferCode": "LOG_LANTERN",
    "password": "LOG_LANTERN",
    "icon": "🏮",
    "sprite": "🏮",
    "hp": 102,
    "exp": 26
  },
  {
    "id": "array_alpaca",
    "name": "アレイアルパカ",
    "rarity": "rare",
    "type": "獣",
    "habitat": "はじまりの草原",
    "description": "背中の毛が整列した箱のように並ぶアルパカ。順番を守るのが好き。",
    "levels": [
      0
    ],
    "image": "/images/monsters/75_アレイアルパカ.png",
    "transferCode": "ARRAY_ALPACA",
    "password": "ARRAY_ALPACA",
    "icon": "🦙",
    "sprite": "🦙",
    "hp": 133,
    "exp": 40
  },
  {
    "id": "compile_chick",
    "name": "コンパイルチック",
    "rarity": "rare",
    "type": "鳥",
    "habitat": "はじまりの草原",
    "description": "卵の殻に小さな歯車をつけたひよこ。失敗すると赤く光って知らせる。",
    "levels": [
      0
    ],
    "image": "/images/monsters/76_コンパイルチック.png",
    "transferCode": "COMPILE_CHICK",
    "password": "COMPILE_CHICK",
    "icon": "🐥",
    "sprite": "🐥",
    "hp": 142,
    "exp": 43
  },
  {
    "id": "glitch_chimera_pup",
    "name": "グリッチキメラパップ",
    "rarity": "epic",
    "type": "キメラ",
    "habitat": "はじまりの草原",
    "description": "複数の小さなバグが合体した幼いキメラ。かわいい顔で画面を少し歪ませる。",
    "levels": [
      0
    ],
    "image": "/images/monsters/77_グリッチキメラパップ.png",
    "transferCode": "GLITCH_CHIMERA_PUP",
    "password": "GLITCH_CHIMERA_PUP",
    "icon": "🧬",
    "sprite": "🧬",
    "hp": 191,
    "exp": 66
  },
  {
    "id": "word_acorn",
    "name": "ワードエイコーン",
    "rarity": "common",
    "type": "木の実",
    "habitat": "ことばの森",
    "description": "短い単語を中にしまった木の実。割ると新しい語彙がころんと出る。",
    "levels": [
      1
    ],
    "image": "/images/monsters/78_ワードエイコーン.png",
    "transferCode": "WORD_ACORN",
    "password": "WORD_ACORN",
    "icon": "🌰",
    "sprite": "🌰",
    "hp": 73,
    "exp": 15
  },
  {
    "id": "vowel_sprite",
    "name": "ボウェルスプライト",
    "rarity": "common",
    "type": "妖精",
    "habitat": "ことばの森",
    "description": "母音の響きをまとった小さな妖精。発音のリズムに合わせて舞う。",
    "levels": [
      1
    ],
    "image": "/images/monsters/79_ボウェルスプライト.png",
    "transferCode": "VOWEL_SPRITE",
    "password": "VOWEL_SPRITE",
    "icon": "🧚",
    "sprite": "🧚",
    "hp": 75,
    "exp": 16
  },
  {
    "id": "suffix_snail",
    "name": "サフィックススネイル",
    "rarity": "common",
    "type": "カタツムリ",
    "habitat": "ことばの森",
    "description": "語尾を背中の殻にくっつけて運ぶ。歩いた後に小さな接尾辞が残る。",
    "levels": [
      1
    ],
    "image": "/images/monsters/80_サフィックススネイル.png",
    "transferCode": "SUFFIX_SNAIL",
    "password": "SUFFIX_SNAIL",
    "icon": "🐌",
    "sprite": "🐌",
    "hp": 77,
    "exp": 16
  },
  {
    "id": "prefix_pup",
    "name": "プレフィックスパップ",
    "rarity": "common",
    "type": "犬",
    "habitat": "ことばの森",
    "description": "単語の先頭にくっつくのが好きな子犬。先回りして待っている。",
    "levels": [
      1
    ],
    "image": "/images/monsters/81_プレフィックスパップ.png",
    "transferCode": "PREFIX_PUP",
    "password": "PREFIX_PUP",
    "icon": "🐶",
    "sprite": "🐶",
    "hp": 74,
    "exp": 16
  },
  {
    "id": "typo_sprite",
    "name": "タイポスプライト",
    "rarity": "common",
    "type": "妖精",
    "habitat": "ことばの森",
    "description": "一文字だけ入れ替えて笑う小さな妖精。見つかるとすぐ謝る。",
    "levels": [
      1
    ],
    "image": "/images/monsters/82_タイポスプライト.png",
    "transferCode": "TYPO_SPRITE",
    "password": "TYPO_SPRITE",
    "icon": "🧚",
    "sprite": "🧚",
    "hp": 78,
    "exp": 17
  },
  {
    "id": "vocab_vole",
    "name": "ボキャブラリーボール",
    "rarity": "common",
    "type": "モグラ",
    "habitat": "ことばの森",
    "description": "単語カードを土の中に集めるモグラ。覚えた言葉ほど深くしまう。",
    "levels": [
      1
    ],
    "image": "/images/monsters/83_ボキャブラリーボール.png",
    "transferCode": "VOCAB_VOLE",
    "password": "VOCAB_VOLE",
    "icon": "⛏️",
    "sprite": "⛏️",
    "hp": 80,
    "exp": 17
  },
  {
    "id": "phrase_fawn",
    "name": "フレーズフォーン",
    "rarity": "common",
    "type": "鹿",
    "habitat": "ことばの森",
    "description": "短いフレーズを角に結んだ子鹿。森の道案内が得意。",
    "levels": [
      1
    ],
    "image": "/images/monsters/84_フレーズフォーン.png",
    "transferCode": "PHRASE_FAWN",
    "password": "PHRASE_FAWN",
    "icon": "🦌",
    "sprite": "🦌",
    "hp": 81,
    "exp": 18
  },
  {
    "id": "comma_koala",
    "name": "コンマコアラ",
    "rarity": "common",
    "type": "コアラ",
    "habitat": "ことばの森",
    "description": "小さなカンマを抱えて眠るコアラ。文章の息継ぎをこっそり増やす。",
    "levels": [
      1
    ],
    "image": "/images/monsters/85_コンマコアラ.png",
    "transferCode": "COMMA_KOALA",
    "password": "COMMA_KOALA",
    "icon": "🐨",
    "sprite": "🐨",
    "hp": 75,
    "exp": 16
  },
  {
    "id": "quote_quokka",
    "name": "クォートクオッカ",
    "rarity": "common",
    "type": "動物",
    "habitat": "ことばの森",
    "description": "引用符の形をした頬を持つ陽気なモンスター。いつもにこにこしている。",
    "levels": [
      1
    ],
    "image": "/images/monsters/86_クォートクオッカ.png",
    "transferCode": "QUOTE_QUOKKA",
    "password": "QUOTE_QUOKKA",
    "icon": "🙂",
    "sprite": "🙂",
    "hp": 77,
    "exp": 16
  },
  {
    "id": "rhyme_rat",
    "name": "ライムラット",
    "rarity": "common",
    "type": "ネズミ",
    "habitat": "ことばの森",
    "description": "韻を踏む単語ばかり集めるネズミ。声に出すとリズムよく走る。",
    "levels": [
      1
    ],
    "image": "/images/monsters/87_ライムラット.png",
    "transferCode": "RHYME_RAT",
    "password": "RHYME_RAT",
    "icon": "🐭",
    "sprite": "🐭",
    "hp": 74,
    "exp": 15
  },
  {
    "id": "dictionary_dryad",
    "name": "ディクショナリードリアード",
    "rarity": "common",
    "type": "精霊",
    "habitat": "ことばの森",
    "description": "辞書の葉をまとった木の精霊。調べた言葉を葉脈に記録する。",
    "levels": [
      1
    ],
    "image": "/images/monsters/88_ディクショナリードリアード.png",
    "transferCode": "DICTIONARY_DRYAD",
    "password": "DICTIONARY_DRYAD",
    "icon": "🌳",
    "sprite": "🌳",
    "hp": 81,
    "exp": 18
  },
  {
    "id": "syntax_satyr",
    "name": "シンタックスサテュロス",
    "rarity": "uncommon",
    "type": "妖精",
    "habitat": "ことばの森",
    "description": "文の流れを笛で整える森の妖精。順番が崩れると音を外す。",
    "levels": [
      1
    ],
    "image": "/images/monsters/89_シンタックスサテュロス.png",
    "transferCode": "SYNTAX_SATYR",
    "password": "SYNTAX_SATYR",
    "icon": "🎵",
    "sprite": "🎵",
    "hp": 102,
    "exp": 26
  },
  {
    "id": "grammar_grimoire",
    "name": "グラマーグリモア",
    "rarity": "uncommon",
    "type": "魔導書",
    "habitat": "ことばの森",
    "description": "ひとりでページをめくる魔導書。文法の間違いを見つけるとぱたぱた暴れる。",
    "levels": [
      1
    ],
    "image": "/images/monsters/90_グラマーグリモア.png",
    "transferCode": "GRAMMAR_GRIMOIRE",
    "password": "GRAMMAR_GRIMOIRE",
    "icon": "📖",
    "sprite": "📖",
    "hp": 107,
    "exp": 28
  },
  {
    "id": "capital_crow",
    "name": "キャピタルクロウ",
    "rarity": "uncommon",
    "type": "鳥",
    "habitat": "ことばの森",
    "description": "大文字だけを光る羽にしまうカラス。文頭を見ると得意げに鳴く。",
    "levels": [
      1
    ],
    "image": "/images/monsters/91_キャピタルクロウ.png",
    "transferCode": "CAPITAL_CROW",
    "password": "CAPITAL_CROW",
    "icon": "🐦",
    "sprite": "🐦",
    "hp": 99,
    "exp": 25
  },
  {
    "id": "pronoun_puppet",
    "name": "プロナウンパペット",
    "rarity": "uncommon",
    "type": "人形",
    "habitat": "ことばの森",
    "description": "代名詞の札を付け替える小さな人形。誰のことかを少しだけ迷わせる。",
    "levels": [
      1
    ],
    "image": "/images/monsters/92_プロナウンパペット.png",
    "transferCode": "PRONOUN_PUPPET",
    "password": "PRONOUN_PUPPET",
    "icon": "🧸",
    "sprite": "🧸",
    "hp": 104,
    "exp": 27
  },
  {
    "id": "idiom_imp",
    "name": "イディオムインプ",
    "rarity": "uncommon",
    "type": "小鬼",
    "habitat": "ことばの森",
    "description": "慣用句を袋いっぱいに集める小鬼。直訳すると首をかしげる。",
    "levels": [
      1
    ],
    "image": "/images/monsters/93_イディオムインプ.png",
    "transferCode": "IDIOM_IMP",
    "password": "IDIOM_IMP",
    "icon": "👺",
    "sprite": "👺",
    "hp": 110,
    "exp": 29
  },
  {
    "id": "semantic_swan",
    "name": "セマンティックスワン",
    "rarity": "rare",
    "type": "鳥",
    "habitat": "ことばの森",
    "description": "意味の流れを水面に映す白鳥。美しいが、間違った意味には厳しい。",
    "levels": [
      1
    ],
    "image": "/images/monsters/94_セマンティックスワン.png",
    "transferCode": "SEMANTIC_SWAN",
    "password": "SEMANTIC_SWAN",
    "icon": "🦢",
    "sprite": "🦢",
    "hp": 139,
    "exp": 42
  },
  {
    "id": "metaphor_mimic",
    "name": "メタファーミミック",
    "rarity": "rare",
    "type": "ミミック",
    "habitat": "ことばの森",
    "description": "宝箱の姿で比喩を隠すミミック。開けると別の意味が飛び出す。",
    "levels": [
      1
    ],
    "image": "/images/monsters/95_メタファーミミック.png",
    "transferCode": "METAPHOR_MIMIC",
    "password": "METAPHOR_MIMIC",
    "icon": "🎁",
    "sprite": "🎁",
    "hp": 148,
    "exp": 45
  },
  {
    "id": "narrative_nymph",
    "name": "ナラティブニンフ",
    "rarity": "rare",
    "type": "精霊",
    "habitat": "ことばの森",
    "description": "物語の糸を髪に編み込んだ精霊。文章の流れを美しく整える。",
    "levels": [
      1
    ],
    "image": "/images/monsters/96_ナラティブニンフ.png",
    "transferCode": "NARRATIVE_NYMPH",
    "password": "NARRATIVE_NYMPH",
    "icon": "🧚",
    "sprite": "🧚",
    "hp": 145,
    "exp": 44
  },
  {
    "id": "paradox_jester",
    "name": "パラドックスジェスター",
    "rarity": "epic",
    "type": "道化師",
    "habitat": "ことばの森",
    "description": "正しそうで矛盾した言葉を操る道化師。笑顔の裏で文章をねじ曲げる。",
    "levels": [
      1
    ],
    "image": "/images/monsters/97_パラドックスジェスター.png",
    "transferCode": "PARADOX_JESTER",
    "password": "PARADOX_JESTER",
    "icon": "🃏",
    "sprite": "🃏",
    "hp": 197,
    "exp": 68
  },
  {
    "id": "logic_lion",
    "name": "ロジックライオン",
    "rarity": "rare",
    "type": "獣",
    "habitat": "演算の洞窟",
    "description": "条件式の鎖をたてがみにまとった獅子。うなり声で真偽を切り分ける。",
    "levels": [
      2
    ],
    "image": "/images/monsters/98_ロジックライオン.png",
    "transferCode": "LOGIC_LION",
    "password": "LOGIC_LION",
    "icon": "🦁",
    "sprite": "🦁",
    "hp": 151,
    "exp": 46
  },
  {
    "id": "branch_basilisk",
    "name": "ブランチバジリスク",
    "rarity": "epic",
    "type": "魔獣",
    "habitat": "分岐の火山",
    "description": "分岐した角と赤い宝石の目を持つ魔獣。見つめた条件を固めてしまう。",
    "levels": [
      3
    ],
    "image": "/images/monsters/99_ブランチバジリスク.png",
    "transferCode": "BRANCH_BASILISK",
    "password": "BRANCH_BASILISK",
    "icon": "🐲",
    "sprite": "🐲",
    "hp": 209,
    "exp": 72
  },
  {
    "id": "stack_sentinel",
    "name": "スタックセンチネル",
    "rarity": "epic",
    "type": "守護者",
    "habitat": "バグの深淵",
    "description": "積み重なった盾とコード片でできた守護者。崩れると大量のエラーを放つ。",
    "levels": [
      0,
      1
    ],
    "image": "/images/monsters/100_スタックセンチネル.png",
    "transferCode": "STACK_SENTINEL",
    "password": "STACK_SENTINEL",
    "icon": "🛡️",
    "sprite": "🛡️",
    "hp": 215,
    "exp": 74
  },
  {
    "id": "plus_mimic",
    "name": "プラスミミック",
    "rarity": "common",
    "type": "ミミック",
    "habitat": "演算の洞窟",
    "description": "足し算の宝箱に化けるミミック。+ のつもりで文字までつなげてしまう。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/101_プラスミミック.png",
    "transferCode": "PLUS_MIMIC",
    "password": "PLUS_MIMIC",
    "icon": "🎁",
    "sprite": "🎁",
    "hp": 102,
    "exp": 26
  },
  {
    "id": "minus_wolf",
    "name": "マイナスウルフ",
    "rarity": "common",
    "type": "狼",
    "habitat": "演算の洞窟",
    "description": "引き算の遠吠えをする狼。符号を見落とした旅人を追いかける。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/102_マイナスウルフ.png",
    "transferCode": "MINUS_WOLF",
    "password": "MINUS_WOLF",
    "icon": "🐺",
    "sprite": "🐺",
    "hp": 104,
    "exp": 27
  },
  {
    "id": "asterisk_knight",
    "name": "アスタリスクナイト",
    "rarity": "uncommon",
    "type": "騎士",
    "habitat": "演算の洞窟",
    "description": "かけ算の星印を守る騎士。× と * の違いにとても厳しい。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/103_アスタリスクナイト.png",
    "transferCode": "ASTERISK_KNIGHT",
    "password": "ASTERISK_KNIGHT",
    "icon": "🛡️",
    "sprite": "🛡️",
    "hp": 133,
    "exp": 40
  },
  {
    "id": "slash_crab",
    "name": "スラッシュクラブ",
    "rarity": "common",
    "type": "カニ",
    "habitat": "演算の洞窟",
    "description": "ハサミが / の形をしたカニ。÷ を見ると横歩きで直しに来る。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/104_スラッシュクラブ.png",
    "transferCode": "SLASH_CRAB",
    "password": "SLASH_CRAB",
    "icon": "🦀",
    "sprite": "🦀",
    "hp": 107,
    "exp": 28
  },
  {
    "id": "number_ghost",
    "name": "ナンバーゴースト",
    "rarity": "common",
    "type": "幽霊",
    "habitat": "演算の洞窟",
    "description": "数字のふりをしてふわふわ漂う幽霊。文字列に紛れるのが得意。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/105_ナンバーゴースト.png",
    "transferCode": "NUMBER_GHOST",
    "password": "NUMBER_GHOST",
    "icon": "👻",
    "sprite": "👻",
    "hp": 99,
    "exp": 25
  },
  {
    "id": "quote_number",
    "name": "クォートナンバー",
    "rarity": "common",
    "type": "数字",
    "habitat": "演算の洞窟",
    "description": "クォートをかぶった数字モンスター。見た目は5でも中身は文字。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/106_クォートナンバー.png",
    "transferCode": "QUOTE_NUMBER",
    "password": "QUOTE_NUMBER",
    "icon": "🔢",
    "sprite": "🔢",
    "hp": 102,
    "exp": 26
  },
  {
    "id": "zenkaku_space_slime",
    "name": "ゼンカクスペーススライム",
    "rarity": "common",
    "type": "スライム",
    "habitat": "演算の洞窟",
    "description": "全角スペースを体に隠すスライム。見た目は空白、正体は別物。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/107_ゼンカクスペーススライム.png",
    "transferCode": "ZENKAKU_SPACE_SLIME",
    "password": "ZENKAKU_SPACE_SLIME",
    "icon": "🫧",
    "sprite": "🫧",
    "hp": 110,
    "exp": 30
  },
  {
    "id": "operator_owl",
    "name": "オペレーターオウル",
    "rarity": "uncommon",
    "type": "鳥",
    "habitat": "演算の洞窟",
    "description": "演算子の並びを夜目で見張るフクロウ。記号の取り違えを見逃さない。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/108_オペレーターオウル.png",
    "transferCode": "OPERATOR_OWL",
    "password": "OPERATOR_OWL",
    "icon": "🦉",
    "sprite": "🦉",
    "hp": 131,
    "exp": 38
  },
  {
    "id": "kakezan_bat",
    "name": "カケザンバット",
    "rarity": "common",
    "type": "コウモリ",
    "habitat": "演算の洞窟",
    "description": "星印の羽を持つコウモリ。暗い洞窟で * を見失わせる。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/109_カケザンバット.png",
    "transferCode": "KAKEZAN_BAT",
    "password": "KAKEZAN_BAT",
    "icon": "🦇",
    "sprite": "🦇",
    "hp": 104,
    "exp": 27
  },
  {
    "id": "warizan_shark",
    "name": "ワリザンシャーク",
    "rarity": "rare",
    "type": "サメ",
    "habitat": "演算の洞窟",
    "description": "割り算の流れを泳ぐサメ。/ と ÷ の境目で大きな口を開ける。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/110_ワリザンシャーク.png",
    "transferCode": "WARIZAN_SHARK",
    "password": "WARIZAN_SHARK",
    "icon": "🦈",
    "sprite": "🦈",
    "hp": 181,
    "exp": 58
  },
  {
    "id": "if_ifrit",
    "name": "イフイフリート",
    "rarity": "uncommon",
    "type": "精霊",
    "habitat": "分岐の火山",
    "description": "if の炎から生まれた精霊。条件があいまいだと火の粉を散らす。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/111_イフイフリート.png",
    "transferCode": "IF_IFRIT",
    "password": "IF_IFRIT",
    "icon": "🔥",
    "sprite": "🔥",
    "hp": 142,
    "exp": 44
  },
  {
    "id": "colon_phoenix",
    "name": "コロンフェニックス",
    "rarity": "common",
    "type": "鳥",
    "habitat": "分岐の火山",
    "description": "行末のコロンからよみがえる鳥。: を忘れると灰になってしまう。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/112_コロンフェニックス.png",
    "transferCode": "COLON_PHOENIX",
    "password": "COLON_PHOENIX",
    "icon": "🐦",
    "sprite": "🐦",
    "hp": 116,
    "exp": 31
  },
  {
    "id": "indent_salamander",
    "name": "インデントサラマンダー",
    "rarity": "uncommon",
    "type": "サラマンダー",
    "habitat": "分岐の火山",
    "description": "段差の炎を歩くサラマンダー。インデントがずれると機嫌を損ねる。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/113_インデントサラマンダー.png",
    "transferCode": "INDENT_SALAMANDER",
    "password": "INDENT_SALAMANDER",
    "icon": "🦎",
    "sprite": "🦎",
    "hp": 151,
    "exp": 48
  },
  {
    "id": "compare_golem",
    "name": "コンペアゴーレム",
    "rarity": "common",
    "type": "ゴーレム",
    "habitat": "分岐の火山",
    "description": "比較演算子の岩でできたゴーレム。左右の大きさをじっと比べる。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/114_コンペアゴーレム.png",
    "transferCode": "COMPARE_GOLEM",
    "password": "COMPARE_GOLEM",
    "icon": "🗿",
    "sprite": "🗿",
    "hp": 119,
    "exp": 32
  },
  {
    "id": "true_flame",
    "name": "トゥルーフレイム",
    "rarity": "common",
    "type": "炎",
    "habitat": "分岐の火山",
    "description": "True の火花を灯す小さな炎。小文字にされるとしょんぼりする。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/115_トゥルーフレイム.png",
    "transferCode": "TRUE_FLAME",
    "password": "TRUE_FLAME",
    "icon": "🔥",
    "sprite": "🔥",
    "hp": 113,
    "exp": 30
  },
  {
    "id": "false_lava",
    "name": "フォールスラーヴァ",
    "rarity": "common",
    "type": "溶岩",
    "habitat": "分岐の火山",
    "description": "False の泡を浮かべる溶岩。真偽値の大文字をよく忘れさせる。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/116_フォールスラーヴァ.png",
    "transferCode": "FALSE_LAVA",
    "password": "FALSE_LAVA",
    "icon": "🌋",
    "sprite": "🌋",
    "hp": 116,
    "exp": 31
  },
  {
    "id": "equal_mirage",
    "name": "イコールミラージュ",
    "rarity": "common",
    "type": "幻影",
    "habitat": "分岐の火山",
    "description": "= と == の間にゆらめく幻影。見間違えると条件が崩れる。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/117_イコールミラージュ.png",
    "transferCode": "EQUAL_MIRAGE",
    "password": "EQUAL_MIRAGE",
    "icon": "✨",
    "sprite": "✨",
    "hp": 110,
    "exp": 30
  },
  {
    "id": "daishou_tenbin",
    "name": "ダイショウテンビン",
    "rarity": "uncommon",
    "type": "天秤",
    "habitat": "分岐の火山",
    "description": "大小比較を量る天秤モンスター。> と < を反対に傾ける。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/118_ダイショウテンビン.png",
    "transferCode": "DAISHOU_TENBIN",
    "password": "DAISHOU_TENBIN",
    "icon": "⚖️",
    "sprite": "⚖️",
    "hp": 145,
    "exp": 46
  },
  {
    "id": "case_shifter",
    "name": "ケースシフター",
    "rarity": "common",
    "type": "変化獣",
    "habitat": "分岐の火山",
    "description": "True を true にすり替える変化獣。大文字小文字の境界を泳ぐ。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/119_ケースシフター.png",
    "transferCode": "CASE_SHIFTER",
    "password": "CASE_SHIFTER",
    "icon": "🦊",
    "sprite": "🦊",
    "hp": 119,
    "exp": 32
  },
  {
    "id": "branch_harpy",
    "name": "ブランチハーピー",
    "rarity": "common",
    "type": "鳥人",
    "habitat": "分岐の火山",
    "description": "条件分岐の風に乗るハーピー。if の道を二手に分けて飛ぶ。",
    "levels": [
      2,
      3
    ],
    "image": "/images/monsters/120_ブランチハーピー.png",
    "transferCode": "BRANCH_HARPY",
    "password": "BRANCH_HARPY",
    "icon": "🪽",
    "sprite": "🪽",
    "hp": 122,
    "exp": 34
  },
  {
    "id": "calcula_king",
    "name": "カルキュラキング",
    "rarity": "epic",
    "type": "王",
    "habitat": "演算の洞窟",
    "description": "四則演算の王冠をかぶる演算の洞窟の主。数字も記号もまとめて試す。",
    "levels": [
      2
    ],
    "image": "/images/monsters/121_カルキュラキング.png",
    "transferCode": "CALCULA_KING",
    "password": "CALCULA_KING",
    "icon": "👑",
    "sprite": "👑",
    "hp": 244,
    "exp": 86
  },
  {
    "id": "colon_rabbit",
    "name": "コロンラビット",
    "rarity": "common",
    "type": "ウサギ",
    "habitat": "分岐の火山",
    "description": "コロンの耳を持つウサギ。if文の行末からぴょんと逃げる。",
    "levels": [
      3
    ],
    "image": "/images/monsters/122_コロンラビット.png",
    "transferCode": "COLON_RABBIT",
    "password": "COLON_RABBIT",
    "icon": "🐰",
    "sprite": "🐰",
    "hp": 113,
    "exp": 30
  },
  {
    "id": "mofu_defender",
    "name": "モフモフ・ディフェンダー",
    "rarity": "rare",
    "type": "限定モンスター",
    "habitat": "その他",
    "description": "ふわふわの盾と小さな王冠を掲げる守護者。見えないバグからMasterをやさしく守ってくれる。",
    "levels": [
      "limited"
    ],
    "image": "/images/limited/mofu_defender.jpg",
    "transferCode": "MOFU_SHIELD",
    "password": "MOFU_SHIELD",
    "icon": "🛡️",
    "sprite": "🛡️",
    "hp": 174,
    "exp": 0
  },
  {
    "id": "astral_knight",
    "name": "アストラル・ナイト",
    "rarity": "epic",
    "type": "限定モンスター",
    "habitat": "その他",
    "description": "世界の歪みの深淵から生まれた漆黒の魔導騎士。エラーそのものを剣に纏わせる。",
    "levels": [
      "limited"
    ],
    "image": "/images/limited/astral_knight.jpg",
    "transferCode": "ASTRAL_KNIGHT",
    "password": "ASTRAL_KNIGHT",
    "icon": "⚔️",
    "sprite": "⚔️",
    "hp": 218,
    "exp": 0
  },
  {
    "id": "iksa_osamarancer",
    "name": "イクサ・オサマランサー",
    "rarity": "uncommon",
    "type": "限定モンスター",
    "habitat": "その他",
    "description": "もう1行もコードが書けないクマー！と言いながら、なぜか軽やかに舞う武闘派バッタ。",
    "levels": [
      "limited"
    ],
    "image": "/images/limited/iksa_osamarancer.jpg",
    "transferCode": "IKUSA_LOSE",
    "password": "IKUSA_LOSE",
    "icon": "🦗",
    "sprite": "🦗",
    "hp": 160,
    "exp": 0
  },
  {
    "id": "chikuwa_general",
    "name": "チクワ・ジェネラル",
    "rarity": "epic",
    "type": "限定モンスター",
    "habitat": "その他",
    "description": "ちくわ大明神。誰かがその名を呟くたびに、コード内のコロンがちくわに変換される。",
    "levels": [
      "limited"
    ],
    "image": "/images/limited/chikuwa_general.jpg",
    "transferCode": "CHIKUWA_DAIMYOSHIN",
    "password": "CHIKUWA_DAIMYOSHIN",
    "icon": "🍢",
    "sprite": "🍢",
    "hp": 189,
    "exp": 0
  },
  {
    "id": "onsite_cat",
    "name": "オンサイト・キャット",
    "rarity": "rare",
    "type": "限定モンスター",
    "habitat": "その他",
    "description": "ヘルメットをかぶった現場確認の化身。原因不明でも指差し確認だけは忘れない。ヨシ！",
    "levels": [
      "limited"
    ],
    "image": "/images/limited/onsite_cat.jpg",
    "transferCode": "GENBA_YOSHI",
    "password": "GENBA_YOSHI",
    "icon": "🐱",
    "sprite": "🐱",
    "hp": 171,
    "exp": 0
  },
  {
    "id": "headlock_kangarhound",
    "name": "ヘッドロック・カンガルハウンド",
    "rarity": "rare",
    "type": "限定モンスター",
    "habitat": "その他",
    "description": "逃げるバグをがっちり抱え込む剛腕の守護獣。抱えている相棒はなぜか無表情。",
    "levels": [
      "limited"
    ],
    "image": "/images/limited/headlock_kangarhound.jpg",
    "transferCode": "HEADLOCK_GUARD",
    "password": "HEADLOCK_GUARD",
    "icon": "🦘",
    "sprite": "🦘",
    "hp": 196,
    "exp": 0
  },
  {
    "id": "bakusoku_ehho_owl",
    "name": "爆速エッホフクロウ",
    "rarity": "epic",
    "type": "限定モンスター",
    "habitat": "その他",
    "description": "エッホエッホとログの海を駆け抜ける高速フクロウ。深夜のエラーも一瞬で見つけ出す。",
    "levels": [
      "limited"
    ],
    "image": "/images/limited/bakusoku_ehho_owl.jpg",
    "transferCode": "EHHOO_SPEED",
    "password": "EHHOO_SPEED",
    "icon": "🦉",
    "sprite": "🦉",
    "hp": 206,
    "exp": 0
  },
  {
    "id": "dakko_party_parrot",
    "name": "ダッコ・パーティパロット",
    "rarity": "uncommon",
    "type": "限定モンスター",
    "habitat": "その他",
    "description": "抱っこされながら祝福をまき散らす陽気なパロット。勝利画面に拍手と勢いを連れてくる。",
    "levels": [
      "limited"
    ],
    "image": "/images/limited/dakko_party_parrot.jpg",
    "transferCode": "DAKKO_PARTY",
    "password": "DAKKO_PARTY",
    "icon": "🦜",
    "sprite": "🦜",
    "hp": 157,
    "exp": 0
  }
];

export const EVOLVED_MONSTERS = [
  {
    id: "aka_slime_evolved",
    image: "/images/monsters/evolved/aka_slime_evolved.png",
    name: "シングルクォートスライム",
    evolvedFrom: "aka_slime",
    rarity: "uncommon",
    description: "炎のシングルクォートを頭に掲げるスライム。気が強くなったが、たまにクォートを閉じ忘れて自分まで燃えている。",
    imagePrompt: "pixel art, cute, fantasy RPG monster, red slime with a small fire shaped like a single quote on its head, determined expression, white background",
    assistSkill: { name: "強火クォート", effect: "次の攻撃ダメージ1.5倍", type: "damage", value: 1.5 },
  },
  {
    id: "aka_slime_final",
    image: "/images/monsters/evolved/aka_slime_final.png",
    name: "ダブルクォートイフリート",
    evolvedFrom: "aka_slime_evolved",
    rarity: "rare",
    description: "両手に燃え盛るダブルクォートを持った炎の魔神。完全な文字列を司り、タイピングの熱気を限界まで高める。",
    imagePrompt: "pixel art, cute, fantasy RPG monster, powerful red slime demon made of fire holding two fiery double quotes, strong and confident, white background",
    assistSkill: { name: "爆炎文字列", effect: "次の攻撃ダメージ3倍", type: "damage", value: 3 },
  },
  {
    id: "ao_slime_evolved",
    image: "/images/monsters/evolved/ao_slime_evolved.png",
    name: "タイムスライム",
    evolvedFrom: "ao_slime",
    rarity: "uncommon",
    description: "体内に砂時計を浮かべた水のスライム。クールな顔をしているが、制限時間が迫ると慌てて水しぶきを上げる。",
    imagePrompt: "pixel art, cute, fantasy RPG monster, blue water slime with a floating hourglass inside its body, cool expression, splashing water, white background",
    assistSkill: { name: "クールタイム", effect: "制限時間を3秒延長", type: "time", value: 3 },
  },
  {
    id: "ao_slime_final",
    image: "/images/monsters/evolved/ao_slime_final.png",
    name: "クロックリヴァイアサン",
    evolvedFrom: "ao_slime_evolved",
    rarity: "epic",
    description: "巨大な水の時計を背負った海竜。時間を操る圧倒的な力を持つが、昼寝の時間は絶対に譲らない。",
    imagePrompt: "pixel art, cute, fantasy RPG monster, majestic blue water dragon with a large clock shell on its back, calm and cool, white background",
    assistSkill: { name: "タイムフリーズ", effect: "制限時間を8秒延長", type: "time", value: 8 },
  },
  {
    id: "midori_slime_evolved",
    image: "/images/monsters/evolved/midori_slime_evolved.png",
    name: "リーフスライム",
    evolvedFrom: "midori_slime",
    rarity: "uncommon",
    description: "頭に立派な葉っぱが生えたスライム。光合成でHPを少しだけ分けてくれる、癒し系のおとも。",
    imagePrompt: "pixel art, cute, fantasy RPG monster, green slime with a large healthy leaf on top, gentle and relaxed, soft sunlight, white background",
    assistSkill: { name: "光合成ヒール", effect: "HPを20回復", type: "heal", value: 20 },
  },
  {
    id: "midori_slime_final",
    image: "/images/monsters/evolved/midori_slime_final.png",
    name: "ワールドツリー・スライム",
    evolvedFrom: "midori_slime_evolved",
    rarity: "epic",
    description: "もはやスライムなのか大樹なのか分からない姿。のんびりしすぎて動かないが、その回復力は世界を救う。",
    imagePrompt: "pixel art, cute, fantasy RPG monster, giant green slime that looks like a world tree with roots and leafy canopy, peaceful, white background",
    assistSkill: { name: "大自然の恵み", effect: "HPを50回復", type: "heal", value: 50 },
  },
  {
    id: "kokko_evolved",
    image: "/images/monsters/evolved/kokko_evolved.png",
    name: "ファイヤーコッコー",
    evolvedFrom: "kokko",
    rarity: "uncommon",
    description: "少しだけ火を吹けるようになった鶏。フェニックスに憧れているが、鳴き声は「アチチコッコー」。",
    imagePrompt: "pixel art, cute, fantasy RPG monster, chicken with fiery red feathers and a small flame on its beak, trying to look cool, white background",
    assistSkill: { name: "炎の羽ばたき", effect: "コンボ+5", type: "combo", value: 5 },
  },
  {
    id: "kokko_final",
    image: "/images/monsters/evolved/kokko_final.png",
    name: "コードフェニックス",
    evolvedFrom: "kokko_evolved",
    rarity: "epic",
    description: "ついに転生を果たした伝説の不死鳥。神々しいオーラを放つが、朝になるとやっぱり「コケッコー」と鳴いてしまう。",
    imagePrompt: "pixel art, cute, fantasy RPG monster, glorious phoenix made of fire and code symbols, majestic wings, slightly silly chicken face, white background",
    assistSkill: { name: "不死鳥のコンボ", effect: "次の1回だけミスをしてもコンボが途切れない", type: "comboProtect", value: 1 },
  },
  {
    id: "mandragora_evolved",
    image: "/images/monsters/evolved/mandragora_evolved.png",
    name: "ランニング・ルート",
    evolvedFrom: "mandragora",
    rarity: "uncommon",
    description: "根っこが足へと進化し、ついに土を飛び出したマンドラゴラ。驚異の俊足でコード内を駆け回る。",
    imagePrompt: "pixel art, cute fantasy RPG, a mandrake with cute legs starting to run, earth clinging to feet, green leaves on head, white background",
    assistSkill: { name: "根っこダッシュ", effect: "制限時間を5秒延長", type: "time", value: 5 },
  },
  {
    id: "mandragora_final",
    image: "/images/monsters/evolved/mandragora_final.png",
    name: "デバッグ・キング・マン",
    evolvedFrom: "mandragora_evolved",
    rarity: "epic",
    description: "王冠を被った植物の王。伝説のネタ通り、もはやどこへでも歩いていき、コードの不具合を根こそぎ引き抜く。",
    imagePrompt: "pixel art, cute fantasy RPG, mandrake king wearing a crown, muscular roots, majestic posture, green leafy cape, white background",
    assistSkill: { name: "王の引き抜き", effect: "次の被ダメージを無効化", type: "shield", value: 1 },
  },
  {
    id: "soft_bug_evolved",
    image: "/images/monsters/evolved/soft_bug_evolved.png",
    name: "ミディアム・バグ",
    evolvedFrom: "soft_bug",
    rarity: "uncommon",
    description: "柔らかさを保ったまま一回り大きくなった。周囲に小さなバグの繭を撒き散らす。",
    imagePrompt: "pixel art, cute fantasy RPG, a slightly larger soft green bug monster, round and squishy, surrounded by small cocoons, white background",
    assistSkill: { name: "繭の増殖", effect: "次のダメージ1.5倍", type: "damage", value: 1.5 },
  },
  {
    id: "soft_bug_final",
    image: "/images/monsters/evolved/soft_bug_final.png",
    name: "ギガ・エラー・インセクト",
    evolvedFrom: "soft_bug_evolved",
    rarity: "epic",
    description: "放置された不具合の果て。もはや制御不能な大きさになり、画面全体を覆うような巨大なバグの王。",
    imagePrompt: "pixel art, cute fantasy RPG, giant monster bug, chaotic and glitched appearance, intimidating yet cute pixel style, white background",
    assistSkill: { name: "システム崩壊", effect: "次の攻撃ダメージ4倍", type: "damage", value: 4 },
  },
  { id: "space_slime_evolved",
    image: "/images/monsters/evolved/space_slime_evolved.png", name: "ギャラクシースライム", evolvedFrom: "space_slime", rarity: "uncommon", description: "全角スペースすらも飲み込むブラックホールのようなスライム。体内には広大な宇宙と、たくさんの空白が広がっている。", imagePrompt: "pixel art, cute, fantasy RPG monster, dark slime filled with glowing stars and galaxies, looks like a tiny black hole, mysterious but cute, white background", assistSkill: { name: "スペースバリア", effect: "次の被ダメージを無効化", type: "shield", value: 1 } },
  { id: "bug_leaf_evolved",
    image: "/images/monsters/evolved/bug_leaf_evolved.png", name: "デバッグツリー", evolvedFrom: "bug_leaf", rarity: "uncommon", description: "見つけたバグを栄養にして育った立派な木。枝葉がコードの構造に似ており、バグの発生を未然に防ぐオーラを放つ。", imagePrompt: "pixel art, cute, fantasy RPG monster, small tree monster with leaves shaped like brackets and code symbols, protecting aura, white background", assistSkill: { name: "デバッグシールド", effect: "次の被ダメージを無効化", type: "shield", value: 1 } },
  { id: "snippet_sheep_evolved",
    image: "/images/monsters/evolved/snippet_sheep_evolved.png", name: "モジュールシープ", evolvedFrom: "snippet_sheep", rarity: "uncommon", description: "便利なコード片をモコモコの毛に蓄えた羊。あまりに便利すぎて、よくプログラマーに毛を刈り取られる。", imagePrompt: "pixel art, cute, fantasy RPG monster, extremely fluffy sheep with code snippets floating around its wool, sleepy and soft, white background", assistSkill: { name: "もこもこインポート", effect: "HPを30回復しコンボ+2", type: "heal", value: 30, comboBonus: 2 } },
  { id: "semicolon_ferret_evolved",
    image: "/images/monsters/evolved/semicolon_ferret_evolved.png", name: "セミコロンニンジャ", evolvedFrom: "semicolon_ferret", rarity: "uncommon", description: "不要なセミコロンをシュババッと片付けるフェレットの忍者。Pythonにはセミコロンがいらないことを誰よりも知っている。", imagePrompt: "pixel art, cute, fantasy RPG monster, fast ferret dressed in a tiny ninja outfit holding a semicolon like a shuriken, agile, white background", assistSkill: { name: "忍法・省略の術", effect: "次のダメージ2倍", type: "damage", value: 2 } },
  { id: "dot_squirrel_evolved",
    image: "/images/monsters/evolved/dot_squirrel_evolved.png", name: "メソッドスクワラル", evolvedFrom: "dot_squirrel", rarity: "uncommon", description: "ドット(.)を繋げてメソッドを呼び出す技を覚えたリス。木の実をチェーンのように並べて干している。", imagePrompt: "pixel art, cute, fantasy RPG monster, squirrel connecting glowing dots and acorns in a chain, energetic, white background", assistSkill: { name: "ドット・チェーン", effect: "現在のコンボ数×2のボーナスダメージ", type: "comboDamage", value: 2 } },
  { id: "byte_mouse_evolved",
    image: "/images/monsters/evolved/byte_mouse_evolved.png", name: "ギガバイトマウス", evolvedFrom: "byte_mouse", rarity: "uncommon", description: "膨大なデータを持ち運べるようになった頼れるネズミ。重すぎて走るのが遅くなったが、その分一撃が重い。", imagePrompt: "pixel art, cute, fantasy RPG monster, chubby mouse carrying a giant glowing hard drive on its back, sweating but proud, white background", assistSkill: { name: "ギガバイトアタック", effect: "次のダメージ2.5倍", type: "damage", value: 2.5 } },
  { id: "tap_toad_evolved",
    image: "/images/monsters/evolved/tap_toad_evolved.png", name: "タイピングフロッグ", evolvedFrom: "tap_toad", rarity: "uncommon", description: "背中がキーボードのような模様になった大きなカエル。超高速の舌タイピングで、ミスタイプを瞬時に修正する。", imagePrompt: "pixel art, cute, fantasy RPG monster, large frog with keyboard keys on its back, typing fast with its long tongue, rhythmic, white background", assistSkill: { name: "高速舌打ち", effect: "コンボ+10", type: "combo", value: 10 } },
  { id: "mini_cache_cat_evolved",
    image: "/images/monsters/evolved/mini_cache_cat_evolved.png", name: "メモリネコ", evolvedFrom: "mini_cache_cat", rarity: "uncommon", description: "しっぽが太くなりギガバイト級のキャッシュを保持できる猫。たまに昔のミスを掘り起こしてドヤ顔をする。", imagePrompt: "pixel art, cute, fantasy RPG monster, cat with a very thick glowing tail full of data, looking smug and smart, white background", assistSkill: { name: "キャットキャッシュ", effect: "直前の正解ダメージをもう一度与える", type: "repeatDamage", value: 1 } },
  { id: "memo_mushroom_evolved",
    image: "/images/monsters/evolved/memo_mushroom_evolved.png", name: "ログマッシュ", evolvedFrom: "memo_mushroom", rarity: "uncommon", description: "傘の裏に膨大なエラーログを書き込んでいる巨大キノコ。読もうとすると目がチカチカするが、デバッグには大いに役立つ。", imagePrompt: "pixel art, cute, fantasy RPG monster, large mushroom with glowing text logs written under its cap, magical and glowing, white background", assistSkill: { name: "ログ解析", effect: "制限時間を5秒延長", type: "time", value: 5 } },
  { id: "blink_bunny_evolved",
    image: "/images/monsters/evolved/blink_bunny_evolved.png", name: "カーソルラビット", evolvedFrom: "blink_bunny", rarity: "uncommon", description: "光の速さで点滅移動するウサギ。あまりに速すぎて、どこに入力されるかわからないという新たなバグを生み出す。", imagePrompt: "pixel art, cute, fantasy RPG monster, rabbit made of glowing blinking light like a text cursor, moving extremely fast with motion blur, white background", assistSkill: { name: "ブリンクダッシュ", effect: "コンボ+8しダメージ1.2倍", type: "combo", value: 8, damageBonus: 1.2 } },
  { id: "cursor_pudding_evolved",
    image: "/images/monsters/evolved/cursor_pudding_evolved.png", name: "カーソルプリンアラモード", evolvedFrom: "cursor_pudding", rarity: "uncommon", description: "フルーツや生クリームでデコレーションされた豪華なプリンスライム。入力待ちの時間が優雅なお茶会に変わる。", imagePrompt: "pixel art, cute, fantasy RPG monster, slime that looks like a fancy pudding a la mode with fruits and cream, a blinking cursor on top, elegant, white background", assistSkill: { name: "甘い入力待ち", effect: "HPを40回復し制限時間+2秒", type: "heal", value: 40, timeBonus: 2 } },
  { id: "quote_bat_evolved",
    image: "/images/monsters/evolved/quote_bat_evolved.png", name: "ストリングヴァンパイア", evolvedFrom: "quote_bat", rarity: "uncommon", description: "奪い集めたクォートで無敵の文字列の城を築き上げたコウモリの王。もうエラーという名の日光を恐れない。", imagePrompt: "pixel art, cute, fantasy RPG, a cool vampire bat holding glowing quote marks, wearing a small dark cape, white background", assistSkill: { name: "吸血クォート", effect: "与えたダメージの半分をHPとして回復", type: "lifesteal", value: 0.5 } },
  { id: "true_fairy_evolved",
    image: "/images/monsters/evolved/true_fairy_evolved.png", name: "ブールエルヴン", evolvedFrom: "true_fairy", rarity: "rare", description: "世界の真偽（True/False）を完全に統べる妖精の女王。彼女の導きの前では、どんな曖昧な条件式も白黒がつく。", imagePrompt: "pixel art, cute, fantasy RPG, an elegant fairy queen with wings made of glowing binary code, holding a wand of light and shadow, white background", assistSkill: { name: "絶対真理の光", effect: "次のダメージ2倍", type: "damage", value: 2 } },
  { id: "double_quote_rabbit_evolved",
    image: "/images/monsters/evolved/double_quote_rabbit_evolved.png", name: "ドックストリングヘアー", evolvedFrom: "double_quote_rabbit", rarity: "uncommon", description: "トリプルクォート（\"\"\"）を身に纏い、巨大なコメントブロックを跳び越える野ウサギ。長文の魔法を操る。", imagePrompt: "pixel art, cute, fantasy RPG, a magical hare with three glowing double quotes floating around its ears, jumping through a mystical forest, white background", assistSkill: { name: "複数行ブロック", effect: "制限時間を3秒延長", type: "time", value: 3 } },
  { id: "vowel_sprite_evolved",
    image: "/images/monsters/evolved/vowel_sprite_evolved.png", name: "ディクテーションシルフ", evolvedFrom: "vowel_sprite", rarity: "uncommon", description: "母音と子音の波紋を完全に調和させる風の精霊。流れるように美しいリズムのコードは彼女の加護を受ける。", imagePrompt: "pixel art, cute, fantasy RPG, a beautiful wind sylph surrounded by glowing musical notes and alphabet letters, soft breeze, white background", assistSkill: { name: "リズム・エコー", effect: "コンボ+5", type: "combo", value: 5 } },
  { id: "prefix_pup_evolved",
    image: "/images/monsters/evolved/prefix_pup_evolved.png", name: "デコレーターハウンド", evolvedFrom: "prefix_pup", rarity: "rare", description: "主人のコードの先頭（@）に必ずお座りし、関数を強力に修飾する忠犬。もうただの小犬ではない。", imagePrompt: "pixel art, cute, fantasy RPG, a majestic hound with an '@' symbol glowing on its collar, sitting proudly like a guardian, white background", assistSkill: { name: "アット・ブースト", effect: "次のダメージ3倍", type: "damage", value: 3 } },
  { id: "comma_koala_evolved",
    image: "/images/monsters/evolved/comma_koala_evolved.png", name: "タプルコアラ", evolvedFrom: "comma_koala", rarity: "uncommon", description: "集めたカンマで複数の要素を繋ぎ合わせ、決して変更されないイミュータブルな絆のタプルを創り出したコアラ。", imagePrompt: "pixel art, cute, fantasy RPG, a relaxed koala holding magical glowing brackets, sitting on a sturdy eucalyptus tree, white background", assistSkill: { name: "イミュータブル・ガード", effect: "次の被ダメージを無効化", type: "shield", value: 1 } },
  { id: "rhyme_rat_evolved",
    image: "/images/monsters/evolved/rhyme_rat_evolved.png", name: "レジェックスマウス", evolvedFrom: "rhyme_rat", rarity: "uncommon", description: "韻の法則を極め、正規表現（Regex）の魔法を手に入れた賢いネズミ。どんな複雑な文字の並びも見逃さない。", imagePrompt: "pixel art, cute, fantasy RPG, a smart mouse wearing a wizard hat and reading a glowing scroll full of symbols, magical library, white background", assistSkill: { name: "パターンマッチング", effect: "次の1回だけミスをしてもコンボが途切れない", type: "comboProtect", value: 1 } },
  { id: "idiom_imp_evolved",
    image: "/images/monsters/evolved/idiom_imp_evolved.png", name: "パイソニックデーモン", evolvedFrom: "idiom_imp", rarity: "epic", description: "Pythonらしい美しく短いコードをこよなく愛する上位悪魔。野暮ったいコードを見ると怒り狂う。", imagePrompt: "pixel art, cute, fantasy RPG, a mischievous elegant demon holding a glowing python snake, surrounded by blue and yellow magical aura, white background", assistSkill: { name: "内包表記の魔術", effect: "敵の現在HPの15%を追加ダメージ", type: "percentDamage", value: 0.15 } },
  { id: "compile_chick_evolved",
    image: "/images/monsters/evolved/compile_chick_evolved.png", name: "ランタイムルースター", evolvedFrom: "compile_chick", rarity: "rare", description: "コンパイルの壁を越え、実行時（ランタイム）の空へ羽ばたいた雄鶏。エラーを恐れず、成功の朝を高らかに告げる。", imagePrompt: "pixel art, cute, fantasy RPG, a proud glowing rooster with golden gear-like feathers, crowing over a sunrise, majestic, white background", assistSkill: { name: "実行の夜明け", effect: "HPを30回復", type: "heal", value: 30 } },
  { id: "equal_slime_evolved",
    image: "/images/monsters/evolved/equal_slime_evolved.png", name: "ロジカル・ゼリー", evolvedFrom: "equal_slime", rarity: "uncommon", description: "イコールを自在に操り、代入と比較を混ぜ返すスライム。見た目は透き通っているが中身は論理の塊。", imagePrompt: "pixel art, cute fantasy RPG, transparent blue slime with double equal signs floating inside, glowing logic symbols, white background", assistSkill: { name: "論理の反転", effect: "次の被ダメージを無効化", type: "shield", value: 1 } },
  { id: "asterisk_mush_evolved",
    image: "/images/monsters/evolved/asterisk_mush_evolved.png", name: "マルチプライ・スポア", evolvedFrom: "asterisk_mush", rarity: "uncommon", description: "傘の模様がアスタリスクから増殖記号に変化した。胞子を吸い込むと掛け算が止まらなくなる。", imagePrompt: "pixel art, cute fantasy RPG, mushroom monster, glowing asterisk symbols on the cap, spore clouds in the air, white background", assistSkill: { name: "胞子掛け算", effect: "次のダメージ2倍", type: "damage", value: 2 } },
  { id: "bool_bee_evolved",
    image: "/images/monsters/evolved/bool_bee_evolved.png", name: "トゥルー・クィーン", evolvedFrom: "bool_bee", rarity: "rare", description: "真偽値の群れを統べる蜂の女王。彼女の羽音を聞くとTrueとFalseが永遠に入れ替わる。", imagePrompt: "pixel art, cute fantasy RPG, queen bee monster, glowing True and False symbols around her, regal wings, white background", assistSkill: { name: "真偽の乱舞", effect: "HPを20回復しコンボ+3", type: "heal", value: 20, comboBonus: 3 } },
  { id: "colon_ghost_evolved",
    image: "/images/monsters/evolved/colon_ghost_evolved.png", name: "消失のスペクター", evolvedFrom: "colon_ghost", rarity: "uncommon", description: "行末のコロンだけでなく、時々変数名すら消し去る幽霊。本体が見えづらく捕まえにくい。", imagePrompt: "pixel art, cute fantasy RPG, semi-transparent ghost, flickering pixel edges, disappearing symbols in hand, white background", assistSkill: { name: "行末の消失", effect: "制限時間を8秒延長", type: "time", value: 8 } },
  { id: "number_mimic_evolved",
    image: "/images/monsters/evolved/number_mimic_evolved.png", name: "クォート・マスター", evolvedFrom: "number_mimic", rarity: "rare", description: "数字を文字列に変える達人。箱からあふれ出すクォート記号で何でも文字に書き換えてしまう。", imagePrompt: "pixel art, cute fantasy RPG, mimic chest overflowing with quote symbols and numbers, magical transformation, white background", assistSkill: { name: "文字列化", effect: "次のダメージ3倍", type: "damage", value: 3 } },
  { id: "logic_lion_evolved",
    image: "/images/monsters/evolved/logic_lion_evolved.png", name: "リーガル・レオ", evolvedFrom: "logic_lion", rarity: "rare", description: "条件分岐の鎖を武器に変えた獅子。鋭い咆哮でコードの分岐ルートを強制的に一つに絞る。", imagePrompt: "pixel art, cute fantasy RPG, lion with logic symbol mane, fierce expression, chain weapon made of code, white background", assistSkill: { name: "咆哮の判定", effect: "次のダメージ3倍", type: "damage", value: 3 } },
  { id: "false_wisp_evolved",
    image: "/images/monsters/evolved/false_wisp_evolved.png", name: "フォールス・インフェルノ", evolvedFrom: "false_wisp", rarity: "uncommon", description: "囁くだけだった迷い火が、Falseの文字を燃やす紅蓮の火柱へ進化した。", imagePrompt: "pixel art, cute fantasy RPG, swirling red fire monster, False symbols dancing in the flame, eerie but cute, white background", assistSkill: { name: "偽りの灯火", effect: "HPを15回復し次のダメージ1.5倍", type: "heal", value: 15, damageBonus: 1.5 } },
  { id: "colon_cobra_evolved",
    image: "/images/monsters/evolved/colon_cobra_evolved.png", name: "ベノム・コロン", evolvedFrom: "colon_cobra", rarity: "uncommon", description: "盗んだコロンを毒の牙に練り込んだ。噛まれるとコードの文法エラーが全身を駆け巡る。", imagePrompt: "pixel art, cute fantasy RPG, snake monster with fangs like colons, toxic purple patterns, alert pose, white background", assistSkill: { name: "毒の構文", effect: "次のダメージ3倍", type: "damage", value: 3 } },
  { id: "halfspace_rabbit_evolved",
    image: "/images/monsters/evolved/halfspace_rabbit_evolved.png", name: "インデント・キラー", evolvedFrom: "halfspace_rabbit", rarity: "uncommon", description: "スペースを奪う執念が実り、if文のインデントを根こそぎ破壊する暴走ウサギへ進化した。", imagePrompt: "pixel art, cute fantasy RPG, cute rabbit with sharp claws, scattered indent spaces floating around, fast look, white background", assistSkill: { name: "スペース泥棒", effect: "コンボ+15", type: "combo", value: 15 } },
];

export const RARITY_LABELS = {
  common: "コモン",
  uncommon: "アンコモン",
  rare: "レア",
  epic: "エピック",
};

export const RARITY_COLORS = {
  common: "#94a3b8",
  uncommon: "#34d399",
  rare: "#60a5fa",
  epic: "#fbbf24",
};

const MAX_LEVEL_INDEX = 3;

export function isObtainableMonster(monster) {
  if (!monster.levels || monster.levels.length === 0) return true;
  return monster.levels.some((level) => level === "limited" || level <= MAX_LEVEL_INDEX);
}

export function getMonsterBookEntries() {
  return ENEMY_VARIANTS.filter(isObtainableMonster);
}

export function getEvolvedBookEntries() {
  return EVOLVED_MONSTERS;
}

export function getMonsterInfo(monsterId) {
  return (
    ENEMY_VARIANTS.find((monster) => monster.id === monsterId) ||
    EVOLVED_MONSTERS.find((monster) => monster.id === monsterId) ||
    ENEMY_VARIANTS[0]
  );
}
