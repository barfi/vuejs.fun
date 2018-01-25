// vuejs.fun main JavaScript file
// Dependencies: jQuery 3+, nicescroll.js, GSAP
// Coded by Barfi (markup version)

// Is document ready?
$(function () {
    // Global variables init
    var viewPortWidth;
    var viewPortHeight;

    // Get elements for re-using
    var elSidebar = $('#app-sidebar');
    var elHeader = $('#app-header');
    var elApp = $('#app');
    var elBurger = $('#burger');
    elBurger.click(function () {
        elBurger.toggleClass('sb-open');
        elHeader.toggleClass('sb-open');
        elApp.toggleClass('sb-open');
        elSidebar.toggleClass('sb-open')
    });
    // Window resize event reaction
    $(window).resize(function () {
        // sidebarMode(getViewPortWidth(), elSidebar);
    });

    // Additional plugins init
    $('.sbr-scroll').niceScroll({
        emulatetouch: true,
        cursorcolor: "#b1b1ba",
        grabcursorenabled: false // hide grab cursor!
    });
});

/* Custom functions */

// Get current viewPort width
function getViewPortWidth() {
    return $(window).width();
}