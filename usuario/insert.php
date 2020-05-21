<?php
    require '../conxn/conect.php';
    $consult = "insert into tipo values('','admin')";
    $result= mysqli_query($cnn,$consult);
    if ($result){
        echo "ingreso correcto";
    }else{
        echo "naranjas";
    }
?>