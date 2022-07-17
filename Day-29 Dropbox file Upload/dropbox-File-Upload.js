var request = require('request');
var fs = require('fs');

//enter your access token
var access_token = "sl.BLlWZDkPkDZ6tfRw25VVTY6X_-PMwWqeLGoPoe7ePw3Vbrbbihzppg3QOCQp0yb4OCdHob50pmxJN1Ylgxwy1jn3X537JDZN2s_2Heprg0Z3T0zYWUAdX6CXW1Gpx7RuapFu_1o";
//Name of the file to be uploaded
var filename = 'file.txt';
//reading the contents 
var content = fs.readFileSync(filename);
//write your folder name in place of YOUR_PATH_TO_FOLDER
// For example if the folder name is njera then we can write it in the following way :
// "Dropbox-API-Arg": "{\"path\": \"/njera/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}"
options = {
            method: "POST",
            url: 'https://content.dropboxapi.com/2/files/upload',
            headers: {
              "Content-Type": "application/octet-stream",
              "Authorization": "Bearer " + access_token,
              "Dropbox-API-Arg": "{\"path\": \"/YOUR_PATH_TO_FOLDER/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
            },
            body:content
};

request(options,function(err, res,body){
     console.log("Err : " + err);
     console.log("res : " + res);
     console.log("body : " + body);    
 })
	