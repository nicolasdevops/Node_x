var express = require('express');
var router = express.Router();

// notice here I'm requiring my database adapter file
// and not requiring node-postgres directly
const db = require('../db')

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.get('/:id', (req, res, next) => {
    db.query('SELECT * FROM users WHERE id = $1', [id], (err, res) => {
    if (err) {
        return next(err)
    }
    res.send(res.rows[0])
})
})

//GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
module.exports = router;
