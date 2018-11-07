var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

var serverOne = 'http://localhost:3001',
    serverTwo = 'http://localhost:3002',
    serverThree = 'http://localhost:3002';
    serverFour = 'http://localhost:3009'; //mine 
 
app.all("/app1/*", function(req, res) { //not sure what to put at this endpoint, is it the endpoint from each specific app? 
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {
        target: serverOne
    });
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {
        target: serverTwo
    });
});

app.all("/app3/*", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {
        target: serverThree
    });
});

app.all("/app4/*", function(req, res) {
    console.log('redirecting to Server4');
    apiProxy.web(req, res, {
        target: serverFour
    });
});

const port = 3000; 

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
  