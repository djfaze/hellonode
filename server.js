var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Anton11');
});

app.listen(80);
