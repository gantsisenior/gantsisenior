<!DOCTYPE html>
<html lang="eng">

	<head>
		<title>Gantsi Senior School | Students</title>
		<link rel="stylesheet" href="css/main.css" type="text/css">
		<style>
			#me { border: 1px solid black; padding: 5px;}
			#main {border-collapse: collapse;}
			img {float: left;}
			#head { background-image: url("images/up.jpg"); height: 198px; border: 0px; font-size: 55px; text-align: center;}
			#heads {font-size: 55px; border: 0px; width: 80%}
			.search { padding: 10px;}
			form { font-size: 18px;}
		</style>
	</head>
	
	<body>
		<table width="100%"cellspacing="0">
			<tr id="head"><td width="20%" colspan="2"><img src="images/download.jpg" /><br/>GSS STUDENTS</td></tr>
			<tr><td width="50%" class="search">
					<h3>Welcome to the Students' Page</h3>
		
					<form method="post" action="<?php $_PHP_SELF ?>">
						<fieldset><legend>Search</legend>
							<label for="name">Name: </label>
							<input type="text" name="name" /><br/>
							<label for="year">Year:</label>
							<select name="year">
								<option>Please select year of study</option>
								<option>Form4</option>
								<option>Form5</option>
							</select><br/>
							<input type="submit" value="Search" />
							<input type="reset" value="Clear">
						</fieldset>
					</form>
				</td>
				<td width="50%" class="search">
					<h3>YOU A STUDENT?</h3>
					<button onclick="location.href='student_login.php'">Login</button>
					<button onclick="location.href='index.html'">Back Home</button>
				</td>
			</tr>

			<tr>
				<td colspan="2">
		
		<?php
		
			
			$conn = odbc_connect('LIST','','');
			
			if (isset($_POST['name']) || isset($_POST['year'])){
				
				$name = $_POST['name'];
				$year = $_POST['year'];
				
				if(empty($name) && $year=="Please select year of study"){
					echo "<h3 style='color: red'>PLEASE FILL IN THE ABOVE FIELDS</h3>";
				}
				
				if(!empty($name) && $year=="Please select year of study"){
					$sql = "SELECT * FROM form_4_2014 WHERE FIRST_NAMES LIKE '$name%'
					UNION ALL 
					SELECT * FROM form_5_2014 WHERE FIRST_NAMES LIKE '$name'";
					$res = odbc_exec($conn, $sql);
					
					echo "<table id='main'><tr id='me'>";
					echo "<th id='me'>ADMIN NO</th>";
					echo "<th id='me'>SURNAME</th>";
					echo "<th id='me'>NAME</th>";
					echo "<th id='me'>GENDER</th>";
					echo "<th id='me'>CLASS</th>";
					echo "<th id='me'>CLASS TEACHER</th>";
					echo "<th id='me'>HOUSE</th>";
					echo "<th id='me'>BASEROOM</th>";
					echo "<th id='me'>CORE1</th>";
					echo "<th id='me'>CORE2</th>";
					echo "<th id='me'>CORE3</th>";
					echo "<th id='me'>CORE4</th>";
					echo "<th id='me'>OPTION1</th>";
					echo "<th id='me'>OPTION2</th>";
					echo "<th id='me'>OPTION3</th>";
					echo "<th id='me'>OPTION4</th></tr>";
					
					while (odbc_fetch_row($res)) {
						$admin = odbc_result($res, "ADMISSION_NO");
						$surname = odbc_result($res, "SURNAME");
						$fname = odbc_result($res, "FIRST_NAMES");
						$gender = odbc_result($res, "SEX");
						$class = odbc_result($res, "CLASS");
						$teacher = odbc_result($res, "CLASS_TEACHER");
						$house = odbc_result($res, "HOUSE");
						$room = odbc_result($res, "BASEROOM");
						$core1 = odbc_result($res, "CORE1");
						$core2 = odbc_result($res, "CORE2");
						$core3 = odbc_result($res, "CORE3");
						$core4 = odbc_result($res, "CORE4");
						$opt1 = odbc_result($res, "OPTION1");
						$opt2 = odbc_result($res, "OPTION2");
						$opt3 = odbc_result($res, "OPTION3");
						$opt4 = odbc_result($res, "OPTION4");
						echo "<tr id='me'><td>$admin</td>";
						echo "<td id='me'>$surname</td>";
						echo "<td id='me'>$fname</td>";
						echo "<td id='me'>$gender</td>";
						echo "<td id='me'>$class</td>";
						echo "<td id='me'>$teacher</td>";
						echo "<td id='me'>$house</td>";
						echo "<td id='me'>$room</td>";
						echo "<td id='me'>$core1</td>";
						echo "<td id='me'>$core2</td>";
						echo "<td id='me'>$core3</td>";
						echo "<td id='me'>$core4</td>";
						echo "<td id='me'>$opt1</td>";
						echo "<td id='me'>$opt2</td>";
						echo "<td id='me'>$opt3</td>";
						echo "<td id='me'>$opt4</td></tr>";
					}
					odbc_close($conn);
					echo "</table>";
				}
				
				if(!empty($name) && $year!="Please select year of study"){
					if($year=="Form4"){
						$sql = "SELECT * FROM form_4_2014 WHERE FIRST_NAMES LIKE '$name%'";
					$res = odbc_exec($conn, $sql);
					
					echo "<table id='main'><tr id='me'>";
					echo "<th id='me'>ADMIN NO</th>";
					echo "<th id='me'>SURNAME</th>";
					echo "<th id='me'>NAME</th>";
					echo "<th id='me'>GENDER</th>";
					echo "<th id='me'>CLASS</th>";
					echo "<th id='me'>CLASS TEACHER</th>";
					echo "<th id='me'>HOUSE</th>";
					echo "<th id='me'>BASEROOM</th>";
					echo "<th id='me'>CORE1</th>";
					echo "<th id='me'>CORE2</th>";
					echo "<th id='me'>CORE3</th>";
					echo "<th id='me'>CORE4</th>";
					echo "<th id='me'>OPTION1</th>";
					echo "<th id='me'>OPTION2</th>";
					echo "<th id='me'>OPTION3</th>";
					echo "<th id='me'>OPTION4</th></tr>";
					
					while (odbc_fetch_row($res)) {
						$admin = odbc_result($res, "ADMISSION_NO");
						$surname = odbc_result($res, "SURNAME");
						$fname = odbc_result($res, "FIRST_NAMES");
						$gender = odbc_result($res, "SEX");
						$class = odbc_result($res, "CLASS");
						$teacher = odbc_result($res, "CLASS_TEACHER");
						$house = odbc_result($res, "HOUSE");
						$room = odbc_result($res, "BASEROOM");
						$core1 = odbc_result($res, "CORE1");
						$core2 = odbc_result($res, "CORE2");
						$core3 = odbc_result($res, "CORE3");
						$core4 = odbc_result($res, "CORE4");
						$opt1 = odbc_result($res, "OPTION1");
						$opt2 = odbc_result($res, "OPTION2");
						$opt3 = odbc_result($res, "OPTION3");
						$opt4 = odbc_result($res, "OPTION4");
						echo "<tr id='me'><td>$admin</td>";
						echo "<td id='me'>$surname</td>";
						echo "<td id='me'>$fname</td>";
						echo "<td id='me'>$gender</td>";
						echo "<td id='me'>$class</td>";
						echo "<td id='me'>$teacher</td>";
						echo "<td id='me'>$house</td>";
						echo "<td id='me'>$room</td>";
						echo "<td id='me'>$core1</td>";
						echo "<td id='me'>$core2</td>";
						echo "<td id='me'>$core3</td>";
						echo "<td id='me'>$core4</td>";
						echo "<td id='me'>$opt1</td>";
						echo "<td id='me'>$opt2</td>";
						echo "<td id='me'>$opt3</td>";
						echo "<td id='me'>$opt4</td></tr>";
					}
					odbc_close($conn);
					echo "</table>";
					}
					
					if($year=="Form5"){
						$sql = "SELECT * FROM form_5_2014 WHERE FIRST_NAMES LIKE '$name%'";
						$res = odbc_exec($conn, $sql);
						
						echo "<table id='main'><tr id='me'>";
					echo "<th id='me'>ADMIN NO</th>";
					echo "<th id='me'>SURNAME</th>";
					echo "<th id='me'>NAME</th>";
					echo "<th id='me'>GENDER</th>";
					echo "<th id='me'>CLASS</th>";
					echo "<th id='me'>CLASS TEACHER</th>";
					echo "<th id='me'>HOUSE</th>";
					echo "<th id='me'>BASEROOM</th>";
					echo "<th id='me'>CORE1</th>";
					echo "<th id='me'>CORE2</th>";
					echo "<th id='me'>CORE3</th>";
					echo "<th id='me'>CORE4</th>";
					echo "<th id='me'>OPTION1</th>";
					echo "<th id='me'>OPTION2</th>";
					echo "<th id='me'>OPTION3</th>";
					echo "<th id='me'>OPTION4</th></tr>";
						
						while (odbc_fetch_row($res)) {
							$admin = odbc_result($res, "ADMISSION_NO");
							$surname = odbc_result($res, "SURNAME");
							$fname = odbc_result($res, "FIRST_NAMES");
							$gender = odbc_result($res, "SEX");
							$class = odbc_result($res, "CLASS");
							$teacher = odbc_result($res, "CLASS_TEACHER");
							$house = odbc_result($res, "HOUSE");
							$room = odbc_result($res, "BASEROOM");
							$core1 = odbc_result($res, "CORE1");
							$core2 = odbc_result($res, "CORE2");
							$core3 = odbc_result($res, "CORE3");
							$core4 = odbc_result($res, "CORE4");
							$opt1 = odbc_result($res, "OPTION1");
							$opt2 = odbc_result($res, "OPTION2");
							$opt3 = odbc_result($res, "OPTION3");
							$opt4 = odbc_result($res, "OPTION4");
							echo "<tr id='me'><td>$admin</td>";
						echo "<td id='me'>$surname</td>";
						echo "<td id='me'>$fname</td>";
						echo "<td id='me'>$gender</td>";
						echo "<td id='me'>$class</td>";
						echo "<td id='me'>$teacher</td>";
						echo "<td id='me'>$house</td>";
						echo "<td id='me'>$room</td>";
						echo "<td id='me'>$core1</td>";
						echo "<td id='me'>$core2</td>";
						echo "<td id='me'>$core3</td>";
						echo "<td id='me'>$core4</td>";
						echo "<td id='me'>$opt1</td>";
						echo "<td id='me'>$opt2</td>";
						echo "<td id='me'>$opt3</td>";
						echo "<td id='me'>$opt4</td></tr>";
						}
						odbc_close($conn);
						echo "</table>";
					}
				}
				
				if(empty($name) && $year!="Please select year of study"){
					if($year=="Form4"){
						$sql = "SELECT * FROM form_4_2014 ORDER BY CLASS";
						$res = odbc_exec($conn, $sql);
					echo "<h4>SHOWING ALL FORM 4'S</h4>";
					echo "<table id='main'><tr id='me'>";
					echo "<th id='me'>ADMIN NO</th>";
					echo "<th id='me'>SURNAME</th>";
					echo "<th id='me'>NAME</th>";
					echo "<th id='me'>GENDER</th>";
					echo "<th id='me'>CLASS</th>";
					echo "<th id='me'>CLASS TEACHER</th>";
					echo "<th id='me'>HOUSE</th>";
					echo "<th id='me'>BASEROOM</th>";
					echo "<th id='me'>CORE1</th>";
					echo "<th id='me'>CORE2</th>";
					echo "<th id='me'>CORE3</th>";
					echo "<th id='me'>CORE4</th>";
					echo "<th id='me'>OPTION1</th>";
					echo "<th id='me'>OPTION2</th>";
					echo "<th id='me'>OPTION3</th>";
					echo "<th id='me'>OPTION4</th></tr>";
					
					while (odbc_fetch_row($res)) {
						$admin = odbc_result($res, "ADMISSION_NO");
						$surname = odbc_result($res, "SURNAME");
						$fname = odbc_result($res, "FIRST_NAMES");
						$gender = odbc_result($res, "SEX");
						$class = odbc_result($res, "CLASS");
						$teacher = odbc_result($res, "CLASS_TEACHER");
						$house = odbc_result($res, "HOUSE");
						$room = odbc_result($res, "BASEROOM");
						$core1 = odbc_result($res, "CORE1");
						$core2 = odbc_result($res, "CORE2");
						$core3 = odbc_result($res, "CORE3");
						$core4 = odbc_result($res, "CORE4");
						$opt1 = odbc_result($res, "OPTION1");
						$opt2 = odbc_result($res, "OPTION2");
						$opt3 = odbc_result($res, "OPTION3");
						$opt4 = odbc_result($res, "OPTION4");
						echo "<tr id='me'><td>$admin</td>";
						echo "<td id='me'>$surname</td>";
						echo "<td id='me'>$fname</td>";
						echo "<td id='me'>$gender</td>";
						echo "<td id='me'>$class</td>";
						echo "<td id='me'>$teacher</td>";
						echo "<td id='me'>$house</td>";
						echo "<td id='me'>$room</td>";
						echo "<td id='me'>$core1</td>";
						echo "<td id='me'>$core2</td>";
						echo "<td id='me'>$core3</td>";
						echo "<td id='me'>$core4</td>";
						echo "<td id='me'>$opt1</td>";
						echo "<td id='me'>$opt2</td>";
						echo "<td id='me'>$opt3</td>";
						echo "<td id='me'>$opt4</td></tr>";
					}
					odbc_close($conn);
					echo "</table>";
					}
					
					if($year=="Form5"){
						$sql = "SELECT * FROM form_5_2014 ORDER BY CLASS";
						$res = odbc_exec($conn, $sql);
						
						echo "<h4>SHOWING ALL FORM 5'S</h4>";
						echo "<table id='main'><tr id='me'>";
					echo "<th id='me'>ADMIN NO</th>";
					echo "<th id='me'>SURNAME</th>";
					echo "<th id='me'>NAME</th>";
					echo "<th id='me'>GENDER</th>";
					echo "<th id='me'>CLASS</th>";
					echo "<th id='me'>CLASS TEACHER</th>";
					echo "<th id='me'>HOUSE</th>";
					echo "<th id='me'>BASEROOM</th>";
					echo "<th id='me'>CORE1</th>";
					echo "<th id='me'>CORE2</th>";
					echo "<th id='me'>CORE3</th>";
					echo "<th id='me'>CORE4</th>";
					echo "<th id='me'>OPTION1</th>";
					echo "<th id='me'>OPTION2</th>";
					echo "<th id='me'>OPTION3</th>";
					echo "<th id='me'>OPTION4</th></tr>";
						
						while (odbc_fetch_row($res)) {
							$admin = odbc_result($res, "ADMISSION_NO");
							$surname = odbc_result($res, "SURNAME");
							$fname = odbc_result($res, "FIRST_NAMES");
							$gender = odbc_result($res, "SEX");
							$class = odbc_result($res, "CLASS");
							$teacher = odbc_result($res, "CLASS_TEACHER");
							$house = odbc_result($res, "HOUSE");
							$room = odbc_result($res, "BASEROOM");
							$core1 = odbc_result($res, "CORE1");
							$core2 = odbc_result($res, "CORE2");
							$core3 = odbc_result($res, "CORE3");
							$core4 = odbc_result($res, "CORE4");
							$opt1 = odbc_result($res, "OPTION1");
							$opt2 = odbc_result($res, "OPTION2");
							$opt3 = odbc_result($res, "OPTION3");
							$opt4 = odbc_result($res, "OPTION4");
							echo "<tr id='me'><td>$admin</td>";
						echo "<td id='me'>$surname</td>";
						echo "<td id='me'>$fname</td>";
						echo "<td id='me'>$gender</td>";
						echo "<td id='me'>$class</td>";
						echo "<td id='me'>$teacher</td>";
						echo "<td id='me'>$house</td>";
						echo "<td id='me'>$room</td>";
						echo "<td id='me'>$core1</td>";
						echo "<td id='me'>$core2</td>";
						echo "<td id='me'>$core3</td>";
						echo "<td id='me'>$core4</td>";
						echo "<td id='me'>$opt1</td>";
						echo "<td id='me'>$opt2</td>";
						echo "<td id='me'>$opt3</td>";
						echo "<td id='me'>$opt4</td></tr>";
						}
						odbc_close($conn);
						echo "</table>";
					}
				}
			}
		?></td>
		</tr>
		</table>
		<br/>
		<hr/>
	<footer>Website by Lorato Maswe&copy. All Rights Reserved</footer>
	</body>
</html>