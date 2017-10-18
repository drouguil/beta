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
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des serveurs ✔\n";
        }
        else {
            echo "Création des serveurs X\n";
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
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des dimensions ✔\n";
        }
        else {
            echo "Création des dimensions X\n";
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
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des modificateurs ✔\n";
        }
        else {
            echo "Création des modificateurs X\n";
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
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des modificateurs/dimensions ✔\n";
        }
        else {
            echo "Création des modificateurs/dimensions X\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Création des droits des utilisateurs

    function create_rights() {

        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des droits des utilisateurs
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_rights`
        (
            `id` TINYINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(20) NOT NULL UNIQUE
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des droits des utilisateurs ✔\n";
        }
        else {
            echo "Création des droits des utilisateurs X\n";
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
            `server_id` TINYINT UNSIGNED NOT NULL DEFAULT 1,
            `right_id` TINYINT UNSIGNED NOT NULL DEFAULT 1,
            `auth_token` VARCHAR(64) NOT NULL UNIQUE,
            `ip` VARCHAR(15) NOT NULL,
            FOREIGN KEY (`server_id`) REFERENCES `sw_servers`(`id`),
            FOREIGN KEY (`right_id`) REFERENCES `sw_rights`(`id`)
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des utilisateurs ✔\n";
        }
        else {
            echo "Création des utilisateurs X\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Création des succès

    function create_achievements() {
        
        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des succès
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_achievements`
        (
            `id` SMALLINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(50) NOT NULL UNIQUE
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des succès ✔\n";
        }
        else {
            echo "Création des succès X\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();
    }

    // Création des succès/utilisateurs

    function create_achievements_users() {

        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des succès/utilisateurs
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_achievements_users`
        (
            `user_id` MEDIUMINT UNSIGNED NOT NULL,
            `achievement_id` SMALLINT UNSIGNED NOT NULL,
            `is_unlock` TINYINT UNSIGNED NOT NULL DEFAULT 0,
            `is_new` TINYINT UNSIGNED NOT NULL DEFAULT 0,
            PRIMARY KEY (`user_id`, `achievement_id`),
            FOREIGN KEY (`user_id`) REFERENCES `sw_users`(`id`),
            FOREIGN KEY (`achievement_id`) REFERENCES `sw_achievements`(`id`)
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des succès/utilisateurs ✔\n";
        }
        else {
            echo "Création des succès/utilisateurs X\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();
    }

    // Création des ornements

    function create_ornaments() {

        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des ornements
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_ornaments`
        (
            `id` TINYINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
            `achievement_id` SMALLINT UNSIGNED NOT NULL,
            FOREIGN KEY (`achievement_id`) REFERENCES `sw_achievements`(`id`)
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des ornements ✔\n";
        }
        else {
            echo "Création des ornements X\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();

    }

    // Création des ornements/utilisateurs

    function create_ornaments_users() {

        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des ornements/utilisateurs
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_ornaments_users`
        (
            `user_id` MEDIUMINT UNSIGNED NOT NULL,
            `ornament_id` TINYINT UNSIGNED NOT NULL,
            `is_unlock` TINYINT UNSIGNED NOT NULL DEFAULT 0,
            `is_new` TINYINT UNSIGNED NOT NULL DEFAULT 0,
            PRIMARY KEY (`user_id`, `ornament_id`),
            FOREIGN KEY (`user_id`) REFERENCES `sw_users`(`id`),
            FOREIGN KEY (`ornament_id`) REFERENCES `sw_ornaments`(`id`)
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des ornements/utilisateurs ✔\n";
        }
        else {
            echo "Création des ornements/utilisateurs X\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();
    }

    // Création des titres

    function create_titles() {

        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des titres
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_titles`
        (
            `id` TINYINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
            `achievement_id` SMALLINT UNSIGNED NOT NULL,
            FOREIGN KEY (`achievement_id`) REFERENCES `sw_achievements`(`id`)
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des titres ✔\n";
        }
        else {
            echo "Création des titres X\n";
        }

        // Fermeture de la connexion à la base de données

        $conn->close();
    }

    // Création des titres/utilisateurs

    function create_titles_users() {

        // Connexion à la base de données

        include("connect.php");
        
        // Requête de création des titres/utilisateurs
    
        $request = "
        CREATE TABLE IF NOT EXISTS `sw_titles_users`
        (
            `user_id` MEDIUMINT UNSIGNED NOT NULL,
            `title_id` TINYINT UNSIGNED NOT NULL,
            `is_unlock` TINYINT UNSIGNED NOT NULL DEFAULT 0,
            `is_new` TINYINT UNSIGNED NOT NULL DEFAULT 0,
            PRIMARY KEY (`user_id`, `title_id`),
            FOREIGN KEY (`user_id`) REFERENCES `sw_users`(`id`),
            FOREIGN KEY (`title_id`) REFERENCES `sw_titles`(`id`)
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des titres/utilisateurs ✔\n";
        }
        else {
            echo "Création des titres/utilisateurs X\n";
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
        ) ENGINE=InnoDB;
        ";
    
        // Execution de la requête et récupération de son résultat
    
        $result = $conn->query($request);

        if($result) {
            echo "Création des portails ✔\n";
        }
        else {
            echo "Création des portails X\n";
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

        // Création des droits des utilisateurs

        create_rights();

        // Création des utilisateurs

        create_users();

        // Création des succès

        create_achievements();

        // Création des succès/utilisateurs

        create_achievements_users();

        // Création des ornements

        create_ornaments();

        // Création des ornements/utilisateurs

        create_ornaments_users();

        // Création des titres

        create_titles();

        // Création des titres/utilisateurs

        create_titles_users();

        // Création des portails

        create_portals();

        echo "\nFin de la création de toutes les tables";

    }

    create_all();

?>