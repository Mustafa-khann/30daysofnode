const http = require('http');

var host = '127.0.0.1'
var port = 3000;

var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    console.log("server working");
    console.log("Server working success");
});

server.listen(port, host,  (error) => {
    return console.log("Error Occured", error);

    console.log(`Server is running on ${host} : ${port}`);
})
