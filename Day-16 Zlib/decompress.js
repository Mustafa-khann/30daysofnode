const zlib = require('zlib');
const fs = require('fs');

const unzip = zlib.createUnzip();

const read = fs.createReadStream('file.txt.gz');
const write = fs.createWriteStream('unzip.txt');

read.pipe(unzip).pipe(write);

console.log('File Unzipped Successfully');