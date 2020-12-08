//Creacion del mapa
let mymap = L.map('mapid').setView([41.386875, 2.16994], 16);

//Colocar la plantilla para que se vea el mapa: hay muchos formatos de plantilla(carreteras, geográficos etc...). En la web de openstreetmap.org puedes seleccionar.

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(mymap);

//Añadir un marcador geográfico
let marker = L.marker([41.3868561, 2.1661102]).addTo(mymap);

//Añadir un marcador circular
/*let circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);*/

//Añadir un marcador triangular
/*let polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);*/

//Añadir un pop up al marcador geográfico
marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante Mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona").openPopup();

//Añadir un pop up al marcador circular
//circle.bindPopup("I am a circle.");

//Añadir un pop up al marcador triangular
//polygon.bindPopup("I am a polygon.");