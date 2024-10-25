<?php
require 'dbConnect.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $username = $_POST['username'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);//hash the password

    try{
        $stmt = $pdo->prepare("INSERT INTO users (username, email, fullname, password) VALUES (:username, :email, :fullname, :password)");
        $stmt->execute(['username' => $username, 'email' => $email, 'fullname'=> $fullname, 'password' => $password]);
        echo json_encode(['success'=> true, 'message' => 'User created successfully']);
    }catch(PDOException $e){
        echo json_encode(['success'=> false, 'message' => 'User creation failed'] . $e->getMessage());
    }
}

?>