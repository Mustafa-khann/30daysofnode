const fs = require('fs');
const { fileURLToPath } = require('url');

const content = 'This is the content to be wrote to the file.';

fs.writeFile('file.txt', content, (err) => {
    if(err)
    {
        throw err;
    }
    console.log("Writing to file Successful!");
})