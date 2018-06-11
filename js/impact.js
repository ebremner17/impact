(function($) {
  Drupal.behaviors.bannerSlideshow = {
    attach: function (context, settings) {
      $( document ).ready(function() {
        if ($('#toolbar-administration').length !== 0) {
          if ($('.toolbar-tray.is-active').length !== 0) {
            $('#header .header--logo').css('top', '90px');
          }
          else {
            $('#header .header--logo').css('top', '70px');
          }
        }
      });
    }
  };
})(jQuery);