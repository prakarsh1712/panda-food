<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital@0;1&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="rev.css">
	
	<title>SURVEY</title>
</head>

<body>

	<div id="body">
		<header>
			<h1 id="title">Customer Review Survey Form</h1>
			<p id="description">Thank you for taking time to help improve my services</p>
		</header>
		<form action="#" id="survey-form" method="POST">
			<div class="form-group">
				<label id="name-label" for="name">Name</label>
				<input id="name" name="name" type="text" placeholder="Enter your name (1 word)"
					pattern="^[A-Za-z]+$" required="">
			</div>
			<div class="form-group">
				<label id="email-label" for="email">E-mail</label>
				<input id="email" name="email" type="email" placeholder="Enter your e-mail" required="">
			</div>
			<div class="form-group">
				<label id="number-label" for="number">Age (optional)</label>
				<input id="number" name="age" type="number" placeholder="Age" pattern="^[0-9]{,3}" min="10" max="99">
			</div>
			<div class="form-group">
				<p class="p-label">Would you recommend our services?</p>
				<label><input class="radios" type="radio" value="Yes" name="radios" checked="">Yes</label>
				<label><input class="radios" type="radio" value="Probably" name="radios">Probably</label>
				<label><input class="radios" type="radio" value="No" name="radios">No</label>
			</div>
			<div class="form-group">
				<p class="p-label">How long did your order take?</p>
				<select id="dropdown" name="time" required="">
					<option disabled="" selected="" value="">Choose your order time</option>
					<option value="20 Minutes">&#8804;20 minutes</option>
					<option value="30 Minutes">&#8804;30 minutes</option>
					<option value="45 Minutes">&#8804;45 minutes</option>
					<option value="1 Hour">1 hour</option>
					<option value="Cancelled">cancelled</option>
				</select>
			</div>
			<div class="form-group">
				<p class="p-label">What service do you think we should improve?</p>
				<label><input name="improve" value="None" type="radio" checked="">Nothing, You're awesome</label>
				<label><input name="improve" value="Communication" type="radio" >Communication</label>
				<label><input name="improve" value="Delivery" type="radio">Delivery</label>
				<label><input name="improve" value="Service" type="radio">Service</label>
				<label><input name="improve" value="Dining" type="radio">Dining</label>
			</div>
			<div class="form-group">
				<p class="p-label">Any comments or suggestions(Open Ended)?</p>
				<textarea id="comments" class="textarea" name="comment"
					placeholder="Enter your comment here..."></textarea>
			</div>
			<button id="submit" type="submit" name="submit">Submit</button>
		</form>
		<footer>
			<p>All rights reserved ©</p>
		</footer>
	</div>
</body>
</html>

<?php

    include 'connection.php';

    if(isset($_POST['submit'])){

		$Name = mysqli_escape_string($connection, $_POST['name']);
		$Email = mysqli_escape_string($connection, $_POST['email']);
		$Age = mysqli_escape_string($connection, $_POST['age']);
		$Recom = mysqli_escape_string($connection, $_POST['radios']);
		$Time = mysqli_escape_string($connection, $_POST['time']);
		$Improve = mysqli_escape_string($connection, $_POST['improve']);
		$Comment = mysqli_escape_string($connection, $_POST['comment']);
			
		$insertquery = " insert into survey (name, email, age, recommend, time, improve, comment) values('$Name','$Email','$Age','$Recom','$Time','$Improve','$Comment')";
		$rgs = mysqli_query($connection, $insertquery);

		if($rgs){
			?><script> alert("Thank You for filling the Survey"); </script><?php
			header('location:HOME.php');
		}
    }
?>