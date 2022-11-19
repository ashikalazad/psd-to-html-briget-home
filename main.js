$(document).ready(function ($) {

  // $(".owl-carousel").owlCarousel({

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    autoplay: false
  });

  // $(".counter").counterUp({

  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });

  // $(window).scroll(function() {    

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".stick-area").addClass("is-stick");
    } else {
      $(".stick-area").removeClass("is-stick");
    }
  });

});