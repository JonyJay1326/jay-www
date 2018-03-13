'use strict';

/**
 * demo2.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	var DOM = {};
	DOM.intro = document.querySelector('.content--intro');
	DOM.shape = DOM.intro.querySelector('.shape');
	DOM.path = DOM.shape.querySelector('path');
	DOM.enter = document.querySelector('.enter');
	charming(DOM.enter);
	DOM.enterLetters = Array.from(DOM.enter.querySelectorAll('span'));

	var init = function init() {
		imagesLoaded(document.body, { background: true }, function () {
			return document.body.classList.remove('loading');
		});
		DOM.enter.addEventListener('click', navigate);
		DOM.enter.addEventListener('touchenter', navigate);
		DOM.enter.addEventListener('mouseenter', enterHoverInFn);
    DOM.enter.addEventListener('mouseleave', enterHoverOutFn);
    window.onmousewheel=function (event) {
      if(event.deltaY>0){
        navigate();
      }
    }
	};

	var loaded = void 0;
	var navigate = function navigate() {
		if (loaded) return;
		loaded = true;

		anime({
			targets: DOM.intro,
			duration: 1500,
			easing: 'easeInOutSine',
			translateY: '-200vh'
		});

		anime({
			targets: DOM.path,
			duration: 1500,
			easing: 'easeInOutSine',
			d: DOM.path.getAttribute('pathdata:id')
		});
	};

	var isActive = void 0;
	var enterTimeout = void 0;

	var enterHoverInFn = function enterHoverInFn() {
		return enterTimeout = setTimeout(function () {
			isActive = true;
			anime.remove(DOM.enterLetters);
			anime({
				targets: DOM.enterLetters,
				delay: function delay(t, i) {
					return i * 15;
				},
				translateY: [{ value: 10, duration: 150, easing: 'easeInQuad' }, { value: [-10, 0], duration: 150, easing: 'easeOutQuad' }],
				opacity: [{ value: 0, duration: 150, easing: 'linear' }, { value: 1, duration: 150, easing: 'linear' }],
				color: {
					value: 'rgb(73,90,128)',
					duration: 1,
					delay: function delay(t, i, l) {
						return i * 15 + 150;
					}
				}
			});
		}, 50);
	};

	var enterHoverOutFn = function enterHoverOutFn() {
		clearTimeout(enterTimeout);
		if (!isActive) return;
		isActive = false;

		anime.remove(DOM.enterLetters);
		anime({
			targets: DOM.enterLetters,
			delay: function delay(t, i, l) {
				return (l - i - 1) * 15;
			},
			translateY: [{ value: 10, duration: 150, easing: 'easeInQuad' }, { value: [-10, 0], duration: 150, easing: 'easeOutQuad' }],
			opacity: [{ value: 0, duration: 150, easing: 'linear' }, { value: 1, duration: 150, easing: 'linear' }],
			color: {
				value: 'rgb(241,124,103)',
				duration: 1,
				delay: function delay(t, i, l) {
					return (l - i - 1) * 15 + 150;
				}
			}
		});
	};

	init();
};
