const http = require('http');

// Create a server object
http.createServer(function (req, res) {
	
	// http header
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	
	const url = req.url;
	
	if(url ==='/about') {
		res.write(' Welcome to about us page'); 
		res.end(); 
	}
	else if(url ==='/project') {
		res.write(' Welcome to project page'); 
		res.end(); 
	}
	else {
		res.write('Invalid page'); 
		res.end(); 
	}
}).listen(3000, function() {
	
	// The server object listens on port 3000
	console.log("server start at port 3000");
});
