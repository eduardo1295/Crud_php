<?php
function connect(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "alumnos";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
     return $conn;
}


// Create connection


// Check connection

?> 