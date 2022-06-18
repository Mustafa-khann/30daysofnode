var http = require('http')
import * as fs from {fs};

var host = '127.0.0.1';
var port = 3000;

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    let json_response = {
        status: 200,
        message: 'successful',
        result: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        code: 2000
    }
    res.end(JSON.stringify(json_response));
})

server.listen(port, host, (error) => {
    if(error)
    {
        console.log("Error occured", error);
    }
    console.log(`Server is running on ${host}:${port}`);
})