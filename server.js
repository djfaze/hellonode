var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Anton1');
});

app.listen(80);
