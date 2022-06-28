const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req,res) => {
    res.send("Routes");
})

app.get('/signup', (req,res)=>{
    var name = req.params.name;
    var email = req.params.email;
    var password = req.params.password;

    console.log(`name: ${name} email: ${email} password: ${password}`);

    res.send('In signup module');
})

app.listen(3000, (req,res)=>{
    console.log('Server is listening on port 3000');
})