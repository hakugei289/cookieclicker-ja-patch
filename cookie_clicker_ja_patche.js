var versionJA="2.0042-f3";
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
var num_displayNameJa=0
function displayNameJa(label_JA,desc_JA) {
	Game.ObjectsById[num_displayNameJa]["displayName"]=label_JA; 
	Game.ObjectsById[num_displayNameJa]["desc"]=desc_JA;
	num_displayNameJa++;
  return;
}
displayNameJa("カーソル","10秒毎に自動クリック")
displayNameJa("グランマ","クッキーを焼いてくれるすてきなおばあちゃん");
displayNameJa("農場","クッキーの種からクッキーを育てる");
displayNameJa("鉱山","クッキー生地とチョコチップを掘り出す");
displayNameJa("工場","大量のクッキーを生産する");
displayNameJa("銀行","利子からクッキーを生み出す");
displayNameJa("神殿","貴重な古代クッキーの宝庫");
displayNameJa("魔法使いの塔","魔法の呪文でクッキーを召喚");
displayNameJa("宇宙船","クッキー星から新鮮なクッキーを輸送する");
displayNameJa("錬金術室","金をクッキーに変える");
displayNameJa("次元門","クッキー界に繋がる扉を開ける");
displayNameJa("タイムマシン","食べられる前のクッキーを過去から取り寄せる");
displayNameJa("反物質凝縮器","宇宙の反物質を圧縮しクッキーに変換する");
displayNameJa("プリズム","光をクッキーに変換する");
displayNameJa("チャンスメーカー","クッキーが生まれる可能性を作る");

