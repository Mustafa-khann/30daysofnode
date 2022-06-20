const fs = require('fs');
const filename = 'data.txt';
var str = fs.readFileSync('data.txt').toString();
var pattern = /man/gim;
var myarray = str.match(pattern);
var length = myarray.length;
console.log("Occurance of the pattern in the string is: ",length);