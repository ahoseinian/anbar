<?php
require_once "./conf.php";

$AddItems = function ($group) use ($db, $addGroups){
  $groupId = $group['id'];
  $items = $db->query("SELECT * FROM new_anbar WHERE id IN (
    SELECT itemId from new_anbar_groups_items WHERE groupId = $groupId
  )")->fetchAll(PDO::FETCH_ASSOC);
  $group['items'] = array_map($addGroups, $items);
  return $group;
};

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $_POST = json_decode(file_get_contents('php://input'), true);
  $stmt = $db
    ->prepare("INSERT INTO new_anbar_groups (name) VALUES (:name)")
    ->execute(array(
      ':name' => $_POST['name']
    ));
}
if(isset($_GET['remove']) && intval($_GET['remove']) !== 0 ){
  $stmt = $db
    ->prepare("DELETE FROM new_anbar_groups WHERE id=?")
    ->execute(array(intval($_GET['remove'])));
}
if(isset($_GET['id']) && intval($_GET['id']) !== 0 ){
  $response = $db
    ->query("SELECT * FROM new_anbar_groups WHERE id=".$_GET['id'])
    ->fetch(PDO::FETCH_ASSOC);
  $response = $AddItems($response);
}else{
  $response = $db
    ->query("SELECT * FROM new_anbar_groups")
    ->fetchAll(PDO::FETCH_ASSOC);
}

echo json_encode($response);
