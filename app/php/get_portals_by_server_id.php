<?php

    // Connexion à la base de données

    include("connect.php");

    // Récupération des arguments

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    // Vérification de l'identifiant du serveur

    if(isset($request->server_id))
    {
        $server_id = $request->server_id;
        $server_id = json_decode(json_encode($server_id), true);

        $server_id = htmlspecialchars($server_id);

        // Requête de sélection de tous les portails

        $request = "SELECT * FROM `sw_portals` WHERE `server_id` = ?";
    
        $stmt = $conn->prepare($request);
        
        if($stmt) {

            $stmt->bind_param('i', $server_id);

            $stmt->execute();

            $result = $stmt->get_result();

            $array = array();

            // Conversion du résultat

            while ($row = $result->fetch_assoc()) {
                
                array_push($array, $row);
        
            }

            $result = $array;

            $stmt->close();
        }
        else {
            $result = "Error request";
        }

        $return = $result;
        
    }
    else {
        $error = "Error server id";
        $return = $error;
    }
    
    // Encodage en json du résultat

    $return = json_encode($return);

    // Fermeture de la connexion à la base de données
    
    $conn->close();

    // On renvoie la liste des portails

    echo($return);

?>