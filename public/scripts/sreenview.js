const screenView = {};

screenView.initIndexPage = function(){

  $('nav .fa-bars').on('click',function(){
    if ($(this).hasClass('clicked')) {
      $('nav ul').animate({
        top:'-75px',
        right:'-50px'
      });
      $(this).toggleClass('clicked');
    } else {
      $('nav ul').animate({
        top:'94px',
        right:'49px'
      });
      $(this).toggleClass('clicked');
    }
  })

  $('nav a').on('click', function() {
    var $whereToGo = $(this).data('tab')
    $('.tab-content').hide()
    $('#' + $whereToGo).fadeIn(750)
  })

  $('nav a:first').click();

  app.Project.all.forEach(function(project){
    $('#work').append(project.toHtml());
  });
};
