<!DOCTYPE html>
<html lang="en">
  <head>
    <link href='https://fonts.googleapis.com/css?family=Raleway:400,100,200,200italic,300,100italic,400italic,500,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="reservation.css"> 
  </head>
  <body>
    <div class="lead">
      <h1>Make a Reservation</h1>
    </div>
    <div class="container">
      <form action="" method="POST">
        <div class="first-group">
          <label for="first">First Name:</label>
          <input name="fname" id="first" type="text" />
        </div>
        <div  class="last-group">
          <label for="last">Last Name: </label>
          <input name="lname" id="last" type="text" />
        </div>
        <div class="first-group">
          <label for="when">Date:</label>
          <input name="date" id="when" type="date"/>
        </div>
        <div class="last-group">
          <label for="whent">Time:</label>
          <input name="time" id="whent" type="time"/>
        </div>
        <div class="people-group">
          <label for="people">Group of: </label>
          <input name="num" id="people" type="number" placeholder="1" pattern="^[0-9]{,3}" min="1" max="20"/>
        </div>
        <div class="first-group">
          <label for="email">Email Address: </label>
          <input name="email" id="email" type="email" />
        </div>
        <div class="last-group">
          <label for="phone">Phone number: </label>
          <input name="phone" id="phone" type="tel" />
        </div>
        <div class="row">
          <button name="submit" type="submit">Reserve your spot!</button>
        </div>
      </form>
    </div>
  </body>
</html>

<?php
  include 'connection.php';
  
  if(isset($_POST['submit'])){

    $Fname = mysqli_escape_string($connection,$_POST['fname']);
    $Lname = mysqli_escape_string($connection,$_POST['lname']);
    $Date = mysqli_escape_string($connection,$_POST['date']);
    $Time = mysqli_escape_string($connection,$_POST['time']);
    $Num = mysqli_escape_string($connection,$_POST['num']);
    $Email = mysqli_escape_string($connection,$_POST['email']);
    $Phone = mysqli_escape_string($connection,$_POST['phone']);

    $date_query = " SELECT * FROM reserve where date='$Date' ";
    $query = mysqli_query($connection,$date_query);
    $date_count = mysqli_num_rows($query);

    if($date_count=0){
      $insertquery = "insert into reserve (fname,lname,date,time,number,email,phone) values('$Fname','$Lname','$Date','$Time','$Num','$Email','$Phone')";
      $rgs = mysqli_query($connection,$insertquery);
    }
    else {
      $time = mysqli_fetch_assoc($query);
      if($Time = $time['time']){
        ?><script> alert("Time Slot Already Booked"); </script><?php
      }
      else{
        $insertquery = "insert into reserve (fname,lname,date,time,number,email,phone) values('$Fname','$Lname','$Date','$Time','$Num','$Email','$Phone')";
        $rgs = mysqli_query($connection,$insertquery);
      }
    }
    if($rgs){
      ?><script> alert("Reservation Successful"); </script><?php
    }
  }
