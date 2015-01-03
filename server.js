var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('data15');
});

app.listen(80);
