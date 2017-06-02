'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const requestProxy = require('express-request-proxy');

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.use(express.static('./public'));

app.get('/github/*', proxyGitHub);

app.get('*',function(request, response){
  response.sendFile('index.html', {root:'./public'});
})
app.listen(PORT, function(){
  console.log('we are serving up this app on localhost: ' + PORT);
});
