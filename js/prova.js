$(document).ready(function(){

$("#menutendina").on("change",function(){
var tipo=$("input[name='prodotti']:checked").val();
console.log(tipo);
 $.getJSON('api/prova.php?Tipologia=' + tipo, function (data){
		console.log(data);
		var url_immagine = "";
		
		$("#contenitore").empty();
		
		for(var i = 0; i < data.length; i++)
		{

			
			url_immagine = data[i].Numero;
			console.log(url_immagine);
			$("#contenitore").append('<h2>' + data[i].Nome + '</h2>');
			$("#contenitore").append('<img src="images/' + url_immagine + '.jpg" />');
			$("#contenitore").append('<p>Descrizione:</p>'+'<p id="descrizione">' + data[i].Descrizione + '</p>');
			$("#contenitore").append();
			
			if (data[i].Piatto_Tipico != "") {
				$("#contenitore").append('<p id="scritta">Piatto Tipico:</p>'+'<p id="piatto">' + data[i].Piatto_Tipico + '</p>');
}
}
});
  
  });
});


