$(document).ready(function(){
	
	$.getJSON('api/tradizioni.php', function(data){
		console.log(data);
		
		for(var i = 0; i < data.length; i++)
		{
			
			
			$("#contenitore").append('<h2>' + data[i].Nome + '</h2>');
			$("#contenitore").append('Descrizione:'+'<p id="descrizione">' + data[i].Descrizione + '</p>');
			
			
		}
	
	});


});