var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log('hit route /')
    res.send('Anton13');
});

console.log('started')
app.listen(80);
