var versionJA="2.0042-e4";
/* 概要
名称：クッキークリッカー日本語パッチ（非公式）
作成：やふりー　 http://twitter.com/@ya_fury

このソフトウェアは、オルテイル氏のクッキークリッカーを日本語に翻訳します。
ライセンスは、クッキークリッカーのオリジナルライセンスを継承します。
*/

/*About (English)
Name:Coockie Clicker Japanese patch (Unofficial)  
Author: ya_fury　 http://twitter.com/@ya_fury

This softwear translate the Orteil's "Cookie Clicker" to Japanese.
The license of softwear inherits the original license of Cookie Clicker.
*/

/*Cookie Clicker Original License*/
/*
All this code is copyright Orteil, 2013-2017.
	-with some help, advice and fixes by Nicholas Laux, Debugbro and Opti
	-also includes a bunch of snippets found on stackoverflow.com
Hello, and welcome to the joyous mess that is main.js. Code contained herein is not guaranteed to be good, consistent, or sane. Most of this is years old at this point and harkens back to simpler, cruder times. Have a nice trip.
Spoilers ahead.
http://orteil.dashnet.org
*/

/*=====================================================================================
MISC HELPER FUNCTIONS (Replace)
=======================================================================================*/
var numberFormatters =
[
	rawFormatter,
	formatEveryThirdPower([
		'',
		' 百万',
		' 十億',
		' 兆',
		' 千兆',
		' 百京',
		' 十垓',
		' 杼',
		' 千杼',
		' 百穣',
		' 十溝',
		' 澗',
		' 千澗',
		' 百正',
		' 十載',
		' 極'
	]),
	formatEveryThirdPower([
		'',
		' M',
		' B',
		' T',
		' Qa',
		' Qi',
		' Sx',
		' Sp',
		' Oc',
		' No',
		' Dc',
		' UnD',
		' DoD',
		' TrD',
		' QaD',
		' QiD'
	])
];

/*=====================================================================================
Replace html
=======================================================================================*/
function HtmlToJA(id) {
  return document.getElementById(id);
}
HtmlToJA('prefsButton').innerHTML = 'オプション';
HtmlToJA('statsButton').innerHTML = '統計';
HtmlToJA('logButton').innerHTML = '情報';
var credit_JA="<div>日本語ver<br>v. "+versionJA+"<br>ゲームver</div>";
HtmlToJA('versionNumber').insertAdjacentHTML('afterbegin',credit_JA);
/*=====================================================================================
Rewrite Buildings Description
=======================================================================================*/	
var num_gobj_JA=0
function gobj_JA(label_JA,desc_JA) {
	Game.ObjectsById[num_gobj_JA]["displayName"]=label_JA; 
	Game.ObjectsById[num_gobj_JA]["desc"]=desc_JA;
	num_gobj_JA++;
  return;
}
gobj_JA("カーソル","10秒毎に自動クリック")
gobj_JA("グランマ","クッキーを焼いてくれるすてきなおばあちゃん");
gobj_JA("農場","クッキーの種からクッキーを育てる");
gobj_JA("鉱山","クッキー生地とチョコチップを掘り出す");
gobj_JA("工場","大量のクッキーを生産する");
gobj_JA("銀行","利子からクッキーを生み出す");
gobj_JA("神殿","貴重な古代クッキーの宝庫");
gobj_JA("魔法使いの塔","魔法の呪文でクッキーを召喚");
gobj_JA("宇宙船","クッキー星から新鮮なクッキーを輸送する");
gobj_JA("錬金術室","金をクッキーに変える");
gobj_JA("次元門","クッキー界に繋がる扉を開ける");
gobj_JA("タイムマシン","食べられる前のクッキーを過去から取り寄せる");
gobj_JA("反物質凝縮器","宇宙の反物質を圧縮しクッキーに変換する");
gobj_JA("プリズム","光をクッキーに変換する");
gobj_JA("チャンスメーカー","クッキーが生まれる可能性を作る");

