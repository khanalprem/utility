/*
Template Name: Utility Map;
Template URI:http://utilitymap.com.np/
Author: Prem Prasad Khanal
Author URI: http://premkhanal.com.np/
Description: Utility Map. 
Version: 1.0.0
Primary use: Digital platform
*/

(function ($) {
  $(document).ready(function () {
    function openModal() {
      $('.common-button').on('click', function (e) {
        e.preventDefault();
        var targetId = $(this).attr('popup-link');
        $('#' + targetId).addClass('open');
      });
    }
    openModal();

    function closeModal() {
      $('.popup-footer .common-button, .close-icon').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.popup').removeClass('open');
      });
    }
    closeModal();
    /*==================================
   Toggle Button
 ==================================*/
    $('.toggle-button').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('Is-toggle');
      $(this).toggleClass('is-active');
    });

    function stickyMenu() {
      $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();

        if (scroll > 130) {
          $('.site-header').addClass('is-sticky');
        } else {
          $('.site-header').removeClass('is-sticky');
        }

        if (scroll > 130) {
          $('.scroll-top').show();
        } else {
          $('.scroll-top').hide();
        }
      });

      $('.scroll-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 500);
      });
    }
    stickyMenu();

    function smoothScroll() {
      $('.main-navigation li a, .scroll-link').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          900,
          'linear'
        );
      });
    }
    smoothScroll();
    AOS.init();
  });
})(jQuery);
