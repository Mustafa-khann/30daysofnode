const fs = require('fs');

const date1 = new Date();
const start_time = date1.getTime();
console.log('Starting at: ', start_time);
console.log('Lets start reading file.');

var filename = 'file.txt';
var content = fs.readFileSync(filename);

console.log('Content: ', content);