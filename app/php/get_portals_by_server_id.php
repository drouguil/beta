<?php

    // DAO

    include("dao.php");

    // Récupération des paramètres
    
    $params = get_params();

    if(isset($params->server_id))
    {
        $server_id = $params->server_id;
        $server_id = json_decode(json_encode($server_id), true);

        $selected_fields = false;
        
        $conditions = array("server_id" => array("i", $server_id));
    
        // Récupération des portails
    
        return_result(select("sw_portals", $selected_fields, $conditions));
    }
    else {
        $error = "Erreur identifiant";

        return_result($error);
    }
?>