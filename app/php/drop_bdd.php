<?php

    // Suppression des portails

    function drop_portals() {
        
        // Execution de la requête et récupération de son résultat

        $result = drop('sw_portals');

        if($result) {
            echo "Suppression des portails ✔\n";
        }
        else {
            echo "Suppression des portails X\n";
        }
    }

    // Suppression des titres/utilisateurs

    function drop_titles_users() {
        
        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_titles_users');

        if($result) {
            echo "Suppression des titres/utilisateurs ✔\n";
        }
        else {
            echo "Suppression des titres/utilisateurs X\n";
        }
    }

    // Suppression des titres

    function drop_titles() {
        
        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_titles');

        if($result) {
            echo "Suppression des titres ✔\n";
        }
        else {
            echo "Suppression des titres X\n";
        }
    }

    // Suppression des ornaments/utilisateurs

    function drop_ornaments_users() {

        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_ornaments_users');

        if($result) {
            echo "Suppression des ornements/utilisateurs ✔\n";
        }
        else {
            echo "Suppression des ornements/utilisateurs X\n";
        }
    }

    // Suppression des ornements

    function drop_ornaments() {

        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_ornaments');

        if($result) {
            echo "Suppression des ornements ✔\n";
        }
        else {
            echo "Suppression des ornements X\n";
        }
    }

    // Suppression des succès/utilisateurs

    function drop_achievements_users() {

        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_achievements_users');

        if($result) {
            echo "Suppression des succès/utilisateurs ✔\n";
        }
        else {
            echo "Suppression des succès/utilisateurs X\n";
        }
    }

    // Suppression des succès

    function drop_achievements() {
    
        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_achievements');

        if($result) {
            echo "Suppression des succès ✔\n";
        }
        else {
            echo "Suppression des succès X\n";
        }
    }

    // Suppression des utilisateurs

    function drop_users() {

        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_users');

        if($result) {
            echo "Suppression des utilisateurs ✔\n";
        }
        else {
            echo "Suppression des utilisateurs X\n";
        }
    }
    
    // Suppression des serveurs/utilisateurs

    function drop_servers_users() {

        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_servers_users');

        if($result) {
            echo "Suppression des serveurs/utilisateurs ✔\n";
        }
        else {
            echo "Suppression des serveurs/utilisateurs X\n";
        }
    }

    // Suppression des droits des utilisateurs

    function drop_rights() {
        
        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_rights');

        if($result) {
            echo "Suppression des droits des utilisateurs ✔\n";
        }
        else {
            echo "Suppression des droits des utilisateurs X\n";
        }
    }

    // Suppression des modificateurs/dimensions

    function drop_modifiers_dimensions() {

        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_modifiers_dimensions');

        if($result) {
            echo "Suppression des modificateurs/dimensions ✔\n";
        }
        else {
            echo "Suppression des modificateurs/dimensions X\n";
        }
    }

    // Suppression des modificateurs

    function drop_modifiers() {
    
        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_modifiers');

        if($result) {
            echo "Suppression des modificateurs ✔\n";
        }
        else {
            echo "Suppression des modificateurs X\n";
        }
    }

    // Suppression des dimensions

    function drop_dimensions() {

        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_dimensions');

        if($result) {
            echo "Suppression des dimensions ✔\n";
        }
        else {
            echo "Suppression des dimensions X\n";
        }
    }

    // Suppression des serveurs

    function drop_servers() {

        // Execution de la requête et récupération de son résultat
    
        $result = drop('sw_servers');

        if($result) {
            echo "Suppression des serveurs ✔\n";
        }
        else {
            echo "Suppression des serveurs X\n";
        }
    }

    // Suppression de toutes les tables

    function drop_all() {

        // DAO

        include_once("dao.php");

        echo "\n\nDébut de la suppression de toutes les tables\n\n";

        // Suppression des portails

        drop_portals();

        // Suppression des titres/utilisateurs

        drop_titles_users();

        // Suppresion des titres

        drop_titles();

        // Suppression des ornements/utilisateurs

        drop_ornaments_users();

        // Suppression des ornements

        drop_ornaments();

        // Suppression des succès/autilisateurs

        drop_achievements_users();

        // Suppression des succès

        drop_achievements();
        
        // Suppression des serveurs/utilisateurs

        drop_servers_users();

        // Suppression des utilisateurs

        drop_users();

        // Suppression des droits des utilisateurs

        drop_rights();

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