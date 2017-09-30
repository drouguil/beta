<?php

    // Suppression des portails

    function drop_portals() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des portails
    
        $request = "DROP TABLE `sw_portals`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des portails réussie\n";
        }
        else {
            echo "Suppression des portails échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression des utilisateurs

    function drop_users() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des utilisateurs
    
        $request = "DROP TABLE `sw_users`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des utilisateurs réussie\n";
        }
        else {
            echo "Suppression des utilisateurs échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression des modificateurs/dimensions

    function drop_modifiers_dimensions() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des modificateurs/dimensions
    
        $request = "DROP TABLE `sw_modifiers_dimensions`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des modificateurs/dimensions réussie\n";
        }
        else {
            echo "Suppression des modificateurs/dimensions échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression des modificateurs

    function drop_modifiers() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des modificateurs
    
        $request = "DROP TABLE `sw_modifiers`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des modificateurs réussie\n";
        }
        else {
            echo "Suppression des modificateurs échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression des dimensions

    function drop_dimensions() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des dimensions
    
        $request = "DROP TABLE `sw_dimensions`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des dimensions réussie\n";
        }
        else {
            echo "Suppression des dimensions échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression des serveurs

    function drop_servers() {

        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des serveurs
    
        $request = "DROP TABLE `sw_servers`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des serveurs réussie\n";
        }
        else {
            echo "Suppression des serveurs échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression de toutes les tables

    function drop_all() {

        echo "\n\nDébut de la suppression de toutes les tables\n\n";

        // Suppression des portails

        drop_portals();

        // Suppression des utilisateurs

        drop_users();

        // Suppression des modificateurs/dimensions

        drop_modifiers_dimensions();

        // Suppression des modificateurs

        drop_modifiers();

        // Suppression des dimensions

        drop_dimensions();

        // Suppression des serveurs

        drop_servers();

        echo "\nFin de la suppression de toutes les tables";

    }

    drop_all();

?>