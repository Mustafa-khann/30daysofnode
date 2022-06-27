const crypto = require('crypto'),algorithm = "aes-256-ctr", password = "mustafa";

function encrypt (text)
{
    var cipher = crypto.createCipher(algorithm, password);
    var crypted = cipher.update(text, 'utf-8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
function decrypt (text)
{
    var decipher = crypto.createDecipher(algorithm,password);
    var decrypted = decipher.update(text, 'hex','utf-8');
    decipher += decipher.final('utf-8');
    return decrypted;
}
var text = "This 30daysofnode challenge is amazing. I've learned alot.";

var enc = encrypt(text);
console.log("Encrypted String: ", enc);

var dec = decrypt(e);
console.log("Decrypted String: ", dec);