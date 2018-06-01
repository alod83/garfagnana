$(document).ready(function(){

$("#menutendina").on("change",function(){
var tipo=$("#cerca").val();
 $.getJSON('api/prova.php', {tipo:tipo}, function (data){
 console.log(data);


		for(var i = 0; i < data.length; i++)
		{	$("#contenitore").append('<h2>' + data[i].Nome + '</h2>');
			$("#contenitore").append('Descrizione:'+'<p id="descrizione">' + data[i].Descrizione + '</p>');
		}
    });
  
  });
});

 








