const request = require('request');
const fs = require('fs');

var access_token = process.env.access_token;

const file_name = 'file.txt';

var content = fs.readFileSync(file_name);

option = {
    method: "POST",
    url: 'https://content.dropboxapi.com/2/files/uplaod',
    header:
    {
        "Content-Type": "Application/octet-stream",
        "Authorization": "Bearer" + access_token,
        "Dropbox-API-Arg": "{\"path\": \"/./"+file_name+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
    },
    body:content
};

request(options, (err, res, body) => {
    console.log("Err" + err);
    console.log("res" + res);
    console.log("body" + body);
})