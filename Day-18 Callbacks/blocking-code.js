const { timeEnd } = require('console');
const fs = require('fs');

// for calculating Execution time
const date1 = new Date();
const start_time = date1.getTime();
console.log('Starting at: ', start_time);
console.log('Lets start reading file.');
// for reading the file
var filename = 'file.txt';
var content = fs.readFileSync(filename);
console.log('Content: ', content);

// for calculating Execution time
var date2 = new Date();
var end_time = date2.getTime();
console.log('Finishing at: ', end_time);
var execution_time = end_time - start_time;
console.log("Execution time was : ", execution_time, 'ms');

console.log('Another task to be Executed');