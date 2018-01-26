// vuejs.fun main JavaScript file
// Dependencies: jQuery 3+, nicescroll.js
// Coded by Barfi (markup version)

// Is document ready?
$(function () {
    // Get elements for re-using
    var elSidebar = $('#app-sidebar');
    var elHeader = $('#app-header');
    var elContent = $('#app-content');
    var elBurger = $('#burger');
    var elOverlay = $('#overlay');
    elBurger.click(function () {
        elBurger.toggleClass('sb-open');
        elHeader.toggleClass('sb-open');
        elContent.toggleClass('sb-open');
        elSidebar.toggleClass('sb-open');
        elOverlay.toggleClass('sb-open');
        setTimeout(function () {
            elContent.getNiceScroll().resize(); // TODO: edit this iPhone lags
        }, 300);
    });

    // Window resize event reaction
    $(window).resize(function () {
        if (elBurger.hasClass('sb-open')) {
            elBurger.removeClass('sb-open');
            elHeader.removeClass('sb-open');
            elContent.removeClass('sb-open');
            elSidebar.removeClass('sb-open');
            elOverlay.removeClass('sb-open');
        }
    });

    // Additional plugins init
    $('.sbr-scroll').niceScroll({
        emulatetouch: true,
        cursorcolor: "#b1b1ba",
        grabcursorenabled: false // hide grab cursor!
    });
    $('.content-scroll').niceScroll({
        emulatetouch: true,
        cursorcolor: "#b1b1ba",
        grabcursorenabled: false // hide grab cursor!
    });
});