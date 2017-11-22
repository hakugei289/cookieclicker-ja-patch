/* Introduction
Coockie Clicker Japanese patch (Unofficial)  
by ya_fury http://twitter.com/@ya_fury
This softwear contains the Orteil's "Cookie Clicker" code.
*/
var versionJA="2.0042-ｃ";

/*Original License*/
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

/* Upgrades [Cookies] */
Game.UpgradesById[39]["name"]="マカダミアナッツクッキー	";
Game.UpgradesById[39]["desc"]="クッキーの生産倍率<b>+2%</b>。<q>くっそウマい！</q>";
Game.UpgradesById[40]["name"]="ダブルチップクッキー";
Game.UpgradesById[40]["desc"]="クッキーの生産倍率<b>+2%</b>。<q>二倍のチップ、二倍のうまみ（二倍のカロリー）</q>";
Game.UpgradesById[41]["name"]="ホワイトチョコレートマカダミアナッツクッキー";
Game.UpgradesById[41]["desc"]="クッキーの生産倍率<b>+2%</b>。<q>Orteil氏のお気に入り</q>";
Game.UpgradesById[42]["name"]="オールチョコレートクッキー";
Game.UpgradesById[42]["desc"]="クッキーの生産倍率<b>+2%</b>。<q>チョコレート過剰摂取</q>";
/*+4% */
function gupg_JA(id,name,desc){
	var power_JA=Game.UpgradesById[id]["desc"]
	var start=power_JA.indexOf( "<b>" );
	var end=power_JA.indexOf( "</b>" );
	var desc_mid = power_JA.slice( start+3, end );
	Game.UpgradesById[id]["name"]=name;
	Game.UpgradesById[id]["desc"]="クッキーの生産倍率<b>"+desc_mid+"</b><q>"+desc+"</q>";
	return;

}
gupg_JA(55,"ダークチョコレートコーティングクッキー","このクッキーは光を良く吸収するので、見つけるためにはほとんどの場合、目を凝らす必要がある。")
gupg_JA(56,"ホワイトチョコレートコーティングクッキー","フレーバーで完璧にコーティングされてて眩しいくらいピカピカだ。")



/* Upgrades [Buildings] */
function gupg_twice_JA(id,name,label_id,desc){
	Game.UpgradesById[id]["name"]=name;
	Game.UpgradesById[id]["desc"]=Game.ObjectsById[label_id]["displayName"]+"の効果が<b>2倍</b>になる。<q>"+desc+"</q>";
	return;

}
/*農場*/
gupg_twice_JA(111,"ショウガクッキーカカシ",2,"いたずらっぽい笑顔で農場を見つめるカカシ")

/*工場*/
gupg_twice_JA(46,"ラジウム反応装置",4,"あなたのクッキーにヘルシーな光を追加")

/*魔法の塔*/
gupg_twice_JA(245,"ヒゲ、ヒゲ、ヒゲ",7,"聞いていたか？あごひげこそ合い言葉だ。")
/*宇宙船*/
gupg_twice_JA(19,"バニラ星雲",8,"宇宙服のヘルメットを脱いだら、バニラの匂いがするかもね！※真似しないで下さい")
gupg_twice_JA(20,"ワームホール",8,"このショートカットを利用することで、より早く航行出来ます")

Game.UpgradesById[240]["name"]="おいしい恩恵	";
Game.UpgradesById[240]["desc"]="神殿の効果が<b>２倍</b>になる。<q>なんと、「焼き主」は全能なるスプーンで聖なる恵みを信徒に分け与えられたんだ - きらめくシュガー、闇夜のチョコ、そして小麦の知識を。そして少年よ、あのパーティーはとても素晴らしい物だったぞ。</q>";
Game.UpgradesById[244]["name"]="三角帽子";
Game.UpgradesById[244]["desc"]="魔法使いの塔の効果が<b>２倍</b>になる。<q>この円錐状の魔術用具について、幾何学的比率に比例して魔力の感度が高まることが試験で示された。</q>";