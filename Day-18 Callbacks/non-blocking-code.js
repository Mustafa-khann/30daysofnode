const fs = require('fs');


//For calculating execution time
var date1 = new Date();
var time_start = date1.getTime();
console.log("{Check point 1} starting at: " + time_start);
console.log("Let's start reading the file");

// Reading the file
var filename = fs.readFileSync(file.txt)
