var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Anton12');
});

app.listen(80);
