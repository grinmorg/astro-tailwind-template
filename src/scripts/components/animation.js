import { CountUp } from 'countup.js';

/*
	  ------------
	|   Animation  |
	  ------------

	* Basic Attributes:
		* data-anim - attribute to set animation to element
		* data-anim-number - attribute to animate numbers
			** The attribute value contains a number
			** data-anim-number-suffix - attribute to add a suffix after a number
				*** The suffix is ​​specified in the attribute value
*/

export default function animation() {
	const animItems = document.querySelectorAll('[data-anim]');

	

	if (!animItems) return;

	setTimeout(() => {
		animOnScroll();
	}, 300);
	
	window.addEventListener('scroll', animOnScroll);
	
	function animOnScroll() {
		animItems.forEach(animItem => {
			showAnim(animItem)
		});
	}
	
	function showAnim (animItem) {
	
		const animItemHeight = animItem.getBoundingClientRect().height;
		const animItemOffset = offset(animItem).top;
		const animStart = 2;
		const animDelay = Number(animItem.getAttribute('data-delay')) || 0;
	
		let animItemPoint = window.innerHeight - animItemHeight / animStart;
	
		if (animItemHeight > window.innerHeight) {
			animItemPoint = window.innerHeight - window.innerHeight / animStart;
		}
	
		if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
			if (!animItem.classList.contains('is-anim')) {

				setTimeout(() => {
					animItem.classList.add('is-anim');

					if (animItem.hasAttribute('data-anim-number')) {
						const countUp = new CountUp(animItem, Number(animItem.getAttribute('data-anim-number')), {
							suffix: animItem.hasAttribute('data-anim-number-suffix') ? animItem.getAttribute('data-anim-number-suffix') : '',
							duration: 3,
							separator: '',
						}); 
						countUp.start();
					}
				}, animDelay);
			}
		} else {
			if (animItem.hasAttribute('data-anim-no-hidden')) {
				animItem.classList.remove('is-anim');
			}
		}
	}
	
	function offset(el) {
		const rect = el.getBoundingClientRect();
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft
		}
	}
}