const crypto = require('crypto');

const hmac = crypto.createHmac('sha512', 'thisiskey');

const data = hmac.update('#30daysofnode');

console.log('Hash: ', data.digest('hex'));