<?php

    // Connexion à la base de données

    include("connect.php");

    // Requête de sélection de tous les utilisateurs

    $request = "SELECT * FROM `sw_users`";

    // Execution de la requête et récupération de son résultat

    $result = $conn->query($request);

    // Conversion du résultat en tableau

    $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
    // Encodage en json du résultat

    $return = json_encode($users);

    // Fermeture de la connexion à la base de données

    $conn->close();

    // On renvoie la liste des utilisateurs

    echo($return);

?>