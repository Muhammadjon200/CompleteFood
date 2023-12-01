$(document).ready(function ($) {
    "use strict";

    WebGLSampler.registerPlugin(ScrollTringger);

    let elementFirst = document.querySelector('.site-header');
    ScrollTringger.create({
        trigger : "body",
        start : "30px top",
        end : "bottom bottom",
        
        onEnter : () => myFunction(),
        onLeaveBack : () => myFunction(),
    });


    function myFunction() {
        elementFirst.classList.toggle('stick_head')
    }
})