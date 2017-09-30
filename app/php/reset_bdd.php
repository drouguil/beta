<?php

    echo "Début de la réinitialisation de la base de données";

    // Suppression des données

    include("delete_data.php");

    // Suppression des tables

    include("drop_bdd.php");

    // Création des tables

    include("create_bdd.php");

    // Insertion des données

    include("insert_data.php");

    echo "\n\nFin de la réinitialisation de la base de données";

?>