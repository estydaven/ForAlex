<?php

// ----------------------------конфигурация-------------------------- //
$adminemail="esetnod1111@gmail.com";  // e-mail админа
$email="esetnod1111@gmail.com"; // почта пользователя по умолчанию
$date=date("d.m.y"); // число.месяц.год
$time=date("H:i"); // часы:минуты:секунды
$backurl="#";  // На какую страничку переходит после отправки письма
//---------------------------------------------------------------------- //


// Принимаем данные с формы

$name=$_POST['name'];
$phonet=$_POST['phone'];

$msg="
Заказ звонка или товара
Имя: $name
Телефон: $phone
";

// Отправляем письмо админу
mail("$adminemail", "$date $time Запрос индивидуальныx условий работы с инфобизнесом
от $text", "$msg");

// Выводим сообщение пользователю
print "<script language='Javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout('reload()', 0);
//--></script>";

exit;



