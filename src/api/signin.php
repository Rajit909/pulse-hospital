<?php 
require 'dbConnect.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $password = $_POST['password'];

    try{
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
        $stmt->execute(['email' => $email]);
        $user = $stmt->fetch();

        if($user && password_verify($password, $user['password'])){
            echo json_encode(['success'=> true, 'message' => 'User logged in successfully']);
         }else{
        echo json_encode(['success'=> false, 'message' => 'Invalid email or password']);
        }
    }catch(PDOException $e){
        echo json_encode(['success'=> false, 'message' => 'User login failed'] . $e->getMessage());
    }
}

?>