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

    // Basic params init while document first loading
    sidebarMode(getViewPortWidth(), elSidebar);

    // Window resize event reaction
    $(window).resize(function () {
        sidebarMode(getViewPortWidth(), elSidebar);
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

// Sidebar mode switcher
function sidebarMode(curWinWidth, elSidebar) {
    if (curWinWidth > 767 && curWinWidth < 1024 && !elSidebar.hasClass('shorted')) {
        elSidebar.addClass('shorted');
    }
    if (curWinWidth <= 767 || curWinWidth >= 1024 && elSidebar.hasClass('shorted')) {
        elSidebar.removeClass('shorted');
    }
}