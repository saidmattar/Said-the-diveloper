'use strict';
var app = app || {};
(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => {
      data.forEach (repoData => repos.all.push(repoData))
      callback();
    })
  }
  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(app)
