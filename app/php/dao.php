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

    // Requête update

    function update($table_name, $selected_fields, $conditions = false) {
        if(isset($table_name) && !empty($table_name)) {
            if(isset($selected_fields) && !empty($selected_fields) && count($selected_fields) > 0) {
                // Connexion à la base de données

                include("connect.php");
            
                $request = "UPDATE `" . $table_name . "` SET ";
                $count = 0;
                foreach($selected_fields as $key => $value) {
                    $count++;
                    $request .= "`" . $key . "` = ?";
                    if($count < count($selected_fields)) {
                        $request .= ",";
                    }
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

                    $params = array();
                    $params_type = "";

                    foreach ($selected_fields as $key => $value){
                        $params_type .= $value[0];
                    }

                    if($conditions) {
                        if(count($conditions) > 0) {
                            foreach ($conditions as $key => $value){
                                $params_type .= $value[0];
                            }
                        }
                    }

                    array_push($params, $params_type);

                    foreach ($selected_fields as $key => $value){
                        array_push($params, $value[1]);
                    }

                    if($conditions) {
                        if(count($conditions) > 0) {
                            foreach ($conditions as $key => $value){
                                array_push($params, $value[1]);
                            }
                        }
                    }

                    call_user_func_array(array($stmt, 'bind_param'), ref_values($params));
                    
                    $result = $stmt->execute();

                    $return = $stmt->affected_rows;
    
                    if(!$result) {
                        $return = "Modification non effectuée suite à un problème divers (contraintes de clefs, ...)";
                    }
                    
                    $stmt->close();
                }
                else {
                    $return = "Erreur requête";
                }
            
                // Fermeture de la connexion à la base de données
            
                $conn->close();
            
                // On renvoie la liste des données de la table
            
                return $return;
            }
            else {
                return "Champs sélectionnés manquants";
            }
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

                $result = $stmt->execute();

                $return = $stmt->affected_rows;

                if(!$result) {
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

    // Requête drop

    function drop($table_name) {
        if(isset($table_name) && !empty($table_name)) {

            // Connexion à la base de données

            include("connect.php");

            $request = "DROP TABLE `" . $table_name . "`";

            $stmt = $conn->prepare($request);

            if($stmt) {

                $result = $stmt->execute();

                if(!$result) {
                    $return = "Suppression non effectuée suite à un problème divers (contraintes de clefs, ...)";
                }
                
                $stmt->close();
            }
            else {
                $return = "Erreur requête";
            }

            // Fermeture de la connexion à la base de données

            $conn->close();

            return $result;
        }
        else {
            return "Nom de table manquant";
        }
    }

    // Requête insert

    function insert($table_name, $selected_fields = false) {
        if(isset($table_name) && !empty($table_name)) {
            // Connexion à la base de données

            include("connect.php");

            if(!$selected_fields) {

                // Requête d'insertion
    
                $request = "INSERT INTO  `" . $table_name . "` () VALUES ()";
            }
            else {
                $request = "INSERT INTO  `" . $table_name . "` (";

                if(count($selected_fields) > 0) {
                    $count = 0;
                    foreach ($selected_fields as $key => $value){
                        $count++;
                        $request .= "`" . $key . "`";
                        if($count < count($selected_fields)){
                            $request .= ",";
                        }
                    }
                }

                $request .= ") VALUES (";

                if(count($selected_fields) > 0) {
                    for($i = 0 ; $i < count($selected_fields) ; $i++) {
                        $request .= "?";
                        if($i < count($selected_fields)-1) {
                            $request .= ",";
                        }
                    }                    
                }

                $request .= ")";
            }
            
            $stmt = $conn->prepare($request);
            
            if($stmt) {

                if($selected_fields) {
                    $params = array();
                    $params_type = "";
    
                    foreach ($selected_fields as $key => $value){
                        $params_type .= $value[0];
                    }
    
                    array_push($params, $params_type);
    
                    foreach ($selected_fields as $key => $value){
                        array_push($params, $value[1]);
                    }
    
                    call_user_func_array(array($stmt, 'bind_param'), ref_values($params));
                }
                
                $result = $stmt->execute();
                
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

    // Récupération du droit de l'utilisateur

    function get_right() {
   
        $headers = apache_request_headers();

        if(isset($headers) && !empty($headers) && isset($headers["Authorization"]) && !empty($headers["Authorization"])) {

            $selected_fields = array("id","right_id");
            
            $conditions = array("auth_token" => array("s", $headers['Authorization']));
    
            $is_unique = true;
    
            $user = select('sw_users', $selected_fields, $conditions, $is_unique);

            if(isset($user["id"]) && !empty($user["id"]) && isset($user["right_id"]) && !empty($user["right_id"])) {

                $selected_fields = array("name");

                $conditions = array("id" => array("i", $user["right_id"]));

                $is_unique = true;

                $right = select('sw_rights', $selected_fields, $conditions, $is_unique);

                $right["user_id"] = $user["id"];

                return $right;
            }
            else {
                return "Autorisation refusée";
            }
        }
        else {
            return "Autorisation manquante";
        }
    }

    // Récupération du droit de l'utilisateur

    function get_connected_user() {
        
        $headers = apache_request_headers();

        if(isset($headers) && !empty($headers) && isset($headers["Authorization"]) && !empty($headers["Authorization"])) {

            $selected_fields = array("id","username","login","email","server_id");
            
            $conditions = array("auth_token" => array("s", $headers['Authorization']));
    
            $is_unique = true;
    
            return select('sw_users', $selected_fields, $conditions, $is_unique);

        }
        else {
            return "Autorisation manquante";
        }
    }

    // Récupération du droit de l'utilisateur

    function get_connected_user_right() {
        
        $headers = apache_request_headers();

        if(isset($headers) && !empty($headers) && isset($headers["Authorization"]) && !empty($headers["Authorization"])) {

            $selected_fields = array("id","right_id");
            
            $conditions = array("auth_token" => array("s", $headers['Authorization']));
    
            $is_unique = true;
    
            $user = select('sw_users', $selected_fields, $conditions, $is_unique);

            if(isset($user["id"]) && !empty($user["id"]) && isset($user["right_id"]) && !empty($user["right_id"])) {

                $selected_fields = array("name");

                $conditions = array("id" => array("i", $user["right_id"]));

                $is_unique = true;

                $right = select('sw_rights', $selected_fields, $conditions, $is_unique);

                $user["right_name"] = $right["name"];

                return $user;
            }
            else {
                return "Autorisation erronée";
            }
        }
        else {
            return "Autorisation manquante";
        }
    }

    // Envoi du résultat au format json à l'application angular

    function return_result($return) {
        echo(json_encode($return));
    }
?>