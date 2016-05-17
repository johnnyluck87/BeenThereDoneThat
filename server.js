// Dependencies
var express = require('express');


var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.get('/', function(req, res){
  res.sendFile(process.cwd()+'/main.html');
});

var port = process.env.PORT || 3000;
app.listen(port);
