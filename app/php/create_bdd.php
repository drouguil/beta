<?php

    // Création des serveurs

    function create_servers() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des serveurs
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_servers`
        (
            `id` TINYINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(30) NOT NULL UNIQUE
        ) ENGINE=InnoDB;";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des serveurs réussie\n";
        }
        else {
            echo "Création des serveurs échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Création des dimensions

    function create_dimensions() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des dimensions
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_dimensions`
        (
            `id` TINYINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(20) NOT NULL UNIQUE
        ) ENGINE=InnoDB;";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des dimensions réussie\n";
        }
        else {
            echo "Création des dimensions échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Création des modificateurs

    function create_modifiers() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des modificateurs
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_modifiers`
        (
            `id` TINYINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(30) NOT NULL UNIQUE
        ) ENGINE=InnoDB;";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des modificateurs réussie\n";
        }
        else {
            echo "Création des modificateurs échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Création des modificateurs/dimensions

    function create_modifiers_dimensions() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des modificateurs/dimensions
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_modifiers_dimensions`
        (
            `dimension_id` TINYINT UNSIGNED NOT NULL,
            `modifier_id` TINYINT UNSIGNED NOT NULL,
            `order` TINYINT UNSIGNED NOT NULL,
            PRIMARY KEY (`dimension_id`, `modifier_id`),
            FOREIGN KEY (`dimension_id`) REFERENCES `sw_dimensions`(`id`),
            FOREIGN KEY (`modifier_id`) REFERENCES `sw_modifiers`(`id`)
        ) ENGINE=InnoDB;";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des modificateurs/dimensions réussie\n";
        }
        else {
            echo "Création des modificateurs/dimensions échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Création des utilisateurs

    function create_users() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des utilisateurs
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_users`
        (
            `id` MEDIUMINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
            `username` VARCHAR(30) NOT NULL UNIQUE,
            `login` VARCHAR(30) NOT NULL UNIQUE,
            `password` VARCHAR(100) NOT NULL,
            `email` VARCHAR(255) UNIQUE,
            `server_id` TINYINT UNSIGNED NOT NULL,
            `ip` VARCHAR(15) NOT NULL,
            FOREIGN KEY (`server_id`) REFERENCES `sw_servers`(`id`)
        ) ENGINE=InnoDB;";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des utilisateurs réussie\n";
        }
        else {
            echo "Création des utilisateurs échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Création des portails

    function create_portals() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des portails
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_portals`
        (
            `id` TINYINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
            `dimension_id` TINYINT UNSIGNED NOT NULL,
            `server_id` TINYINT UNSIGNED NOT NULL,
            `user_id` MEDIUMINT UNSIGNED NOT NULL DEFAULT 1,
            `modifier_id` TINYINT UNSIGNED NOT NULL DEFAULT 1,
            `pos_x` TINYINT NOT NULL DEFAULT 0,
            `pos_y` TINYINT NOT NULL DEFAULT 0,
            `number_uses` TINYINT UNSIGNED NOT NULL DEFAULT 128,
            `is_unknow`TINYINT UNSIGNED NOT NULL DEFAULT 0,
            `number_confirms` TINYINT UNSIGNED NOT NULL DEFAULT 0,
            `number_reports` TINYINT UNSIGNED NOT NULL DEFAULT 0,
            FOREIGN KEY (`dimension_id`) REFERENCES `sw_dimensions`(`id`),
            FOREIGN KEY (`server_id`) REFERENCES `sw_servers`(`id`),
            FOREIGN KEY (`user_id`) REFERENCES `sw_users`(`id`),
            FOREIGN KEY (`modifier_id`) REFERENCES `sw_modifiers`(`id`),
            FOREIGN KEY (`dimension_id`, `modifier_id`) REFERENCES `sw_modifiers_dimensions`(`dimension_id`,`modifier_id`),
            UNIQUE (`dimension_id`,`server_id`)
        ) ENGINE=InnoDB;";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des portails réussie\n";
        }
        else {
            echo "Création des portails échouée\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }


    // Création de toutes les tables

    function create_all() {

        echo "\n\nDébut de la création de toutes les tables\n\n";

        // Création des serveurs

        create_servers();

        // Création des dimensions

        create_dimensions();

        // Création des modificateurs

        create_modifiers();

        // Création des modificateurs/dimensions

        create_modifiers_dimensions();

        // Création des utilisateurs

        create_users();

        // Création des portails

        create_portals();

        echo "\nFin de la création de toutes les tables";

    }

    create_all();

?>