const http = require('http');
const fs = require('fs');

var host = '127.0.0.1'
var port = 3000

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "application/pdf"});

    fs.readFile('timetable.pdf', (error, data) => {
        if(error){
            res.json({"Status": 'error', msg:err});
        }
        else{
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, host, (error) => {
    if(error)
    {
        console.log("Error occured", error);
    }
    console.log(`Server running on ${host}:${port}`);
});