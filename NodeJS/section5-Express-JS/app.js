// core
// const http = require('http'); commented because we are going with option 2
const fs = require('fs');

const express = require('express');

const app = express(); // this is valid request handler

/* app.use((req, res, next) => {
    console.log('in the middle ware');
    next(); // this function allows the request to travel to other middle ware.
}); */

app.use('/add-product', (req, res, next) => {
    console.log('in the another middle ware');
    res.send('<h1> Add product </h1>');

});
app.use('/', (req, res, next) => {
    console.log('in the another middle ware');
    res.send('<h1> hello </h1>');

});

//main code starts 
// option 1
/* const server = http.createServer(app);
server.listen(3000); */
// option 2
app.listen(3000);