const { version } = require('os');

const ef = require('child_process').exec;

const child = ef('node', [--version], (err, stdout, stderr) => {
    if(err){
        console.log('stderr', stderr);
        throw err;
    }
    console.log('Node js version is ', stdout);
})