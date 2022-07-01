const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const crypto = require('crypto');
const path = require('path');
const mongo = require('mongodb');

var app = express();
const db = "mongodb://127.0.0.1:27017/users"

app.get('/', (req,res) =>{
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    return res.redirect('/public/index.html')
})