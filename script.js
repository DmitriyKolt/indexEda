$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, 
        loop: true, 
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 500
    });
    $('#tabset').tabs();
  });