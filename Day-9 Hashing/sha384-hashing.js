const crypto = require('crypto');
const hash = crypto.createHash('sha384');

const data = hash.update('#30daysofnode', 'utf-8');

const gen_hash = data.digest('hex');

console.log("Hash: ", gen_hash);