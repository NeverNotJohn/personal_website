// Scroll down: 

$(document).ready(function() {

    var slideElement = $('.slide-start');
    slideElement.slideDown();

});

// Slide 

$(document).ready(function() {

    $(window).scroll(function() {

        var slideElement = $('.slide');

        var scrollPos = $(window).scrollTop();
        var elementPos = $('.slide').offset().top;

        if (scrollPos > elementPos) {
            slideElement.slideDown(1000);
        } 

    });

});