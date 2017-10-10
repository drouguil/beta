<?php

    // DAO

    include("dao.php");

    $selected_fields = array("id", "username", "login", "server_id", "email", "ip");

    // Récupération des utilisateurs

    return_result(select("sw_users", $selected_fields));

?>