//Creacion del mapa
let mymap = L.map('mapid').setView([41.386875, 2.16994], 16);

//Colocar la plantilla para que se vea el mapa

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(mymap);

//Añadir un marcador geográfico
let marker = L.marker([41.3868561, 2.1661102]).addTo(mymap);

//Añadir un pop up al marcador geográfico
marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante Mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona").openPopup();

