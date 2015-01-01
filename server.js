var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Happy 2015!');
});

app.listen(80);
