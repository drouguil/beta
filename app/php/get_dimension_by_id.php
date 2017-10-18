<?php

    // DAO

    include("dao.php");

    // Récupération des paramètres

    $params = get_params();

    if(isset($params->id))
    {
        $id = $params->id;
        $id = json_decode(json_encode($id), true);

        $id = htmlspecialchars($id);

        $selected_fields = false;
        
        $conditions = array("id" => array("i", $id));
    
        $is_unique = true;
    
        // Récupération de la dimension
    
        return_result(select("sw_dimensions", $selected_fields, $conditions, $is_unique));
    }
    else {
        $error = "Erreur identifiant";

        return_result($error);
    }
?>