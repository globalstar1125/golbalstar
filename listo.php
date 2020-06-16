<?php
$destino="erickelduro1125@gmail.com";
$n = $_post[¨"n"];
$a = $_post[¨"a"];
$f=$_post[¨"f"];
$d=$_post[¨"d"];
$nu=$_post[¨"nu"];
$p=$_post[¨"p"];
$di=$_post[¨"di"];
$pl=$_post[¨"pl"];
$co=$_post[¨"co"];
$ca=$_post[¨"ca"];
$m=$_post[¨"m"];
$contenido="Nombre: ". $n ."\nApellido" . $a . "\nFecha de nacimiento" .$f ."\nDNI" .$d."\nNumero de telefono" . $nu . "\nPais" . $p . "\nDirrecion".$di . "\nPlataforma" . $pl . "\ncorreo electronico" .$co . "\nCapital" . $ca . "\nMensaje" .$m;
mail($destino,"contact-us",$contenido);
header("location:contact-us.html");


?>