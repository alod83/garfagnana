<?php
include('config.php');
header('Content-Type: application/json');

$sql = "SELECT * FROM strutture";

$risultato = mysqli_query($conn,$sql);
if (!$risultato) die("Errore query: ".mysqli_error($conn));

$return = array();

while($riga=mysqli_fetch_assoc($risultato))
{
	$riga['Nome'] = ucwords(strtolower($riga['Nome']));
	$riga['Numero'] = intval($riga['Numero']);
	$riga['Latitudine'] = floatval($riga['Latitudine']);
	$riga['Longitudine'] = floatval($riga['Longitudine']);
		
	$return[] = $riga;
}

echo json_encode($return);
mysqli_close($conn);


?>	