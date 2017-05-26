'use strict';
var app = app || {};

(function(module) {
  const repoView = {};
  const ui = function() {
    let $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings('section').hide();
  };

  let template = $('#repo-template').html();
  let render = Handlebars.compile(template);
  repoView.index = function() {
    ui();
    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