/*=====================================================================================
Rewrite Upgrades Description
=======================================================================================*/	
/* Upgrades [Cookies] */
function gupg_JA(id,name,desc){
	var power_JA=Game.UpgradesById[id]["desc"];
	var start=power_JA.indexOf( "<b>" );
	var end=power_JA.indexOf( "</b>" );
	var desc_mid = power_JA.slice( start+3, end );
/*	Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]="クッキーの生産倍率<b>"+String(desc_mid)+"</b><q>"+String(desc)+"</q>";
	return;

}
gupg_JA(33,"プレーンクッキー","いわゆるフツーの");
gupg_JA(34,"シュガークッキー","おいしい。ちょっと平凡だが");
gupg_JA(35,"オートミールレーズンクッキー","これを嫌う理由（リーズン）はない");
gupg_JA(36,"ピーナッツバタークッキー","自分のためにジャムクッキーを買おう");
gupg_JA(37,"ココナッツクッキー","すっごくはがれるよ！ ");
gupg_JA(38,"ホワイトチョコレートクッキー","言いたいことは分かる。これはただのココアバターだ！本物のチョコじゃない！");
gupg_JA(39,"マカダミアナッツクッキー","くっそウマい！");
gupg_JA(40,"ダブルチップクッキー","二倍のチップ、二倍のうまみ（二倍のカロリー）。");
gupg_JA(41,"ホワイトチョコレートマカダミアナッツクッキー","Orteil氏のお気に入り。");
gupg_JA(42,"オールチョコレートクッキー","チョコレート過剰摂取");
gupg_JA(55,"ダークチョコレートコーティングクッキー","このクッキーは光を良く吸収するので、見つけるためにはほとんどの場合、目を凝らす必要がある。");
gupg_JA(56,"ホワイトチョコレートコーティングクッキー","フレーバーで完璧にコーティングされてて眩しいくらいピカピカだ。");
gupg_JA(80,"エクリプスクッキー","そのクッキーの方を見るんだ。");
gupg_JA(81,"ゼブラクッキー","...");
gupg_JA(88,"スニッカードゥードル","名称に忠実");
gupg_JA(89,"ストロープワッフル","オランダ製じゃなけりゃ、こんなに多くはなかったろう。");
gupg_JA(90,"マカルーン","「マカロン」とごちゃ混ぜにならないように。これはココナッツ入りだ、いいね？");
gupg_JA(92,"エンパイアビスケット	","まさに貴殿のクッキー皇国発展の御為！");
gupg_JA(104,"マドレーヌ","忘れられない！");
gupg_JA(105,"パルミエ","これでホッケーが出来るかも。試してみてもいいんだよ。");
gupg_JA(107,"サブレ","「原料が砂だということをサブレという名前は示唆している」君はこんな与太話を本気にしないよね。 ");


/* Upgrades [Buildings] */
function gupg_twice_JA(id,category,name,desc){
	/*Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]=String(Game.ObjectsById[category]["displayName"])+"の生産力が<b>2倍</b>になる。<q>"+String(desc)+"</q>";
	return;

}
/*マウス*/
/*　カーソルについて言及していないのでコメントアウト
gupg_twice_JA(0,0,"強化人差し指","ツンツン");
gupg_twice_JA(1,0,"手根管症候群防止クリーム","クリックしすぎで……指が痛い……");
gupg_twice_JA(2,0,"二刀流	","みてみて、両手！");*/
/*グランマ*/
gupg_twice_JA(7,1,"グランマからの返信","RE:RE:これで喜んでくれればいいけど;))");
gupg_twice_JA(8,1,"金属製のし棒	","やっぱりコレね");
gupg_twice_JA(9,1,"なめらかな総入れ歯","ぐしゃっ");
gupg_twice_JA(44,1,"プルーンジュース","もっと");
gupg_twice_JA(110,1,"2倍分厚いメガネ","ああ……じゃあ私が焼いてきたのはまさにコレだったのね。");
gupg_twice_JA(192,1,"老化剤","直観に反するが、グランマは老化でさらに強力になる薄気味悪い能力を持っている。");
gupg_twice_JA(294,1,"エクストリーム歩行器","炎のタトゥーシールとピューッと鳴る小さなラッパ付き。");
/*農場*/
gupg_twice_JA(11,2,"化学肥料","神に誓って、これはチョコレートである");
gupg_twice_JA(12,2,"クッキーの木","パンノキの一種だ。");
gupg_twice_JA(45,2,"遺伝子組み換えクッキー","全て自然な変異である。");
gupg_twice_JA(111,2,"ショウガクッキーカカシ","いたずらっぽい笑顔で農場を見つめるカカシ");
/*鉱山*/
gupg_twice_JA(17,3,"メガドリル","だいぶ深くまできたね。");
gupg_twice_JA(18,3,"ウルトラドリル","もう降参か？");
gupg_twice_JA(47,3,"アルテマドリル","天を衝く、とかね。");
gupg_twice_JA(113,3,"水爆採掘	","効率的かは疑わしいが、それでもやはり目を見張るものがある。");

/*工場*/
gupg_twice_JA(13,4,"より丈夫なベルトコンベアー","ますます上手く行く");
gupg_twice_JA(14,4,"児童労働","安くて元気な労働力");
gupg_twice_JA(15,4,"搾取工場","怠け者は消される");
gupg_twice_JA(46,4,"ラジウム反応装置","あなたのクッキーにヘルシーな光を追加");
gupg_twice_JA(112,4,"搾取工場","クッキー再教育の成果だ");

/*銀行*/
gupg_twice_JA(232,5,"のっぽの窓口係","のっぽの窓口係はより多くの手続きを処理可能だ。しかし気をつけないと、彼らは大ぼらを吹く");
gupg_twice_JA(233,5,"ハサミで切れないクレジットカード","最重要顧客の為に");
gupg_twice_JA(234,5,"耐酸性金庫","「備えあれば憂い無し」ということだ。");
gupg_twice_JA(235,5,"チョコレートコイン","この革命的貨幣は鋳造も溶かしてチョコ塊に戻すのも容易だ - 気晴らしでかじっても美味しい。");
gupg_twice_JA(236,5,"指数関数的利息	","数学論議などやってられるか！すぐに寄こせ。");
/*神殿*/
gupg_twice_JA(238,6,"黄金の偶像","クッキーを回収するために、もっと貪欲な冒険者を誘い込む。これこそ本当のアイドルゲームだ！");
gupg_twice_JA(239,6,"いけにえ","ギガトン単位のクッキーに換えられる生命は何だ？");
gupg_twice_JA(240,6,"おいしい恩恵","なんと、「焼き主」は全能なるスプーンで聖なる恵みを信徒に分け与えられたんだ - きらめくシュガー、闇夜のチョコ、そして小麦の知識を。そして少年よ、あのパーティーはとても素晴らしい物だったぞ。");
gupg_twice_JA(241,6,"太陽祀り","火吹き芸、古典演舞、儀式の打ち首など楽しみいっぱい年一回の祝祭で、寺院の原始的活力を解放せよ！");

/*魔法の塔*/
gupg_twice_JA(244,7,"三角帽子","この円錐状の魔術用具について、幾何学的比率に比例して魔力の感度が高まることが試験で示された。");
gupg_twice_JA(245,7,"ヒゲ、ヒゲ、ヒゲ","聞いていたか？あごひげこそ合い言葉だ。");
gupg_twice_JA(246,7,"旧き魔道書","「水をよだれに換える」とか「家具に眉毛を生やす」とか「政治家を呼びつける」など興味深い呪文が載っている。");
gupg_twice_JA(247,7,"キッチンの呪い","焼き菓子に関係するあらゆる物を使った風変わりな呪術。最!'高！");
/*宇宙船*/
gupg_twice_JA(19,8,"バニラ星雲","宇宙服のヘルメットを脱いだら、バニラの匂いがするかもね！※真似しないで下さい");
gupg_twice_JA(20,8,"ワームホール","このショートカットを利用することで、より早く航行出来ます");
gupg_twice_JA(21,8,"頻回発射","すぐ戻るよ！");


/*錬金術室*/
gupg_twice_JA(22,9,"アンチモン","実際金の価値がある");
gupg_twice_JA(23,9,"生地のエッセンス","古代錬クッキー術の5つの秘法により抽出する。");

/*次元門*/
gupg_twice_JA(25,10,"古代遺跡のレシピ書","もろいピーナッツで出来た奇妙な石版は、古代のクッキーレシピを遺していた。凄い！");
gupg_twice_JA(26,10,"狂気の小麦色労働者","立ち上がれ、我がミニオン達よ！");
gupg_twice_JA(27,10,"魂の契約","「僕と契約して、もっとクッキーを作ってよ！」「ええ、もちろん！」");

/*タイムマシン*/
gupg_twice_JA(28,11,"次元移転装置","未来のために焼く");

/*反物質凝縮器*/
gupg_twice_JA(99,12,"シュガー粒子","甘くて硬い粒子");
/*プリズム*/
gupg_twice_JA(175,13,"宝石研磨","すす汚れを取り除き、もっと光を通せるようにしよう。本当に本当にヤバい。");
/*チャンスメーカー*/
gupg_twice_JA(416,14,"あなたのラッキークッキー","これは君が今までに焼いた最初のクッキー。深く感傷をそそる価値あるもの、そして今となっては、趣きのある臭いを放つもの。");

/* Upgrades [Mouse] */
function gupg_mouse_JA(id,name,desc){
/*	Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]="1クリック当たりのクッキー生産量を<b>CpSの1%分</b>増やす。<q>"+String(desc)+"</q>";
	return;
}
gupg_mouse_JA(77,"チタニウムのマウス","重いけどパワフル");
gupg_mouse_JA(78,"アダマンチウムのマウス","これでダイヤモンドも切れるよ。");
gupg_mouse_JA(119,"アンオブテニウムのマウス","これだけ良いマウスがあれば十分だ");

/* Upgrades [Grandma] */
function gupg_grandma_JA(id,category,name,desc){
	var grandmas=String(Game.ObjectsById[1]["displayName"])
/*	Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]=grandmas+"の生産力が<b>2倍</b>になる。"+String(Game.ObjectsById[category]["displayName"])+"の<b>CpS</b>を"+String(category-1)+grandmas+"ごとに<b>+1%</b>する。<q>"+String(desc)+"</q>";
	return;
}
gupg_grandma_JA(57,2,"農場のグランマ","より多くクッキーを育てる素敵な農業者");
gupg_grandma_JA(58,3,"鉱山のグランマ","より多くクッキーを採掘する素敵な鉱山労働者");
gupg_grandma_JA(59,4,"工員のグランマ","より多くクッキーを生産する素敵な工員");
gupg_grandma_JA(250,5,"銀行員のグランマ","より多くのクッキーを稼ぐ素敵な銀行員");
gupg_grandma_JA(251,6,"祭司のグランマ","天にまします真の焼き主を崇める素敵な祭司。");
gupg_grandma_JA(252,7,"魔法使いグランマ","ちちんぷいぷいクッキーよ来い！と唱える素敵な魔女。");
gupg_grandma_JA(60,8,"宇宙のグランマ","クッキーを……する素敵なもの");
gupg_grandma_JA(61,9,"ミュータントグランマ","より多くクッキーを錬金する素敵な金のグランマ");
gupg_grandma_JA(62,10,"別世界のグランマ","よリ多ク#########くス敵ナぐラんマ");
gupg_grandma_JA(63,11,"ひいひいグランマ","倍のクッキーを焼く素敵なグランマの素敵なグランマ");
gupg_grandma_JA(103,12,"反グランマ物質","より多くクッキーを吐き出す卑しい反グランマ物質。物体消失の恐れがあるため、通常のグランマに触れさせないこと");
gupg_grandma_JA(180,13,"虹グランマ","クッキーに変換する為の光を放つ発光体グランマ");
gupg_grandma_JA(415,14,"幸運グランマ","いつでもクッキーをより多く見つけてくれそうな幸運グランマ");