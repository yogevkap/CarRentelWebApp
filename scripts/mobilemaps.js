var directionsService;
var directionsDisplay;
var coords;

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function (position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // You have to create the google map inside the "initialize function".
        // Please notice that i didnt change the code, i just warp it with the "initialize function".
        function initialize() { //-------> start of the initialize function.
            coords = new google.maps.LatLng(latitude, longitude);

            directionsService = new google.maps.DirectionsService();
            directionsDisplay = new google.maps.DirectionsRenderer();

            var mapOptions = {
                zoom: 15, center: coords, mapTypeControl: true, navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map(document.getElementById("mapContainer"), mapOptions);

        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('panel'));

        var marker = new google.maps.Marker({ position: coords, map: map, title: "your current location!" });
        } // ------> end of the initialize function.
          // notice that there is no change in the code.

        //after i warp the code, i make a refreash method. becuase we are using ajax (everything is in the same page), you have to refreash the page.
        //if you will not refreash the page, the map will not load correctly.
        $(document).on("pageshow", "#mobilemap", function () { //#mobilemap is the name if the page
            if ($("#mapContainer").html() === '') { // #mapContainer is the name of the div that show the map (the canvas).
                initialize();
            }
        });
    });
    // thats all!!! please dont kill me if thier some grammer mistakes :D 
} else {
    alert("Geolocation API is not supported in your browser.");

}

function find() {
    var request = {
        origin: coords,
        destination: document.getElementById("where").value,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }

        var gear = localStorage.getItem("auto/manual");
        var distance;
        var cost;
        distance = response.routes[0].legs[0].distance.text;
        //document.getElementById("distance_road").innerHTML = distance;
        cost = parseFloat(distance);

        if (cost < 90) {
            cost = cost * 1.2;

        }
        else if (cost > 90) {
            var num = cost - 90;
            cost = cost - num;
            cost = (cost * 1.2) + (num * 0.9);


        }

        if (gear == 2 || gear == 4) {
            cost = cost - (cost * 0.1);
        }
        document.getElementById("distance_cost").innerHTML = "Total Trip Cost: " + cost + "$";
        document.getElementById("approve").style.visibility = "visible";
        document.getElementById("notapprove").style.visibility = "visible";
    });
}

function approve() {
    var type = localStorage.getItem("auto/manual");
    if (type == 1) {
        localStorage.setItem("1", "Rented");
    }

    var type = localStorage.getItem("auto/manual");
    if (type == 2) {
        localStorage.setItem("2", "Rented");
    }

    var type = localStorage.getItem("auto/manual");
    if (type == 3) {
        localStorage.setItem("3", "Rented");
    }

    var type = localStorage.getItem("auto/manual");
    if (type == 4) {
        localStorage.setItem("4", "Rented");
    }

    var type = localStorage.getItem("auto/manual");
    if (type == 5) {
        localStorage.setItem("5", "Rented");
    }

    alert("Enjoy your time with our car.");
    window.document.location.href = "#home";

}


function notapprove() {
    window.document.location.href = "#home";
}




