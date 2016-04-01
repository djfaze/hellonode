var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log('hit route /?')
    res.send('Anton19');
});

console.log('started')
app.listen(80);
