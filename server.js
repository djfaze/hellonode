var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('data28');
});

app.listen(80);
