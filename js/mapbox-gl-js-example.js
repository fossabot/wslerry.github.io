window.onload = function() {

  mapboxgl.accessToken = '[MAP TOKEN GOES HERE]';

  var map = new mapboxgl.Map({
    container: 'map-example',
    style: 'mapbox://styles/mapsam/cikg2spcb001d9sm69lo7bhpz',
    center: [-120.897351, 47.613391],
    zoom: 6
  });

  map.scrollZoom.disable();

};
