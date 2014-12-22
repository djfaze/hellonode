var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Holidays are coming!');
});

app.listen(80);
