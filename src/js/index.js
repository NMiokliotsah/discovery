import '../css/style.css';
import * as $ from 'jquery';
import 'slick-carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import '@fancyapps/fancybox';
import AOS from 'aos';

const navUl = $('nav ul');

$(function () {
    $('.button-menu').click(() => {

        if (navUl.css('display') === 'none') {
            navUl.slideDown();
        } else {
            navUl.slideUp();
        }
    });
    $(window).resize(() => {
        if ($(window).width() > 800) {
            navUl.css('display', 'flex');
        } else {
            navUl.css('display', 'none');
        }
    });
    $('.service-slider').slick({
        arrows: false,
        dots: true
    });
});

AOS.init();