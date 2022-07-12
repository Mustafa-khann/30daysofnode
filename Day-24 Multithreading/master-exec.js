const cp = require('child_process');

for (let i = 0; i < 6; i++) {
var workerProcess = cp.exec('node slave.js', i, function(error, stdout, stderr) {
    if(error){
        console.log(error.stack);
        console.log('Error Code', error.code);
        console.log('Error Signal', error.signal);
    }

    if(stderr)
    {
        console.log('value of stderr: ', stderr);
    }
    console.log('Value of stdout: ', stdout);
});
workerProcess.on('exit', (code) => {
    console.log("Child process exited with code: ", code);
});


}