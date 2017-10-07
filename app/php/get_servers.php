<?php

    // Connexion à la base de données

    include("connect.php");

    // Requête de sélection de tous les serveurs

    $request = "SELECT * FROM `sw_servers`";

    $stmt = $conn->prepare($request);
    
    if($stmt) {

        $stmt->execute();

        $result = $stmt->get_result();

        $array = array();

        // Conversion du résultat

        while ($row = $result->fetch_assoc()) {
            
            array_push($array, $row);
    
        }

        $result = $array;

        $stmt->close();
    }
    else {
        $result = "Error request";
    }

    $return = $result;
    
    // Encodage en json du résultat

    $return = json_encode($return);

    // Fermeture de la connexion à la base de données

    $conn->close();

    // On renvoie la liste des serveurs

    echo($return);

?>