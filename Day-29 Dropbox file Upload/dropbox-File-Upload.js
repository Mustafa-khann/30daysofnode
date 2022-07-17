const request = require('request');
const fs = require('fs');

var access_token = process.env.access_token;

const file_name = 'file.txt';

var content = fs.readFileSync(file_name);

option 