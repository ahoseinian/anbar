<?php
require_once "./conf.php";
$response = NULL;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $_POST = json_decode(file_get_contents('php://input'), true);
  $stmt = $db
    ->prepare("INSERT INTO new_anbar_groups_items (groupId, itemId) VALUES (:groupId, :itemId)")
    ->execute(array(
      ':groupId' => $_POST['groupId'],
      ':itemId' => $_POST['itemId'],
    ));
  $item = $db
    ->query("SELECT * FROM new_anbar WHERE id = ". $_POST['itemId'])
    ->fetch(PDO::FETCH_ASSOC);

  $response = array(
    'groupId' => intval($_POST['groupId']),
    'item' => $addGroups($item)
  );
}
if(isset($_GET['remove']) && intval($_GET['remove']) !== 0 ){
  $stmt = $db
    ->prepare("DELETE FROM new_anbar_groups_items WHERE id=?")
    ->execute(array(intval($_GET['remove'])));
}
if(isset($_GET['groupId']) && intval($_GET['groupId']) !== 0 && isset($_GET['itemId']) && intval($_GET['itemId']) !== 0  ){
  $stmt = $db
    ->prepare("DELETE FROM new_anbar_groups_items WHERE itemId=? AND groupId=? ")
    ->execute(array(
      intval($_GET['itemId']),
      intval($_GET['groupId'])
    ));
  if($stmt){
    $response = array(
      'removedItemId' => intval($_GET['itemId'])
    );
  }
}



echo json_encode($response);
