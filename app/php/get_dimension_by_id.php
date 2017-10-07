<?php

    // Connexion à la base de données

    include("connect.php");

    // Récupération des arguments

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    // Vérification de l'identifiant 

    if(isset($request->id))
    {
        $id = $request->id;
        $id = json_decode(json_encode($id), true);

        $id = htmlspecialchars($id);

        // Requête de sélection de la dimension

        $request = "SELECT * FROM `sw_dimensions` WHERE `id` = " . $id;
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);
    
        // Conversion du résultat
    
        $return = mysqli_fetch_assoc($result);
    
        // Fermeture de la connexion à la base de données
    
        $conn->close();
    }
    else {
        $error = "Error id";
        $return = $error;
    }
    
    // Encodage en json du résultat

    $return = json_encode($return);

    // On renvoie la dimension

    echo($return);

?>