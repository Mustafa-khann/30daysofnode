const fs = require('fs');
const filenotfound = new Error('File doesn\'t exist');
fs.readFile('file.txt', (err, data) =>
{
    if(err)
    {
        console.error(filenotfound.message);
    }
    else{
        console.log('Content: ', data);
    }
})