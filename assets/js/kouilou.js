$(function() {
  var $container = $('#js-site-header');
  var $b = $('body');
  $.waypoints.settings.scrollThrottle = 0;
  $container.waypoint({
    handler: function(e, d) {
      $b.toggleClass('sticky', d === 'down');
      e.preventDefault();
    }
  });
});

