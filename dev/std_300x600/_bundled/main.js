(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
function start(data) {
	TweenLite.defaultEase = Power2.easeInOut;
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	tl.from('#player_bg', .7, { x: data.playerX || "+=0", scale: data.playerScale || "+=0", ease: Power2.easeOut });
	tl.staggerFrom('#t1 img', .3, { x: '+=50', opacity: 0 }, .1, .2);

	tl.from('#logo_proline', .3, { scale: 1.3, opacity: 0 }, "+=.1");
	var tlShake = new TimelineMax({ repeat: 3, yoyo: true });
	tlShake.to('#player_bg', .05, { x: '-=3' });

	tl.add('shake');
	tl.add(tlShake, 'shake-=.07');
	tl.staggerTo('#t1 img', .2, { x: '-=20', opacity: 0 }, .1, '+=2');

	tl.add('t2');
	tl.staggerFrom('#t2 img', .3, { x: '+=50', opacity: 0 }, .1, 't2-=.33');
	tl.to('#logo_proline', .3, { y: data.logoY || "+=0" }, "t2");

	tl.from(['#odds'], .3, { opacity: 0 }, "+=.2");
	tl.from(['#logos'], .3, { opacity: 0 }, "+=.5");
	tl.set('#legalBtn', { display: 'block' });
}

exports['default'] = start;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _commonJsCommonJs = require('../../_common/js/common.js');

var _commonJsCommonJs2 = _interopRequireDefault(_commonJsCommonJs);

(0, _commonJsCommonJs2["default"])({
	playerX: "-=170",
	playerScale: 1.3,
	logoY: 94
});

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
