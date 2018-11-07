var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

console.log('hi')

app.use(express.static(`${__dirname}/../public`));

var ServerOne = 'http://localhost:3001',
    ServerTwo = 'http://localhost:3009'
    ServerThree = 'http://localhost:3004',
    ServerFour = 'http://localhost:3000';
 
app.all('/stocks/1', function(req, res) {
    console.log('redirecting to Server1 alan');
    apiProxy.web(req, res, {
        target: ServerOne
    });
});

app.all('/companies/1', function(req, res) {
    console.log('redirecting to Server1 alan');
    apiProxy.web(req, res, {
        target: ServerOne
    });
});

app.all('/companiesKatie/1', function(req, res) {
    console.log('redirecting to Server2 katie');
    apiProxy.web(req, res, {
        target: ServerTwo
    });
});

app.all('/company/1', function(req, res) {
    console.log('redirecting to Server3 jim');
    apiProxy.web(req, res, {
        target: ServerThree
    });
});


app.all('/stocks/1', function(req, res) {
    console.log('redirecting to Server3 jim');
    apiProxy.web(req, res, {
        target: ServerThree 
    });
});

app.all('/companiesJim/1', function(req, res) {
    console.log('redirecting to Server4 jonathan ');
    apiProxy.web(req, res, {
        target: ServerFour
    });
});

const port = 3008; 

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});