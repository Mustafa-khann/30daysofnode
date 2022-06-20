const fs = require('fs');

var new_data = "\n This is the new data which will be written synchronously appended to the file";

fs.appendFileSync('file.txt', new_data);

console.log('Appending to the file synchronously ')