$(document).ready(function(){
	
	$.getJSON('api/prodotti_tipici.php', function(data){
		console.log(data);
		var url_immagine = "";
		for(var i = 0; i < data.length; i++)
		{
			
			url_immagine = data[i].Numero;
			console.log(url_immagine);
			$("#prodotti").append('<h2>' + data[i].Nome + '</h2>');
			$("#prodotti").append('<img src="images/' + url_immagine + '.jpg" />');
			$("#prodotti").append('<p>' + data[i].Descrizione + '</p>');
			
		}
	
	});


});