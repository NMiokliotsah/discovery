import '../css/style.css';
import * as $ from 'jquery';

const navUl = $('nav ul');

$(function () {
    $('.button-menu').click( () => {

        if (navUl.css('display') === 'none') {
            navUl.slideDown();
        } else {
            navUl.slideUp();
        }
    });
    $(window).resize( () => {
        if ($(window).width() > 800) {
            navUl.css('display', 'flex');
        } else {
            navUl.css('display', 'none');
        }
    });
});