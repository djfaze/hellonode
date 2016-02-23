var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log('hit route /')
    res.send('Anton8');
});

app.listen(80);
