const crypto = require('crypto');
// creating hash object
const hash = crypto.createHash('md5');
// passing the data to be hashed
data = hash.update('#30daysofnode', 'utf-8');
// creating the hash in the required format
gen_hash = data.digest('hex');
// printing the output on the console
console.log("Hash :", gen_hash);