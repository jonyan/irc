$(document).ready(function() {

	// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();

  $('select').material_select();


	 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });



	$('#cancel-ride-btn').click(function(e) {
		e.preventDefault();
		var rideID = getParameterByName('id');
		var data = { id : rideID };
		var url = "/cancelRide";

	  var xhr = new XMLHttpRequest();
	  xhr.open("POST", url, true);
	  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

	  // send the collected data as JSON
	  xhr.send(JSON.stringify(data));

	  xhr.onloadend = function () {
	    var status = xhr.status;
	    if (status == 200) {
	    	//success
	    	window.location.href = 'volunteer#upcomingRides';
	    } else {
	    	alert('failure');
	    }
	  };
	});

	$('#card-accept-ride-btn').click(function(e) {
		e.preventDefault();
		var rideID = $('#card-accept-ride-btn').attr('value');
		var data = { id : rideID };

		var url = "/acceptRide";
		// construct an HTTP request
	  var xhr = new XMLHttpRequest();
	  xhr.open("POST", url, true);
	  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

	  // send the collected data as JSON
	  xhr.send(JSON.stringify(data));

	  xhr.onloadend = function () {
	    var status = xhr.status;
	    if (status == 200) {
	    	//success
	    	// window.location.href = 'volunteer#upcomingRides';
	    } else {
	    	alert('failure');
	    }
	  };
 

	});



	$('#accept-ride-btn').click(function(e) {
		e.preventDefault();
		var rideID = getParameterByName('id');
		var data = { id : rideID };

		var url = "/acceptRide";
		// construct an HTTP request
	  var xhr = new XMLHttpRequest();
	  xhr.open("POST", url, true);
	  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

	  // send the collected data as JSON
	  xhr.send(JSON.stringify(data));

	  xhr.onloadend = function () {
	    var status = xhr.status;
	    if (status == 200) {
	    	//success
	    	// window.location.href = 'volunteer';
	    } else {
	    	alert('failure');
	    }
	  };
	});

	function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
	};


		

});