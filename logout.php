<?php
session_start();
unset($_SESSION["pass_word"]);
unset($_SESSION["user_name"]);
header("Location:student_login.php");
?>