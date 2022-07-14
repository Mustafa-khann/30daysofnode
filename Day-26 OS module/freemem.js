const os = require('os');
const freemem = os.freemem();

console.log("Free Memory : ", JSON.stringify(freemem), 'bytes');