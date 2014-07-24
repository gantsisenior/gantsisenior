<!DOCTYPE html>
<?php
session_start();
?>
<html lang="eng">

	<head>
		<title>GSS | PAST PAPERS</title>
		<style>
		table{ border-collapse: collapse; border: 0px solid black; width: 100%; height: 100%;
			}
			td, tr{ border: 0px solid black;}
			#center {text-align: center;}
		</style>
	</head>
	
	<body>
		<table>
		<tr><td width="12%"></td><td width="76%" ><img src="images/books.jpg" /></td><td width="12%"></td>
		</tr>
		
		<tr><td width="12%"></td>
			<td width="76%" class="middle">
			<p id="center"><?php if($_SESSION["user_name"]){ ?>
			Welcome <?php echo $_SESSION["user_name"]; ?>. Click here to <a href="logout.php" title="Logout">
			<img src="images/log.jpg" alt="logout" /><?php } else { header("Location: student_login.php");} ?></a></p>
				<form method="post" action="">
					<fieldset><legend>Search</legend>
						<label for="sub">Subject:</label>
						<select name="sub">
							<option>Select subject</option>
							<option>English Language</option>
							<option>Setswana</option>
							<option>Mathematics</option>
							<option>Biology</option>
							<option>Physics</option>
							<option>Chemistry</option>
							<option>Accounting</option>
							<option>Additional Mathematics</option>
							<option>Agriculture</option>
							<option>Art and Design</option>
							<option>Business Studies</option>
							<option>Commerce</option>
							<option>Computer Studies</option>
							<option>Design and Technology</option>
							<option>Development Studies</option>
							<option>Fashion and Fabrics</option>
							<option>Food and Nutrition</option>
							<option>Home Management</option>
							<option>Geography</option>
							<option>History</option>
							<option>Literature in English</option>
							<option>Moral Education</option>
							<option>Physical Education</option>
							<option>Religious Education</option>
							<option>Social Studies</option>
							<option>Statistics</option>
						</select><br/>
						<label for="year">Year:</label>
						<select name="year">
							<option>Please select year</option>
							<option>2012</option>
							<option>2013</option>
						</select><br/>
						<input type="submit" value="Search" />
						<input type="reset" value="Clear">
					</fieldset>
				</form>
			
		<?php 
			if(isset($_POST['year']) || isset($_POST['sub'])){
				
				$year = $_POST['year'];
				$subj = $_POST['sub'];
				
				if($subj=='English Language'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Setswana'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Mathematics'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Biology'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Physics'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Chemistry'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Accounting'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Additional Mathematics'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Agriculture'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Art and Design'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Business Studies'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Commerce'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Computer Studies'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Design and Technology'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Development Studies'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Fashion and Fabrics'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Food and Nutrition'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Home Management'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Geography'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='History'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Literature in English'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Moral Education'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Physical Education'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Religious Education'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Social Studies'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
				
				if($subj=='Statistics'){
					if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
					else if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";}
					
				}
			}
		?>
			</td>
			<td width="12%"></td>
		</tr>
		</table>
		
	</body>
</html>