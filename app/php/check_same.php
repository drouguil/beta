<?php

    // DAO

    include_once("dao.php");

    // Récupération des paramètres

    $params = get_params();
    
    // Initialisation de la valeur de retour à ok

    $return = "ok";

    // Vérification du pseudo

    if(isset($params->username)) {
        $field_to_check = "username";
        $var_to_check = $params->username;
    }

    // Vérification du nom d'utilisateur

    if(isset($params->login)) {
        $field_to_check = "login";
        $var_to_check = $params->login;
    }

    // Vérification de l'adresse mail

    if(isset($params->email)) {
        $field_to_check = "email";
        $var_to_check = $params->email;
    }

    // On vérifie si le champ est unique en base de données

    if(isset($params->username) || isset($params->login) || isset($params->email))
    {

        $selected_fields = array("id");

        $conditions = array($field_to_check => array("s",$var_to_check));

        $is_unique = true;

        $user = select("sw_users", $selected_fields, $conditions, $is_unique);

        if(isset($user["id"]))
        {
            $return = $user;
        }
    }

    return_result($return);
?>