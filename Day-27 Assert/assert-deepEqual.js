const assert = require('assert');
var a = 10, b = '10', c=25.6;
// Case 1
assert.deepEqual(a,b, 'Nothing printed because they are using == for comparison.');
// Case 2
assert.deepEqual(b,c, 'Error because the values doesn\'t match');