const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
    res.send('oi')
});

const server = http.createServer(app);
server.listen(3002, 'localhost', function(err) {
  if (err) throw err;

  const addr = server.address();

  console.log('Listening at http://%s:%d', addr.address, addr.port);
});
