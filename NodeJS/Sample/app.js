const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send a</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    return req.on('end', () => {
      console.log(body);
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      fs.writeFileSync('message.txt', message);
      res.statusCode = 302;
      res.setHeader('Location', '/')
      return res.end(); // if we don't return, it will throw error
      // why?
      // because code after this if ends will execute first
      // than this will execute so it will try to give response again
      // this will throw error
      // if we return, it will not execute code after if
    })

  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Other message</title></head>');
  res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
  res.write('</html>');
  res.end();
//  process.exit();
});

server.listen(3000);