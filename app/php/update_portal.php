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
    
                $modifierId = $portal["modifierId"];
                $posX = $portal["posX"];
                $posY = $portal["posY"];
                $numberUses = $portal["numberUses"];
                $isUnknow = $portal["isUnknow"];
                $id = $portal["id"];
    
                $selected_fields = array(
                    "modifier_id" => array("i", $modifierId),
                    "pos_x" => array("i", $posX),
                    "pos_y" => array("i", $posY),
                    "number_uses" => array("i", $numberUses),
                    "is_unknow" => array("i", $isUnknow)
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