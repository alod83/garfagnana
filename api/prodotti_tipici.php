<?php
include('config.php');
header('Content-Type: application/json');

$sql = "SELECT * FROM prodotti_tipici";

$risultato = mysqli_query($conn,$sql);
if (!$risultato) die("Errore query: ".mysqli_error($conn));

$return = array();
while($riga=mysqli_fetch_assoc($risultato))
{
	$riga['Numero'] = intval($riga['Numero']);
	$riga['Nome'] = utf8_encode($riga['Nome']);
	$riga['Tipologia'] = utf8_encode($riga['Tipologia']);
	$riga['Piatto_Tipico'] = utf8_encode($riga['Piatto_Tipico']);
	$riga['Descrizione'] = utf8_encode($riga['Descrizione']);
	$riga['Fonte'] = utf8_encode($riga['Fonte']);
	
	$return[] = $riga;
}





echo json_encode($return);
mysqli_close($conn);
?>