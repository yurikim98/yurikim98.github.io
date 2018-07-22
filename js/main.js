"use strict"
// sidebar
const toggler = document.getElementById('navbar-toggler');
const app = document.getElementById('app');
const navbar = document.getElementById('navbar-nav');
toggler.addEventListener('click', function() {
    app.classList.toggle('absolute');
    app.classList.toggle('opened');
    navbar.classList.toggle('opened');
});
// scrolltop
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $('#scrolldown').click(function() {
        $('body,html').animate({
            scrollTop: $('body').height()
        }, 500);
        return false;
    });
});