<?php

    // DAO

    include_once("dao.php");

    // Récupération des paramètres

    $params = get_params();
    $user = get_connected_user();

    if(isset($user["id"]) && !empty($user["id"])) {
        if(isset($params->server_id))
        {
            $server_id = $params->server_id;
            $server_id = json_decode(json_encode($server_id), true);

            $selected_fields = array(
                "server_id" => array("i", $server_id),
                "user_id" => array("i", $user["id"])
            );
        
            // Récupération de l'utilisateur
        
        return_result(insert("sw_servers_users", $selected_fields));
        }
        else {
            $error = "Erreur identifiant";
            
            return_result($error);
        }
    }
    else {
        return_result($user);
    }

?>