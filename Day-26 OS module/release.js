const os = require('os');
const release = os.release();

console.log("Release: ",JSON.stringify(release));