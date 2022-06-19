const fs = require('fs');

fs.renameSync('newname.txt', 'oldNameback.txt');
console.log("File rename successful Synchronously!");