/*=====================================================================================
Rewrite Upgrades Description
=======================================================================================*/	
/* Upgrades [Cookies] */
function upgradeCookiesJA(id,name,desc){
	var power_JA=Game.UpgradesById[id]["desc"];
	var start=power_JA.indexOf( "<b>" );
	var end=power_JA.indexOf( "</b>" );
	var desc_mid = power_JA.slice( start+3, end );
/*	Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]="クッキーの生産倍率<b>"+String(desc_mid)+"</b><q>"+String(desc)+"</q>";
	return;

}
/*ノーマルクッキー*/
upgradeCookiesJA(33,"プレーンクッキー","いわゆるフツーの");
upgradeCookiesJA(34,"シュガークッキー","おいしい。ちょっと平凡だが");
upgradeCookiesJA(35,"オートミールレーズンクッキー","これを嫌う理由（リーズン）はない");
upgradeCookiesJA(36,"ピーナッツバタークッキー","自分のためにジャムクッキーを買おう");
upgradeCookiesJA(37,"ココナッツクッキー","すっごくはがれるよ！ ");
upgradeCookiesJA(38,"ホワイトチョコレートクッキー","言いたいことは分かる。これはただのココアバターだ！本物のチョコじゃない！");
upgradeCookiesJA(39,"マカダミアナッツクッキー","くっそウマい！");
upgradeCookiesJA(40,"ダブルチップクッキー","二倍のチップ、二倍のうまみ（二倍のカロリー）。");
upgradeCookiesJA(41,"ホワイトチョコレートマカダミアナッツクッキー","Orteil氏のお気に入り。");
upgradeCookiesJA(42,"オールチョコレートクッキー","チョコレート過剰摂取");
upgradeCookiesJA(55,"ダークチョコレートコーティングクッキー","このクッキーは光を良く吸収するので、見つけるためにはほとんどの場合、目を凝らす必要がある。");
upgradeCookiesJA(56,"ホワイトチョコレートコーティングクッキー","フレーバーで完璧にコーティングされてて眩しいくらいピカピカだ。");
upgradeCookiesJA(80,"エクリプスクッキー","そのクッキーの方を見るんだ。");
upgradeCookiesJA(81,"ゼブラクッキー","...");
upgradeCookiesJA(88,"スニッカードゥードル","名称に忠実");
upgradeCookiesJA(89,"ストロープワッフル","オランダ製じゃなけりゃ、こんなに多くはなかったろう。");
upgradeCookiesJA(90,"マカルーン","「マカロン」とごちゃ混ぜにならないように。これはココナッツ入りだ、いいね？");
upgradeCookiesJA(92,"エンパイアビスケット	","まさに貴殿のクッキー皇国発展の御為！");
upgradeCookiesJA(104,"マドレーヌ","忘れられない！");
upgradeCookiesJA(105,"パルミエ","これでホッケーが出来るかも。試してみてもいいんだよ。");
upgradeCookiesJA(106,"パレット","まさにそう言ったんだ。");
upgradeCookiesJA(107,"サブレ","「原料が砂だということをサブレという名前は示唆している」君はこんな与太話を本気にしないよね。 ");
upgradeCookiesJA(150,"ジンジャーブレッドマン","脚から噛みちぎるのがお好き？腕を引き裂くのはどう？まるで病的なモンスターだね。");
upgradeCookiesJA(151,"ジンジャーブレッドツリー","クッキー抜き型の中の常緑樹。君は自らの発想に驚くだろう。");
upgradeCookiesJA(256,"ピュアブラックチョコレートクッキー","ラボ製の最も暗いココアより暗い物質に漬け込んだクッキー。（チョコアレートと名付けられている。）");
upgradeCookiesJA(257,"ピュアホワイトチョコレートクッキー","緻密なこのビスケットのコーティングさえあれば、真っ暗な環境で光を屈折させることができる。");
upgradeCookiesJA(258,"レディーフィンガー","洗浄と消毒はバッチリ、紛れも無くビスケットであると誓ってもいいよ。");
upgradeCookiesJA(259,"トゥイル","タイルからは逃げられない。");
upgradeCookiesJA(260,"チョコレート入りビスケット","豪勢なお菓子！穴はチョコレートが呼吸できるようになってるよ。");
upgradeCookiesJA(261,"チェッカークッキー","四角いクッキーだって？これで多くの保管・包装問題が解決する！きみは天才だ！");
upgradeCookiesJA(262,"バタークッキー","口の中でほろほろ溶けて、君の心をメロメロにする。（そして君の体をコロコロ肥やす。現実を見るんだ）");
upgradeCookiesJA(263,"クリームクッキー","一見ただの2枚のチョコチップクッキー！ところがどっこい、クリームの魔法で1つに合体！悪魔の発明かってほどに完璧！");
upgradeCookiesJA(338,"ジンジャースナップ","魂のこもったクッキーだ。おそらくね。");


/*マカロン*/
upgradeCookiesJA(202,"ローズマカロン","風変わりなフレーバーだが、最近は人気の味に成った。");
upgradeCookiesJA(203,"レモンマカロン","ほのかな酸味が効いてて最高のごちそうだ。");
upgradeCookiesJA(204,"チョコレートマカロン","甘くて小さなバーガーみたい。");
upgradeCookiesJA(205,"ピスタチオマカロン","ええ、彼らは殻を破りました。");
upgradeCookiesJA(206,"ヘーゼルナッツマカロン","特にコーヒーと良く合う。");
upgradeCookiesJA(207,"すみれマカロン","まるで口の中に香水を吹きかけたよう！");

/*Tin of Britis tea biscuits */
upgradeCookiesJA(93,"英国式紅茶のお供のビスケット","かなり。");
upgradeCookiesJA(94,"英国式紅茶のお供のチョコレートビスケット","うん、かなり。");
upgradeCookiesJA(95,"英国式紅茶のお供の丸いビスケット","うん、かなりおいしいよ。");
upgradeCookiesJA(96,"英国式紅茶のお供の丸いチョコレートビスケット","うん、実においしい。");
upgradeCookiesJA(97,"英国式紅茶のお供のハートモチーフ付き丸いビスケット","うん、これは実においしいね、君。");
upgradeCookiesJA(98,"英国式紅茶のお供のハートモチーフ付き丸いチョコレートビスケット","クッキー大好き。");
/*Box of brand biscuits*/
/*ガールスカウトクッキー*/
upgradeCookiesJA(120,"キャラモア","言葉の響きがいい");
upgradeCookiesJA(121,"サガロング","グランマのお気に入り？");
upgradeCookiesJA(122,"ショートフォイル","畜生、また失敗か！ ");
upgradeCookiesJA(123,"ウィンミント","これまで味わった中でも一番幸運なクッキー");
/*ブランドクッキー*/
upgradeCookiesJA(125,"フィググラトン","全てを解明した。");
upgradeCookiesJA(126,"ロレオル","だから、えっと、無駄じゃないよ？");
upgradeCookiesJA(127,"ジャファケーキ","真に一からクッキーを焼こうとするなら、まずは工場から造らなきゃ。");
upgradeCookiesJA(128,"グリースカップ","超潤滑ピーナッツバター");
upgradeCookiesJA(344,"デジット","3つのフレーバー、骨はなし");
/* Upgrades [Mouse] */
function upgradeMouseJa(id,category,name,desc){
	/*Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]=String(Game.ObjectsById[category]["displayName"])+"の生産力が<b>2倍</b>になる。<q>"+String(desc)+"</q>";
	return;

upgradeMouseJa(0,0,"強化人差し指","ツンツン");
upgradeMouseJa(1,0,"手根管症候群防止クリーム","クリックしすぎで……指が痛い……");
upgradeMouseJa(2,0,"二刀流	","みてみて、両手！");
}

/* Upgrades [Buildings] */
function upgradeTwiceJa(id,category,name,desc){
	/*Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]=String(Game.ObjectsById[category]["displayName"])+"の生産力が<b>2倍</b>になる。<q>"+String(desc)+"</q>";
	return;

}
/*グランマ*/
upgradeTwiceJa(7,1,"グランマからの返信","RE:RE:これで喜んでくれればいいけど;))");
upgradeTwiceJa(8,1,"金属製のし棒	","やっぱりコレね");
upgradeTwiceJa(9,1,"なめらかな総入れ歯","ぐしゃっ");
upgradeTwiceJa(44,1,"プルーンジュース","もっと");
upgradeTwiceJa(110,1,"2倍分厚いメガネ","ああ……じゃあ私が焼いてきたのはまさにコレだったのね。");
upgradeTwiceJa(192,1,"老化剤","直観に反するが、グランマは老化でさらに強力になる薄気味悪い能力を持っている。");
upgradeTwiceJa(294,1,"エクストリーム歩行器","炎のタトゥーシールとピューッと鳴る小さなラッパ付き。");
upgradeTwiceJa(307,1,"制約を越えた者","悪い子育てについてのよくある寓話かもしれないが、このお話でグランマがどこへ向かうのか見てみよう。");

/*農場*/
upgradeTwiceJa(10,2,"安いクワ","一掘りでこんなに！");
upgradeTwiceJa(11,2,"化学肥料","神に誓って、これはチョコレートである");
upgradeTwiceJa(12,2,"クッキーの木","パンノキの一種だ。");
upgradeTwiceJa(45,2,"遺伝子組み換えクッキー","全て自然な変異である。");
upgradeTwiceJa(111,2,"ショウガクッキーカカシ","いたずらっぽい笑顔で農場を見つめるカカシ");
upgradeTwiceJa(193,2,"パルススプリンクラー","水のやり過ぎなどない、びしょびしょこそ最高だ");
upgradeTwiceJa(295,2,"ファッジ菌","巻きひげがクッキーの成長を助ける、甘ったるい寄生菌。胞子を吸わないように。吸ってしまった場合、36 秒以内に医学的処置を受けること。");
upgradeTwiceJa(308,2,"小麦トリフィド","君んとこの植物が自由に歩き回れて農場の手伝いをしてくれたら、作物の世話がとても楽になるだろうね。但し、そいつを撫でちゃダメ。餌あげちゃダメ。話しかけるのもダメ。");
/*鉱山*/
upgradeTwiceJa(16,3,"砂糖ガス","いくつかのチョコレート洞窟の奥で発見された、質の悪い揮発性ガス。");
upgradeTwiceJa(17,3,"メガドリル","だいぶ深くまできたね。");
upgradeTwiceJa(18,3,"ウルトラドリル","もう降参か？");
upgradeTwiceJa(47,3,"アルテマドリル","天を衝く、とかね。");
upgradeTwiceJa(113,3,"水爆採掘	","効率的かは疑わしいが、それでもやはり目を見張るものがある。");
upgradeTwiceJa(195,3,"中心炉","とうとう地球の核までトンネル掘っちゃったよ。この辺は酷い暑さだね。");
upgradeTwiceJa(296,3,"惑星割り","この最新式掘削機は「Merula」「Globort」「Flwanza VI」など遠方の惑星でテストされた。奇妙なことに、最近これらの惑星から連絡がない。");


/*工場*/
upgradeTwiceJa(13,4,"より丈夫なベルトコンベアー","ますます上手く行く");
upgradeTwiceJa(14,4,"児童労働","安くて元気な労働力");
upgradeTwiceJa(15,4,"搾取工場","怠け者は消される");
upgradeTwiceJa(46,4,"ラジウム反応装置","あなたのクッキーにヘルシーな光を追加");
upgradeTwiceJa(112,4,"搾取工場","クッキー再教育の成果だ");
upgradeTwiceJa(194,4,"深焼き製法","今までと同じ量の原料で倍のクッキーを製造する特許製法。方法は聞かないでください。写真を撮らないでください。あと防護服を着用していただけますか。");
upgradeTwiceJa(297,4,"サイボーグ工員","半機械化人間はサボタージュもストライキも起こさないし、昼食休憩を 20 ％ほど短くできるし、消耗品として理想的だ。");

/*銀行*/
upgradeTwiceJa(232,5,"のっぽの窓口係","のっぽの窓口係はより多くの手続きを処理可能だ。しかし気をつけないと、彼らは大ぼらを吹く");
upgradeTwiceJa(233,5,"ハサミで切れないクレジットカード","最重要顧客の為に");
upgradeTwiceJa(234,5,"耐酸性金庫","「備えあれば憂い無し」ということだ。");
upgradeTwiceJa(235,5,"チョコレートコイン","この革命的貨幣は鋳造も溶かしてチョコ塊に戻すのも容易だ - 気晴らしでかじっても美味しい。");
upgradeTwiceJa(236,5,"指数関数的利息","数学論議などやってられるか！すぐに寄こせ。");
upgradeTwiceJa(237,5,"金融禅","経済思想の聖なる究極目的 ; ビッグマネーの風水、証券市場のヨガ - 神秘の10セントコイン操作法。");
upgradeTwiceJa(298,5,"サイフ道","この新しい金融学派は業界で大流行している。あなた達も教義に従えばすぐに利益を得られるでしょう。");

/*神殿*/
upgradeTwiceJa(238,6,"黄金の偶像","クッキーを回収するために、もっと貪欲な冒険者を誘い込む。これこそ本当のアイドルゲームだ！");
upgradeTwiceJa(239,6,"いけにえ","ギガトン単位のクッキーに換えられる生命は何だ？");
upgradeTwiceJa(240,6,"おいしい恩恵","なんと、「焼き主」は全能なるスプーンで聖なる恵みを信徒に分け与えられたんだ - きらめくシュガー、闇夜のチョコ、そして小麦の知識を。そして少年よ、あのパーティーはとても素晴らしい物だったぞ。");
upgradeTwiceJa(241,6,"太陽祀り","火吹き芸、古典演舞、儀式の打ち首など楽しみいっぱい年一回の祝祭で、寺院の原始的活力を解放せよ！");
upgradeTwiceJa(242,6,"増築された万神殿","魂の力不足に対応！あなたが必要とするよりも多くの御利益が、あるいはお金が返ってきますよ！100 %保証！");
upgradeTwiceJa(243,6,"天にまします大いなる焼き主","これは大事なことだが至高神はあなたの振る舞いに大いなる視線を投げ掛けている ; （善人には）良いことだが、もしかするとあなたは最後の審判の日取りを直ちに調べなきゃいけないかもね。");

/*魔法の塔*/
upgradeTwiceJa(244,7,"三角帽子","この円錐状の魔術用具について、幾何学的比率に比例して魔力の感度が高まることが試験で示された。");
upgradeTwiceJa(245,7,"ヒゲ、ヒゲ、ヒゲ","聞いていたか？あごひげこそ合い言葉だ。");
upgradeTwiceJa(246,7,"旧き魔道書","「水をよだれに換える」とか「家具に眉毛を生やす」とか「政治家を呼びつける」など興味深い呪文が載っている。");
upgradeTwiceJa(247,7,"キッチンの呪い","焼き菓子に関係するあらゆる物を使った風変わりな呪術。最高！");
upgradeTwiceJa(248,7,"魔法学校","このクッキー資本の魔術アカデミーは、魔術界の四大名家の故郷である : すなわち「万能リア充」「オタク」「ぼんぼん」そして「死喰い人」。");
upgradeTwiceJa(249,7,"暗黒の術式","おぞましい力がこの呪文の裏側で働いている - この力と取引するなんてとんでもないと霊感が働くだろう。しかし、クッキーが只だ、OK？");

/*宇宙船*/
upgradeTwiceJa(19,8,"バニラ星雲","宇宙服のヘルメットを脱いだら、バニラの匂いがするかもね！※真似しないで下さい");
upgradeTwiceJa(20,8,"ワームホール","このショートカットを利用することで、より早く航行出来ます");
upgradeTwiceJa(21,8,"頻回発射","すぐ戻るよ！");
upgradeTwiceJa(48,8,"ワープ航法","大胆なクッキー作りのために");
upgradeTwiceJa(114,8,"チョコレートモノリス","何ということだ。板チョコでいっぱいだ");

/*錬金術室*/
upgradeTwiceJa(22,9,"アンチモン","実際金の価値がある");
upgradeTwiceJa(23,9,"生地のエッセンス","古代錬クッキー術の5つの秘法により抽出する。");
upgradeTwiceJa(24,9,"本物のチョコレート","カカオの構成と全く同じ");
upgradeTwiceJa(49,9,"アンブロシア","これをクッキー生地に加えると、更に病みつきなものになるに違いない！恐らくとても危険なほどに……。合法に取引し続けられることを願おう。");
upgradeTwiceJa(115,9,"生地の水","添加の際は注意 - 添加しすぎるとマフィンになる。そして、誰もマフィンは好まない。");


/*次元門*/
upgradeTwiceJa(25,10,"古代遺跡のレシピ書","もろいピーナッツで出来た奇妙な石版は、古代のクッキーレシピを遺していた。凄い！");
upgradeTwiceJa(26,10,"狂気の小麦色労働者","立ち上がれ、我がミニオン達よ！");
upgradeTwiceJa(27,10,"魂の契約","「僕と契約して、もっとクッキーを作ってよ！」「ええ、もちろん！」");
upgradeTwiceJa(50,10,"「健全な」踊り","望めば変えられる。脳みそを放り出そう");
upgradeTwiceJa(116,10,"ブレーン移植","これは、更なる高次元世界への到達、あるいは私たち自身の「ブレーン」の変化を促すためである（高価なクッキー生地収穫のためでもある）。");

/*タイムマシン*/
upgradeTwiceJa(28,11,"次元移転装置","未来のために焼く");
upgradeTwiceJa(29,11,"タイムパラドックスリゾルバー","もうあなたのグランマをかつぐ必要はない！");
upgradeTwiceJa(30,11,"量子的難問","星がいっぱいだ！");
upgradeTwiceJa(51,11,"因果律強要課程","何が、何かが起こった");
upgradeTwiceJa(117,11,"昨日と明日の投影機","数週間が数千年に");

/*反物質凝縮器*/
upgradeTwiceJa(99,12,"シュガー粒子","甘くて硬い粒子");
upgradeTwiceJa(100,12,"弦理論","クッキーを焼くことの真の目的に関する新しい見解が明らかになる(ついでに宇宙の構造も)");
upgradeTwiceJa(101,12,"大型マカロン衝突型加速器","何て風変わりな！");
upgradeTwiceJa(102,12,"ビッグバンベイク","そうしてここから全てが始まったのです");

/*プリズム*/
upgradeTwiceJa(175,13,"宝石研磨","すす汚れを取り除き、もっと光を通せるようにしよう。本当に本当にヤバい。");
upgradeTwiceJa(176,13,"第９の色","今までシャコすら見向きもしなかった、光学的に未知の深みを模索せよ！");
upgradeTwiceJa(177,13,"チョコレート光","そのココア蛍光で肌を焼こう《警告：色んな面白い肌ができあがるかも、ただし死ぬほどひどい》");
upgradeTwiceJa(178,13,"「グレイン」ボー","Roy G. Bivって何の頭文字か覚えてる？：R は rice (コメ)、O は oats (カラスムギ)、うーん、B は barley (大麦)…かな？");

/*チャンスメーカー*/
upgradeTwiceJa(416,14,"あなたのラッキークッキー","これは君が今までに焼いた最初のクッキー。深く感傷をそそる価値あるもの、そして今となっては、趣きのある臭いを放つもの。");
upgradeTwiceJa(417,14,"「全てが水の泡になる」魔法のコイン","弾くと必ず反対側に着地するコイン。表でも裏でも縁でもなく、意図したのと反対側に。");
upgradeTwiceJa(418,14,"抽選勝利チケット","何のくじだ？宝くじ、これが宝くじというものだ！宝くじだけが重要なんだ！");
upgradeTwiceJa(419,14,"四葉のクローバー畑","ここには巨大モンスターはいない、ラッキーな草が覆い尽くすだけ。");

/* Upgrades [Mouse] */
function upgradeMouseJa(id,name,desc){
/*	Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]="1クリック当たりのクッキー生産量を<b>CpSの1%分</b>増やす。<q>"+String(desc)+"</q>";
	return;
}
upgradeMouseJa(75,"プラスチックマウス","ちょっときしむな");
upgradeMouseJa(76,"鉄のマウス","1349のようにクリックだ！");
upgradeMouseJa(77,"チタニウムのマウス","重いけどパワフル");
upgradeMouseJa(78,"アダマンチウムのマウス","これでダイヤモンドも切れるよ。");
upgradeMouseJa(119,"アンオブテニウムのマウス","これだけ良いマウスがあれば十分だ");
upgradeMouseJa(190,"エルディウムのマウス","もし私がきみなら、それをネズミみたいにカリカリする");
upgradeMouseJa(191,"望まれし合金のマウス","クリックは立派で男前なことだ。しかしマウスに穴を開けるようなことはするな。ゲームをしなさい");
upgradeMouseJa(366,"夢の鋼鉄のマウス","君はタッチパッドでクリックしているかもしれないが、我々は今やもっと賢くなるべきだ。");
upgradeMouseJa(367,"不磨のマウス","マウスをラットにでもさせるまで鍛え続けるつもりかい？");
/*upgradeMouseJa(366,"軍用ミスリル製マウス","53人が囲んで押して何とか動き、48人が一斉にボタンに飛び降り漸くクリック。言わば、それくらい重くて骨が折れる。");*/


/* Upgrades [Grandma] */
function upgradeGrandmaJa(id,category,name,desc){
	var grandmas=String(Game.ObjectsById[1]["displayName"])
/*	Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]=grandmas+"の生産力が<b>2倍</b>になる。"+String(Game.ObjectsById[category]["displayName"])+"の<b>CpS</b>を"+String(category-1)+grandmas+"ごとに<b>+1%</b>する。<q>"+String(desc)+"</q>";
	return;
}
upgradeGrandmaJa(57,2,"農場のグランマ","より多くクッキーを育てる素敵な農業者");
upgradeGrandmaJa(58,3,"鉱山のグランマ","より多くクッキーを採掘する素敵な鉱山労働者");
upgradeGrandmaJa(59,4,"工員のグランマ","より多くクッキーを生産する素敵な工員");
upgradeGrandmaJa(250,5,"銀行員のグランマ","より多くのクッキーを稼ぐ素敵な銀行員");
upgradeGrandmaJa(251,6,"祭司のグランマ","天にまします真の焼き主を崇める素敵な祭司。");
upgradeGrandmaJa(252,7,"魔法使いグランマ","ちちんぷいぷいクッキーよ来い！と唱える素敵な魔女。");
upgradeGrandmaJa(60,8,"宇宙のグランマ","クッキーを……する素敵なもの");
upgradeGrandmaJa(61,9,"ミュータントグランマ","より多くクッキーを錬金する素敵な金のグランマ");
upgradeGrandmaJa(62,10,"別世界のグランマ","よリ多ク#########くス敵ナぐラんマ");
upgradeGrandmaJa(63,11,"ひいひいグランマ","倍のクッキーを焼く素敵なグランマの素敵なグランマ");
upgradeGrandmaJa(103,12,"反グランマ物質","より多くクッキーを吐き出す卑しい反グランマ物質。物体消失の恐れがあるため、通常のグランマに触れさせないこと");
upgradeGrandmaJa(180,13,"虹グランマ","クッキーに変換する為の光を放つ発光体グランマ");
upgradeGrandmaJa(415,14,"幸運グランマ","いつでもクッキーをより多く見つけてくれそうな幸運グランマ");
/* Upgrades [Kitten] */
function upgradeKittenJa(id,name,desc){
/*	Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]="ミルクの量が多いほど<b>CpS</b>を増やす。<q>"+String(desc)+"</q>";
	return;
}
upgradeKittenJa(31,"お手伝い猫","手伝うかにゃー？");
upgradeKittenJa(32,"労働者猫","にゃーにゃーにゃーにゃー");
upgradeKittenJa(54,"技術者猫","にゃーにゃーにゃーにゃー、ご主人様");
upgradeKittenJa(108,"監督者猫","私の目的はあなたに仕えることであります、ご主人様");
upgradeKittenJa(187,"管理者猫","何もご心配要りません、ご主人様");
upgradeKittenJa(320,"会計士猫","ビジネスを素晴らしく成功させます、ご主人様");

function upgradePrestigeJa(id,perc,name,desc){
/*	Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]="名声レベルによる効果が<b>"+String(perc)+"%</b> まで開放される。<q>"+String(desc)+"</q>";
	return;
}
upgradePrestigeJa(129,5,"ヘブンリーチップスの極意","ヘブンリーチップスについての知識、そしてより効率的に焼くための方法を授けよう。決して他人に教えるな。");
upgradePrestigeJa(130,25,"天国のクッキースタンド","後で、天国のレモネードスタンドに寄っていけよな。絶対だぞ！");
upgradePrestigeJa(131,50,"天国のベーカリー","神のケーキや神のペストリーも売ってるよ。");
upgradePrestigeJa(132,75,"天国の製菓ファクトリー","そこでは天使のクッキー職人が働くという。彼らは天使の昼休みを取り、時には天使のストライキを起こす。");
upgradePrestigeJa(133,100,"天国の鍵","これはペストリー天国に通じる、真珠のように美しく(そして美味しい)ゲートの鍵、あなたのヘブンリーチップの全備蓄へのアクセスを許可します。どうぞ賢くお使いください。");
