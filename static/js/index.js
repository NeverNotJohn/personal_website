//Scroll down: 

$(document).ready(function() {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();
      var slideElement = $('#slide-element');

      if (scrollPos > 300) {
        slideElement.slideDown();
      } else {
        slideElement.slideUp();
      }
    });
  });