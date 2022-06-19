const fs = require('fs');

var new_data = 'This new data will be appended to the file.';

fs.appendFile('file.txt' , new_data, (err)=> {
    if(err)
    {
        throw err;
    }
    else{
        console.log();
    }
})