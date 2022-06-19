const fs = require('fs');

var content = "I am writing content to the file synchronously!";

fs.writeFileSync('file.txt', content, (err) => {
    if (err)
    {
        throw err
    }
    else
    {
    console.log("Synchronous writing to the file successful!");
}
});