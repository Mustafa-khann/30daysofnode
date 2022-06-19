const fs = require('fs');

fs.rename('file.txt', 'newname.txt', (err) =>
{
    if(err)
    {
        throw err;
    }
    else{
        console.log("File rename Successful!");
    }
})