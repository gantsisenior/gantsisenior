<!DOCTYPE html>
<?php session_start(); ?>
<html lang="eng">

	<head>
		<title>Gantsi Senior School | Students Login</title>
		<style>
			body {font-size: 18px;}
			#top, #bottom { height: 180px;}
			h1, #help{text-align: center;}
			button { margin: 0 auto;}
			#center { box-shadow: 0px 0px 20px #33ccff; padding: 20px;}
			
		</style>
		<script type="text/javascript">
			function help(){
				alert("Please see your administrator");
			}
		</script>
	</head>
	
	<body>
		<table width="100%" cellspacing="0">
			<tr><td id="top" colspan="3"></td></tr>
			<tr><td width="25%"></td>
				<td id="center">
				<h1> LOGIN </h1>
				<!--form where user enters their details-->
				<form method="post" action="" style="text-align: center">
					
						<label for="name">Username: </label>
						<input type="text" name="name" /><br/><br/>
						<label for="pass">Password: </label>
						<input type="password" name="pass" /><br/><br/>
						<input type="submit" value="Login" />
						<input type="reset" value="Clear">
						
					
				</form>
				<div>	
					<button id="help" onClick="help();">Forgot password?</button>
					<button><a href="index.html">Back home</a></button>
				</div>
				
		<?php
			//connect to the database
			$conn = odbc_connect('LIST','','');
			//check if username and password have been submitted
			if (isset($_POST['name']) || isset($_POST['pass'])){
				//get username and password from form
				$username = $_POST['name'];
				$password = $_POST['pass'];
				//check whether both fields are not empty
				if(empty($username) || empty($password)){
					echo "<p style='color: red'>Please fill in both fields</p>";
				}
				//update a row $sql_result = odbc_exec($conn, 'UPDATE mytest set name="AnotherRoy" where name="Roy"');
				//check details against database
				else{
					$sql = "SELECT USERNAME, PASSWORD FROM form_4_2014 WHERE USERNAME='$username' AND PASSWORD='$password'
							UNION SELECT USERNAME, PASSWORD FROM form_5_2014 WHERE USERNAME='$username' AND PASSWORD='$password'";
					$res = odbc_exec($conn, $sql);
					//$pass = odbc_result($res, "PASSWORD");
					//$user = odbc_result($res, "USERNAME");
					
					while (odbc_fetch_row($res)){
						$pass = odbc_result($res, "PASSWORD");
						$user = odbc_result($res, "USERNAME");
						if($user==$username && $pass==$password){
					
							$_SESSION['user_name'] = $user;
							$_SESSION['pass_word'] = $pass;
							
							//header("Location: pastpapers.php");
							
						}
						//echo "Username: " . $user . "password: " . $pass;
						else{
							header("Location: student_login.php");
							echo "<p style='color: red'>Incorrect username or password</p>";
							
						}
					}
					/*if(odbc_fetch_row($res)){
					header("Location: pastpapers.html");
					}*/
				}
			}
			if(isset($_SESSION['user_name'])) {
				header("Location:pastpapers.php");
			}
		?></td><td width="25%"></td></tr>
		<tr><td id="bottom" colspan="3"></td></tr>
		</table>
		<br/>
		<hr/>
	<footer>Website by Lorato Maswe&copy. All Rights Reserved</footer>
	</body>
</html>