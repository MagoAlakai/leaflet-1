//Creacion del mapa
let mymap = L.map('mapid').setView([41.386875, 2.16994], 16);

//Colocar la plantilla para que se vea el mapa
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(mymap);

//Función para añadir marcador y popup al clickar
let marker = null;

let onMapClick = (e)=> {
  if (marker !== null) {
    mymap.removeLayer(marker);
  }
  marker = L.marker(e.latlng).addTo(mymap);
  marker.bindPopup("<b>Mis coordenadas son:</b><br>Lat: " + e.latlng.lat + "Lng: " + e.latlng.lat, e.latlng.lng).openPopup();
};

//Event listener para llamar función alclickar
mymap.addEventListener('click', onMapClick);

