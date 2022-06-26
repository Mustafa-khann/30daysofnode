const crypto = require('crypto');

var hmac = crypto.createHmac('sha256');

const data = hmac.update('#30daysofnode', 'utf-8');

gen_hmac = data.digest('hex');

console.log('Hmac: ', gen_hmac);