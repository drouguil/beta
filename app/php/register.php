<?php

    // Connexion à la base de données

    include("connect.php");

    // Récupération des arguments

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    // Vérification de l'utilisateur

    if(isset($request->user))
    {
        $user = $request->user;
        $user = json_decode(json_encode($user), true);
    
        // Vérification du pseudo

        if(isset($user["username"]) && !empty($user["username"]) && strlen($user["username"]) <= 30) {
            $username = "'" . htmlspecialchars($user["username"]) . "'";
        }
        else {
            $error = "Error username";
        }

        // Vérification du nom d'utilisateur

        if(isset($user["login"]) && !empty($user["login"]) && strlen($user["login"]) <= 30) {
            $login = "'" . htmlspecialchars($user["login"]) . "'";
        }
        else {
            $error = "Error login";
        }

        // Vérification du mot de passe

        if(isset($user["password"]) && !empty($user["password"]) && strlen($user["password"]) >= 6 && strlen($user["password"]) <= 30) {
            $hashed_password = "'" . md5($user["password"]) . "'";
        }
        else {
            $error = "Error password";
        }
        
        // Vérification de l'adresse mail

        if(isset($user["email"]) && !empty($user["email"])) {
            $email = "'" . htmlspecialchars($user["email"]) . "'";
        }
        else
        {
            $email = "NULL";
        }

        // Vérification du serveur

        if(isset($user["server"]) && !empty($user["server"])) {
            $server = json_decode($user["server"]);
            $server = json_decode(json_encode($server), true);
            if(isset($server["id"]) && !empty($server["id"])) {
                $server_id = htmlspecialchars($server["id"]);
            }
            else {
                $error = "Error serveur id";
            }
        }
        else {
            $error = "Error serveur";
        }

        // Si tous les champs sont valides on tente d'executer la requête d'inscription

        if(!isset($error))
        {
            $ip = "'" . $_SERVER["REMOTE_ADDR"] . "'";

            $request = "INSERT INTO `sw_users` (`username`, `login`, `password`, `email`, `server_id`, `ip`)
            VALUES ("
            . $username . ", "
            . $login . ", "
            . $hashed_password . ", "
            . $email . ", "
            . $server_id . ", "
            . $ip . ");";
        
            $result = $conn->query($request);
    
            // Fermeture de la connexion à la base de données

            $conn->close();
        
            if(!$result) {
                $return = $request;
            }
            else {
                $return = "ok";
            }
        }
        else {
            $return = $error;
        }
    }
    else {
        $error = "Error user";
        $return = $error;
    }

    $return = json_encode($return);

    echo $return;
?>