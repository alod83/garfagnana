$(document).ready(function()  //serve per dichiarare gli eventi

$.getJSON('api/prodotti_tipici.php', function (data){
 
 var dati=[];
 var categorie=[];
 //Gestione array
 $.each(data, function(key,value){
  categorie.push(key);
  dati.push(parseFloat(value));
 });

	});