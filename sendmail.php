<?php
    $lastpage = $_SERVER["HTTP_REFERER"];
    error_reporting( E_ALL & ~( E_NOTICE | E_STRICT | E_DEPRECATED ) ); // Aquí se genera un control de errores "NO BORRAR NI SUSTITUIR"
    require_once "Mail.php"; // Aquí se llama a la función mail "NO BORRAR NI SUSTITUIR"
    
    $to = 'milkman@lalechemusic.com'; // Aquí definimos quien recibirá el formulario
    $from = 'milkman@lalechemusic.com'; // Aquí definimos que cuenta mandará el correo, generalmente perteneciente al mismo dominio
    $host = 'smtp.lalechemusic.com'; // Aquí definimos cual es el servidor de correo saliente desde el que se enviaran los correos
    $username = 'milkman@lalechemusic.com'; // Aqui se define el usuario de la cuenta de correo
    $password = 'a53318214M!'; // Aquí se define la contraseña de la cuenta de correo que enviará el mensaje
    $subject = "Mensaje del formulario de contacto de AM Broker enviado por ".$_POST["contactname"]." (".$_POST["contactemail"].")"; // Aquí se define el asunto del correo
    $body = $_POST["msg"]; // Aquí se define el cuerpo de correo
    
    // A partir de aquí empleamos la función mail para enviar el formulario 
    $headers = array ('From' => $from,'To' => $to,'Subject' => $subject);
    $smtp = Mail::factory('smtp',array ('host' => $host,'auth' => true,'username' => $username, 'password' => $password));
    $mail = $smtp->send($to, $headers, $body);
    
    echo "Mensaje enviado";
    header("Location: $lastpage");