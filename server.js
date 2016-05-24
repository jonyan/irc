var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');

storage = {"rides" : 
						[
							{	"datetime" : "2016-06-12T15:30",
								"duration" : "2",
								"pickupLocationCity" : "San Jose",
								"pickupLocationAddress" : "1210 S Bascom Ave, San Jose",
								"dropoffLocationCity" : "Palo Alto",
								"dropoffLocationAddress" : "333 W Julian St, Palo Alto",
								"rideTitle" : "Social Services Appointment",
								"clientName" : "Eduardo Saverin",
								"clientImage" : "/public/assets/eduardo.jpg",
								"rideDistance" : "18",
								"assistance" : "true",
								"riderAvailable" : "true",
								"assistanceDescription" : "Eduardo needs volunteer assistance with filling out paper work and waiting in line."
							}
						]
					};


// storage = {"rides" : ['value1', 'value2']};


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

// Volunteer App
app.get('/ride', function(req, res){
	res.render('ride', {
		ride: storage["rides"][0]
	});
});

// Caseworker App
app.get('/dashboard', function(req, res){
	res.render('dashboard');
});



app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5000);
app.listen(port);