<!DOCTYPE html>
<html lang="eng">

	<head>
		<title>Gantsi Senior School | Staff</title>
		<link rel="stylesheet" href="css/main.css" type="text/css">
		<style>
			#me { border: 1px solid black; padding: 5px;}
			#main {border-collapse: collapse;}
			#head { background-image: url("images/up.jpg"); height: 198px; border: 0px;}
			#heads {font-size: 55px; border: 0px; text-align: center;}
			form { font-size: 18px;}
		</style>
	</head>
	
	<body>
		<table width="100%"cellspacing="0">
			<tr id="head"><td id="heads">GSS STAFF</td></tr>
			<tr><td>
		<div>
			<a href="index.html"><img src="images/images2.jpg" /></a>
		</div>
		<h3>Welcome to the Staff Page</h3>
		
		<form action="<?php $_PHP_SELF ?>" method="post">
			<fieldset><legend>Search</legend>
				<label for="name">Surname: </label>
				<input type="text" name="name" /><br/>
				<label for="who">Type:</label>
				<select name="who">
					<option>Please select type of staff</option>
					<option>Teaching</option>
					<option>Non-teaching</option>
				</select><br/>
				<input type="submit" value="Search" />
				<input type="reset" value="Clear">

			</fieldset>
		</form></td></tr>
		<tr><td>
		<?php
			$conn = odbc_connect('LIST','','');
			
			if (isset($_POST['name']) || isset($_POST['who'])){
				
				$name = $_POST['name'];
				$type = $_POST['who'];
				
				if(empty($name) && $type=="Please select type of staff"){
					echo "<h3 style='color: red'>PLEASE FILL IN THE ABOVE FIELDS(AT LEAST ONE)</h3>";
				}
				
				if(!empty($name) && $type=="Please select type of staff"){
					$sql = "SELECT SURNAME, FIRST_NAMES, GENDER, CITIZENSHIP, CURRENT_POST 
					FROM nonteaching
					WHERE SURNAME LIKE '$name%' 
					UNION ALL SELECT SURNAME, FIRST_NAMES, GENDER, CITIZENSHIP, CURRENT_POST
					FROM Teaching_Staff
					WHERE SURNAME LIKE '$name%'";
					$res = odbc_exec($conn, $sql);
					
					echo "<table id='main'><tr id='me'>";
					echo "<th id='me'>SURNAME</th>";
					echo "<th id='me'>FIRST_NAMES</th>";
					echo "<th id='me'>GENDER</th>";
					echo "<th id='me'>CITIZENSHIP</th>";
					echo "<th id='me'>CURRENT POST</th></tr>";
					
					while(odbc_fetch_row($res)){
						$surname = odbc_result($res, "SURNAME");
						$name = odbc_result($res, "FIRST_NAMES");
						$gender = odbc_result($res, "GENDER");
						$citizen = odbc_result($res, "CITIZENSHIP");
						$post = odbc_result($res, "CURRENT_POST");
						//$tsm = odbc_result($res, "TSM");
						//$sub = odbc_result($res, "SUBJECT");
						echo "<tr id='me'><td id='me'>$surname</td>";
						echo "<td id='me'>$name</td>";
						echo "<td id='me'>$gender</td>";
						echo "<td id='me'>$citizen</td>";
						echo "<td id='me'>$post</td></tr>";
					}
					odbc_close($conn);
					echo "</table>";
				}
				if(!empty($name) && $type!="Please select type of staff"){
					if($type=="Teaching"){
						$sql = "SELECT * FROM Teaching_Staff WHERE SURNAME LIKE '$name%'";
						$res = odbc_exec($conn, $sql);
						
						echo "<table id='main'><tr id='me'>";
						echo "<th id='me'>TSM</th>";
						echo "<th id='me'>SURNAME</th>";
						echo "<th id='me'>FIRST_NAMES</th>";
						echo "<th id='me'>GENDER</th>";
						echo "<th id='me'>CITIZENSHIP</th>";
						echo "<th id='me'>CURRENT POST</th>";
						echo "<th id='me'>SUBJECT</th></tr>";
						
						while(odbc_fetch_row($res)){
							$surname = odbc_result($res, "SURNAME");
							$name = odbc_result($res, "FIRST_NAMES");
							$gender = odbc_result($res, "GENDER");
							$citizen = odbc_result($res, "CITIZENSHIP");
							$post = odbc_result($res, "CURRENT_POST");
							$tsm = odbc_result($res, "TSM");
							$sub = odbc_result($res, "SUBJECT");
							echo "<tr id='me'><td id='me'>$tsm</td>";
							echo "<td id='me'>$surname</td>";
							echo "<td id='me'>$name</td>";
							echo "<td id='me'>$gender</td>";
							echo "<td id='me'>$citizen</td>";
							echo "<td id='me'>$post</td>";
							echo "<td id='me'>$sub</td></tr>";
						}
						odbc_close($conn);
						echo "</table>";
					}
					
					if($type == "Non-teaching"){
						$sql = "SELECT * FROM nonteaching WHERE SURNAME LIKE '$name%'";
						$res = odbc_exec($conn, $sql);
						
						echo "<table id='main'><tr id='me'>";
						echo "<th id='me'>SURNAME</th>";
						echo "<th id='me'>FIRST_NAMES</th>";
						echo "<th id='me'>GENDER</th>";
						echo "<th id='me'>CITIZENSHIP</th>";
						echo "<th id='me'>CURRENT POST</th></tr>";
						
						while(odbc_fetch_row($res)){
							$surname = odbc_result($res, "SURNAME");
							$name = odbc_result($res, "FIRST_NAMES");
							$gender = odbc_result($res, "GENDER");
							$citizen = odbc_result($res, "CITIZENSHIP");
							$post = odbc_result($res, "CURRENT_POST");
							echo "<tr id='me'><td id='me'>$surname</td>";
							echo "<td id='me'>$name</td>";
							echo "<td id='me'>$gender</td>";
							echo "<td id='me'>$citizen</td>";
							echo "<td id='me'>$post</td></tr>";
						}
						odbc_close($conn);
						echo "</table>";
					}
				}
				if(empty($name) && $type!="Please select type of staff"){
					if($type=="Teaching"){
						$sql = "SELECT * FROM Teaching_Staff";
						$res = odbc_exec($conn, $sql);
						echo "<h4>SHOWING ALL TEACHING STAFF</h4>";
						echo "<table id='main'><tr id='me'>";
						echo "<th id='me'>TSM</th>";
						echo "<th id='me'>SURNAME</th>";
						echo "<th id='me'>FIRST_NAMES</th>";
						echo "<th id='me'>GENDER</th>";
						echo "<th id='me'>CITIZENSHIP</th>";
						echo "<th id='me'>CURRENT POST</th>";
						echo "<th id='me'>SUBJECT</th></tr>";
						
						while(odbc_fetch_row($res)){
							$surname = odbc_result($res, "SURNAME");
							$name = odbc_result($res, "FIRST_NAMES");
							$gender = odbc_result($res, "GENDER");
							$citizen = odbc_result($res, "CITIZENSHIP");
							$post = odbc_result($res, "CURRENT_POST");
							$tsm = odbc_result($res, "TSM");
							$sub = odbc_result($res, "SUBJECT");
							echo "<tr id='me'><td id='me'>$tsm</td>";
							echo "<td id='me'>$surname</td>";
							echo "<td id='me'>$name</td>";
							echo "<td id='me'>$gender</td>";
							echo "<td id='me'>$citizen</td>";
							echo "<td id='me'>$post</td>";
							echo "<td id='me'>$sub</td></tr>";
						}
						odbc_close($conn);
						echo "</table>";
					}
					
					if($type == "Non-teaching"){
						$sql = "SELECT * FROM nonteaching";
						$res = odbc_exec($conn, $sql);
						echo "<h3>SHOWING ALL NON TEACHING STAFF</h3>";
						echo "<table id='main'><tr>";
						echo "<th id='me'>SURNAME</th>";
						echo "<th id='me'>FIRST_NAMES</th>";
						echo "<th id='me'>GENDER</th>";
						echo "<th id='me'>CITIZENSHIP</th>";
						echo "<th id='me'>CURRENT POST</th></tr>";
						
						while(odbc_fetch_row($res)){
							$surname = odbc_result($res, "SURNAME");
							$name = odbc_result($res, "FIRST_NAMES");
							$gender = odbc_result($res, "GENDER");
							$citizen = odbc_result($res, "CITIZENSHIP");
							$post = odbc_result($res, "CURRENT_POST");
							echo "<tr id='me'><td id='me'>$surname</td>";
							echo "<td id='me'>$name</td>";
							echo "<td id='me'>$gender</td>";
							echo "<td id='me'>$citizen</td>";
							echo "<td id='me'>$post</td></tr>";
						}
						odbc_close($conn);
						echo "</table>";
					}
				}
			}
		?></td></tr></table>
		<br/>
		<hr/>
	<footer>Website by Lorato Maswe&copy. All Rights Reserved</footer>
	</body>
</html>