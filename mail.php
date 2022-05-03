<?php 




//$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];


$to = "whiitered@gmail.com";     


$subject = 'Заявка с тестового сайта';

if(mail($to, $subject,$phone,$email)) {
    echo 'Jnghfdktyj';
} else {
    echo 'нет';
}
?>