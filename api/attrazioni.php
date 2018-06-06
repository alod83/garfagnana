<?php
include('config.php');
header('Content-Type: application/json');

$tipo=$_GET['Tipologia'];
if(isset($tipo)){

$sql = "SELECT Numero, Nome, Luogo, Accessibilita, Descrizione FROM attrazioni WHERE Tipologia ='$tipo'";

$risultato = mysqli_query($conn,$sql);
if (!$risultato) die("Errore query: ".mysqli_error($conn));

$return = array();
while($riga=mysqli_fetch_assoc($risultato))
{
	$riga['Numero'] = intval($riga['Numero']);
	$riga['Nome'] = strtoupper($riga['Nome']);
	$riga['Descrizione'] = utf8_encode($riga['Descrizione']);
	$riga['Luogo'] = utf8_encode($riga['Luogo']);
	//$riga['Fonte'] = utf8_encode($riga['Fonte']);
	//$riga['Latitudine'] = floatval($riga['Latitudine']);
	//$riga['Longitudine'] = floatval($riga['Longitudine']);
	$return[] = $riga;
}


echo json_encode($return);
mysqli_close($conn);
}else {
    echo json_encode("Nessun parametro.");
}
?>	