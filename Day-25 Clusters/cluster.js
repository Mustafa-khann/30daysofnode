const cluster = require('cluster');
const http = require('http');
const numOfCpus = require('os').cpus().length;

if(cluster.isMaster){
    console.log(`Master with process ID: ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numOfCpus; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker with process ID: ${process.pid} died`);
    })
}
else
{
    http.createServer((req,res)=> {
        res.writeHead(200);
        res.end('An Example of clusters\n');
    }).listen(3000);
    console.log(`Worker with Process Id: ${process.pid} started`);
}