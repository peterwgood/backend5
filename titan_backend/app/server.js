const http = require('http');
const products = require('./products.js');

http.createServer(function (req, res) {
  console.log(req.url, req.url == "/index.html", typeof req.url)
  if (req.url == "/products.html" && req.method == "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.write('<html><head><title>Simple HTTP Server</title></head>');
    res.write('<body>');
    res.write('\n<h1>' + products + '</h1>');
    res.end();
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      error: "Page not found"
    }));

  }
}).listen(3000);


console.log('Listening on 3000')
