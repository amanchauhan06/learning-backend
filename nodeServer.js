const http = require('http')

const server = http.createServer((req, res) => {
    // process.exit()
    console.log(req.url, req.method, req.headers);
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
    // // It needs
    res.end('Created our first server');
    process.exit();
    
}
)

console.log('Hello');



server.listen(3000)