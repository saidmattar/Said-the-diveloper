'use strict';

function Project(rawProject) {
  this.title = rawProject.title;
  this.description = rawProject.description;
  this.datedeveloped = rawProject.datedeveloped;
  this.projectUrl = rawProject.projectUrl;
}
Project.all = [];


Project.prototype.toHtml = function() {
  var template = $('#project-template').html();
  // compiles template using Handlebars
  var templateRender = Handlebars.compile(template);
  this.daysAgo = parseInt((new Date() - new Date(this.datedeveloped))/60/60/24/1000);
  this.publishedOn = this.datedeveloped ? `published ${this.daysAgo} days ago` : '(draft)';
  return templateRender(this);
};

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    screenView.initIndexPage(localStorage.rawData);
  } else {
    $.getJSON('data/rawprojects.json')
      .done(function(data){
        localStorage.rawData = JSON.stringify(data);
        Project.loadAll(data);
        screenView.initIndexPage();
      })
  }
};
