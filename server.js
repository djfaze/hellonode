var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('data27');
});

app.listen(80);
