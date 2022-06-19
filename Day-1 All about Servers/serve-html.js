const http = require('http');
const fs = require('fs');

var host = '127.0.0.1';
var port = 3000;
const server = http.createServer(function (req,res){
    res.writeHead(200, {"Content-Type": "Text/HTML"});
    //reading the html file
    fs.readFile('index.html', (err,data) => {
        if(err)
        throw err;
        console.log("Operation Success");
        res.end(data);
    });
});

server.listen(3000, host, (error) => {
    if(error) {
        console.log("Error Occured",error);
    }
    console.log(`Server is running on ${host}:${port}`);
});