const fs = require('fs');

var filename = 'file.txt';
var content = fs.readFileSync('file.txt', 'utf-8');

console.log('Content: ', content);