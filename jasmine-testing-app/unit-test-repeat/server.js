/* Morgan is basically a logger, on any requests being made,it generates logs automatically
** Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
** This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request
*/

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.use(morgan('dev'));

app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(5050);

console.log('app is running on 5050');