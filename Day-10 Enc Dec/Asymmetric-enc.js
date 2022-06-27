const crypto = require('crypto');
const fs = require('fs');

pubK = privK = fs.readFileSync('pub.key').toString();

const buff = Buffer.from("This is secret code", 'utf-8');

secretData = crypto.publicEncrypt(pubK,buff);
console.log(secretData.toString('utf-8'));

privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: 'nodejsera'
}
origData = crypto.privateDecrypt(privK, secretData);
console.log(origData.toString());