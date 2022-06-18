const http = require('http');
const fs = require('fs');
const { LOADIPHLPAPI } = require('dns');

var host = '127.0.0.1'
var port = 3000

const server = http.createServer((req,res) => 
{
    res.writeHead(200, {'Content-Type': "audio/mp3"});
    fs.exists('sample.mp3', function(exists) {
        if(exists)
        {
            var rstream = fs.createReadStream('sample.mp3');
            rstream.pipe(res);
        }
        else 
        {
            res.end("Its a 404");
        }

    });
});

server.listen(port, host, (error) => {
    if(error)
    {
        console.log("Error Occured",errror);
    }
    console.log(`Server running on ${host}:${port}`);
})