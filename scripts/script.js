'use strict';
$(function() {
  var myProjects = [];
  function Project(rawProject) {
    this.title = rawProject.title;
    this.description = rawProject.description;
    this.datedeveloped = rawProject.datedeveloped;
    this.projectUrl = rawProject.projectUrl;
  }

  var template = $('#project-template').html();

  // gets template from html
  Project.prototype.toHtml = function() {

    // compiles template using Handlebars
    var templateRender = Handlebars.compile(template);

    this.daysAgo = parseInt((new Date() - new Date(this.datedeveloped))/60/60/24/1000);
    this.publishedOn = this.datedeveloped ? `published ${this.daysAgo} days ago` : '(draft)';

    return templateRender(this);
  };

  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(projectObject) {
    myProjects.push(new Project(projectObject));
  });

  myProjects.forEach(function(project){
    $('#work').append(project.toHtml());
  });
});
