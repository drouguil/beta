<?php

    // DAO

    include("dao.php");

    // Récupération des paramètres

    $params = get_params();

    // Vérification de l'identifiant de la dimension

    if(isset($params->dimension_id))
    {
        $dimension_id = $params->dimension_id;
        $dimension_id = json_decode(json_encode($dimension_id), true);

        $selected_fields = array("modifier_id");

        $conditions = array("dimension_id" => array("i", $dimension_id));

        // Récupération de tous les modificateurs des dimensions
    
        $modifiers_ids = select("sw_modifiers_dimensions", $selected_fields, $conditions);

        $modifiers = array();

        foreach($modifiers_ids as $modifier_id) {

            $selected_fields = false;

            $conditions = array("id" => array("i", $modifier_id["modifier_id"]));

            $is_unique = true;
        
            $modifier = select("sw_modifiers", $selected_fields, $conditions, $is_unique);

            array_push($modifiers, $modifier);
        }

        $return = $modifiers;

        return_result($return);

    }
    else {
        $error = "Erreur dimension id";
       
        return_result($error);

    }
    
    

?>