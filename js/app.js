 // for-slick-slider-function
 
$(document).ready(function(){
$('.slider').slick({
	arrows:false,
	dots:true,
	appendots:'.slider-dots',
	dotsclass:'dots'
});

// complete-slick-slider-function.

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click',function(){
	mobileNav.classList.add('open');
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});

});
