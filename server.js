var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello, World');
});

app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5000);
app.listen(port);