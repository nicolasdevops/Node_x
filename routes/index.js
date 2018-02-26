var express = require('express');
var router = express.Router();

var db = require('../db');

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/*

router.use('/queries/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})


// GET home page. /*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
    console.log('(ROUTES) GET')
    res.end();
});

//===============================
router.get('/id:', function(req, res, next) {
    res.render('index', { title: 'Express' });
    console.log('(ROUTES) GET W ID')
    res.end();
});

router.get('/queries', function(req, res, next) {
    res.render('index', { title: 'Express' });
    console.log('(ROUTES) GET QUERIES INDEX');
});

*/

/* router.get('public', db.getAllPuppies);
router.get('public/:id', db.getSinglePuppy);
router.post('public', db.createPuppy);
router.put('public/:id', db.updatePuppy);
router.delete('public/:id', db.removePuppy);
//public was /api/puppies in example */




//const { Pool, Client } = require('pg')



/* USING CONNECTION STRING
const client = new Client({
    connectionString: connectionString,
}) */

/*
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'WN',
    password: 'a',
    port: 5432,
});

client.connect();
*/

/*
const connectionString = 'postgresql://postgres:a@localhost:5432/WN';
//postgres://someuser:somepassword@somehost:381/somedatabase

router.post('/queries/:queryid', (req, res, next) => {
    console.log('(ROUTES) ROUTER.POST');
    const results = [];
    const qid = req.query.queryid; //req.body.text;
    // Get a Postgres client from the connection pool
    console.log('req.query.queryid: ', req.query.queryid, 'REQ.BODY: ', req.body);
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            console.log('DB CONNECTION FAILED');
            return res.status(500).json({success: false, data: err});
        }
        // SQL Query > Execute Function with Data
        client.query('SELECT qrs.rs4($1);',
            [qdata]);
        console.log('First function query completed');
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM qrs.prototable');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
            console.log('Data returned as JSON');
            res.end();
        });
    });
});
*/



//app.use('/', router);
module.exports = router;
