<?php
$to = "vamshikrishna789@gmail.com";
$subject = "Comments for Portfolio";

$message = '
<html>
<head>

</head>
<body>
<p>Feedback Mail</p>
<table cellspacing="0" cellpadding="5" border="1">
<tr>
<th>Name</th>
<td>'.$_POST['name'].'</td>
</tr>
<tr>
<th>Email</th>
<td>'.$_POST['email'].'</td>
</tr>
<tr>
<th>Contact</th>
<td>'.$_POST['phone'].'</td>
</tr>
<tr>
<th>Comment</th>
<td>'.$_POST['comment'].'</td>
</tr>
</table>
</body>
</html>
';

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: vamshisadula portfolio <vamshikrishna789@gmail.com>' . "\r\n" .'Reply-To: vamshikrishna789@gmail.com' . "\r\n" . 'X-Mailer: PHP/' . phpversion();

$sent = mail($to,$subject,$message,$headers);
header('Location:index.html#contact');


/*if(isset($sent)){
    header('Location:index.html#contact');
    $_SESSION['msg'] = '<font color="green">Your comment has been successfully sent.</font>';
} else {
     $_SESSION['msg'] = '<font color="green">Your comment has been successfully sent.</font>';
}*/

?>