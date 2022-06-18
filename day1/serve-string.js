const http = require('http');

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer( (req,res)=> {
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("Hello there I'm serving a String");
    res.end();
});

server.listen(port,host, (error) => {
    if(error)
    {
        console.log("Error Occured", error);
    }
    console.log(`Server is listening on ${host}:${port}`);
})