const fs = require('fs');
const {Console} = require('console');

const output = fs.createWriteStream('./stdout.log');
const errOutput  = fs.createWriteStream('./stderr.log');

// custom simple print
const print = new Console(output, errOutput);

const roll = 839298;
print.log('roll : %d', roll);
print.log('This will be stored in a file');