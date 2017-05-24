'use strict';
var app = app || {};
(function(module) {
  const projectController = {};
  projectController.init = function(){
    console.log('it works');
    $('.tab-content').hide();
    $('#work').fadeIn(750);
    app.Project.fetchAll();
  };
  module.projectController = projectController;
})(app);
