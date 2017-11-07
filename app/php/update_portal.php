<?php

    // Connexion à la base de données

    include("dao.php");

    // Récupération des paramètres

    $params = get_params();
    $user = get_connected_user_right();

    if(isset($user["right_name"]) && !empty($user["right_name"])) {
        // Vérification de l'identifiant du portail

        if($user["right_name"] != "BANISHED") {
            if(isset($params->portal))
            {
                $portal = $params->portal;
                $portal = json_decode(json_encode($portal), true);
    
                $modifier_id = $portal["modifierId"];
                $pos_x = $portal["posX"];
                $pos_y = $portal["posY"];
                $number_uses = $portal["numberUses"];
                $is_unknow = $portal["isUnknow"];
                $id = $portal["id"];
    
                $selected_fields = array(
                    "modifier_id" => array("i", $modifier_id),
                    "pos_x" => array("i", $pos_x),
                    "pos_y" => array("i", $pos_y),
                    "number_uses" => array("i", $number_uses),
                    "is_unknow" => array("i", $is_unknow)
                );
    
                $conditions = array("id" => array("i", $id));
    
                return_result(update("sw_portals", $selected_fields, $conditions));
            }
            else {
                $error = "Identifiant du portail manquant";
                
                return_result($error);
            }
        }
        else {

            $error = "BANISHED";

            return_result($error);
        }
    }
    else {
        return_result($user);
    }
?>