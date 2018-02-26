//+++++++++++++++++ REQUEST API ++++++++++++++++++++++++
// https://blog.risingstack.com/node-hero-node-js-request-module-tutorial/
const options = {
    method: 'POST',
    uri: 'http://localhost:3000/user-input/',
    body: {  //using URL: /user-input and a req.body?
        foo: 'bar'
    },
    /*   qs: {
           limit: 10,
           skip: 20,
           sort: 'asc'
       },
        headers: {
           'User-Agent': 'Request-Promise',
           'Authorization': 'Basic QWxhZGRpbjpPcGVuU2VzYW1l'
       },  */
    headers: [
        {
            name: 'content-type',
            value: 'application/x-www-form-urlencoded'
        }
    ],
    postData: {
        mimeType: 'application/x-www-form-urlencoded',
        params: [  //using URL /user-input/:id
            {
                name: 'inputstring',
                value: 'алфаиомега'
            },
            /*   {
                 name: 'hello',
                 value: 'world'
               } OPTIONAL EXTRA QUERY VAR */
        ]
    },
    json: true
    // JSON stringifies the body automatically
}
​
request(options)
    .then(function (response) {
        // globalvar = response.data; ??
    })
    .catch(function (err) {
        // Deal with the error
    })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


request({
    // will be ignored
    method: 'GET',
    uri: 'http://localhost:3000/script=?qs=anton',

    // HTTP Archive Request Object
    har: {
        url: 'http://localhost:3000/user-input/',
        method: 'POST',
        headers: [
            {
                name: 'content-type',
                value: 'application/x-www-form-urlencoded'
            }
        ],
        postData: {
            mimeType: 'application/x-www-form-urlencoded',
            params: [
                {
                    name: 'inputstring',
                    value: 'алфаиомега'
                },
                /*   {
                     name: 'hello',
                     value: 'world'
                   } OPTIONAL EXTRA QUERY VAR */
            ]
        }
    }
})
