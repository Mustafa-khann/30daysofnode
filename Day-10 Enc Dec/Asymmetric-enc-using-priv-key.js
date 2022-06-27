const crypto = require('crypto');
const fs = require('fs');

privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: '30daysofnode'
}
// passing the text for encryption using the private key.
var buff = Buffer.from('mustafa', 'utf-8')

// Encrypting the data
secretData = crypto.privateEncrypt(privK, buff);
// printing the encrypted text
console.log(secretData.toString('utf-8'));
// reading the public key from a key file
pubk = fs.readFileSync('pub.key').toString();
// decrypting the text using public key
origData = crypto.publicDecrypt(pubk, secretData);
// printing the original content
console.log(origData.toString());