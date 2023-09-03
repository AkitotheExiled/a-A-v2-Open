const http = require('http');

const server = http.createServer((res, req) => {
    console.log(res);
})

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
