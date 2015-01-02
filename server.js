var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('data11');
});

app.listen(80);
