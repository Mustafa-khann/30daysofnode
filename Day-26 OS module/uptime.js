const os = require('os');
const upTime = os.uptime();

console.log("Uptime is : ", JSON.stringify(upTime), "seconds");