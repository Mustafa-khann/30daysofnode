const crypto = require('crypto');

const hmac = crypto.createHmac('whirlpool','thisismykey');

const data = hmac.update('#30daysofnode', 'utf-8');

console.log('Hash: ',data.digest('hex'));