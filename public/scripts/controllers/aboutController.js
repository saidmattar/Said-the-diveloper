'use strict';
var app = app || {};
(function(module) {
  const aboutController = {};
  aboutController.init = function(){
    console.log('it works - article controller');
    $('.tab-content').hide();
    $('#about').fadeIn(750);
    app.repos.requestRepos(app.repoView.index);
  };
  module.aboutController = aboutController;
})(app);
