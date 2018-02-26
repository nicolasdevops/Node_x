//var bodyParser = require('body-parser')
//var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/////////////////////////
///AJAX REQUEST FOR ARRAY
/////////////////////////

query = 'anton' //'алфаиомега'; //алфаиомега  alfaomega
var url = 'http://localhost:3000/script=?qs=' + encodeURIComponent(query);
//var encoded = encodeURI(uri);




function AJAXrequest()
{
    var lemmaList = [];
    var myJson = [];
    //var URL = encoded; //"http://localhost:3000/queries"; // + queryValue;
    xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
    console.log("(AJAX) GET");
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){

            myJson=xmlhttp.responseText;    	//responsetext is a property of the xmlhttp object
            console.log("(AJAX) responseText received from server");
            lemmaList = JSON.parse(myJson);//parseJSon(myJson);
            console.log("(AJAX) Json-parsed response: " + lemmaList);
            res.end(lemmaList);
            /////////////////
            //return lemmaList;
            //console.log("(AJAX) lemmaList array object returned:");
            //console.log(lemmaList);
            //console.log("(AJAX) xmlhttp query value sent by POST method");
            /////////////////
        }
    }
    //res.status(200).send(result.rows);
    //xmlhttp.send('alfaomega'); //CAUSES INTERNAL SERVER ERROR. BECAUSE THE REQ.BODY IS NOT ACCESSIBLE?

}
reqstring = AJAXrequest();
console.log('string set from AJAX function: ' + reqstring);



