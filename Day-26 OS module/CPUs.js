const os = require('os');
const value = os.cpus();
console.log("OS Cpu: ", JSON.stringify(value));