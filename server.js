const http = require('http');
const server = http.createServer((req, res) => {
    console.log('request comes');
    console.log(req.url,req.method);
});

//localhost like a domain of web application
server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
})