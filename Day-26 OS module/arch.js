const os = require('os');
const value = os.arch();
console.log("Architecture of CPU: ", JSON.stringify(value));