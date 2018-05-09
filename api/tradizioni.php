<?php
include('config.php');
header('Content-Type: application/json');

$sql = "SELECT * FROM tradizioni";

$risultato = mysqli_query($conn,$sql);
if (!$risultato) die("Errore query: ".mysqli_error($conn));

$return = array();
while($riga=mysqli_fetch_assoc($risultato))
{
	$riga['Numero'] = intval($riga['Numero']);
	$riga['Nome'] = utf8_encode($riga['Nome']);
	$riga['Tipologia'] = utf8_encode($riga['Tipologia']);
	$riga['Descrizione'] = utf8_encode($riga['Descrizione']);
	$riga['Latitudine'] = floatval($riga['Latitudine']);
	$riga['Longitudine'] = floatval($riga['Longitudine']);
	$riga['Fonte'] = utf8_encode($riga['Fonte']);
		
	$return[] = $riga;
}

echo json_encode($return);
mysqli_close($conn);


?>	