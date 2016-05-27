// $(document).ready(function() {

// 	$('#accept-ride-btn').click(function(e) {
// 		e.preventDefault();
// 		var rideID = getParameterByName('id');
// 		var data = { id : rideID };
		
// 		// construct an HTTP request
// 	  var xhr = new XMLHttpRequest();
// 	  xhr.open(form.method, form.action, true);
// 	  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

// 	  // send the collected data as JSON
// 	  xhr.send(JSON.stringify(data));

// 	  xhr.onloadend = function () {
// 	    var status = xhr.status;
// 	    if (status == 200) {
// 	    	//success
// 	    	window.location.href = 'volunteer';
// 	    } else {
// 	    	alert('failure');
// 	    }
// 	  };

// 		console.log(rideID);
// 	});

// 	function getParameterByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, "\\$&");
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
// 	};


		

// });