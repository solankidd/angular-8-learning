// core
const http = require('http');
const fs = require('fs');

// custom
const routes = require('./routes')

//main code starts
const server = http.createServer(routes);
server.listen(3000);