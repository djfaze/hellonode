var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Happy New Day, Anton!');
});

app.listen(80);
