<?php
include('config.php');
header('Content-Type: application/json');

$sql = "SELECT * FROM mapping";

$risultato = mysqli_query($conn,$sql);
if (!$risultato) die("Errore query: ".mysqli_error($conn));

$return = array();
while($riga=mysqli_fetch_assoc($risultato))
{
	$riga['Nome'] = utf8_encode($riga['Nome']);
	$riga['id_tourpedia'] = utf8_encode($riga['id_tourpedia']);
	$riga['id_locale'] = intval($riga['id_locale']);
	
	$return[] = $riga;
}

echo json_encode($return);
mysqli_close($conn);


?>	