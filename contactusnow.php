
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="style.css">
    <title>QUERIES</title>
    <link rel="stylesheet" href="contactusnow.css">
  </head>
  <body>
     <div class="contact-form">
       <div class="first-container">
        <div class="info-container">
          <div> 
            <h3>Address</h3>
            <p>
                Bhopal-Indore Highway
                Kothrikalan, Sehore
                Madhya Pradesh - 466114
                </p>
          </div>
          <div> 
            <h3>Lets Talk</h3>
            <p>+91 6378985338</p>
          </div>
          <div> 
            <h3>General Support</h3>
            <p>pratiksha.jain@pandafood.ac.in</p>
          </div>
        </div>
       </div>
       <div class="second-container">
         <h2>Send Us A Message</h2>
         <form action="" method="POST">
           <div class="form-group">
             <label for="name-input">Tell us your name*</label>
             <input id="name-input" name= "first" type="text" placeholder="First name" required="">
             <input type="text" name= "second" placeholder="Last name" required="">
           </div>
           <div class="form-group">
             <label for="email-input">Enter your email</label>
             <input id="email-input" name="email" type="text" placeholder="Eg. example@gmail.com" required="">
           </div>
           <div class="form-group">
             <label for="phone-input">Enter phone number</label>
             <input id="phone-input" name="mobile" type="tel" placeholder="Eg. _1800 000000" required="">
           </div>
           <div class="form-group">
             <label for="message-textarea">Message</label>
             <input class="textarea" name="msg" id="message-textarea" placeholder="Write us a message"></input>
           </div>
            <button class="btn" name ="submit">Send message</button>
         </form>
       </div>
     </div>
  </body>
</html>
<?php

  include 'connection.php';

    if(isset($_POST['submit'])){

      $First = mysqli_escape_string($connection, $_POST['first']);
      $Second = mysqli_escape_string($connection, $_POST['second']);
      $Email = mysqli_escape_string($connection, $_POST['email']);
      $Mobile = mysqli_escape_string($connection, $_POST['mobile']);
      $Message = mysqli_escape_string($connection, $_POST['msg']);
      
      $insertquery =" insert into complaint (first, second, email, mobile, message) values('$First','$Second','$Email','$Mobile','$Message')";
      $rgs = mysqli_query($connection,$insertquery);

    }
?>
