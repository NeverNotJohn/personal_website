// Scroll down: 

$(document).ready(function() {

    var slideElement = $('.slide-start');                      //slide one start  
    slideElement.slideDown(1000);

    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();
      var slideElement = $('.slide-start');

      if (scrollPos > 1) {
        slideElement.slideDown(1000);
      } else {
        slideElement.slideUp(1000);
      }
    });



  });