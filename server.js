var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log('hit route1')
    res.send('hello');
});

console.log('started')
app.listen(80);
