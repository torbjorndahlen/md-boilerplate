/**
(The MIT License)

Copyright (c) 2014 TJ Holowaychuk <tj@vision-media.ca>
Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

// This application uses express as its web server
// for more info, see: http://expressjs.com

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// RHMAP compatibility
//var mbaasApi = require('fh-mbaas-api');
var $fh = require('fh-mbaas-api');
var mbaasExpress = $fh.mbaasExpress();
var cors = require('cors');
var fs = require('fs');

// list the endpoints which you want to make securable here
var securableEndpoints;
securableEndpoints = ['/api'];

// create a new express server
var app = express();

// RHMAP compatibility
// Enable CORS for all requests
app.use(cors());
// Note: the order which we add middleware to Express here is important!
app.use('/sys', mbaasExpress.sys(securableEndpoints));
app.use('/mbaas', mbaasExpress.mbaas);



// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// Create a json body parser for POST requests
var jsonParser = bodyParser.json({limit: '50mb'});
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));

// Create a cookie parser
app.use(cookieParser());


app.use(function(req, res, next) {

  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();

});


// Controllers
//var registerController = require("./server/controller/RegisterController");
//var lookupController = require("./server/controller/LookupController");
//var loginController = require("./server/controller/LoginController");


// RHMAP compatibility
// Note: important that this is added just before your own Routes
app.use(mbaasExpress.fhmiddleware());

// Important that this is last!
app.use(mbaasExpress.errorHandler());

var port = process.env.FH_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000;
var host = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.listen(port, host, function() {
  console.log("App started at: " + new Date().toLocaleString() + " on " + host + ":" + port);
});

// RHMAP Sync Fwk
var globalRequestInterceptor = function(dataset_id, params, cb) {
  // This function will intercept all sync requests.
  // It is useful for checking client identities and
  // for validating authentication

  console.log('Intercepting request for dataset', dataset_id, 'with params', params);


  // Return a non null response to cause the sync request to fail.
  // This (string) response will be returned to the client, so
  // don't leak any security information.
  return cb(null);
};

$fh.sync.globalInterceptRequest(globalRequestInterceptor);


// Cookie validation
var validateCookie = function (req, res, next) {
  console.log("\n\nvalidateCookie()");
  // TODO store cookie in DB
  // TODO refresh cookie timeout on each request
  if(req.cookies.rhmap !== "1111") {
    console.log("\nMissing cookie");
  //  res.statusCode = 401;
  //  return res.send('Användaren är inte inloggad');
    next();
  } else {
    console.log("\nCookie check ok");
    next();
  }

};

//
// ping
//
app.get('/api/ping', function (req, res) {

		console.log('\n\n===========REQUEST===============');
		console.log('\n\nGET /api/ping');

    res.statusCode = 200;
    res.json('pong');

    console.log('\n\n=========REQUEST END===============');
});





module.exports = app;
