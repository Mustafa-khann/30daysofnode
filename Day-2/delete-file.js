const fs = require('fs');

fs.unlink('oldNameback.txt', (err) =>
{
    if(err)
    {
        throw err;
    }
    else{
        console.log("File deletion successful!");
    }
})