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
    function smoothScroll() {
      $('.main-navigation li a').on('click', function (e) {
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
