const fs = require('fs');
function nSCallBack(err, data)
{
    if(err)
    {
        console.error("Error : ", err);
    }
    else{
        console.log(data);
    }
}
fs.readFile('file.txt','utf-8' ,nSCallBack);
fs.readFile('notfile.txt', nSCallBack);