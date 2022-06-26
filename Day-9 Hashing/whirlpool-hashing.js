const crypto = require('crypto');
const hash = crypto.createHash('whirlpool');

// passing the data to be hashed
data = hash.update('#30daysofnodechallenge', 'utf-8');
// creating the hash in the required format
gen_hash = data.digest('hex');

console.log("Hash: ", gen_hash);