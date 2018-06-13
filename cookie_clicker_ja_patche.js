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
/**********
 * Header *
 **********/
CT = {};
CT.VersionMajor = '2.0106';
CT.VersionMinor = 'c2';
CT.Upgrades = {};

CT.ShowVersion = function(){
	var str = "<div>日本語 " + CT.VersionMajor +"-" + CT.VersionMinor + "<br>ゲーム " + Game.version +"</div>";
	document.getElementById('versionNumber').innerHTML= str;
}

CT.Upgrades.Building = function(id,buil,name,desc){
	/*Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"] = String(buil) + "の生産力が<b>2倍</b>になる。<q>" + String(desc) + "</q>";
	Game.UpgradesById[id]["baseDesc"] = String(buil) + "の生産力が<b>2倍</b>になる。<q>" + String(desc) + "</q>";
}


/*錬金術室*/
CT.Upgrades.Lab = function (){
	bldg=Game.ObjectsById[9]["displayName"];
	CT.Upgrades.Building(22, bldg, "アンチモン", "実際金の価値がある");
	CT.Upgrades.Building(23, bldg, "生地のエッセンス", "古代錬クッキー術の5つの秘法により抽出する。");
	CT.Upgrades.Building(24, bldg "本物のチョコレート", "カカオの構成と全く同じ");
	CT.Upgrades.Building(49, bldg, "アンブロシア", "これをクッキー生地に加えると、更に病みつきなものになるに違いない！恐らくとても危険なほどに……。合法に取引し続けられることを願おう。");
	CT.Upgrades.Building(115, bldg, "生地の水", "添加の際は注意 - 添加しすぎるとマフィンになる。そして、誰もマフィンは好まない。");
	CT.Upgrades.Building(197, bldg, "根源のるつぼ", "最も大きい山の中の、最も深い部分にある、土の中で最も希少な成分で造られた、この伝説のるつぼは、ビッグバンそのものの性質を保ち続けていると言われている。");
	CT.Upgrades.Building(302, bldg, "原子流転説", "錬金術の奥義に至り、あらゆる物質は別の物質へ変換可能であると分かった - 鉛は金に、水銀は水に ; さらに重要なことだが、どんな物でもクッキーに変換できる（そして変換すべきである）ということを悟った。");
	CT.Upgrades.Building(315, bldg, "ギンガトビバッタ", "よし、ついにやったな。上出来だ。すばらしい。これで 3 つの銀河がクッキーに変換された。君が銀河系の間を飛び回れるのはいいことだ。");
	CT.Upgrades.Building(436,bldg,"化学の到来", "あのさぁ…聞いて？ 錬金術は何もかも出鱈目だったんだよ、それこそ全くもって根拠の無いゴミカスだったんだよ…。あんまりじゃないか、なぁ神様？");
}


CT.Legacyway = function() {
	/*=====================================================================================
	MISC HELPER FUNCTIONS (Replace)
	=======================================================================================*/
	var numberFormatters = [
		rawFormatter,
		formatEveryThirdPower(['', ' 百万', ' 十億', ' 兆', ' 千兆', ' 百京', ' 十垓', ' 杼', ' 千杼', ' 百穣', ' 十溝', ' 澗', ' 千澗', ' 百正', ' 十載', ' 極']),
		formatEveryThirdPower(['', ' M', ' B', ' T', ' Qa', ' Qi', ' Sx', ' Sp', ' Oc', ' No', ' Dc', ' UnD', ' DoD', ' TrD', ' QaD', ' QiD'])
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
	/*
	var credit_JA = "<div>日本語ver<br>v. " + versionJA + "<br>ゲームver</div>";
	HtmlToJA('versionNumber').insertAdjacentHTML('afterbegin', credit_JA);*/
	/*=====================================================================================
	Rewrite Buildings Description
	=======================================================================================*/
	var num_displayNameJa = 0

	function displayNameJa(label_JA, desc_JA) {
		Game.ObjectsById[num_displayNameJa]["displayName"] = label_JA;
		Game.ObjectsById[num_displayNameJa]["desc"] = desc_JA;
		num_displayNameJa++;
		return;
	}
	displayNameJa("カーソル", "10秒毎に自動クリック")
	displayNameJa("グランマ", "クッキーを焼いてくれるすてきなおばあちゃん");
	displayNameJa("農場", "クッキーの種からクッキーを育てる");
	displayNameJa("鉱山", "クッキー生地とチョコチップを掘り出す");
	displayNameJa("工場", "大量のクッキーを生産する");
	displayNameJa("銀行", "利子からクッキーを生み出す");
	displayNameJa("神殿", "貴重な古代クッキーの宝庫");
	displayNameJa("魔法使いの塔", "魔法の呪文でクッキーを召喚");
	displayNameJa("宇宙船", "クッキー星から新鮮なクッキーを輸送する");
	displayNameJa("錬金術室", "金をクッキーに変える");
	displayNameJa("次元門", "クッキー界に繋がる扉を開ける");
	displayNameJa("タイムマシン", "食べられる前のクッキーを過去から取り寄せる");
	displayNameJa("反物質凝縮器", "宇宙の反物質を圧縮しクッキーに変換する");
	displayNameJa("プリズム", "光をクッキーに変換する");
	displayNameJa("チャンスメーカー", "クッキーが生まれる可能性を作る");
	/*=====================================================================================
	Rewrite Upgrades Description
	=======================================================================================*/
	/* Upgrades [Cookies] */
	function upgradeCookiesJA(id, name, desc) {
		var power_JA = Game.UpgradesById[id]["desc"];
		var start = power_JA.indexOf("<b>");
		var end = power_JA.indexOf("</b>");
		var desc_mid = power_JA.slice(start + 3, end);
		/*	Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = "クッキーの生産倍率<b>" + String(desc_mid) + "</b><q>" + String(desc) + "</q>";
		Game.UpgradesById[id]["baseDesc"] = "クッキーの生産倍率<b>" + String(desc_mid) + "</b><q>" + String(desc) + "</q>";
		return;
	}
	/*ノーマルクッキー*/
	upgradeCookiesJA(33, "プレーンクッキー", "いわゆるフツーの");
	upgradeCookiesJA(34, "シュガークッキー", "おいしい。ちょっと平凡だが");
	upgradeCookiesJA(35, "オートミールレーズンクッキー", "これを嫌う理由（リーズン）はない");
	upgradeCookiesJA(36, "ピーナッツバタークッキー", "自分のためにジャムクッキーを買おう");
	upgradeCookiesJA(37, "ココナッツクッキー", "すっごくはがれるよ！ ");
	upgradeCookiesJA(38, "ホワイトチョコレートクッキー", "言いたいことは分かる。これはただのココアバターだ！本物のチョコじゃない！");
	upgradeCookiesJA(39, "マカダミアナッツクッキー", "くっそウマい！");
	upgradeCookiesJA(40, "ダブルチップクッキー", "二倍のチップ、二倍のうまみ（二倍のカロリー）。");
	upgradeCookiesJA(41, "ホワイトチョコレートマカダミアナッツクッキー", "Orteil氏のお気に入り。");
	upgradeCookiesJA(42, "オールチョコレートクッキー", "チョコレート過剰摂取");
	upgradeCookiesJA(55, "ダークチョコレートコーティングクッキー", "このクッキーは光を良く吸収するので、見つけるためにはほとんどの場合、目を凝らす必要がある。");
	upgradeCookiesJA(56, "ホワイトチョコレートコーティングクッキー", "フレーバーで完璧にコーティングされてて眩しいくらいピカピカだ。");
	upgradeCookiesJA(80, "エクリプスクッキー", "そのクッキーの方を見るんだ。");
	upgradeCookiesJA(81, "ゼブラクッキー", "...");
	upgradeCookiesJA(88, "スニッカードゥードル", "名称に忠実");
	upgradeCookiesJA(89, "ストロープワッフル", "オランダ製じゃなけりゃ、こんなに多くはなかったろう。");
	upgradeCookiesJA(90, "マカルーン", "「マカロン」とごちゃ混ぜにならないように。これはココナッツ入りだ、いいね？");
	upgradeCookiesJA(92, "エンパイアビスケット	", "まさに貴殿のクッキー皇国発展の御為！");
	upgradeCookiesJA(93, "英国式紅茶のお供のビスケット", "かなり。");
	upgradeCookiesJA(94, "英国式紅茶のお供のチョコレートビスケット", "うん、かなり。");
	upgradeCookiesJA(95, "英国式紅茶のお供の丸いビスケット", "うん、かなりおいしいよ。");
	upgradeCookiesJA(96, "英国式紅茶のお供の丸いチョコレートビスケット", "うん、実においしい。");
	upgradeCookiesJA(97, "英国式紅茶のお供のハートモチーフ付き丸いビスケット", "うん、これは実においしいね、君。");
	upgradeCookiesJA(98, "英国式紅茶のお供のハートモチーフ付き丸いチョコレートビスケット", "クッキー大好き。");
	/*Box of brand biscuits*/
	upgradeCookiesJA(104, "マドレーヌ", "忘れられない！");
	upgradeCookiesJA(105, "パルミエ", "これでホッケーが出来るかも。試してみてもいいんだよ。");
	upgradeCookiesJA(106, "パレット", "まさにそう言ったんだ。");
	upgradeCookiesJA(107, "サブレ", "「原料が砂だということをサブレという名前は示唆している」君はこんな与太話を本気にしないよね。 ");
	/*ガールスカウトクッキー*/
	upgradeCookiesJA(120, "キャラモア", "言葉の響きがいい");
	upgradeCookiesJA(121, "サガロング", "グランマのお気に入り？");
	upgradeCookiesJA(122, "ショートフォイル", "畜生、また失敗か！ ");
	upgradeCookiesJA(123, "ウィンミント", "これまで味わった中でも一番幸運なクッキー");
	/*ブランドクッキー*/
	upgradeCookiesJA(125, "フィググラトン", "全てを解明した。");
	upgradeCookiesJA(126, "ロレオル", "だから、えっと、無駄じゃないよ？");
	upgradeCookiesJA(127, "ジャファケーキ", "真に一からクッキーを焼こうとするなら、まずは工場から造らなきゃ。");
	upgradeCookiesJA(128, "グリースカップ", "超潤滑ピーナッツバター");
	upgradeCookiesJA(150, "ジンジャーブレッドマン", "脚から噛みちぎるのがお好き？腕を引き裂くのはどう？まるで病的なモンスターだね。");
	upgradeCookiesJA(151, "ジンジャーブレッドツリー", "クッキー抜き型の中の常緑樹。君は自らの発想に驚くだろう。");
	/*マカロン*/
	upgradeCookiesJA(202, "ローズマカロン", "風変わりなフレーバーだが、最近は人気の味に成った。");
	upgradeCookiesJA(203, "レモンマカロン", "ほのかな酸味が効いてて最高のごちそうだ。");
	upgradeCookiesJA(204, "チョコレートマカロン", "甘くて小さなバーガーみたい。");
	upgradeCookiesJA(205, "ピスタチオマカロン", "ええ、彼らは殻を破りました。");
	upgradeCookiesJA(206, "ヘーゼルナッツマカロン", "特にコーヒーと良く合う。");
	upgradeCookiesJA(207, "すみれマカロン", "まるで口の中に香水を吹きかけたよう！");
	upgradeCookiesJA(230, "キャラメルマカロン", "この中で一番塩気とかみ応えがある");
	upgradeCookiesJA(231, "甘草マカロン", "「黒マカロン」としても知られる。");
	upgradeCookiesJA(256, "ピュアブラックチョコレートクッキー", "ラボ製の最も暗いココアより暗い物質に漬け込んだクッキー。（チョコアレートと名付けられている。）");
	upgradeCookiesJA(257, "ピュアホワイトチョコレートクッキー", "緻密なこのビスケットのコーティングさえあれば、真っ暗な環境で光を屈折させることができる。");
	upgradeCookiesJA(258, "レディーフィンガー", "洗浄と消毒はバッチリ、紛れも無くビスケットであると誓ってもいいよ。");
	upgradeCookiesJA(259, "トゥイル", "タイルからは逃げられない。");
	upgradeCookiesJA(260, "チョコレート入りビスケット", "豪勢なお菓子！穴はチョコレートが呼吸できるようになってるよ。");
	upgradeCookiesJA(261, "チェッカークッキー", "四角いクッキーだって？これで多くの保管・包装問題が解決する！きみは天才だ！");
	upgradeCookiesJA(262, "バタークッキー", "口の中でほろほろ溶けて、君の心をメロメロにする。（そして君の体をコロコロ肥やす。現実を見るんだ）");
	upgradeCookiesJA(263, "クリームクッキー", "一見ただの2枚のチョコチップクッキー！ところがどっこい、クリームの魔法で1つに合体！悪魔の発明かってほどに完璧！");
	upgradeCookiesJA(330, "ドラゴンクッキー", "クッキードラゴン完全成体の生命力と成長力を宿す神秘的なクッキーは、君の帝国を末代まで煽り勢いづかせるだろう。");
	upgradeCookiesJA(334, "ミルクチョコレートバタービスケット", "全て100所有した報酬です。偉大な起業家が彫られています。");
	upgradeCookiesJA(335, "ダークチョコレートバタービスケット", "全て 150 所有した報酬です。経験豊富なクッキー界の大物の像で飾られています。");
	upgradeCookiesJA(336, "ホワイトチョコレートバタービスケット", "全て 200 所有した栄誉の証です。チョコレートには、堂々たる社交界の大御所が彫られています。");
	upgradeCookiesJA(338, "ジンジャースナップ", "魂のこもったクッキーだ。おそらくね。");
	upgradeCookiesJA(339, "シナモンクッキー", "秘密は特許取得済みの渦巻き模様の甘いグレーズ。");
	upgradeCookiesJA(340, "バニティークッキー", "砂糖漬け果物の欠片が一つ、この退廃的なクッキーにちょこんと坐している。");
	upgradeCookiesJA(341, "シガレット	", "身近な一品だけど、当時のコーヒーショップでストロー代わりに提供するには贅沢すぎるね。");
	upgradeCookiesJA(342, "ピンホイールクッキー", "ブラウンの風味とベージュの甘味のコンビネーションが、君に目玉グルグル攻撃だ！");
	upgradeCookiesJA(343, "四角いファッジ", "正確にはクッキーじゃない。でも 1 個食べればそんなのどうでもよくなる。美味しけりゃいいんだよ、でっち上げでも！");
	upgradeCookiesJA(344, "デジット", "3つのフレーバー、骨はなし");
	upgradeCookiesJA(345, "バターホースシュー", "何かの熱中防止に必要な存在。");
	upgradeCookiesJA(346, "バターパック", "ご主人様、人間って何て愚かなんでしょう！（引用違うって突っ込んでもいんよう。）");
	upgradeCookiesJA(347, "バターノット", "ほら、欲しいのならこのプレッツェルあげるよ。ただ君さ、思い違いなんてしてないよね？");
	upgradeCookiesJA(348, "バタースラブ", "こんな「板」ビンタなら最高だね。");
	upgradeCookiesJA(349, "バタースワール", "等分の砂糖とバター、そして暖かくハッピーな気持ちで出来ている … そのどれもが毎日数百万もの死を招いている。");
	upgradeCookiesJA(350, "ショートブレッドビスケット", "このバター豊かなクッキーは短くもないしパンでもない。これだからあの国は！");
	upgradeCookiesJA(351, "億万長者のショートブレッド", "上から、リッチなクリーミーチョコレート・粘り強いキャラメル・ボロボロのビスケット。階級闘争を鋭く評釈した、示唆に富む三重層。");
	upgradeCookiesJA(352, "キャラメルクッキー", "クッキーを飾るこの多糖類は、暫く歯にくっついて離れないよ、きっと。");
	/*ver 2.003から*/
	upgradeCookiesJA(401, "ロンバルディアクッキー", "まこと良き思い出のある農場からもたらされたクッキー ");
	upgradeCookiesJA(402, "バステナーケンクッキー", "美味しいシナモンと氷砂糖で作ったフレンチクッキー。ナッツは入っていないよ！");
	upgradeCookiesJA(403, "ペカンサンディ", "ナッツをクッキーに突っ刺したものを今日びこう呼ぶ！こいつを名付け直してくれ！何でもいい！");
	upgradeCookiesJA(404, "モラヴィアンスパイスクッキー", "世界的人気のモラヴィアのクッキー。");
	upgradeCookiesJA(405, "アンザックビスケット", "メイド・イン・オーストラリアの軍用ビスケット。卵は入ってないけどオーツ麦なら。");
	upgradeCookiesJA(406, "バターケーキ", "コレステロールで艶々のこいつは果たしてクッキーと言えるのか、それとも只の棒バターなのか。両者の法的定義の境界線をべっとりと跨いでやがる。");
	upgradeCookiesJA(407, "アイスクリーム・サンドウィッチ", "とある別の宇宙では、「アイスクリーム・サンドウィッチ」とはベーコン、レタス、トマトをアイスクリーム・コーンに詰めたものを指す。多分トッピングも少々。");
	/*ver 2.0045から*/
	upgradeCookiesJA(444, "ピンクビスケット ", "最古のクッキーの一つ。 シャンパンに浸し柔らかくして頂くのが伝統。フランス人はしょっちゅう飲んでるからね。");
	upgradeCookiesJA(445, "全粒粉クッキー", "種子や土っぽい粉屑に覆われている。マジ「5秒ルール」適用したくなる見た目。");
	upgradeCookiesJA(446, "飴入りクッキー ", "手に取るとちょっと溶けちゃう。");
	upgradeCookiesJA(463, "お祝いドーナツクッキー", "このケバケバしいビスケットは子供の誕生日パーティーに、或いは、奇人変人で酔狂な億万長者の葬式にピッタリ。");
	upgradeCookiesJA(447, "チョコチャンククッキー ", "チョコチップの大きさに平伏してしまいそう。圧倒的塊がゴロゴロ。");
	upgradeCookiesJA(448, "ちょっとチップクッキー ", "ポチッとだけ。");
	upgradeCookiesJA(453, "スプリンクルクッキー", "どんなに平々凡々で味気ないクッキーだったとしても、ちょいとカラフルにデコってしまえば気付かれない。");
	upgradeCookiesJA(454, "ピーナツバターブロッサム", "トッピングはすっごく美味しいチョコの噴出物…まぁ、それについて言明するのは断固ナシで。");
	upgradeCookiesJA(455, "ノーベイククッキー", "オーブン要らずの謎クッキー。どうやって作るのか、どうして形を保ってるのか皆目解らない。たぶん象にも負けない強力接着剤か冷蔵庫で固めたか。");
	upgradeCookiesJA(456, "フロランタン", "少なくともチョコを主役に引き立てていた点で、辛うじてクッキーと呼べるナッツのキャラメル固め。");
	/* Upgrades [Mouse] */
	function upgradeCursorJa(id, name, effect, desc) {
		/*Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = "マウスとカーソルの生産力が" + String(effect) + "<q>" + String(desc) + "</q>";
		return;
	}
	upgradeCursorJa(0, "強化人差し指", "<b>2倍</b>になる。", "ツンツン");
	upgradeCursorJa(1, "手根管症候群防止クリーム", "<b>2倍</b>になる。", "クリックしすぎで……指が痛い……");
	upgradeCursorJa(2, "二刀流	", "<b>2倍</b>になる。", "みてみて、両手！");
	upgradeCursorJa(3, "千手観音", "カーソル以外の施設の数 × <b>0.1</b>増加する。", "クリックなう");
	upgradeCursorJa(4, "万手観音", "カーソル以外の施設の数 × <b>0.5</b>増加する。", "クリッククリックなう");
	upgradeCursorJa(5, "億手観音", "カーソル以外の施設の数 × <b>5</b>増加する。", "クリッククリッククリックなう");
	upgradeCursorJa(6, "兆手観音", "カーソル以外の施設の数 × <b>50</b>増加する。", "クリッククリッククリッククリックなう");
	upgradeCursorJa(43, "京手観音", "カーソル以外の施設の数 × <b>500</b>増加する。", "クリッククリッククリッククリッククリック");
	upgradeCursorJa(82, "垓手観音", "カーソル以外の施設の数 × <b>5000</b>増加する。", "お前は, ただクリックしてクリックしてクリックしてクリックしてクリックするだけだ。本当に簡単だろう？");
	upgradeCursorJa(109, "じょ手観音", "カーソル以外の施設の数 × <b>50000</b>増加する。", "時々ただクリックするもの");
	upgradeCursorJa(188, "穣手観音", "カーソル以外の施設の数 × <b>500000</b>増加する。", "[ここにフレーバーテキストを挿入]");
	/* Upgrades [Buildings] */
	function upgradeTwiceJa(id, category, name, desc) {
		/*Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = String(Game.ObjectsById[category]["displayName"]) + "の生産力が<b>2倍</b>になる。<q>" + String(desc) + "</q>";
		return;
	}
	/*グランマ*/
	upgradeTwiceJa(7, 1, "グランマからの返信", "RE:RE:これで喜んでくれればいいけど;))");
	upgradeTwiceJa(8, 1, "金属製のし棒	", "やっぱりコレね");
	upgradeTwiceJa(9, 1, "なめらかな総入れ歯", "ぐしゃっ");
	upgradeTwiceJa(44, 1, "プルーンジュース", "もっと");
	upgradeTwiceJa(110, 1, "2倍分厚いメガネ", "ああ……じゃあ私が焼いてきたのはまさにコレだったのね。");
	upgradeTwiceJa(192, 1, "老化剤", "直観に反するが、グランマは老化でさらに強力になる薄気味悪い能力を持っている。");
	upgradeTwiceJa(294, 1, "エクストリーム歩行器", "炎のタトゥーシールとピューッと鳴る小さなラッパ付き。");
	upgradeTwiceJa(307, 1, "制約を越えた者", "悪い子育てについてのよくある寓話かもしれないが、このお話でグランマがどこへ向かうのか見てみよう。");
	upgradeTwiceJa(428, 1, "逆認知症", "すごく不安で、何だかいつもより調子悪い。");
	/*農場*/
	upgradeTwiceJa(10, 2, "安いクワ", "一掘りでこんなに！");
	upgradeTwiceJa(11, 2, "化学肥料", "神に誓って、これはチョコレートである");
	upgradeTwiceJa(12, 2, "クッキーの木", "パンノキの一種だ。");
	upgradeTwiceJa(45, 2, "遺伝子組み換えクッキー", "全て自然な変異である。");
	upgradeTwiceJa(111, 2, "ショウガクッキーカカシ", "いたずらっぽい笑顔で農場を見つめるカカシ");
	upgradeTwiceJa(193, 2, "パルススプリンクラー", "水のやり過ぎなどない、びしょびしょこそ最高だ");
	upgradeTwiceJa(295, 2, "ファッジ菌", "巻きひげがクッキーの成長を助ける、甘ったるい寄生菌。胞子を吸わないように。吸ってしまった場合、36 秒以内に医学的処置を受けること。");
	upgradeTwiceJa(308, 2, "小麦トリフィド", "君んとこの植物が自由に歩き回れて農場の手伝いをしてくれたら、作物の世話がとても楽になるだろうね。但し、そいつを撫でちゃダメ。餌あげちゃダメ。話しかけるのもダメ。");
	upgradeTwiceJa(429, 2, "人道的農薬", "人民によって、人民のために、人民から作られた殺虫剤。いつ何時でも正義の灼熱痛をお見舞いしてやれるのさ、それを受けるに相応しい忌々しい虫けら共に。");
	/*鉱山*/
	upgradeTwiceJa(16, 3, "砂糖ガス", "いくつかのチョコレート洞窟の奥で発見された、質の悪い揮発性ガス。");
	upgradeTwiceJa(17, 3, "メガドリル", "だいぶ深くまできたね。");
	upgradeTwiceJa(18, 3, "ウルトラドリル", "もう降参か？");
	upgradeTwiceJa(47, 3, "アルテマドリル", "天を衝く、とかね。");
	upgradeTwiceJa(113, 3, "水爆採掘	", "効率的かは疑わしいが、それでもやはり目を見張るものがある。");
	upgradeTwiceJa(195, 3, "中心炉", "とうとう地球の核までトンネル掘っちゃったよ。この辺は酷い暑さだね。");
	upgradeTwiceJa(296, 3, "惑星割り", "この最新式掘削機は「Merula」「Globort」「Flwanza VI」など遠方の惑星でテストされた。奇妙なことに、最近これらの惑星から連絡がない。");
	upgradeTwiceJa(309, 3, "キャノーラ油井", "これまで手付かずの資源であったキャノーラ油は地下の油井に豊富にあり、発掘者に格別の味わいと莫大な富を約束してくれる。");
	upgradeTwiceJa(430, 3, "モグラ人間", "紛れもない君の研究所で、本物の人間から造られた、タフな小人。お高い機械をお釈迦にするような過酷な環境下でも、最高品質の食用鉱物を堀り当てる技能持ち。");
	/*工場*/
	upgradeTwiceJa(13, 4, "より丈夫なベルトコンベアー", "ますます上手く行く");
	upgradeTwiceJa(14, 4, "児童労働", "安くて元気な労働力");
	upgradeTwiceJa(15, 4, "搾取工場", "怠け者は消される");
	upgradeTwiceJa(46, 4, "ラジウム反応装置", "あなたのクッキーにヘルシーな光を追加");
	upgradeTwiceJa(112, 4, "搾取工場", "クッキー再教育の成果だ");
	upgradeTwiceJa(194, 4, "深焼き製法", "今までと同じ量の原料で倍のクッキーを製造する特許製法。方法は聞かないでください。写真を撮らないでください。あと防護服を着用していただけますか。");
	upgradeTwiceJa(297, 4, "サイボーグ工員", "半機械化人間はサボタージュもストライキも起こさないし、昼食休憩を 20 ％ほど短くできるし、消耗品として理想的だ。");
	upgradeTwiceJa(310, 4, "一日78時間労働", "なぜもっと早くに思いつかなかったのだろう？");
	upgradeTwiceJa(431, 4, "機械学習", "労働者に機械の取り扱い方を習得するよう指示した方が、生産性が上がるかもしれないって思ってる？　それ大して意味ない……こともあるよ、偶に…");
	/*銀行*/
	upgradeTwiceJa(232, 5, "のっぽの窓口係", "のっぽの窓口係はより多くの手続きを処理可能だ。しかし気をつけないと、彼らは大ぼらを吹く");
	upgradeTwiceJa(233, 5, "ハサミで切れないクレジットカード", "最重要顧客の為に");
	upgradeTwiceJa(234, 5, "耐酸性金庫", "「備えあれば憂い無し」ということだ。");
	upgradeTwiceJa(235, 5, "チョコレートコイン", "この革命的貨幣は鋳造も溶かしてチョコ塊に戻すのも容易だ - 気晴らしでかじっても美味しい。");
	upgradeTwiceJa(236, 5, "指数関数的利息", "数学論議などやってられるか！すぐに寄こせ。");
	upgradeTwiceJa(237, 5, "金融禅", "経済思想の聖なる究極目的 ; ビッグマネーの風水、証券市場のヨガ - 神秘の10セントコイン操作法。");
	upgradeTwiceJa(298, 5, "サイフ道", "この新しい金融学派は業界で大流行している。あなた達も教義に従えばすぐに利益を得られるでしょう。");
	upgradeTwiceJa(311, 5, "マネーの原理", "いつやるの？今でしょ！何やるの？これでしょ！道具がない？…なら有り合わせの物でなんとか。");
	upgradeTwiceJa(432, 5, "食用貨幣", "実に単純明快。あらゆる貨幣を絶対食べたくなるほど美味にしてバラ撒き、世界中の飢餓とインフレ問題を一挙に解決！");
	/*神殿*/
	upgradeTwiceJa(238, 6, "黄金の偶像", "クッキーを回収するために、もっと貪欲な冒険者を誘い込む。これこそ本当のアイドルゲームだ！");
	upgradeTwiceJa(239, 6, "いけにえ", "ギガトン単位のクッキーに換えられる生命は何だ？");
	upgradeTwiceJa(240, 6, "おいしい恩恵", "なんと、「焼き主」は全能なるスプーンで聖なる恵みを信徒に分け与えられたんだ - きらめくシュガー、闇夜のチョコ、そして小麦の知識を。そして少年よ、あのパーティーはとても素晴らしい物だったぞ。");
	upgradeTwiceJa(241, 6, "太陽祀り", "火吹き芸、古典演舞、儀式の打ち首など楽しみいっぱい年一回の祝祭で、寺院の原始的活力を解放せよ！");
	upgradeTwiceJa(242, 6, "増築された万神殿", "魂の力不足に対応！あなたが必要とするよりも多くの御利益が、あるいはお金が返ってきますよ！100 %保証！");
	upgradeTwiceJa(243, 6, "天にまします大いなる焼き主", "これは大事なことだが至高神はあなたの振る舞いに大いなる視線を投げ掛けている ; （善人には）良いことだが、もしかするとあなたは最後の審判の日取りを直ちに調べなきゃいけないかもね。");
	upgradeTwiceJa(299, 6, "創造神話", "あらゆるクッキーの中で最も旧きものの更に根元にまで物話は遡る ; 時を超越する「生地」そして運命の「オーブン」からいかにして全てが始まったかについての言い伝えだ。");
	upgradeTwiceJa(312, 6, "神権政治", "あなたは自身のクッキー皇国を完全な神権制に移行した、これは宇宙の隅から隅まで存在する無数の臣民からなる信仰集団である。常に敬虔でありなさい。");
	upgradeTwiceJa(433, 6, "見たことねぇラップ祈祷	", "超ヤバいビートと激ヤバいライムのヒップな宗教曲は「教会にしてはマジやばくね？」と若者のハートをしっかりキャッチ！ 続々と信徒席に詰めかけ祈りを捧げる B-Boys & B-Girls …なんたる不敬！");
	/*魔法の塔*/
	upgradeTwiceJa(244, 7, "三角帽子", "この円錐状の魔術用具について、幾何学的比率に比例して魔力の感度が高まることが試験で示された。");
	upgradeTwiceJa(245, 7, "ヒゲ、ヒゲ、ヒゲ", "聞いていたか？あごひげこそ合い言葉だ。");
	upgradeTwiceJa(246, 7, "旧き魔道書", "「水をよだれに換える」とか「家具に眉毛を生やす」とか「政治家を呼びつける」など興味深い呪文が載っている。");
	upgradeTwiceJa(247, 7, "キッチンの呪い", "焼き菓子に関係するあらゆる物を使った風変わりな呪術。最高！");
	upgradeTwiceJa(248, 7, "魔法学校", "このクッキー資本の魔術アカデミーは、魔術界の四大名家の故郷である : すなわち「万能リア充」「オタク」「ぼんぼん」そして「死喰い人」。");
	upgradeTwiceJa(249, 7, "暗黒の術式", "おぞましい力がこの呪文の裏側で働いている - この力と取引するなんてとんでもないと霊感が働くだろう。しかし、クッキーが只だ、OK？");
	upgradeTwiceJa(300, 7, "クッキー操術", "これぞ完成された焼き上げ魔法の流派だ。魔法の仕掛けのおかげで、チップの召喚からナッツに呪いをかけることまで、クッキー作りの全ての工程が10倍程度改善されたのだ。");
	upgradeTwiceJa(313, 7, "うさぎのトリック", "ただの派手なシルクハットを使うことで、魔法使いはうさぎの個体数を抑制すると同時に、実質ロハで更なるクッキーの山を作り出す方法を編み出した。但し、このクッキーはビーガンには適さない可能性がある。");
	upgradeTwiceJa(434, 7, "贅沢仕立ての杖", "この科学の時代、熟練の杖職人は今や遠い過去のものとなった。だが幸いなことに、彼ら職人が全く消えてしまった訳ではない。");
	/*宇宙船*/
	upgradeTwiceJa(19, 8, "バニラ星雲", "宇宙服のヘルメットを脱いだら、バニラの匂いがするかもね！※真似しないで下さい");
	upgradeTwiceJa(20, 8, "ワームホール", "このショートカットを利用することで、より早く航行出来ます");
	upgradeTwiceJa(21, 8, "頻回発射", "すぐ戻るよ！");
	upgradeTwiceJa(48, 8, "ワープ航法", "大胆なクッキー作りのために");
	upgradeTwiceJa(114, 8, "チョコレートモノリス", "何ということだ。板チョコでいっぱいだ");
	upgradeTwiceJa(196, 8, "世代宇宙船", "クッキー文明継承のため、超巨大宇宙船はあなたのクッキーを宇宙の深淵に届けるだろう。いつか必ず。");
	upgradeTwiceJa(301, 8, "ダイソン球", "君は宇宙科学についての知識を、少しだけ局所的な取り組みに応用する方法を見つけた。恒星を包み込むように建造されたこの超物質製の超巨大球体は、きっとあなたのクッキー生産力を劇的に向上させる。");
	upgradeTwiceJa(314, 8, "最後のフロンティア", "長い道のりだったがここまで踏破した。しかし本当にやりがいのある事業だった - 景色は素晴らしいし、油の価格も少しは手頃になるしね。");
	upgradeTwiceJa(435, 8, "自動操縦", "完全ロボット化の乗組員が配備された君の宇宙船！ 船が宇宙で迷子になっても遺族補償を払わずに済むそれだけで、驚きの超節約。");
	/*次元門*/
	upgradeTwiceJa(25, 10, "古代遺跡のレシピ書", "もろいピーナッツで出来た奇妙な石版は、古代のクッキーレシピを遺していた。凄い！");
	upgradeTwiceJa(26, 10, "狂気の小麦色労働者", "立ち上がれ、我がミニオン達よ！");
	upgradeTwiceJa(27, 10, "魂の契約", "「僕と契約して、もっとクッキーを作ってよ！」「ええ、もちろん！」");
	upgradeTwiceJa(50, 10, "「健全な」踊り", "望めば変えられる。脳みそを放り出そう");
	upgradeTwiceJa(116, 10, "ブレーン移植", "これは、更なる高次元世界への到達、あるいは私たち自身の「ブレーン」の変化を促すためである（高価なクッキー生地収穫のためでもある）。");
	upgradeTwiceJa(198, 10, "神サイズのポータル", "これは言ってみれば、クトゥルフの旧神が今まさにくぐり抜けられそうなほどに大きい。理論上は。");
	upgradeTwiceJa(303, 10, "終末の日バックアップ計画", "あくまで念のためだ、いいね？");
	upgradeTwiceJa(316, 10, "人をキレさせるシュプレヒコール", "よく使われる文はこういう感じだ : ジョオンマッデンジョオンマッデンアエイオウアエイオウブルブルブル");
	/*タイムマシン*/
	upgradeTwiceJa(28, 11, "次元移転装置", "未来のために焼く");
	upgradeTwiceJa(29, 11, "タイムパラドックスリゾルバー", "もうあなたのグランマをかつぐ必要はない！");
	upgradeTwiceJa(30, 11, "量子的難問", "星がいっぱいだ！");
	upgradeTwiceJa(51, 11, "因果律強要課程", "何が、何かが起こった");
	upgradeTwiceJa(117, 11, "昨日と明日の投影機", "数週間が数千年に");
	upgradeTwiceJa(199, 11, "遠未来条例", "遠未来条約によって、より遠い未来まで探求することが許可された。- 文明が滅んだ後、もう一度クッキーが焼けるようになるまで。");
	upgradeTwiceJa(304, 11, "グレートループ仮説", "この宇宙が終わりなき円環の、周回の1つに過ぎないとしたら？この宇宙の前にも後にも同様の宇宙が果てしなく伸びており、各々の宇宙が無数のクッキーを含有するとしたら？");
	upgradeTwiceJa(317, 11, "クッキートピアンの夢想", "過去の歴史の別の可能性や、今どうあるべきか、これからどうなるのかについて思いを巡らせている。");
	/*反物質凝縮器*/
	upgradeTwiceJa(99, 12, "シュガー粒子", "甘くて硬い粒子");
	upgradeTwiceJa(100, 12, "弦理論", "クッキーを焼くことの真の目的に関する新しい見解が明らかになる(ついでに宇宙の構造も)");
	upgradeTwiceJa(101, 12, "大型マカロン衝突型加速器", "何て風変わりな！");
	upgradeTwiceJa(102, 12, "ビッグバンベイク", "そうしてここから全てが始まったのです");
	upgradeTwiceJa(118, 12, "リバースサイクロトロン	", "これで粒子と反スピン原子に分離できる。ええと…その…味は良いらしいよ。");
	upgradeTwiceJa(200, 12, "ナノ宇宙学", "素粒子は見かけによらないが各々が固有の宇宙を裡に持ち、計り知れない熱量を保存している、そうナノ宇宙学理論では仮定している。");
	upgradeTwiceJa(305, 12, "パルス", "君は宇宙の鼓動そのものを送信し終えた。これは時代を超えたリズムであり、全ての物質と反物質はこれに従って一斉に脈打つのだ。どういうわけか、これでもっとクッキーを得られるようになる。");
	upgradeTwiceJa(318, 12, "他にも基本的な超微粒子があるだろう、多分", "森羅万象さえもが行き詰まりに達した時こそ、あなたの研究が終わりに近づいていることが分かるのです。");
	/*プリズム*/
	upgradeTwiceJa(175, 13, "宝石研磨", "すす汚れを取り除き、もっと光を通せるようにしよう。本当に本当にヤバい。");
	upgradeTwiceJa(176, 13, "第９の色", "今までシャコすら見向きもしなかった、光学的に未知の深みを模索せよ！");
	upgradeTwiceJa(177, 13, "チョコレート光", "そのココア蛍光で肌を焼こう《警告：色んな面白い肌ができあがるかも、ただし死ぬほどひどい》");
	upgradeTwiceJa(178, 13, "「グレイン」ボー", "Roy G. Bivって何の頭文字か覚えてる？：R は rice (コメ)、O は oats (カラスムギ)、うーん、B は barley (大麦)…かな？");
	upgradeTwiceJa(179, 13, "超純粋宇宙光", "あなたのプリズムは、未使用で無垢なフォトンを宇宙のもう一方の端から受け取れるようになった。");
	upgradeTwiceJa(201, 13, "燐光", "あなたのプリズムは光の入力がなくても発光するようになった。つまり実質的に2倍の出力を得られる！");
	upgradeTwiceJa(306, 13, "光のサンクトラム", "あなたのプリズム操作係は光の中の何か（あるいは光を超越し、おそらく我々を超越した何者か）をますます惹きつけるようになった。");
	/*チャンスメーカー*/
	upgradeTwiceJa(416, 14, "あなたのラッキークッキー", "これは君が今までに焼いた最初のクッキー。深く感傷をそそる価値あるもの、そして今となっては、趣きのある臭いを放つもの。");
	upgradeTwiceJa(417, 14, "「全てが水の泡になる」魔法のコイン", "弾くと必ず反対側に着地するコイン。表でも裏でも縁でもなく、意図したのと反対側に。");
	upgradeTwiceJa(418, 14, "抽選勝利チケット", "何のくじだ？宝くじ、これが宝くじというものだ！宝くじだけが重要なんだ！");
	upgradeTwiceJa(419, 14, "四葉のクローバー畑", "ここには巨大モンスターはいない、ラッキーな草が覆い尽くすだけ。");
	upgradeTwiceJa(420, 14, "トリックに関する虎の巻", "天秤をこっちに傾けちゃおうぜ、この 28 の独創的で新しいイカサマ術で。");
	upgradeTwiceJa(421, 14, "レプラコーンの村", "君は遂に地元のレプラコーン達に認められた。彼らは友情の証として、君に神話的な豪運を分けてくれるだろう（ついでにかなり不味いお茶も）。");
	upgradeTwiceJa(422, 14, "不可能性駆動装置", "内部で統計を勝手に弄るへんてこな装置。グランマのベーカリーガイドからの推薦。 ");
	/* Upgrades [Lucky] */
	function upgradeLuckyJa(id, name, effect, desc) {
		/*Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = "ゴールデンクッキーの" + String(effect) + "<q>" + String(desc) + "</q>";
		return;
	}
	upgradeLuckyJa(52, "吉日", "出現間隔が<b>半分</b>になり、効果時間が<b>2倍</b>になる。", "やった、四つ葉のペニーだ！");
	upgradeLuckyJa(53, "発見能力", "出現間隔が<b>半分</b>になり、効果時間が<b>2倍</b>になる。", "なんてこったい！蹄鉄が７つだ！");
	upgradeLuckyJa(86, "うまくいったぜ", "効果時間が<b>2倍</b>になる。", "徹夜したんじゃないの？");
	/* Upgrades [Mouse] */
	function upgradeMouseJa(id, name, desc) {
		/*	Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = "1クリック当たりのクッキー生産量を<b>CpSの1%分</b>増やす。<q>" + String(desc) + "</q>";
		return;
	}
	upgradeMouseJa(75, "プラスチックマウス", "ちょっときしむな");
	upgradeMouseJa(76, "鉄のマウス", "1349のようにクリックだ！");
	upgradeMouseJa(77, "チタニウムのマウス", "重いけどパワフル");
	upgradeMouseJa(78, "アダマンチウムのマウス", "これでダイヤモンドも切れるよ。");
	upgradeMouseJa(119, "アンオブテニウムのマウス", "これだけ良いマウスがあれば十分だ");
	upgradeMouseJa(190, "エルディウムのマウス", "もし私がきみなら、それをネズミみたいにカリカリする");
	upgradeMouseJa(191, "望まれし合金のマウス", "クリックは立派で男前なことだ。しかしマウスに穴を開けるようなことはするな。ゲームをしなさい");
	upgradeMouseJa(366, "夢の鋼鉄のマウス", "君はタッチパッドでクリックしているかもしれないが、我々は今やもっと賢くなるべきだ。");
	upgradeMouseJa(367, "不磨のマウス", "マウスをラットにでもさせるまで鍛え続けるつもりかい？");
	upgradeMouseJa(427, "軍用ミスリル製マウス", "53人が囲んで押して何とか動き、48人が一斉にボタンに飛び降り漸くクリック。言わば、それくらい重くて骨が折れる。");
	/* Upgrades [Grandma] */
	function upgradeGrandmaJa(id, category, name, desc) {
		var grandmas = String(Game.ObjectsById[1]["displayName"])
		/*	Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = grandmas + "の生産力が<b>2倍</b>になる。" + String(Game.ObjectsById[category]["displayName"]) + "の<b>CpS</b>を" + String(category - 1) + grandmas + "ごとに<b>+1%</b>する。<q>" + String(desc) + "</q>";
		return;
	}
	upgradeGrandmaJa(57, 2, "農場のグランマ", "より多くクッキーを育てる素敵な農業者");
	upgradeGrandmaJa(58, 3, "鉱山のグランマ", "より多くクッキーを採掘する素敵な鉱山労働者");
	upgradeGrandmaJa(59, 4, "工員のグランマ", "より多くクッキーを生産する素敵な工員");
	upgradeGrandmaJa(250, 5, "銀行員のグランマ", "より多くのクッキーを稼ぐ素敵な銀行員");
	upgradeGrandmaJa(251, 6, "祭司のグランマ", "天にまします真の焼き主を崇める素敵な祭司。");
	upgradeGrandmaJa(252, 7, "魔法使いグランマ", "ちちんぷいぷいクッキーよ来い！と唱える素敵な魔女。");
	upgradeGrandmaJa(60, 8, "宇宙のグランマ", "クッキーを……する素敵なもの");
	upgradeGrandmaJa(61, 9, "ミュータントグランマ", "より多くクッキーを錬金する素敵な金のグランマ");
	upgradeGrandmaJa(62, 10, "別世界のグランマ", "よリ多ク#########くス敵ナぐラんマ");
	upgradeGrandmaJa(63, 11, "ひいひいグランマ", "倍のクッキーを焼く素敵なグランマの素敵なグランマ");
	upgradeGrandmaJa(103, 12, "反グランマ物質", "より多くクッキーを吐き出す卑しい反グランマ物質。物体消失の恐れがあるため、通常のグランマに触れさせないこと");
	upgradeGrandmaJa(180, 13, "虹グランマ", "クッキーに変換する為の光を放つ発光体グランマ");
	upgradeGrandmaJa(415, 14, "幸運グランマ", "いつでもクッキーをより多く見つけてくれそうな幸運グランマ");
	/* Upgrades [Kitten] */
	function upgradeKittenJa(id, name, desc) {
		/*	Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = "ミルクの量が多いほど<b>CpS</b>を増やす。<q>" + String(desc) + "</q>";
		return;
	}
	upgradeKittenJa(31, "お手伝い猫", "手伝うかにゃー？");
	upgradeKittenJa(32, "労働者猫", "にゃーにゃーにゃーにゃー");
	upgradeKittenJa(54, "技術者猫", "にゃーにゃーにゃーにゃー、ご主人様");
	upgradeKittenJa(108, "監督者猫", "私の目的はあなたに仕えることであります、ご主人様");
	upgradeKittenJa(187, "管理者猫", "何もご心配要りません、ご主人様");
	upgradeKittenJa(320, "会計士猫", "ビジネスを素晴らしく成功させます、ご主人様");
	upgradeKittenJa(321, "専門家猫", "業務フローのギョッとするほどの改善をご期待ください、ご主人様");
	upgradeKittenJa(322, "熟練者猫", "クッキービジネスこの道 10 年のエキスプゥァァァートでございます、ご主人様");

	function upgradeDragonJa(id, name, desc) {
		/*	Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = "<q>" + String(desc) + "</q>";
		return;
	}
	upgradeDragonJa(324, "ポロポロこぼれそうな卵", "この丈夫で遊び好きなクッキードラゴンをお求め頂き、誠にありがとうございます！ あなたの暮らしに長く喜びと娯楽をもたらすことでしょう。 飼育は乾燥した涼しい場所で、他のペットには近づけないように。住宅災害保険への加入を強くお勧めします。");

	function upgradeApocalypseJa(id, name, effect, desc) {
		/*	Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = String(effect) + "<q>" + String(desc) + "</q>";
		return;
	}
	upgradeApocalypseJa(64, "ビンゴセンター・研究施設", "グランマの生産力が<b>4</b>倍になる", "グランマたちの不満を何とか抑える方法は無いのか？…ビンゴ！");
	upgradeApocalypseJa(65, "特殊チョコレートチップ", "クッキーの生産倍率<b>+1%</b>", "電子設計チョコチップ。言うなればコンピューターチップ");
	upgradeApocalypseJa(66, "デザイナーココア豆", "クッキーの生産倍率<b>+2%</b>", "従来よりも空力的に優れた新製品！");
	upgradeApocalypseJa(67, "儀式の延べ棒", "グランマの生産力が<b>2</b>倍になる", "数年にわたる「科学」研究の成果！");
	upgradeApocalypseJa(68, "地獄のオーブン", "クッキーの生産倍率<b>+3%</b>", "「科学」の力ですよ、勿論！");
	upgradeApocalypseJa(69, "統合思念", "各グランマの基本生産倍率を<b>グランマの人数×+2%</b>する。<div class='warning'>ノート：おや！？グランマの様子が……？進化させるのはやめておけ </div>", "我らは多くにして、一つなるもの");
	/*警告：この装置は予想外かつ、好ましくない結果をもたらす恐れがある。つまり地獄の一丁目だ。警告はしたぞ。それでも購入するか？*/
	upgradeApocalypseJa(70, "エキゾチック・ナッツ", "クッキーの生産倍率<b>+4%</b>", "病み付きになるよ！");
	upgradeApocalypseJa(71, "集団洗脳", "各グランマの基本生産倍率をさらに<b>グランマの人数×+2%</b>する。<div class='warning'>これ以上科学研究を続ければ予測不能な結果にたどり着くかもしれない。警告はしたぞ。 </div>", "我らは融合する。我らは統合する。我らは発達する。");
	upgradeApocalypseJa(72, "難解なシュガー", "クッキーの生産倍率<b>+5%</b>", "風味は虫のようで、腱のようで、泥土のようでもある。");
	upgradeApocalypseJa(73, "約束", "各グランマの基本生産倍率を<b>ポータルの数×+5%</b>する。<div class='warning'>これは悪い着想だ</div>", "捻らせよ 這わせよ 滑らせよ 悶えさせよ 本日 我らは決起する");

	function upgradePrestigeJa(id, perc, name, desc) {
		/*	Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = "名声レベルによる効果が<b>" + String(perc) + "%</b> まで開放される。<q>" + String(desc) + "</q>";
		return;
	}
	upgradePrestigeJa(129, 5, "ヘブンリーチップスの極意", "ヘブンリーチップスについての知識、そしてより効率的に焼くための方法を授けよう。決して他人に教えるな。");
	upgradePrestigeJa(130, 25, "天国のクッキースタンド", "後で、天国のレモネードスタンドに寄っていけよな。絶対だぞ！");
	upgradePrestigeJa(131, 50, "天国のベーカリー", "神のケーキや神のペストリーも売ってるよ。");
	upgradePrestigeJa(132, 75, "天国の製菓ファクトリー", "そこでは天使のクッキー職人が働くという。彼らは天使の昼休みを取り、時には天使のストライキを起こす。");
	upgradePrestigeJa(133, 100, "天国の鍵", "これはペストリー天国に通じる、真珠のように美しく(そして美味しい)ゲートの鍵、あなたのヘブンリーチップの全備蓄へのアクセスを許可します。どうぞ賢くお使いください。");

	function upgradeSynergiesOneNomJa(id, name, forward, back, desc) {
		/*	Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = String(forward) + "の<b>CpS</b>を" + String(back) + "ごとに<b>+5%</b>する。<br>" + String(back) + "の<b>CpS</b>を" + String(forward) + "ごとに<b>+0.1%</b>する。<q>" + String(desc) + "</q>";
		return;
	}
	upgradeSynergiesOneNomJa(369, "未来の暦", "農場", "タイムマシン", "理想的な植え付け時期を予知できるようにしてあげよう。タイムトラベルで出来ることはどれも非常識なのさ。")
	upgradeSynergiesOneNomJa(371, "地震魔法", "鉱山", "魔法の塔", "魔法界の名士は、昔から突発的地震を起こすのがお好きだ。")
	upgradeSynergiesOneNomJa(373, "量子エレクトロニクス", "工場", "反物質凝縮器", "機械の状態が「起動」と「停止」のどちらであるかすら確定できなくなる！")
	upgradeSynergiesOneNomJa(375, "「あちら側」からの契約書", "銀行", "次元門", "印字が判読可能か確認しろ！")
	upgradeSynergiesOneNomJa(377, "邪教徒	", "神殿", "次元門", "崇拝されないままにしておくべき神性も存在する。")
	upgradeSynergiesOneNomJa(379, "謎めいた知識	", "魔法の塔", "錬金術室", "決して知ろうとしてはならない - 臆測のみ許される - 知識というのもあるのだ。")

	function upgradeSynergiesOneRevJa(id, name, forward, back, desc) {
		/*	Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = String(forward) + "の<b>CpS</b>を" + String(back) + "ごとに<b>+0.1%</b>する。<br>" + String(back) + "の<b>CpS</b>を" + String(forward) + "ごとに<b>+5%</b>する。<q>" + String(desc) + "</q>";
		return;
	}
	/*Vol.1*/
	upgradeSynergiesOneRevJa(381, "化石燃料", "宇宙船", "鉱山", "根拠はないがロケットの動力源にはプルトニウムよりこちらのほうが良いだろう。化石と化した超古代文明の燃料から抽出される。")
	upgradeSynergiesOneRevJa(383, "原初の鉱石", "錬金術室", "鉱山", "地球上で最も甘い蜜の抽出が可能になるのは、最高純度の冶金を実現してからである。")
	upgradeSynergiesOneRevJa(385, "冒涜的な作物", "次元門", "農場", "定期的に火炎を散布すること。")
	upgradeSynergiesOneRevJa(387, "相対論的パーセク・スキップ航法", "タイムマシン", "宇宙船", "凡人は物理的に不可能だと言うだろう。<br>君たちの船には不要な人種だ。")
	upgradeSynergiesOneRevJa(389, "特殊物理学基金", "反物質凝縮器", "銀行", "資金を所有する粒子加速器に投入する時機だ。")
	upgradeSynergiesOneRevJa(391, "光魔法", "プリズム", "魔法の塔", "決して手軽（ライト）に使ってはならない！いや、私は真剣だ。去年は 178 人の死者を出している。安易に魔法に手を出してはいけない。")
	upgradeSynergiesOneRevJa(424, "宝石の護符", "チャンスメーカー", "鉱", "古代の至極希少な結晶体で覆われた、幸運のお守り。面接を受ける際の必需品。")

	function upgradeSynergiesTwo(id, name, forward, back, desc) {
		/*	Game.UpgradesById[id]["name"]=String(name);*/
		Game.UpgradesById[id]["desc"] = String(forward) + "の<b>CpS</b>を" + String(back) + "ごとに<b>+5%</b>する。<br>" + String(back) + "の<b>CpS</b>を" + String(forward) + "ごとに<b>+0.1%</b>する。<q>" + String(desc) + "</q>";
		return;
	}
	upgradeSynergiesTwo(443, "チャームクォーク", "反物質凝縮器", "チャンスメーカー", "みなが追い求めるラッキークォーク！")
	/*関数の上書き（試験運用）*/
	Game.SetResearch = function(what, time) {
		if (Game.Upgrades[what] && !Game.Has(what)) {
			Game.researchT = Game.baseResearchTime;
			if (Game.Has('Persistent memory')) Game.researchT = Math.ceil(Game.baseResearchTime / 10);
			if (Game.Has('Ultrascience')) Game.researchT = Game.fps * 5;
			Game.nextResearch = Game.Upgrades[what].id;
			if (Game.prefs.popups) Game.Popup('Research has begun.');
			else Game.Notify('研究開始', 'あなたのビンゴセンター・研究施設が研究を開始しました。', [9, 0]);
		}
	}
}




CT.Init = function() {
	var proceed = true;
	if (Game.version != CT.VersionMajor) {
		proceed = confirm('この日本語パッチのバージョン ' + CT.VersionMajor + '-' + CT.VersionMinor + ' はゲームバージョン ' + CT.VersionMajor + '向けのものです。ゲームと読み込むパッチのバージョンが異なると、エラーが発生するかもしれません。本当に読み込みますか？');
	}
	if (proceed) {
		CT.Legacyway();
		CT.Upgrades.Lab();
		CT.ShowVersion();
		if (Game.prefs.popups) Game.Popup('日本語パッチバージョン' + CT.VersionMajor + '-' + CT.VersionMinor + ' を読み込みました！');
		else Game.Notify('日本語パッチバージョン ' + CT.VersionMajor + '-' + CT.VersionMinor + ' を読み込みました！', '', '', 1, 1);
	}
}
CT.Init();