const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url.startsWith("/static")) {
    let splitUrl = req.url.split("/");
    let ending = splitUrl[splitUrl.length - 1];
    res.statusCode = 200;

    if (ending.includes("jpg")) {

      let image = fs.readFileSync("./assets/images/" + ending);
      res.setHeader("Content-Type", "image/jpg");
      res.end(image);
    } else if (ending.includes("css")) {

      let file = fs.readFileSync("./assets/css/" + ending);
      res.setHeader("Content-Type", "text.css");
      res.end(file);
    }
  } else {
    let page = fs.readFileSync("index.html");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(page);
  }
});

let port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));
