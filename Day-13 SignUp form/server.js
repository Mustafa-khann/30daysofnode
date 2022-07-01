const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const crypto = require('crypto');
const path = require('path');
const {MongoClient} = require('mongodb');

var app = express();
const port = 3000;
const uri = "mongodb://127.0.0.1:27017/users"

app.get('/', (req,res) =>{
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    return res.redirect('/public/index.html')
}).listen(port);

console.log(`Server running on port: ${port}`);
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.post('/sign_up', (req,res)=> {
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.password;
    var phone = req.body.phone;
    // hashing the password
    var password = getHash(pass,phone);

    var data = {
        "name": name,
        "email": email,
        "password": pass,
        "phone": phone
    }
    MongoClient.connect(uri , function(error , client){
		if (error){
			throw error;
		}
		console.log("connected to database successfully");
		//CREATING A COLLECTION IN MONGODB USING NODE.JS
        let database = client.db('databaseName');
		database.collection("details").insertOne(data, (err , collection) => {
			if(err) throw err;
			console.log("Record inserted successfully");
			console.log(collection);
		});
	});

    console.log("Data is ", JSON.stringify(data));
    res.set({
        'Access-Control-Allow-Origin' : '*'
    })
    res.redirect('/public/success.html');
})

var getHash = (pass, phone) => {
    var hmac = crypto.createHmac('sha512', phone);

    // passing the data to be hashed
    data = hmac.update(pass);
    gen_hmac = data.digest('hex');
    console.log('Hmac', gen_hmac);
    return gen_hmac;
}