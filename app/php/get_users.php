<?php

    // DAO

    include("dao.php");

    $selected_fields = array("id", "username", "login", "server_id", "email", "ip", "right_id");

    // Récupération des utilisateurs

    return_result(select("sw_users", $selected_fields));

?>