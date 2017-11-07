<?php

    // DAO

    include_once("dao.php");

    // Récupération des paramètres
    $user = get_connected_user();

    if(isset($user["id"]) && !empty($user["id"])) {

        $selected_fields = array("server_id");

        $conditions = array(
            "user_id" => array("i", $user["id"])
        );

        // Récupération des identifiants des serveurs
        
        $servers_ids = select("sw_servers_users", $selected_fields, $conditions);

        $servers = array();

        foreach($servers_ids as $server_id) {

            $selected_fields = array("id","name");

            $conditions = array(
                "id" => array("i", $server_id["server_id"])
            );

            $is_unique = true;

            $server = select("sw_servers", $selected_fields, $conditions, $is_unique);

            array_push($servers, $server);
        }

        return_result($servers);
    }
    else {
        return_result($user);
    }

?>