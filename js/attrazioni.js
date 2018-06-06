$(document).ready(function(){

$("#menutendina").on("change",function(){
var tipo=$("#cerca").val();
console.log(tipo);
 $.getJSON('api/attrazioni.php?Tipologia=' + tipo, function (data){
		console.log(data);
		var url_immagine = "";
		
		$("#elenco").empty();
		
		for(var i = 0; i < data.length; i++)
		{

			
			url_immagine = data[i].Numero;
			console.log(url_immagine);
			$("#elenco").append('<h2>' + data[i].Nome + '</h2>');
			$("#elenco").append('<img src="images/attrazioni/' + url_immagine + '.jpg" />');
			$("#elenco").append('<p>Luogo:</p>'+'<p id="luogo">' + data[i].Luogo + '</p>');
			$("#elenco").append('<p>Descrizione:</p>'+'<p id="descrizione">' + data[i].Descrizione + '</p>');
			$("#elenco").append('<p>Accessibilità:</p>'+'<p id="accessibilita">' + data[i].Accessibilita + '</p>');
			$("#elenco").append();
			
		
}
});
  
  });




});
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 44.109475, lng: 10.413546};
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 12, mapTypeId: google.maps.MapTypeId.HYBRID, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

