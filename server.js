var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('New Year is almost here');
});

app.listen(80);
