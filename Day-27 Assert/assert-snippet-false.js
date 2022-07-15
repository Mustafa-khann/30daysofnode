const assert = require('assert');

function demo(x,y,z){
    var value = x+y+z;
    return value;
}

var output = demo(5,5,6);
var expected_output = 15;
console.log("Output: ", output);
console.log("Expected output: ", expected_output);
assert(output===expected_output,'Test case is false so this will be printed');