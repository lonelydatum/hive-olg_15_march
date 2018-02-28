(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function start() {
	TweenLite.defaultEase = Power2.easeInOut;
	var tl = new TimelineMax();
	tl.from('#player_bg', .7, { x: -170, scale: 1.3, ease: Power2.easeOut });
	tl.staggerFrom('#t1 img', .3, { x: '+=50', opacity: 0 }, .1);
	tl.from('#logo_proline', .3, { scale: 1.3, opacity: 0 }, "+=2");
	var tlShake = new TimelineMax({ repeat: 3, yoyo: true });
	tlShake.to('#player_bg', .05, { x: '-=4' });

	tl.add('shake');
	tl.add(tlShake, 'shake');
	tl.staggerTo('#t1 img', .2, { x: '-=20', opacity: 0 }, .1, 'shake');

	tl.add('t2');

	tl.staggerFrom('#t2 img', .3, { x: '+=50', opacity: 0 }, .1, 't2');
	tl.to('#logo_proline', .3, { y: 94 }, "t2");

	tl.from('#logos', .3, { opacity: 0 }, "+=.2");
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
