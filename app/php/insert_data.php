<?php

    // Insertion des serveurs

    function insert_servers() {

        // Connexion à la base de données

        include("connect.php");

        $request = "ALTER TABLE `sw_servers` AUTO_INCREMENT = 1";

        $result = $conn->query($request);

        if($result)
        {
            // Liste des serveurs

            $servers = array(
                "Agride",
                "Amayiro",
                "Atcham",
                "Beta 1",
                "Beta 2",
                "Brumaire",
                "Crocabulia",
                "Djaul",
                "Echo",
                "Goultard",
                "Hecate",
                "Hel Munster",
                "Helsephine",
                "Lily",
                "Many",
                "Menalt",
                "Meriana",
                "Mylaise",
                "Ombre",
                "Oto Mustam",
                "Otomai",
                "Pandore",
                "Raval",
                "Rubilax",
                "Rykke Errel",
                "Silouate",
                "Silvosse",
                "Ulette",
                "Vil Smisse"
            );

            // Création de la requête
            
            $request = "INSERT INTO `sw_servers` (`name`) VALUES ";

            $count = 0;

            // Parcours de la liste des serveurs

            foreach ($servers as $server) {
                
                $count++;
                
                $request .= "('" . $server . "')";
                
                if($count < sizeof($servers)) {
                    $request .= ",";
                }
            }

            $request .= ";";

            // Execution de la requête et récupération de son résultat

            $result = $conn->query($request);

            if($result) {
                echo "Insertion des serveurs réussie\n";
            }
            else {
                echo "Insertion des serveurs échouée\n";
            }
        }
        else {
            echo "Insertion des serveurs échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Insertion des dimensions

    function insert_dimensions() {

        // Connexion à la base de données

        include("connect.php");

        $request = "ALTER TABLE `sw_dimensions` AUTO_INCREMENT = 1";
        
        $result = $conn->query($request);

        if($result) {

            // Liste des dimensions

            $dimensions = array(
                "Ecaflipus",
                "Enurado",
                "Srambad",
                "Xelorium");

            // Création de la requête
            
            $request = "INSERT INTO `sw_dimensions` (`name`) VALUES ";
            
            $count = 0;

            // Parcours de la liste des dimensions

            foreach ($dimensions as $dimension) {

                $count++;

                $request .= "('" . $dimension . "')";

                if($count < sizeof($dimensions)) {
                    $request .= ",";
                }
            }

            $request .= ";";

            // Execution de la requête et récupération de son résultat

            $result = $conn->query($request);

            if($result) {
                echo "Insertion des dimensions réussie\n";
            }
            else {
                echo "Insertion des dimensions échouée\n";
            }


        }
        else {
            echo "Insertion des dimensions échouée\n";
        }
        
        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Insertion des modificateurs

    function insert_modifiers() {
        
        // Connexion à la base de données

        include("connect.php");

        $request = "ALTER TABLE `sw_modifiers` AUTO_INCREMENT = 1";
        
        $result = $conn->query($request);

        if($result) {

            // Liste des modificateurs

            $modifiers = array(
                "Explosive disappearance",
                "Cyclic power",
                "Invigorating solitude",
                "Long range liaison",
                "Stunning summons",

                //Ecaflipus

                "Critical regeneration",
                "Elementary roulette",
                "Bonus cell",
                "Priority target",
                "Correct distance",

                //Enutrosor
                
                "Hurtful hindrances",
                "Incapacitating movement",
                "Solidarity",
                "Measured distance",
                "Invigorating pushes",

                //Srambad
                
                "Low blows",
                "Berserker",
                "Dangerous game",
                "Larceny",
                "Evasion",
            
                //Xelorium
                "Looking for action",
                "Leap gobball",
                "Go back",
                "Fettered actions",
                "Mummifying solitude"
            );

            // Création de la requête
            
            $request = "INSERT INTO `sw_modifiers` (`name`) VALUES ";
            
            $count = 0;

            // Parcours de la liste des modificateurs

            foreach ($modifiers as $modifier) {

                $count++;

                $request .= "('" . $modifier . "')";

                if($count < sizeof($modifiers)) {
                    $request .= ",";
                }
            }

            $request .= ";";

            // Execution de la requête et récupération de son résultat

            $result = $conn->query($request);

            if($result) {
                echo "Insertion des modificateurs réussie\n";
            }
            else {
                echo "Insertion des modificateurs échouée\n";
            }
        }
        else {
            echo "Insertion des modificateurs échouée\n";
        }
        
        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Insertion des modificateurs/dimensions

    function insert_modifiers_dimensions() {
        
        // Connexion à la base de données

        include("connect.php");

        $request = "ALTER TABLE `sw_modifiers_dimensions` AUTO_INCREMENT = 1";
        
        $result = $conn->query($request);

        if($result) {
    
            // Requête de sélection de toutes les dimenions
    
            $request = "SELECT `id` FROM `sw_dimensions`";
            
            // Execution de la requête et récupération de son résultat
    
            $result = $conn->query($request);
        
            // Conversion du résultat en tableau
        
            $dimensions = mysqli_fetch_all($result);
    
            // Tableau des modificateurs par dimension

            $modifiers_dimensions = array(

            // Ecaflipus

            array(
                "Explosive disappearance",
                "Critical regeneration",
                "Cyclic power",
                "Elementary roulette",
                "Invigorating pushes",
                "Bonus cell",
                "Long range liaison",
                "Priority target",
                "Stunning summons",
                "Correct distance"),

            // Enutrosor

            array(
                "Explosive disappearance",
                "Invigorating pushes",
                "Hurtful hindrances",
                "Long range liaison",
                "Incapacitating movement",
                "Stunning summons",
                "Invigorating solitude",
                "Cyclic power",
                "Solidarity",
                "Measured distance"),

            // Srambad

            array(
                "Explosive disappearance",
                "Dangerous game",
                "Invigorating pushes",
                "Larceny",
                "Long range liaison",
                "Evasion",
                "Cyclic power",
                "Low blows",
                "Stunning summons",
                "Berserker"),

            // Xelorium

            array(
                "Explosive disappearance",
                "Go back",
                "Long range liaison",
                "Fettered actions",
                "Invigorating pushes",
                "Mummifying solitude",
                "Stunning summons",
                "Looking for action",
                "Cyclic power",
                "Leap gobball")

            );

            // Création de la requête
            
            $request = "INSERT INTO `sw_modifiers_dimensions` (`dimension_id`, `modifier_id`, `order`) VALUES ";
    
            $dimension_count = 0;
            
            foreach ($dimensions as $dimension) {

                $dimension_count++;

                $dimension[0];

                $modifiers_names = $modifiers_dimensions[($dimension[0]-1)];

                $modifier_count = 0;
                
                foreach($modifiers_names as $modifier_name) {

                    $modifier_count++;

                    $get_modifier_id = "SELECT `id` FROM `sw_modifiers` WHERE `name` = '" . $modifier_name . "'";

                    // Execution de la requête et récupération de son résultat
    
                    $result = $conn->query($get_modifier_id);

                    // Conversion du résultat
        
                    $modifier = mysqli_fetch_row($result);

                    $request .= "(" . $dimension[0] . "," . $modifier[0] . "," . $modifier_count . ")";

                    if($modifier_count < sizeof($modifiers_names)) {
                        $request .= ",";
                    }

                }

                if($dimension_count < sizeof($dimensions)) {
                    $request .= ",";
                }

            }
    
            $request .= ";";
    
            // Execution de la requête et récupération de son résultat
    
            $result = $conn->query($request);
    
            if($result) {
                echo "Insertion des modificateurs/dimensions réussie\n";
            }
            else {
                echo "Insertion des modificateurs/dimensions échouée\n";
            }
        }
        else {
            echo "Insertion des modificateurs/dimensions échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }  

    // Insertion des utilisateurs

    function insert_users() {
        
        // Connexion à la base de données

        include("connect.php");

        $request = "ALTER TABLE `sw_users` AUTO_INCREMENT = 1";
        
        $result = $conn->query($request);

        if($result) {

            // Création de la requête
            
            $request = "INSERT INTO `sw_users` (`username`,`login`,`password`,`server_id`,`ip`) 
            VALUES ('Miysis', 'Miysis', '" . md5('Miysis') . "', 1, '" . $_SERVER["REMOTE_ADDR"] . "');";

            // Execution de la requête et récupération de son résultat

            $result = $conn->query($request);

            if($result) {
                echo "Insertion des utilisateurs réussie\n";
            }
            else {
                echo "Insertion des utilisateurs échouée\n";
            }

        }
        else {
            echo "Insertion des utilisateurs échouée\n";
        }
        
        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Insertion des portails

    function insert_portals() {

        // Connexion à la base de données

        include("connect.php");

        $request = "ALTER TABLE `sw_portals` AUTO_INCREMENT = 1";
        
        $result = $conn->query($request);

        if($result) {

            // Requête de sélection de tous les serveurs

            $request = "SELECT `id` FROM `sw_servers`";
            
            // Execution de la requête et récupération de son résultat
    
            $result = $conn->query($request);
        
            // Conversion du résultat en tableau
        
            $servers = mysqli_fetch_all($result);
    
            // Requête de sélection de toutes les dimenions
    
            $request = "SELECT `id` FROM `sw_dimensions`";
            
            // Execution de la requête et récupération de son résultat
    
            $result = $conn->query($request);
        
            // Conversion du résultat en tableau
        
            $dimensions = mysqli_fetch_all($result);
    
            // Création de la requête
            
            $request = "INSERT INTO `sw_portals` (`dimension_id`, `server_id`) VALUES ";
    
            $server_count = 0;
    
            // Parcours de la liste des serveurs
    
            foreach ($servers as $server) {
    
                $server_count++;
    
                $dimension_count = 0; 
    
                foreach ($dimensions as $dimension) {
    
                    $dimension_count++;
    
                    $request .= "(" . $dimension[0] . "," . $server[0] . ")";
    
                    if($dimension_count < sizeof($dimensions)) {
                        $request .= ",";
                    }
    
                }
    
                if($server_count < sizeof($servers)) {
                    $request .= ",";
                }
                
            }
    
            $request .= ";";
    
            // Execution de la requête et récupération de son résultat
    
            $result = $conn->query($request);
    
            if($result) {
                echo "Insertion des portails réussie\n";
            }
            else {
                echo "Insertion des portails échouée\n";
            }
        }
        else {
            echo "Insertion des portails échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Insertion de toutes les données

    function insert_all() {
        
        echo "\n\nDébut de l'insertion des données\n\n";

        // Insertion des serveurs

        insert_servers();
        
        // Insertion des dimensions

        insert_dimensions();

        // Insertion des modificateurs

        insert_modifiers();

        // Insertion des modificateurs/dimensions

        insert_modifiers_dimensions();

        // Insertion des utilisateurs

        insert_users();
    
        // Insertion des portails

        insert_portals();

        echo "\nFin de la suppression de toutes les données";

    }

    insert_all();

?>