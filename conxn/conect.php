<?php
    $server= "localhost";
    $us="root";
    $pwd="";
    $bd="libcoquito";
    $cnn=mysqli_connect($server,$us,$pwd,$bd);
    if($cnn){
        echo "Se conecto";
    }else{
        echo"error";
    }
?>