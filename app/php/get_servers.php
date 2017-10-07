<?php

    // Connexion à la base de données

    include("connect.php");

    // Requête de sélection de tous les serveurs

    $request = "SELECT * FROM `sw_servers`";

    // Execution de la requête et récupération de son résultat

    $result = $conn->query($request);

    // Conversion du résultat en tableau

    $servers = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
    // Encodage en json du résultat

    $return = json_encode($servers);

    // Fermeture de la connexion à la base de données

    $conn->close();

    // On renvoie la liste des serveurs

    echo($return);

?>