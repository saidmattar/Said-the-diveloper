'use strict';
var app = app || {};
(function(module) {
  const contactController = {};
  contactController.init = function(){
    console.log('it works');
    $('.tab-content').hide();
    $('#contact').fadeIn(750);
  };
  module.contactController = contactController;
})(app);
