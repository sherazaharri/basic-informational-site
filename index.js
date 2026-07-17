const http = require('node:http');
const fs = require('fs').promises;

const host = 'localhost';
const port = 8080;
let indexFile;

const requestListener = function (req, res) {
  switch(req.url){
    case "/":
      fs.readFile(__dirname + "/index.html")
         .then(contents => {
          indexFile = contents
          res.setHeader("Content-Type", "text/html"); //tells the client we are returning HTML content
          res.writeHead(200);
          res.end(indexFile); //res.end handles what gets sent to the client
        })
      break;
    case "/about":
      fs.readFile(__dirname + "/about.html")
        .then(contents => {
          indexFile = contents
          res.setHeader("Content-Type", "text/html"); //tells the client we are returning HTML content
          res.writeHead(200);
          res.end(indexFile); //res.end handles what gets sent to the client
        })
      break;
    case "/contact-me":
      fs.readFile(__dirname + "/contact-me.html")
        .then(contents => {
          indexFile = contents
          res.setHeader("Content-Type", "text/html"); //tells the client we are returning HTML content
          res.writeHead(200);
          res.end(indexFile); //res.end handles what gets sent to the client
        })
      break;
    default:
      fs.readFile(__dirname + "/404.html")
        .then(contents => {
          indexFile = contents
          res.setHeader("Content-Type", "text/html"); //tells the client we are returning HTML content
          res.writeHead(404);
          res.end(indexFile); //res.end handles what gets sent to the client
        })
  }
};

const server = http.createServer(requestListener); //accepts HTTP requests and passes to requestListener

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`
)});