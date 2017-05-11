'use script';
$(function() {
  var myProjects = [];
  function Project(rawProject) {
    this.title = rawProject.title;
    this.discription = rawProject.discription;
    this.datedeveloped = rawProject.datedeveloped;
    this.projectUrl = rawProject.url;
  }

  Project.prototype.toHtml = function() {
    var $newPprojects = $('article.template').clone();
    $newPprojects.removeClass('template');

    $newPprojects.find('a').attr('href', this.projectUrl);
    $newPprojects.find('h3').html(this.title);
    $newPprojects.find('p').html(this.discription);
    $newPprojects.find('time').attr('datetime', this.datedeveloped);
    $newPprojects.find('time').attr('title', this.datedeveloped);
    $newPprojects.find('time').html('about ' + parseInt((new Date() - new Date(this.datedeveloped))/60/60/24/1000) + ' days ago');
    $newPprojects.append('<hr>');
    return $newPprojects;
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
