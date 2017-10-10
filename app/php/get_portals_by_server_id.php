<?php

    // DAO

    include("dao.php");
    
    $request = get_params();

    if(isset($request->server_id))
    {
        $server_id = $request->server_id;
        $server_id = json_decode(json_encode($server_id), true);

        $server_id = htmlspecialchars($server_id);

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