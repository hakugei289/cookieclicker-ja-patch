/* Introduction
Coockie Clicker Japanese patch (Unofficial)  
version = 2.0042-a   
by ya_fury http://twitter.com/@ya_fury

This softwear contains the Orteil's "Cookie Clicker" code.
*/

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

var num_gobj_JA=0
function gobj_JA(label) {
	Game.ObjectsById[num_gobj_JA]["displayName"]=label;
	num_gobj_JA++;
  return;
}
gobj_JA("カーソル")
gobj_JA("グランマ");
gobj_JA("農場");
gobj_JA("鉱山");
gobj_JA("工場");
gobj_JA("銀行");
gobj_JA("神殿");
gobj_JA("魔法使いの塔");
gobj_JA("宇宙船");
gobj_JA("錬金術室");
Game.UpgradesById[244]["name"]="三角帽子";