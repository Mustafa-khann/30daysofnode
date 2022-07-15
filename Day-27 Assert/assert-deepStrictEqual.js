const assert = require('assert');
var a = 10;
var b = 20;

assert.deepStrictEqual(a,b, 'Error because they are using === operators for comparision');