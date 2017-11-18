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
		'　百万',
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
Replace text by jQuery
=======================================================================================*/
$("#statsButton").text("ステータス")