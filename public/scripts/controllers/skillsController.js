'use strict';
var app = app || {};
(function(module) {
  const skillsController = {};
  skillsController.init = function(){
    console.log('it works');
    $('.tab-content').hide();
    $('#skills').fadeIn(750);
  };
  module.skillsController = skillsController;
})(app);
