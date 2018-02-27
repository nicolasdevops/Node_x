const pgp = require('pg-promise')({
    // Initialization Options
});



export default function getResults(queryid) {

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'WN',
        password: 'a',
        port: 5432,
    });

    client.connect();

    //var res = str.replace(/blue/g, "red");
    /*var res = str.replace(/blue|house|car/gi, function (x) {
    return x.toUpperCase();
}); */

    var querystring = "SELECT qrs.rs4(" + queryid + ");";
    var querystring2 = "
        SELECT
                nookid,
                lemma,
                definition,
                lang
        FROM resultsx;";
    var resultslist = [];

        /*
    client.query(querystring, (err, res) => {
        console.log(err, res)
        client.end()
    });

    /*
    query.on(querystring, function(row, result) {		//call result, res later
        result.addRow(row);
    });
*/

    //return resultslist;
    //nookid, lemma, definition, lang


    db.none('INSERT INTO data(point) VALUES(${vector})',
        {
            // 2D array of integers: int[][];
            vector: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        })
        .then(() => {
            // success;
        })
        .catch(error => {
            // error;
        });


//    Named Parameters
//    Named Parameters are defined using syntax $*propName*, where * is any of the following open-close pairs: {}, (), [], <>, //, so you can use one to your liking, but remember that ${} is also used by ES6 template strings.

    db.any('SELECT * FROM users WHERE name = ${name} AND active = $/active/',
        {
            name: 'John',
            active: true
        })
        .then(data => {
            console.log('DATA:', data); // print data;
            myjsondata = JSON.stringify(data);
            //resultSet.
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });



    db.transaction(
        function (transaction) {

            /* The first query causes the transaction to (intentionally) fail if the table exists. */
            transaction.executeSql('CREATE TABLE people(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL DEFAULT "John Doe", shirt TEXT NOT NULL DEFAULT "Purple");', [], nullDataHandler, errorHandler);
            /* These insertions will be skipped if the table already exists. */
            transaction.executeSql('insert into people (name, shirt) VALUES ("Joe", "Green");', [], nullDataHandler, errorHandler);
            transaction.executeSql('insert into people (name, shirt) VALUES ("Mark", "Blue");', [], nullDataHandler, errorHandler);
            transaction.executeSql('insert into people (name, shirt) VALUES ("Phil", "Orange");', [], nullDataHandler, errorHandler);
            transaction.executeSql('insert into people (name, shirt) VALUES ("jdoe", "Purple");', [], nullDataHandler, errorHandler);
        }
    );
//============================================================================================
    router.put('/api/v1/todos/:todo_id', (req, res, next) => {
        // Grab data from the URL parameters
        const id = req.params.todo_id;
        //HOW TO DEFINE A CLASS?
        // const data = {text: req.body.text, complete: false};
        //Access query as mutiple parameters vs single input?
        //const data = {text: req.body.text, complete: req.body.complete};
    //=========================================================
    // model query

    router.post('/queries/:queryid', (req, res, next) => {
        const results = [];
        const qid = req.params.queryid; //req.body.text;
        // Get a Postgres client from the connection pool
        pg.connect(connectionString, (err, client, done) => {
            // Handle connection errors
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
            // SQL Query > Execute Function with Data
            client.query('SELECT qrs.rs4($1);',
                [qdata]);
            // SQL Query > Select Data
            const query = client.query('SELECT * FROM resultsx');
            // Stream results back one row at a time
            query.on('row', (row) => {
                results.push(row);
            });
            // After all data is returned, close connection and return results
            query.on('end', () => {
                done();
                return res.json(results);
            });
        });
    });




//=============================================================================================
    var name = 'jdoe';
    var shirt = 'fuschia';

    db.transaction(
        function (transaction) {
            transaction.executeSql("UPDATE people set shirt=? where name=?;",
                [ shirt, name ]); // array of values for the ? placeholders
        }
    );

//================================================================================================================

// CURRENT, POORLY WRITTEN, PROBABLY NON-WORKING DB FUNCTION
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
                res.rows.item[].
                res.status(200)  //putting results to array occurs here
                    .json({
                        status: 'success',
                        data: data,
                        message: `Found ${result.rowCount} related words`
                    }),
                for(var i=0; i<res.rows.length; i++) {
                    var row = res.rows.item(i); //item[i]         //var row = res.rows[i];
                    console.log("row only: " + row);
                    console.log("res.rows.item(i): " + res.rows.item(i));
                    console.log("res.rows[i]: " + res.rows[i]);
                  /*  result[i] = { //return {
                        id:         row['nookid'],
                        lemma:      row['lemma'],
                        definition: row['definition'],
                        lang:       row['lang']
                    } */
                    res.rows.
                };
            })
            .catch(function (err) {
                return next(err);
            })
        // .finally(db.$pool.end);
        ;
        return JSON.stringify(data);
    }




//======================================================================================================================
    function selectRow(intake, callBack)  //  <-- SET ARGUMENT TO RETURN ARRAY
    {
        var result = [];
        client.query("SELECT qrs.rs4(" + intake + ");", (err, res) => {
            console.log(err, res)
            client.end()
        });
        var querystring = "
        SELECT
        nookid,
            lemma,
            definition,
            lang
        FROM resultsx;";

        db.transaction(function (tx) {
            tx.executeSql(querystring, [], function(tx, rs){
                for(var i=0; i<rs.rows.length; i++) { //use rs.rowcount instead?
                    var row = rs.rows.item(i)
                    result[i] = {               // object to be converted with JSON.stringify(data)
                        id: row['nookid'],      // WHAT IS THIS NOTATION?
                        lemma: row['lemma'],
                        definition: row['definition']
                        lang: row['lang']
                    }
                }
                var myJson = JSON.stringify(result)
                console.log(myJson);
                callBack(myJson);
            }, errorHandler);
        });
}}

