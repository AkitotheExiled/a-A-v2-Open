const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require('http');

const port = 5000;

server = http.createServer((res, req) => {
    console.log(res.method, res.url);
    let requestBody = '';

    req.on('data', (data) => {
        requestBody += data;
    });

    req.on('end', () => {
        let removeAt = requestBody.split("&");
        let removeEqual = removeAt.split("=");
        let replacePlus = removeEqual.replace("+", " ");
        let decodedUrl = decodeURIComponent(replacePlus);

        let obj = {...decodedUrl};

        return obj
    })
})

server.listen(port, () => console.log("Listening on port", port));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
