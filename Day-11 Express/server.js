const express = require('express');

var app = express();

app.get('/', (req,res)=> {
    res.send("Hello there, this is an express framework");
})

app.listen(3000, ()=> {
    console.log("Server running on port: 3000");
})