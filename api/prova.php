<?php
include('config.php');
header('Content-Type: application/json');

$tipo=$_GET['Tipologia'];

if(isset($tipo)){
$sql = "SELECT Nome, Descrizione, Piatto_Tipico, Numero FROM prodotti_tipici WHERE Tipologia ='$tipo'";
$risultato = mysqli_query($conn,$sql);

if (!$risultato) die("Errore query: ".mysqli_error($conn));

$return = array();
 

while($riga=mysqli_fetch_assoc($risultato))
{
	$riga['Numero'] = intval($riga['Numero']);
	$riga['Nome'] = utf8_encode($riga['Nome']);
	$riga['Descrizione'] = utf8_encode($riga['Descrizione']);
	$riga['Piatto_Tipico'] = utf8_encode($riga['Piatto_Tipico']);

	$return[] = $riga;
}



echo json_encode($return);
mysqli_close($conn);

}
else {
    echo json_encode("Nessun parametro.");
}
?>	