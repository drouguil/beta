<?php

    // Connexion à la base de données

    include("connect.php");

    // Récupération des arguments

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    // Vérification de l'identifiant du serveur

    if(isset($request->server_id))
    {
        $server_id = $request->server_id;
        $server_id = json_decode(json_encode($server_id), true);

        $server_id = htmlspecialchars($server_id);

        // Requête de sélection de tous les portails

        $request = "SELECT * FROM `sw_portals` WHERE `server_id` = " . $server_id;
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);
    
        // Conversion du résultat en tableau
    
        $return = mysqli_fetch_all($result);
    
        // Fermeture de la connexion à la base de données
    
        $conn->close();
    }
    else {
        $error = "Error server id";
        $return = $error;
    }
    
    // Encodage en json du résultat

    $return = json_encode($return);

    // On renvoie la liste des portails

    echo($return);

?>