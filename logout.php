<?php
session_start();
session_destroy();
header('location:HOME.php');
?>