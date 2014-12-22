var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Happy Monday, Anton!');
});

app.listen(80);
