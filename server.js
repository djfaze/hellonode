var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Anton10');
});

app.listen(80);
