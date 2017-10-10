<?php

    function ref_values($arr){
        if (strnatcmp(phpversion(),'5.3') >= 0) //Reference is required for PHP 5.3+
        {
            $refs = array();
            foreach($arr as $key => $value)
                $refs[$key] = &$arr[$key];
            return $refs;
        }
        return $arr;
    }

    // Récupération des données envoyées en paramètres

    function get_params() {

        // Récupération des arguments

        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);

        return $request;
    }

    // Requête select

    function select($table_name, $selected_fields = false, $conditions = false, $is_unique = false) {
        if(isset($table_name) && !empty($table_name)) {
            // Connexion à la base de données

            include("connect.php");

            if(!$selected_fields) {

                // Requête de sélection de toute la table
    
                $request = "SELECT * FROM  `" . $table_name . "`";

            }
            else {
                $request = "SELECT ";
                if(count($selected_fields) > 0) {
                    $count = 0;
                    foreach($selected_fields as $selected_field) {
                        $count++;
                        $request .= "`" . $selected_field . "`";
                        if($count < count($selected_fields)) {
                            $request .= ",";
                        }
                    }
                }
                else {
                    $request .= "*";
                }
                $request .= " FROM `" . $table_name . "`";
            }

            if($conditions) {
                $request .= " WHERE ";
                if(count($conditions) > 0) {
                    $count = 0;
                    foreach ($conditions as $key => $value){
                        $count++;
                        $request .= "`" . $key . "` = ?";
                        if($count < count($conditions)) {
                            $request .= " AND ";
                        }
                    }
                }
            }
            
            $stmt = $conn->prepare($request);
            
            if($stmt) {

                if($conditions) {
                    if(count($conditions) > 0) {
                        $params = array();
                        $params_type = "";
                        foreach ($conditions as $key => $value){
                            $params_type .= $value[0];
                        }
                        array_push($params, $params_type);
                        foreach ($conditions as $key => $value){
                            array_push($params, $value[1]);
                        }
                        
                        call_user_func_array(array($stmt, 'bind_param'), ref_values($params));
                    }
                }
                
        
                $stmt->execute();
        
                $result = $stmt->get_result();

                if($result) {
                    if($is_unique) {
                        $result = $result->fetch_assoc();
                    }
                    else {
                        $array = array();
                        
                        // Conversion du résultat
                
                        while ($row = $result->fetch_assoc()) {
                            
                            array_push($array, $row);
                    
                        }
                
                        $result = $array;
                    }
                }
                else {
                    $result = "Erreur paramètres requête";
                }
                
                $stmt->close();
            }
            else {
                $result = "Erreur requête";
            }
        
            $return = $result;
        
            // Fermeture de la connexion à la base de données
        
            $conn->close();
        
            // On renvoie la liste des données de la table
        
            return $return;
        }
        else {
            return "Nom de table manquant";
        }
    }

    // Requête delete

    function delete($table_name, $conditions = false) {
        if(isset($table_name) && !empty($table_name)) {
            // Connexion à la base de données

            include("connect.php");

            $request = "DELETE FROM `" . $table_name . "`";

            if($conditions) {
                $request .= " WHERE ";
                if(count($conditions) > 0) {
                    $count = 0;
                    foreach ($conditions as $key => $value){
                        $count++;
                        $request .= "`" . $key . "` = ?";
                        if($count < count($conditions)) {
                            $request .= " AND ";
                        }
                    }
                }
            }
            
            $stmt = $conn->prepare($request);
            
            if($stmt) {

                if($conditions) {
                    if(count($conditions) > 0) {
                        $params = array();
                        $params_type = "";
                        foreach ($conditions as $key => $value){
                            $params_type .= $value[0];
                        }
                        array_push($params, $params_type);
                        foreach ($conditions as $key => $value){
                            array_push($params, $value[1]);
                        }
                        
                        call_user_func_array(array($stmt, 'bind_param'), ref_values($params));
                    }
                }

                $return = $stmt->execute();

                $stmt->get_result();

                if(!$return) {
                    $return = "Suppression non effectuée suite à un problème divers (contraintes de clefs, ...)";
                }
                
                $stmt->close();
            }
            else {
                $return = "Erreur requête";
            }

            // Fermeture de la connexion à la base de données
        
            $conn->close();

            return $return;
        }
        else {
            return "Nom de table manquant";
        }
    }

    // Envoi du résultat au format json à l'application angular

    function return_result($return) {
        echo(json_encode($return));
    }
?>