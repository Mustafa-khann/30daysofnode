const fs = require('fs');

const Wdata = "I am working with streams for the first time.";

const mywriteStream = fs.createWriteStream('about.txt');

mywriteStream.write(Wdata);

mywriteStream.end();

mywriteStream.on('error', (err)=>{
    console.log(err);
});

mywriteStream.on('finish', ()=>
{
    console.log('Data written successfully using Streams');
    console.log('Now trying to read the same file using streams');

    var myReadStream = fs.createReadStream(about.txt);

    var rContents = '';

    myReadStream.on('data', (chunk) => {
        rContents += chunk;
    })
    myReadStream.on('error', (err) => {
        console.log(err);
    })
    myReadStream.on('end', () => {
        console.log("read: ", rContents);
    })
    console.log('Performed read and Write Operations using Streams');
})