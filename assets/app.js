// Javascript document
'use strict';
var logo = document.querySelector('.logo');

var effectsIn = ["bounceIn","bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp"];
var effectsOut =["bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp"];
var effects =["bounce", "flash", "pulse", "rubberBand"];

animateCSS ('.logo', 'rubberBand', function(){
  animateCSS('.logo', 'shake');
});

logo.addEventListener('click', function(){
  animateCSS('.fun', '.logo', 'bounce');
});


function animateCSS(element, animationName, callback) {
    var node = document.querySelector(element);
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd);
}
