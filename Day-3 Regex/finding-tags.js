const fs = require('fs');
const filename = 'data.html';
var str = fs.readFileSync('data.html').toString();
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

var myarray =str.match(pattern);
var len = myarray.length;
console.log("Occurance of the pattern of Tags in the string is: ", len);