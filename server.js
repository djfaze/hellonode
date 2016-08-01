var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log('__-----')
    res.send('____');
});

console.log('started')
app.listen(80);
