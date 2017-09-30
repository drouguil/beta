<?php

    // En-têtes

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // Paramètres pour la connexion à la base de données

    $dbname = "sweet";
    $user = "root";
    $password = "";
    $host= "localhost";

    // Connexion à la base de données

    $conn = new mysqli($host, $user, $password, $dbname);

?>