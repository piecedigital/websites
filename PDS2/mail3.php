<?php
$name = $_POST['name'];
$email_address = $_POST['email'];
$enquiry  = $_POST ['enquiry'];
$errors = '';
$myemail = 'admin@piecedigital.x10host.com';//<-----Put Your email address here.
if(empty($_POST['name']) 	 ||
   empty($_POST['email'])	 ||
   empty($_POST['enquiry']))
{
    $errors .= "\n Error: all fields are required";
    header('Location: bio.html?s=failed');
}

$enquiry = $_POST['enquiry'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
    header('Location: bio.html?s=failed');
}

if( empty($errors))
{
$to = "$myemail";
$email_subject = "Contact form submission from: $name";
$email_body = "New message from contact box. ".
" Here are the details:\n
Name: $name \n
Email: $email_address \n
 Message: $enquiry";
$headers = "From: $email_address \n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: bio.html?s=success');
}
?>
