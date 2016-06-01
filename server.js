var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');

var bodyParser = require('body-parser');
// var multer = require('multer'); // v1.0.5
// var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json

// "datetime" : "2016-06-12T15:30"
storage = {"rides" : 
						{
							"1" : {	"accepted" : false,
								"month" : "June",
								"date" : "2",
								"pickupTime" : "2:00",
								"pickupTimeMeridian" : "PM",
								"duration" : "2",
								"endTime" : "4:00",
								"endTimeMeridian" : "PM",
								"pickupLocationCity" : "San Jose",
								"pickupLocationAddress" : "1800 Stokes St, San Jose",
								"dropoffLocationCity" : "San Jose",
								"dropoffLocationAddress" : "751 S Bascom Ave, San Jose",
								"rideTitle" : "Social Services Appointment",
								"clientName" : "Ahmed Ali",
								"clientPhone" : "(415) 343-2086",
								"clientImage" : "/public/assets/ahmed.png",
								"rideDistance" : "6",
								"assistance" : "Assistance",
								"riderAvailable" : "true",
								"assistanceDescription" : "Ahmed needs volunteer assistance with translation and help filling out paper work."
							},
							"2" : {	"accepted" : false,
								"month" : "June",
								"date" : "4",
								"pickupTime" : "3:30",
								"pickupTimeMeridian" : "PM",
								"duration" : "2",
								"endTime" : "5:30",
								"endTimeMeridian" : "PM",
								"pickupLocationCity" : "San Jose",
								"pickupLocationAddress" : "1210 S Bascom Ave, San Jose",
								"dropoffLocationCity" : "Palo Alto",
								"dropoffLocationAddress" : "333 W Julian St, Palo Alto",
								"rideTitle" : "Social Services Appointment",
								"clientName" : "Eduardo Saverin",
								"clientPhone" : "(650) 293-1038",
								"clientImage" : "/public/assets/eduardo.png",
								"rideDistance" : "18",
								"assistance" : "Assistance",
								"riderAvailable" : "true",
								"assistanceDescription" : "Eduardo needs volunteer assistance with filling out paper work and waiting in line."
							}
						}
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
	res.render('volunteer', {
		rides: storage["rides"]
	});
});

app.get('/ride', function(req, res){
	res.render('ride', {
		ride: storage["rides"][req.query.id]
	});
});

app.post('/acceptRide', function(req, res) {
	var rideID = req.body["id"];
	// if (storage.rides[rideID] != NULL) {
	storage.rides[rideID].accepted = true;
	res.sendStatus(200);
	// } else {
	// 	console.log("ride ID not valid");
	// 	failure: res.sendStatus(500);
	// }
	// console.log(storage.rides[rideID]);
	// delete storage.rides[rideID];
	// delete storage.rides[rideID];
});

app.post('/cancelRide', function(req, res) {
	var rideID = req.body["id"];
	storage.rides[rideID].accepted = false;
	res.sendStatus(200);
});


// Caseworker App

app.get('/caseworker', function(req, res){
	res.render('caseworker', {
		rides: storage["rides"]
	});
});

app.get('/form', function(req, res){
	res.render('form', {
		rides: storage["rides"]
	});
});



app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5000);
app.listen(port);