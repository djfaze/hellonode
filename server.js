var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('AntonAndAnandAreAmazing');
});

app.listen(80);
