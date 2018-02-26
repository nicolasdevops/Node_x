const nocache = require('superagent-no-cache');
const request = require('superagent');
const prefix = require('superagent-prefix')('/static');


request
    .post('/user-input')
    .send({ name: 'nametest', //species: 'cat'
    }) // sends a JSON post body
    //.set('X-API-Key', 'foobar')
    .set('accept', 'json')
    .end((err, res) => {
        // Calling the end function will send the request
    });