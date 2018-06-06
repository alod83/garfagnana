$(document).ready(function(){

$("#menutendina").on("change",function(){
var tipo=$("input[name='escursioni']:checked").val();
console.log(tipo);
 $.getJSON('api/escursioni.php?Catena_Montuosa=' + tipo, function (data){
 console.log(data);

		$("#elenco").empty();
		for(var i = 0; i < data.length; i++)
		{	$("#elenco").append('<h2>' + data[i].Nome + '</h2>');
			$("#elenco").append('Altezza:'+'<p id="altezza">' + data[i].Altezza + '</p>');
			$("#elenco").append('Descrizione:'+'<p id="descrizione">' + data[i].Descrizione + '</p>');
			//$("#elenco").append('Difficoltà:'+'<p id="difficolta">' + data[i].Difficolta + '</p>');
			if (data[i].Difficolta != "") {
				$("#elenco").append('<p>Difficoltà:</p>'+'<p id="difficolta">' + data[i].Difficolta + '</p>');
}
		}
    });
  
  });
});



