/*global $*/
$(document).ready(init);
function init() 
{
    $('#map')
        .gmap3({
            zoom: 4
        })
        .infowindow()
        .marker([
            {address: "Casanova 118-120, Barcelona", data: "<h3>Assegurances Monllor</h3><img src='../img/logo.PNG'></img>", icon: "http://maps.google.com/mapfiles/marker_orange.png"}
        ])
        .on('click', function (marker) {  //Al clicar obrim una finestra sobre la marca i hi insertem el data de la marca
            var map = this.get(0); //this.get(0) retorna la primera propietat vinculada-> gmap3
            var infowindow = this.get(1); //this.get(1) retorna la segona propietat vinculada -> infowindow
            infowindow.setContent(marker.data);     //dins la finestra mostrem el atribut data de la marca
            infowindow.open(map, marker);
        })
        .fit();
}