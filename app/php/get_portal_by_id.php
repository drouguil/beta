<?php

    // DAO

    include("dao.php");

    // Récupération des paramètres
    
    $params = get_params();

    if(isset($params->id))
    {
        $id = $params->id;
        $id = json_decode(json_encode($id), true);

        $selected_fields = false;
        
        $conditions = array("id" => array("i", $id));
    
        $is_unique = true;

        // Récupération du portail
    
        return_result(select("sw_portals", $selected_fields, $conditions, $is_unique));
    }
    else {
        $error = "Erreur identifiant";

        return_result($error);
    }
?>