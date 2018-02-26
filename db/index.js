//DB MASTER FILE
const pg = require('pg');

const { Pool, Client } = require('pg')

//const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'

/* USING CONNECTION STRING
const client = new Client({
    connectionString: connectionString,
}) */

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'WN',
    password: 'a',
    port: 5432,
});

client.connect();

/* client.query('SELECT * FROM qrs.emptynooks', (err, res) => {
    console.log(err, res)
    client.end()
});  */


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getRecords(req, res, next) {
    //var lemmaID = parseInt(req.params.id);
    let lemmaID = req.body.intake; //req.body.intake
    //db.none('SELECT qrs.rs4(' + $1 + ');', pupID);  //.then(function (data) {} //db.any or client.query, db.transaction or tx.executeSQL?
    client.query('SELECT qrs.rs4(' + $1 + ');', lemmaID, (err, res) => {
        console.log(err, res)
        client.end()
    });

    db.any('SELECT nookid, lemma, definition, lang from resultsx;') //, pupID)
        .then(function (data) {
            res.status(200)  //putting results to array occurs here
                .json({
                    status: 'success',
                    data: data,
                    message: `Found ${result.rowCount} related words`
                }),
            for(var i=0; i<res.rows.length; i++) {
                var row = res.rows.item(i);          //var row = res.rows[i];
                console.log("row only: " + row);
                console.log("res.rows.item(i): " + res.rows.item(i));
                console.log("res.rows[i]: " + res.rows[i]);
                result[i] = {
                    id:         row['nookid'],
                    lemma:      row['lemma'],
                    definition: row['definition'],
                    lang:       row['lang']
                }
            };
        })
        .catch(function (err) {
            return next(err);
        })
        // .finally(db.$pool.end);
        ;
    return JSON.stringify(data);
}
*/


function selectRow(intake, callBack){

    var querystring = "SELECT qrs.rs4(" + intake + ");";
    var querystring2 = "SELECT nookid, lemma, definition, lang from resultsx;";
    var result = [];

    db.transaction(function (tx) {
        tx.executeSql(querystring, []);
        console.log("(DB 1/4) 1st query executed");
        tx.executeSql(querystring2, [], function(tx, rs){

            for(var i=0; i<rs.rows.length; i++) {
                var row = rs.rows.item(i);

                console.log("(DB test 1/3) row only: " + row);
                console.log("(DB test 2/3) res.rows.item(i): " + res.rows.item(i));
                console.log("(DB test 3/3) res.rows[i]: " + res.rows[i]);

                result[i] = {
                    id:             row['nookid'],
                    lemma:          row['lemma'],
                    definition:     row['definition'],
                    lang:           row['lang']
                }
            }
            console.log("(DB 3/4) result array before JSON conversion: " + result);
            callBack(JSON.stringify(result));
        }, errorHandler);
    });
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* SAME CODE WRITTEN FOR POOLS INSTEAD OF CLIENTS
const { Pool } = require('pg');

const pool = new Pool({
    // connectionString: connectionString,
    user: 'dbuser',
    host: 'database.server.com',
    database: 'mydb',
    password: 'secretpassword',
    port: 3211,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})

module.exports = {
    query: (text, params, callback) => {
    return pool.query(text, params, callback)
}
};
*/

