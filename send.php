

<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $messageText = $_POST['message'];

  $to = 'tarbaev.architects@gmail.com'; // куда отправляем
  $subject = 'Из сайта tarbaev_architects.site1'; // тема письма

  $message = "Имя: $name \r\n";
  $message .= "Email: $email \r\n";
  $message .= "Телефон: $phone \r\n";
  $message .= "Сообщение: $messageText";

  $headers = "From: $email\r\n";  // чтобы можно было ответить клиенту

  $result = mail($to, $subject, $message, $headers);

  if ($result) {
    echo 'Message sent';
  } else {
    echo 'Error sending message';
  }
?>