const cp = require('child_process');

for (let i = 0; i < 6; i++) {
   var worker = cp.spawn('node', ['slave.js', i]);

   worker.stdout.on('data', function (data) {
       console.log('Value of stdout: ', data);
   });

   worker.sdterr.on('data', function (data){
       console.log('stderr' + data);
   });

   worker.stdin.on('close', (code) => {
       console.log('Child process exited with code');
   });
    
}