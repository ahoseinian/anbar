<?php
$db = new PDO('mysql:host=localhost;dbname=salardugme;charset=utf8', 'salar', '123456');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type');

$addGroups = function($item) use ($db){
  $itemId = $item['id'];
  $item['groups'] = $db
    ->query("SELECT * FROM new_anbar_groups WHERE id IN
      (SELECT groupId from new_anbar_groups_items where itemId = $itemId)")
    ->fetchAll(PDO::FETCH_ASSOC);
  return $item;
};
