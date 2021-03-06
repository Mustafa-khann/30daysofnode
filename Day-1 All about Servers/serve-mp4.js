const http = require('http');
const fs = require('fs');

var host = '127.0.0.1'
var port = 3000

const server = http.createServer((req,res) => 
{
    res.writeHead(200, {'Content-Type': "video/mp4"});
    fs.exists('sample.mp4', function(exists) {
        if(exists)
        {
            var rstream = fs.createReadStream('sample.mp4');
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
        console.log("Error Occured",error);
    }
    console.log(`Server running on ${host}:${port}`);
})