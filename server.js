var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Holidays are coming, Anton!');
});

app.listen(80);
