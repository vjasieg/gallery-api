const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const port = 420;

server.listen(port, '0.0.0.0', () => {
    console.log('Backend active on port: ' + port);
});