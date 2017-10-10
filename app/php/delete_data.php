<?php

    // Suppression des données des portails

    function delete_portals() {

        // Suppression des données des portails
        
        $result = delete("sw_portals");

        if($result == true) {
            echo "Suppression des données des portails réussie\n";
        }
        else {
            echo "Suppression des données des portails échouée\n";
        }

    }

    // Suppression des données des utilisateurs

    function delete_users() {
        
        // Suppression des données des utilisateurs
        
        $result = delete("sw_users");

        if($result) {
            echo "Suppression des données des utilisateurs réussie\n";
        }
        else {
            echo "Suppression des données des utilisateurs échouée\n";
        }

    }

    // Suppression des données des modificateurs/dimensions

    function delete_modifiers_dimensions() {
        
        // Suppression des données des modificateurs/dimensions
        
        $result = delete("sw_modifiers_dimensions");

        if($result) {
            echo "Suppression des données des modificateurs/dimensions réussie\n";
        }
        else {
            echo "Suppression des données des modificateurs/dimensions échouée\n";
        }

    }

    // Suppression des données des modificateurs

    function delete_modifiers() {
        
        // Suppression des données des modificateurs
        
        $result = delete("sw_modifiers");

        if($result) {
            echo "Suppression des données des modificateurs réussie\n";
        }
        else {
            echo "Suppression des données des modificateurs échouée\n";
        }

    }

    // Suppression des données des dimensions

    function delete_dimensions() {

        // Suppression des données des dimensions
        
        $result = delete("sw_dimensions");

        if($result) {
            echo "Suppression des données des dimensions réussie\n";
        }
        else {
            echo "Suppression des données des dimensions échouée\n";
        }

    }

    // Suppression des données des serveurs

    function delete_servers() {
        
        // Suppression des données des serveurs
        
        $result = delete("sw_servers");

        if($result) {
            echo "Suppression des données des serveurs réussie\n";
        }
        else {
            echo "Suppression des données des serveurs échouée\n";
        }

    }

    // Suppression de toutes les données

    function delete_all() {

        // DAO

        include_once("dao.php");

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