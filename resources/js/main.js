$(document).ready(function () {

  // Hambureger nav

  $('#nav-toggle').on('click', function(event){
    event.preventDefault();
    $('.mobile-list').slideToggle();
    $(this).toggleClass('active');
  });

  $('.mobile-list a').on('click', function(event){
    event.preventDefault();
    var headerHeight = $('header').height();
    var id = $(this).attr('href');
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - headerHeight;
    $('html').animate({
      scrollTop: newScrollCoordinate
    });

  });

  // Image gallery carousel

  var $galleryImg = $('.gallery img');
  var $closeBtn = $('.btn');
  var $carousel = $('.carousel');
  var $overlay = $('.overlay');

  $carousel.slick({
    centerMode: true,
    fade: true,
    arrows: false,
    dots: true,
    draggable: false,
  });

  $galleryImg.on('click', function(slick){
    var $imgId = $(this).attr('id');
    // Kick off fade-in, specifically to set display: block
    $overlay.fadeIn();
    // Go to clicked image slide and ensure we trigger dimension calculation
    $carousel.slick('slickGoTo', $imgId, true).slick('setPosition');
  });

  $closeBtn.on('click', function(event){
    event.preventDefault();
    $overlay.fadeOut();
  });

});
