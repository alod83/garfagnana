$(document).ready(function(){

$("#menutendina").on("change",function(){
var tipo=$("#cerca").val();
console.log(tipo);
 $.getJSON('api/prodotti_tipici.php?Tipologia=' + tipo, function (data){
		console.log(data);
		var url_immagine = "";
		
		$("#contenitore").empty();
		
		for(var i = 0; i < data.length; i++)
		{

			url_immagine = data[i].Nome;
			
			console.log(url_immagine);
			$("#contenitore").append('<h2>' + data[i].Nome + '</h2>');
			$("#contenitore").append('<img src="images/prodotti/' + url_immagine + '.jpg" />');
			$("#contenitore").append('<p>Descrizione:</p>'+'<p id="descrizione">' + data[i].Descrizione + '</p>');
			$("#contenitore").append();
			
			if (data[i].Piatto_Tipico != "") {
				$("#contenitore").append('<p id="scritta">Piatto Tipico:</p>'+'<p id="piatto">' + data[i].Piatto_Tipico + '</p>');
}
}
});
  
  });
});



 