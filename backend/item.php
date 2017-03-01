<?php
require_once "./conf.php";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $_POST = json_decode(file_get_contents('php://input'), true);
  if(
    isset($_POST['code']) &&
    isset($_POST['abkari_rang']) &&
    isset($_POST['foroshgah_mojodi']) &&
    isset($_POST['karkhane_mojodi']) &&
    isset($_POST['size']) &&
    isset($_POST['brand']) &&
    isset($_POST['info']) &&
    isset($_POST['item_model']) &&
    isset($_POST['item_type'])
  ){
    $newItem = array(
      ':code' => $_POST['code'],
      ':abkari_rang' => $_POST['abkari_rang'] !== '' ? $_POST['abkari_rang'] : NULL,
      ':foroshgah_mojodi' => $_POST['foroshgah_mojodi'],
      ':karkhane_mojodi' => $_POST['karkhane_mojodi'],
      ':item_model' => intval($_POST['item_model']),
      ':item_type' => intval($_POST['item_type']),
      ':size' => $_POST['size'],
      ':brand' => $_POST['brand'],
      ':info' => $_POST['info'],
    );

    if(!isset($_POST['id'])){ //handle new item save
      $query = "INSERT INTO
        new_anbar (code, abkari_rang, foroshgah_mojodi, karkhane_mojodi, item_model, size, brand, info, item_type)
        VALUES (:code, :abkari_rang, :foroshgah_mojodi, :karkhane_mojodi, :item_model, :size, :brand, :info, :item_type) ";
    } else { //Handle Update Request
      $newItem[':id'] = $_POST['id'];
      $query = " UPDATE new_anbar
        SET
          code = :code,
          abkari_rang = :abkari_rang,
          foroshgah_mojodi = :foroshgah_mojodi,
          karkhane_mojodi = :karkhane_mojodi,
          item_model = :item_model,
          item_type = :item_type,
          size = :size,
          info = :info,
          brand = :brand
        WHERE id = :id";
    }

    try {
      $stmt = $db->prepare( $query );
      $stmt->execute($newItem);
      $id = isset($newItem[':id']) ? $newItem[':id'] : $db->lastInsertId();

      $item = $db->query("SELECT * FROM new_anbar WHERE id=".$id)
        ->fetch(PDO::FETCH_ASSOC);
      $response = $addGroups($item);
    } catch (Exception $e) {
      $response = array('error' => $e->getMessage());
    }
    if(!isset($response)){
      http_response_code(400);
      $response = array('error' => 'POST error');
    }

  }

} elseif(isset($_GET['remove']) && intval($_GET['remove'])) {
  $stmt = $db
    ->prepare("DELETE FROM new_anbar WHERE id = ?")
    ->execute(array(
      intval($_GET['remove'])
    ));
  $response = array('id' => intval($_GET['remove']));
} else {
  $response = array();
}



echo json_encode($response);
