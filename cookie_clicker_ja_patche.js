/* Introduction
Coockie Clicker Japanese patch (Unofficial)  
by ya_fury http://twitter.com/@ya_fury
This softwear contains the Orteil's "Cookie Clicker" code.
*/
var versionJA="2.0042-d";

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
gobj_JA("次元門","クッキー界に繋がる扉を開ける");

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
gupg_JA(39,"マカダミアナッツクッキー","くっそウマい！");
gupg_JA(40,"ダブルチップクッキー","二倍のチップ、二倍のうまみ（二倍のカロリー）。");
gupg_JA(41,"ホワイトチョコレートマカダミアナッツクッキー","Orteil氏のお気に入り。");
gupg_JA(42,"オールチョコレートクッキー","チョコレート過剰摂取");
gupg_JA(55,"ダークチョコレートコーティングクッキー","このクッキーは光を良く吸収するので、見つけるためにはほとんどの場合、目を凝らす必要がある。");
gupg_JA(56,"ホワイトチョコレートコーティングクッキー","フレーバーで完璧にコーティングされてて眩しいくらいピカピカだ。");

/* Upgrades [Buildings] */
function gupg_twice_JA(id,category,name,desc){
	/*Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]=String(Game.ObjectsById[category]["displayName"])+"の効果が<b>2倍</b>になる。<q>"+String(desc)+"</q>";
	return;

}
/*農場*/
gupg_twice_JA(111,2,"ショウガクッキーカカシ","いたずらっぽい笑顔で農場を見つめるカカシ");

/*工場*/
gupg_twice_JA(46,4,"ラジウム反応装置","あなたのクッキーにヘルシーな光を追加");
/*神殿*/
gupg_twice_JA(240,6,"おいしい恩恵","なんと、「焼き主」は全能なるスプーンで聖なる恵みを信徒に分け与えられたんだ - きらめくシュガー、闇夜のチョコ、そして小麦の知識を。そして少年よ、あのパーティーはとても素晴らしい物だったぞ。");
/*魔法の塔*/
gupg_twice_JA(244,7,"三角帽子","この円錐状の魔術用具について、幾何学的比率に比例して魔力の感度が高まることが試験で示された。");
gupg_twice_JA(245,7,"ヒゲ、ヒゲ、ヒゲ","聞いていたか？あごひげこそ合い言葉だ。");
/*宇宙船*/
gupg_twice_JA(19,8,"バニラ星雲","宇宙服のヘルメットを脱いだら、バニラの匂いがするかもね！※真似しないで下さい");
gupg_twice_JA(20,8,"ワームホール","このショートカットを利用することで、より早く航行出来ます");
/*錬金術室*/
gupg_twice_JA(22,9,"アンチモン","実際金の価値がある");
/* Upgrades [Mouse] */

/* Upgrades [Cookies] */
function gupg_mouse_JA(id,name,desc){
/*	Game.UpgradesById[id]["name"]=String(name);*/
	Game.UpgradesById[id]["desc"]="1クリック当たりのクッキー生産量を<b>CpSの1%分</b>増やす。<q>"+String(desc)+"</q>";
	return;
}
gupg_mouse_JA(78,"アダマンチウムのマウス","これでダイヤモンドも切れるよ。");
gupg_mouse_JA(119,"アンオブテニウムのマウス","これだけ良いマウスがあれば十分だ");
