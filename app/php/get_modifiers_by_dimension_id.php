<?php

    // Connexion à la base de données

    include("connect.php");

    // Récupération des arguments

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    // Vérification de l'identifiant de la dimension

    if(isset($request->dimension_id))
    {
        $dimension_id = $request->dimension_id;
        $dimension_id = json_decode(json_encode($dimension_id), true);

        $dimension_id = htmlspecialchars($dimension_id);

        // Requête de sélection de tous les modificateurs des dimensions

        $request = "SELECT `modifier_id` FROM `sw_modifiers_dimensions` WHERE `dimension_id` = " . $dimension_id . " ORDER BY `order` ASC";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);
    
        // Conversion du résultat en tableau
    
        $modifiers_ids = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $modifiers = array();

        foreach($modifiers_ids as $modifier_id) {
            
            $request = "SELECT * FROM `sw_modifiers` WHERE `id` = " . $modifier_id['modifier_id'];

            // Execution de la requête et récupération de son résultat
    
            $result = $conn->query($request);
        
            // Conversion du résultat en tableau
        
            $modifier = mysqli_fetch_assoc($result);

            array_push($modifiers, $modifier);
        }

        $return = $modifiers;
    
        // Fermeture de la connexion à la base de données
    
        $conn->close();
    }
    else {
        $error = "Error dimension id";
        $return = $error;
    }
    
    // Encodage en json du résultat

    $return = json_encode($return);

    // On renvoie la liste des modificateurs des dimensions

    echo($return);

?>