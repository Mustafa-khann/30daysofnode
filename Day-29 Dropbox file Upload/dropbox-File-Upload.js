const https = require("https");
const data = "{\"limit\": 1000}";
const TOKEN = "sl.BLlWZDkPkDZ6tfRw25VVTY6X_-PMwWqeLGoPoe7ePw3Vbrbbihzppg3QOCQp0yb4OCdHob50pmxJN1Ylgxwy1jn3X537JDZN2s_2Heprg0Z3T0zYWUAdX6CXW1Gpx7RuapFu_1o"
const req = https.request('https://api.dropboxapi.com/2/file_requests/count', {
	method: 'POST',
	headers: { 
		'Authorization': `Bearer ${TOKEN}`,
	},
	
}, (res) => {
	console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    res.on('data', function(d) {
        process.stdout.write(d);
    });
})

req.end();