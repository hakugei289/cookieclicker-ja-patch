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
Replace text 
=======================================================================================*/
function toJA(id) {
  return document.getElementById(id);
}

toJA('prefsButton').innerHTML = 'オプション';
toJA('statsButton').innerHTML = '統計';
toJA('logButton').innerHTML = '情報';

toJA('storeTitle').innerHTML = 'ストア';
toJA('productName0').innerHTML = 'カーソル';
toJA('productName1').innerHTML = 'グランマ';
toJA('productName2').innerHTML = '農場';
toJA('productName3').innerHTML = '鉱山';
toJA('productName4').innerHTML = '工場';
toJA('productName5').innerHTML = '銀行';
toJA('productName6').innerHTML = '神殿';
toJA('productName7').innerHTML = '魔法使いの塔';
toJA('productName8').innerHTML = '宇宙船';
toJA('productName9').innerHTML = '錬金術室';
toJA('productName10').innerHTML = '次元門';
toJA('productName11').innerHTML = 'タイムマシン';