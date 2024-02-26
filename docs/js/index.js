// Initialize the map variable
var map;

// Function to initialize the map
function initMap() {
  // Create a new map and place it in the 'map' div
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.06865390159834, lng: -79.8107065341785},
    zoom: 15
  });
  
  // Add moving objects here
  // You can use the Google Maps API to add markers and move them based on coordinates
}

// Load the map script dynamically
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCmmCmJxrpgZNdbad86zGFxi6nn3g3jt4w&callback=initMap';
  document.body.appendChild(script);
}

window.onload = loadScript;
