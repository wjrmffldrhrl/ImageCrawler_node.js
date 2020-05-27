var express = require('express');
var app = express();

var router = require('./router/main')(app);

app.set('views', __dirname + '/view');
app.set('view engine', 'pug');

var server = app.listen(8080, function(){
    console.log("express server has started on port 8080");
    
})


