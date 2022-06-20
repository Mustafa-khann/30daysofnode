const fs = require('fs');

var filename = 'oldNameback.txt';

fs.unlinkSync(filename);

console.log("File Deletion Successful synchronously!");