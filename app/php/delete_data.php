<?php

    // Suppression des données des portails

    function delete_portals() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des données des portails
    
        $request = "DELETE FROM `sw_portals`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des données des portails réussie\n";
        }
        else {
            echo "Suppression des données des portails échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression des données des utilisateurs

    function delete_users() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des données des utilisateurs
    
        $request = "DELETE FROM `sw_users`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des données des utilisateurs réussie\n";
        }
        else {
            echo "Suppression des données des utilisateurs échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression des données des modificateurs/dimensions

    function delete_modifiers_dimensions() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des données des modificateurs/dimensions
    
        $request = "DELETE FROM `sw_modifiers_dimensions`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des données des modificateurs/dimensions réussie\n";
        }
        else {
            echo "Suppression des données des modificateurs/dimensions échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression des données des modificateurs

    function delete_modifiers() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des données des modificateurs
    
        $request = "DELETE FROM `sw_modifiers`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des données des modificateurs réussie\n";
        }
        else {
            echo "Suppression des données des modificateurs échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression des données des dimensions

    function delete_dimensions() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des données des dimensions
    
        $request = "DELETE FROM `sw_dimensions`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des données des dimensions réussie\n";
        }
        else {
            echo "Suppression des données des dimensions échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression des données des serveurs

    function delete_servers() {

        // Connexion à la base de données

        include("connect.php");
        
        // Requête de suppression des données des serveurs
    
        $request = "DELETE FROM `sw_servers`";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Suppression des données des serveurs réussie\n";
        }
        else {
            echo "Suppression des données des serveurs échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Suppression de toutes les données

    function delete_all() {

        echo "\n\nDébut de la suppression de toutes les données\n\n";

        // Suppression des données des portails

        delete_portals();

        // Suppression des données des utilisateurs

        delete_users();

        // Suppression des données des modificateurs/dimensions

        delete_modifiers_dimensions();

        // Suppression des données des modificateurs

        delete_modifiers();

        // Suppression des données des dimensions

        delete_dimensions();

        // Suppression des données des serveurs

        delete_servers();

        echo "\nFin de la suppression de toutes les données";

    }

    delete_all();

?>