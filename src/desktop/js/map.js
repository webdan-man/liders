// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init_map);

function init_map() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var bounds = new google.maps.LatLngBounds();
    if (document.documentElement.clientWidth > 768) {
        var center = new google.maps.LatLng(55.605727, 37.799239);
    } else {
        var center = new google.maps.LatLng(55.6050627, 37.800239);
    }
    bounds.extend(center);
    var loc = new google.maps.LatLng(55.605727, 37.800239);
    bounds.extend(loc);
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 18,
        scrollwheel: false,
        streetViewControl: false,
        panControl: true,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },

        // The latitude and longitude to center the map (always required)
        center: center, // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles:

            [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#1d2c4d"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#8ec3b9"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#1a3646"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#4b6878"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#64779e"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#4b6878"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#334e87"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
                "color": "#023e58"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#283d6a"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#6f9ba5"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#1d2c4d"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#023e58"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#3C7680"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#304a7d"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#98a5be"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#1d2c4d"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#2c6675"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#255763"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#b0d5ce"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#023e58"
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#98a5be"
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#1d2c4d"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#283d6a"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#3a4762"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#0e1626"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#4e6d70"
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);


    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        icon: {
            url: 'img/point.png',
            size: new google.maps.Size(42, 56),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(21, 56)
        },
        title: 'LIDER'
    });

    //map.fitBounds(bounds); //autozoom
}
init_map();
