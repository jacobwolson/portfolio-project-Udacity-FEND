$(document).ready(function() {

  $('#logo').on('click', function () {
    $('#logo-attribution-popover').css('display', 'block');
  });

  $('.popover-close').on('click', function () {
    $('.popover').css('display', 'none');
  });

});
