var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');
storage = {};
app.engine('handlebars',
		exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('index', {
		name: 'Jonathan'
	});
});

// Volunteer App
app.get('/volunteer', function(req, res){
	res.render('volunteer');
});

// Caseworker App
app.get('/dashboard', function(req, res){
	res.render('dashboard');
});



app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5000);
app.listen(port);