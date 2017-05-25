'use strict';
var app = app || {};
(function(module){
  function Project(rawProject) {
    this.title = rawProject.title;
    this.description = rawProject.description;
    this.datedeveloped = rawProject.datedeveloped;
    this.projectUrl = rawProject.projectUrl;
    this.collaborators = rawProject.collaborators;
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

  Project.allCollaborators = () => {
    return Project.all.map(function(data){
      return data.collaborators;
    })
    .reduce(function(collaboratorsNames, current){
      return collaboratorsNames.concat(current)
    }, [])
    .reduce(function(uniqueCollaborators, current){
      if (uniqueCollaborators.indexOf(current) === -1){
        uniqueCollaborators.push(current)
      }
      return uniqueCollaborators;
    },[])
  }

  Project.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    Project.all = rawData.map(function(ele) {
      return (new Project(ele));
    })
  }
  Project.fetchAll = function() {
    console.log('fetch');
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      screenView.initIndexPage();
    } else {
      $.getJSON('data/rawprojects.json')
      .done(function(data){
        localStorage.rawData = JSON.stringify(data);
        Project.loadAll(data);
        screenView.initIndexPage();
      })
    }
  }
  module.Project = Project;
})(app);
