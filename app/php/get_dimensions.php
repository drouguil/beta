<?php

    // Connexion à la base de données

    include("connect.php");

    // Requête de sélection de toutes les dimensions

    $request = "SELECT * FROM `sw_dimensions`";

    // Execution de la requête et récupération de son résultat

    $result = $conn->query($request);

    // Conversion du résultat en tableau

    $dimensions = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
    // Encodage en json du résultat

    $return = json_encode($dimensions);

    // Fermeture de la connexion à la base de données

    $conn->close();

    // On renvoie la liste des dimensions

    echo($return);

?>