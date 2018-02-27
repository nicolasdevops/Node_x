var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

const pg = require('pg');

//var bodyParser = require('body-parser');
//app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies
//NPM INSTALL body-parser

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


const http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var index = require('./routes/index');
var users = require('./routes/users');

//==========================
var request = require('request');
var db = require('./db/index.js');



var app = express();
//app.use(bodyParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(cookieParser());
//var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
//app.use('/users', users);


// catch 404 and forward to error handler

//==============================
//app.use('/db/index.js', selectRow);
//app.use('/queries'); -- REQUIRES MIDDLEWARE FUNCTIONS

app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});


app.listen(3000, function () { //4000 before
    console.log('Server is running.. on Port 3000');
});


 //THESE TWO MIDDLEWARES KEEP GIVING ME THE ERROR CANNOT SET HEADERS
/*
app.use('/queries/:id',
    bodyParser.urlencoded({ extended: false }),
    function (req, res, next) {
    console.log('!!!Request body:', req.body);
    res.send('Request body: ' + req.body + ' and itself: ' + req);
    next()
}, function (req, res, next) {
    console.log('!!!Request Type:', req.method)
    //next()  //<-- WHAT IS CAUSING THE HEADERS ERROR
    //res.end();
})
*/
/*
app.get('/:id', function(req, res) {
res.send('query word: ' + req.url + ' and body: ' + req.body);
    console.log("!!!!(APP) GET request on query/id received")
    next() //<-- WHAT IS CAUSING THE HEADERS ERROR
    res.end();
});
*/

const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:a@localhost:5432/WN';
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'WN',
    password: 'a',
    port: 5432,
})

app.get('/:id', function(req, res, next) {
    console.log('APP GET ID');
    //const results = [];
    console.log('req.query.qs value: ' + req.query.qs)
    //const qs = req.query //WHAT'S IN THE HTTP.SEND IN AJAX.JS //req.body.text;
    //console.log('PATH param: ', req.params);
    //console.log('req.query: ', qs);
    //console.log(JSON.stringify('hey this thing works!'));
    //return res.json('hey this thing works!'); //causes middleware to finish here
//    res.end(JSON.stringify('hey this thing works!'));
    //res.setContentType("application/x-json"); NOT A FUNCTION
    //res.setCharacterEncoding("ISO-8859-1"); NOT A FUNCTION EITHER
    //rows.forEach(row => console.log(JSON.stringify(row.data)))
    //done();

    client.connect();
    console.log('Connected to db');
    //pg.connect(connectionString, (err, client, done) => {
       client.query('SELECT qrs.rs4($1, 1);', [req.query.qs],
         //  , function(err, result){if(err){ return console.error('error running query', err);}}
           (err, res) => {
           if (err) {
               console.error(err.stack)
           } else {
               //console.log(res.rows) // ['brianc']

           }
       }
       );
        //console.log('query done');
        //const query =

            client.query('select * FROM qrs.resultsy;',
            //client.query('select row_to_json(prototable) from qrs.prototable;',
                function(err, result){if(err){ return console.error('error running query', err);}
                //console.log('stringify: ', JSON.stringify(result.rows));
                //var myjson = JSON.stringify(result.rows);
                //console.log(JSON.stringify(result.rows));
                   // console.log('result.rows: ' + result.rows);
                var myjson = JSON.stringify(result.rows);
                //console.log('JSON OBJECT: ' + myjson);

                res.end(myjson);
                client.end()
            });
   // res.end(json);
        //console.log(query.data);
        //client.end();
    /*        query.on('row', (row) => {
                results.push(row);
            });
            query.on('end', () => {
                var json = JSON.stringify(results.rows);
                //res.setHeader('Content-Type', 'application/json');
                //res.writeHead(200, {'content-type': 'application/json', 'content-length': Buffer.byteLength(json)});
                res.end(json);
              done();
            })*/
/*
            if(err) {
                done();
                console.log(err);
                console.log('Could not connect to postgresql database.');
                return res.status(500).json({success: false, data: err});
            }
*/
 //   }) // pg.connect bracket

})

/*
request('http://localhost:3000/script=?qs=anton', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // res.body? Print the HTML for the Google homepage.

});
*/
/*
app.post('/queries', function (req, res) {
    res.send('HTTP POST request sent using /query')
    console.log("!!!!Req with HTTP POST using /query")
    next()
});
*/

//++++++++++++++++++++++ DB ++++++++++++++++++++++++++++
/*
const { Pool, Client } = require('pg')

const connectionString = 'postgresql://postgres:a@localhost:5432/WN';
//postgres://someuser:somepassword@somehost:381/somedatabase
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//request.post('http://service.com/upload', {form:{key:'value'}})
/*
app.get('/:id', function(req, res, next) {
    console.log('(APP CORE) GET');
    const results = [];
    const qs = req.query //WHAT'S IN THE HTTP.SEND IN AJAX.JS //req.body.text;
    console.log('PATH params: ', req.params);
    console.log('req.query: ', qs);
    // Get a Postgres client from the connection pool
    console.log('Pg.connect..');
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            console.log('Could not connect to postgresql database.');
            return res.status(500).json({success: false, data: err});
        }
        // SQL Query > Execute Function with Data
        client.query('SELECT qrs.rs4($1);', [qs]);
        console.log('First query (dynamic plpgsql function) done');
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM qrs.prototable');
        console.log('2nd query (selecting from server-side result table) done. Query on..');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            var json = JSON.stringify(results.rows);
            //res.setHeader('Content-Type', 'application/json');
            res.writeHead(200, {'content-type':'application/json', 'content-length':Buffer.byteLength(json)});
            res.end(json);
            done();
            //return res.json(results); //JSON.stringify(
            console.log('Data returned as JSON');



        });
    });
});
*/

/*var json = JSON.stringify(result.rows);
res.writeHead(200, {'content-type':'application/json', 'content-length':Buffer.byteLength(json)});
res.end(json);*/

//=========================================================

/*
app.post('/queries/:id', function (req, res) {
    res.send('POST request to /query/:id')
    console.log("POST request to /query/id")
    next()
})

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})
*/

app.use(function(req, res, next) {
    var resultsArray = [];
    //if req.params === null{
    //resultsArray = getResults(req.params);
    //retun AJAX response with stringify resultsArray
  var err = new Error('Not Found');
  err.status = 404;
    console.log('(APP) 404. LINE 49')
  next(err);
});

/*var index = require('./routes/index')(array);
Because new middleware is created every time you invoke the exported function, you can bake independent arrays into different middleware:

var index1 = require('./routes/index')(["array 1"]);
var index2 = require('./routes/index')(["array 2"]);
*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




/*
http.createServer(function(req, res){
    var path = url.parse(req.url).pathname;
    if(path=="/queries/:id") {
        var queryid = req.params.id;
        var tempJSONArray = db.selectRow(queryid);			//NEEDS json_encode($response) OR pg returns json!
        res.writeHead(200, {'(APP) content-type': 'application/json', 'content-length': Buffer.byteLength(json)});
        res.end(json_encode(tempJSONArray), utf8);		//no need for json_encode() if pg did it
        console.log("(APP) tempJSONArray sent");
    }
})
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++










module.exports = app;



/*
let server = app.listen(8080, function() {
    console.log('Server is listening on port 8080')
});
*/

