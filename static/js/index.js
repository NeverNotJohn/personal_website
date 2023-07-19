// Scroll down: 

$(document).ready(function() {

    var elementPos = $('.slide-start').offset().top;

    alert('Vertical Position: ' + parseInt(elementPos));

    var time = 1000 + (elementPos * 2000);

    var slideElement = $('.slide-start');
    slideElement.slideDown(time);


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