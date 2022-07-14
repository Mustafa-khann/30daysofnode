const os = require('os');
const value = os.endianness();
console.log("Endianness of CPU:" ,JSON.stringify(value));