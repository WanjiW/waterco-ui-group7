<?php 

$dbhost="us-cdbr-east-03.cleardb.com";
$dbuser="b0104743e395dd";
$dbpass="3daa396e";
$db="heroku_631e426574eca56";

$conn=new mysqli($dbhost,$dbuser,$dbpass,$db);
//if($conn->connect_error){
 //   echo "ERROR=404";
//}else{
 //   echo "connected";
//}

$email_address=$_POST['email_address'];
$password=$_POST['password'];
$sql= "select * from users where email_address='".$email_address."'AND password='".$password."' limit 1";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_array($result);
if($row["email_address" ]==$email_address && $row ["password"] == $password){
    echo "Welcome".$email_address."You are successfully logged in";
}else{
    echo "<script>alert('check your password')</script>";
    exit();
}


?>









<div class="starter-template">
    <h1>Welcome to the staff Dashboard</h1>
    <p class="lead"> This software is exclusive to staff Alone.<br> Click one of the sections on the header to begin.</p>
</div>


 