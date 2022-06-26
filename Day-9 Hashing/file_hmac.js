const crypto = require('crypto');
const fs = require('fs');

var algorithm = 'md5';
const secretkey = 'Thsiskey';
const hmac = crypto.createHmac(algorithm,secretkey);

const filename = 'data.txt';
const file_data = fs.ReadStream(filename);

file_data.on('data', function(data){
    hmac.update(data);
})

file_data.on('end', function(){
    console.log("HMAC generated using " + algorithm + '\nHashed output is ' + hmac.digest('hex'), '\nFilename is '+ filename);
    fs.writeFileSync(filename, hmac.digest('hex'));
})