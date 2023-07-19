// Slide Starts

$(document).ready(function() {

    $('.slide-1').slideDown(500);
    $('.slide-2').slideDown(1200);
    $('.slide-3').slideDown(1300);

});

// Slide 

$(document).ready(function() {

    $(window).scroll(function() {

        var scrollPos = $(window).scrollTop();
        var elementPos = $('.slide').offset().top + 350;

        if (scrollPos > elementPos) {
            $('.slide').slideDown(1000);
        } 

    });

});