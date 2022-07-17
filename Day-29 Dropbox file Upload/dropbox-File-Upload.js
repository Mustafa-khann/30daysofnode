const https = require("https");
fs = require('fs')
const TOKEN = "sl.BLlWZDkPkDZ6tfRw25VVTY6X_-PMwWqeLGoPoe7ePw3Vbrbbihzppg3QOCQp0yb4OCdHob50pmxJN1Ylgxwy1jn3X537JDZN2s_2Heprg0Z3T0zYWUAdX6CXW1Gpx7RuapFu_1o"
fs.readFile('file.txt', 'utf8', function (err, data) {
	const req = https.request('https://content.dropboxapi.com/2/files/upload', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${TOKEN}`,
			'Dropbox-API-Arg': JSON.stringify({
				'path': '/Upload/file.txt',
				'mode': 'overwrite',
				'autorename': true, 
				'mute': false,
				'strict_conflict': false
			}),
	    	'Content-Type': 'application/octet-stream',
		}
	}, (res) => {
		console.log("statusCode: ", res.statusCode);
	    console.log("headers: ", res.headers);

	    res.on('data', function(d) {
	        process.stdout.write(d);
	    });
	});

	req.write(data);
	req.end();
});