<?php
    $size = $_POST['size'];
    $max = $size * $size;
    $width= strlen((string)$max) + 1;
    for($i = 0; $i <= $size; $i++){
        $i_width = strlen((string)$i);
        for($j = 0; $j <= $width+1-$i_width; $j++){
            echo "&nbsp";
        }
        if($i != 0){
            echo $i;
        }
    }
    echo "<br>";
    for($i = 1; $i <= $size; $i++){
        for($j = 1; $j <= $size; $j++){
            if($j == 1){
                echo $i;
                $i_width = strlen((string)$i);
                for($q = 1; $q <= ($width-$i_width); $q++){
                    echo "&nbsp";
                }
            }
            $mult = $i * $j;
            $mult_width = strlen((string)$mult);
            for($q = 0; $q <= ($width+1-$mult_width); $q++){
                echo "&nbsp";
            }
            echo $mult;
        }
        echo "<br>";
    }
?>