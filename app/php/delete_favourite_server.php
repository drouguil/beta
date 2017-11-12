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

            $conditions = array(
                "server_id" => array("i", $server_id),
                "user_id" => array("i", $user["id"])
            );
        
            // Récupération de l'utilisateur
        
            return_result(delete("sw_servers_users", $conditions));
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