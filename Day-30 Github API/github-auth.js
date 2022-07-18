const express = require('express');
const request = require('request');
const app = express();

var config = {
    client_id: process.env.client_id,
    secret_key: process.env.secret_key,
    redirect_uri: 'http://localhost:3000/callback',
    authorize_url: 'https://github.com/login/oauth/authorize',
    token_url: 'https://github.com/login/oauth/access_token',
    api_url: 'https://api.github.com/user',
    scope: 'user'
}

app.get('github/auth' , (req, res) => {
   return res.redirect(config.authorize_url);
});

app.get('/github/callback', (req, res) => {
    // extract authorization code
    var code = req.query.code;

    // config request params
    var options = {
        url: config.token_url,
        method: 'POST',
        uri: config.token_url,
        formData : {
            client_id: config.client_id,
            client_secret: config.secret_key,
            code: code
        }, 
        headers: 
        {
            accept: 'application/json'
        }
    };

    // make a request from auth_token using above option
    request(options, (err, response, body) => {
        if(err) {
            console.log(err);
        } else {
            var auth_token = JSON.parse(body).access_token;
            console.log(auth_token);
            res.redirect(config.api_url + '?access_token=' + auth_token);
        }
    });

    