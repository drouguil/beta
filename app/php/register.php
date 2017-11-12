<?php

    // Génération du token de connexion

    function generateToken($login, $password) {
        
        define('PREFIX_SALT', 'zKt8');
        define('SUFFIX_SALT', 'Bg6y');

        $token = $login . ':' . $password;

        return hash('sha256',PREFIX_SALT.$token.SUFFIX_SALT);
    }

    // DAO

    include_once("dao.php");
    
    // Récupération des paramètres

    $params = get_params();

    // Vérification de l'utilisateur

    if(isset($params->user))
    {
        $user = $params->user;
        $user = json_decode(json_encode($user), true);
    
        // Vérification du pseudo

        if(isset($user["username"]) && !empty($user["username"]) && strlen($user["username"]) <= 30) {
            $username = $user["username"];
        }
        else {
            $error = "Erreur username";
        }

        // Vérification du nom d'utilisateur

        if(isset($user["login"]) && !empty($user["login"]) && strlen($user["login"]) <= 30) {
            $login = $user["login"];
        }
        else {
            $error = "Erreur login";
        }

        // Vérification du mot de passe

        if(isset($user["password"]) && !empty($user["password"]) && strlen($user["password"]) >= 6 && strlen($user["password"]) <= 30) {
            $hashed_password = md5($user["password"]);
        }
        else {
            $error = "Erreur password";
        }
        
        // Vérification de l'adresse mail

        if(isset($user["email"]) && !empty($user["email"])) {
            $email = $user["email"];
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
                $server_id = $server["id"];
            }
            else {
                $error = "Erreur serveur id";
            }

        }
        else {
            $error = "Erreur serveur";
        }

        // Si tous les champs sont valides on tente d'executer la requête d'inscription

        if(!isset($error))
        {
            $token = generateToken($login, $hashed_password);

            $ip = $_SERVER["REMOTE_ADDR"];

            $selected_fields = array(
                "username" => array("s", $username),
                "login" => array("s", $login),
                "password" => array("s", $hashed_password),
                "email" => array("s", $email),
                "server_id" => array("i", $server_id),
                "auth_token" => array("s", $token),
                "ip" => array("s", $ip)
            );

            $result = insert("sw_users", $selected_fields);
        
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
        $error = "Erreur user";
        $return = $error;
    }

    return_result($return);
?>