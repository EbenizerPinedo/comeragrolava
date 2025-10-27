"use strict";

(function ($) {
  console.log('Custom JS Loaded');

  $(document).ready(function () {

    /* ================= 1. ACTIVE HEADER ================= */

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 5) {
      $(".topbar").addClass("is-active");
    } else {
      $(".topbar").removeClass("is-active");
    }
  });

  /* ================= 3. ACTIVE HEADER ================= */
  
  $('.toggle-menu, .contacto-item').on('click', function () {
    $('.toggle-menu, .mobile-menu').toggleClass('is-open');
  });

  /* ================= 3. SLIDER ================= */

    $('#featured-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 800,
      dots: true,
      arrows: false
    });
    /* 2.1 Animate integration */

    $('#featured-slider').on('beforeChange', function (event, slick, direction) {
      $('.slide__caption-title').removeClass('animate__animated animate__fadeInLeft');
      $('.slide__caption-content').removeClass('animate__animated animate__fadeInRight');
      $('.slide__caption-button').removeClass('animate__animated animate__bounceInUp');
    });
    $('#featured-slider').on('afterChange', function (event, slick, direction) {
      $('.slick-active .slide__caption-title').addClass('animate__animated animate__fadeInLeft');
      $('.slick-active .slide__caption-content').addClass('animate__animated animate__fadeInRight');
      $('.slick-active .slide__caption-button').addClass('animate__animated animate__bounceInUp');
    });

    if ($('.slick-slide').hasClass('slick-active')) {
      $('.slide__caption-title').addClass('animate__animated animate__fadeInLeft');
      $('.slide__caption-content').addClass('animate__animated animate__fadeInRight');
      $('.slide__caption-button').addClass('animate__animated animate__bounceInUp');
    } else {
      $('.slide__caption-title').removeClass('animate__animated animate__fadeInLeft');
      $('.slide__caption-content').removeClass('animate__animated animate__fadeInRight');
      $('.slide__caption-button').removeClass('animate__animated animate__bounceInUp');
    }

  });
})(jQuery);