<!DOCTYPE html>
<html lang="eng">

	<head>
		<title>Gantsi Senior School | Results</title>
	</head>

		<style>
			table{ border-collapse: collapse; border: 0px solid black; width: 100%; height: 100%;
			}
			td, tr{ border: 0px solid black;}
			#center {text-align: center;}
		</style>
	</head>
	
	<body>
		<table>
		<tr><td width="12%"></td><td width="76%" ><img src="images/results.jpg" /></td><td width="12%"></td>
		</tr>
		
		<tr><td width="12%"></td>
			<td width="76%" class="middle">
			<p id="center"><a href="index.html"><img src="images/bh.jpg" alt="home" /></a></p>
				<form method="post" action="">
					<fieldset><legend>Search</legend>
						<label for="year">Year:</label>
						<select name="year">
							<option>Please select year</option>
							<option>2013</option>
							<option>2012</option>
							<option>2011</option>
							<option>2010</option>
							<option>2009</option>
							<option>2008</option>
							<option>2007</option>
							<option>2006</option>
							<option>2005</option>
							<option>2004</option>
							<option>2003</option>
						</select><br/>
						<input type="submit" value="Search" />
						<input type="reset" value="Clear">
					</fieldset>
				</form>
			
		<?php 
			if(isset($_POST['year'])){
				
				$year = $_POST['year'];
				if($year==2003){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
				
				if($year==2004){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
				
				if($year==2005){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
				
				if($year==2006){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
				
				if($year==2007){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
				
				if($year==2008){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
				
				if($year==2009){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
				
				if($year==2010){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
				
				if($year==2011){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
				
				if($year==2012){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
				
				if($year==2013){
					echo "<br/>";
					echo "<object width='800' height='800' type='application/pdf' data='results/Assignment_2.pdf' >";
					echo "<p>If the file does not display, you can <a href='Assignment_2.pdf'>download</a> it</p>";
					echo "</object>";
				}
			}
		?>
			</td>
			<td width="12%"></td>
		</tr>
		</table>
		<hr/>
		<footer>Website by Lorato Maswe&copy. All Rights Reserved</footer>
		
		
	</body>
</html>