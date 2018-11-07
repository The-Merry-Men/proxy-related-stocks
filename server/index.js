var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

console.log('hi')

app.use(express.static(`${__dirname}/../public`));

var ServerOne = 'http://localhost:3001';
var ServerTwo = 'http://localhost:3009';
var ServerThree = 'http://localhost:3004';
var ServerFour = 'http://localhost:3000';
 
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

app.all('/companiesKatie/:id', function(req, res) {
    console.log('redirecting to Server2 katie');
    apiProxy.web(req, res, {
        target: ServerTwo
    });
});

app.all('/company/8', function(req, res) {
    console.log('redirecting to Server3 jonathan');
    apiProxy.web(req, res, {
        target: ServerFour
    });
});


app.all('/stocks/:id', function(req, res) {
    console.log('redirecting to Server3 jim');
    apiProxy.web(req, res, {
        target: ServerThree
    });
});

app.all('/companiesJim/:id', function(req, res) {
    console.log('redirecting to Server4 jim ');
    apiProxy.web(req, res, {
        target: ServerThree
    });
});

const port = 3008; 

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});