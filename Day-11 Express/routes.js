const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    res.send("main route")
})
app.get('/signup', (req,res) => {
    res.send("Demo route for signup page");
})
app.get('/login', (req,res) => {
    res.send("Demo route for login page");
})
app.get('/logout', (req,res) => {
    res.send("Demo route for logout page");
})
app.get('/admin/dashboard', (req,res) => {
    res.send("Demo route for dashboard");
})


app.listen(3000, ()=>{
    console.log("Server running on port: 3000");
})