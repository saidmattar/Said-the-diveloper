'use strict';
var app = app || {};
(function(module) {
  const aboutController = {};
  aboutController.init = function(){
    console.log('it works - article controller');
    $('.tab-content').hide();
    $('#about').fadeIn(750);
  };
  module.aboutController = aboutController;
})(app);
