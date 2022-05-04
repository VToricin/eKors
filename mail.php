<?php 




//$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$newOrder = $_POST['newOrder'];
$nn = htmlspecialchars($_POST['newOrder']);
$nn = urldecode($nn);

$to = "whiitered@gmail.com";     

$message = "Новый заказ на: " . $newOrder . "контакты для обратной связи: " . $phone . ", " . $email;
$subject = "Заявка с тестового сайта";



if(mail($to, $subject, $message)) {

    header('location: thank-you.html');
} else {
    echo 'нет';
} 
?>