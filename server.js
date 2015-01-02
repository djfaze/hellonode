var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('2015 is here');
});

app.listen(80);
