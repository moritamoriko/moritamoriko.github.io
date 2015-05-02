(function() {
  $(function() {
    return $('a[href^=http]').not('[href*=' + location.hostname + ']').attr('target', '_blank');
  });

}).call(this);
