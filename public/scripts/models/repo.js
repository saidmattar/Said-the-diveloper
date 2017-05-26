'use strict';
var app = app || {};
(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization:`token ${myGhToken}`
      }
    })
    .then(data => {
      data.forEach (repoData => repos.all.push(repoData))
      callback();
    })
  }
  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(app)
