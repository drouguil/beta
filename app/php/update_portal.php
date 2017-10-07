<?php

    // Connexion à la base de données

    include("connect.php");

    // Récupération des arguments

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    // Vérification de l'utilisateur

    if(isset($request->portal))
    {
        $portal = $request->portal;
        $portal = json_decode(json_encode($portal), true);

        // Si tous les champs sont valides on tente d'executer la requête d'inscription

        if(!isset($error))
        {

            $request = "UPDATE `sw_portals` SET `modifier_id` = ?, `pos_x` = ?, `pos_y` = ?, `number_uses` = ?, `is_unknow` = ? WHERE `id` = ?";

            $stmt = $conn->prepare($request);

            if($stmt) {

                $modifierId = $portal["modifierId"];
                $posX = $portal["posX"];
                $posY = $portal["posY"];
                $numberUses = $portal["numberUses"];
                $isUnknow = $portal["isUnknow"];
                $id = $portal["id"];

                $stmt->bind_param('iiiiii', $modifierId, $posX, $posY, $numberUses, $isUnknow, $id);
    
                $stmt->execute();
    
                $result = $stmt->affected_rows;
    
                $stmt->close();
            }
            else {
                $result = "Error request";
            }
    
            // Fermeture de la connexion à la base de données

            $conn->close();
            
            $return = $result;
        }
        else {
            $return = $error;
        }
    }
    else {
        $error = "Error portal";
        $return = $error;
    }

    $return = json_encode($return);

    echo $return;
?>