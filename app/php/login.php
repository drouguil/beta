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

        // Vérification du nom d'utilisateur

        if(isset($user["login"]) && !empty($user["login"])) {
            $login = "'" . htmlspecialchars($user["login"]) . "'";
        }
        else {
            $error = "Error login";
        }

        // Vérification du mot de passe

        if(isset($user["password"]) && !empty($user["password"])) {
            $hashed_password = "'" . md5($user["password"]) . "'";
        }
        else {
            $error = "Error password";
        }

        // Si tous les champs sont valides on tente d'executer la requête d'inscription

        if(!isset($error))
        {
            $ip = "'" . $_SERVER["REMOTE_ADDR"] . "'";

            $request = "SELECT `auth_token` from `sw_users` 
            WHERE (`login` = " . $login . " OR `email` = " . $login . ") AND `password` = " . $hashed_password;
        
            $result = $conn->query($request);
    
            // Fermeture de la connexion à la base de données

            $conn->close();
        
            $result = mysqli_fetch_assoc($result);
            
            if($result) {
                $return = $result;
            }
            else {
                $return = "ko";
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