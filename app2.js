var express = require('express');

var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

const http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var index = require('./routes/index');
var users = require('./routes/users');
//###############################################################

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
//app.use('/user-input', index);

app.use(bodyParser.json());

// Handle GET request to '/save'
app.get('/queries', function(req, res, next){
    res.send('Some page with the form.');
});

// Handle POST request to '/save'
app.post('/queries', function(req, res, next) {
    console.log(req.body);
    res.json({'status' : 'ok'});
});

app.listen(3500, function () { //4000 before
    console.log('Server is running.. on Port 3500');
});