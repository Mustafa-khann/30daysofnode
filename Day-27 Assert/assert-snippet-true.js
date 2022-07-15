const assert = require('assert');

function demo(x,y,x){
    var value = x+y+z;
    return value;
}

var output = demo(5,5,5);
var expected_output = 15;
console.log("Expected output: ", expected_output);
assert(output==expected_output,'Test case is true so this won\'t printed');