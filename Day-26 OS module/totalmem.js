const os = require('os');
const totalMemory = os.totalmem();

console.log("Total Memory: ",JSON.stringify(totalMemory), 'bytes');