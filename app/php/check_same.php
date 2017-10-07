<?php

    // Connexion à la base de données

    include("connect.php");

    // Récupération des arguments

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    // Initialisation de la valeur de retour à ok

    $return = "ok";

    // Vérification du pseudo

    if(isset($request->username)) {
        $field_to_check = "username";
        $var_to_check = $request->username;
    }

    // Vérification du nom d'utilisateur

    if(isset($request->login)) {
        $field_to_check = "login";
        $var_to_check = $request->login;
    }

    // Vérification de l'adresse mail

    if(isset($request->email)) {
        $field_to_check = "email";
        $var_to_check = $request->email;
    }

    // On vérifie si le champ est unique en base de données

    if(isset($request->username) || isset($request->login) || isset($request->email))
    {
        $var_to_check = "'" . htmlspecialchars($var_to_check) . "'";
    
        $request = "SELECT `id` FROM `sw_users` WHERE `" . $field_to_check . "` = " . $var_to_check;
    
        $result = $conn->query($request);

        // Fermeture de la connexion à la base de données

        $conn->close();
        
        $result = mysqli_fetch_assoc($result);

        if($result)
        {
            $return = $result;
        }
    }

    // Encodage en json de la valeur de retour

    $return = json_encode($return);

    // On renvoie la valeur de retour

    echo $return;
?>