const express = require("express");
const app = express();

const fs = require('fs').promises;
let indexFile;

app.get("/", (req, res) => 
  fs.readFile(__dirname + "/index.html")
    .then(contents => {
      indexFile = contents
      res.setHeader("Content-Type", "text/html"); //tells the client we are returning HTML content
      res.writeHead(200);
      res.end(indexFile); //res.end handles what gets sent to the client
    })
);

app.get("/about", (req, res) => 
  fs.readFile(__dirname + "/about.html")
    .then(contents => {
      indexFile = contents
      res.setHeader("Content-Type", "text/html"); //tells the client we are returning HTML content
      res.writeHead(200);
      res.end(indexFile); //res.end handles what gets sent to the client
    })
);

app.get("/contact-me", (req, res) => 
  fs.readFile(__dirname + "/contact-me.html")
    .then(contents => {
      indexFile = contents
      res.setHeader("Content-Type", "text/html"); //tells the client we are returning HTML content
      res.writeHead(200);
      res.end(indexFile); //res.end handles what gets sent to the client
    })
);

app.use((req, res) => {
  fs.readFile(__dirname + "/404.html")
    .then(contents => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(404);
      res.end(contents);
    })
});

const PORT = 3300;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});