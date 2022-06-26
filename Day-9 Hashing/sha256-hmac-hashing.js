const crypto = require('crypto');

var hmac = crypto.createHmac('sha256','thisismykey');

const data = hmac.update('#30daysofnode', 'utf-8');


console.log('Hmac: ', data.digest('hex'));