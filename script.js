$(document).ready(function ($) {
    "use strict";

    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navigaion").toggleClass("toggled")
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigaion").removeClass("toggled")
    });

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
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