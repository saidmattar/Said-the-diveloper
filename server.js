
'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('./public'));
app.get('*',function(request, response){
  response.sendFile('index.html', {root:'./public'});
})
app.listen(PORT, function(){
  console.log('we are serving up this app on localhost: ' + PORT);
});
