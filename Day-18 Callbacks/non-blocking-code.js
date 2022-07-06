const fs = require('fs');
const { start } = require('repl');


//For calculating execution time
var date1 = new Date();
var start_time = date1.getTime();
console.log("{Check point 1} starting at: " + start_time);
console.log("Let's start reading the file");

// Reading the file
var filename = 'file.txt';

fs.readFile(filename, (err, data) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log(data);
    }
});

const date2 = new Date();
const end_time = date2.getTime();
var execution_time = end_time - start_time;
console.log('Execution time: ', execution_time, 'ms');

