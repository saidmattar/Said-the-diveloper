$(document).ready(function(){

  $('nav a').on('click', function() {
    var $whereToGo = $(this).data('tab')
    $('.tab-content').hide()
    $('#' + $whereToGo).fadeIn(750)
  })
});
