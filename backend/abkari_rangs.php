<?php
require_once "./conf.php";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $_POST = json_decode(file_get_contents('php://input'), true);
  if(isset($_POST['id'])){
    $stmt = $db
      ->prepare("UPDATE new_anbar_abkari_rang SET name = :name WHERE id = :id")
      ->execute(array(
        ':id' => $_POST['id'],
        ':name' => $_POST['name']
      ));
  } else {
    $stmt = $db
      ->prepare("INSERT INTO new_anbar_abkari_rang (name) VALUES (:name)")
      ->execute(array(
        ':name' => $_POST['name']
      ));
  }
}
if(isset($_GET['remove']) && intval($_GET['remove']) !== 0 ){
  try {
    $stmt = $db
      ->prepare("DELETE FROM new_anbar_abkari_rang WHERE id=?")
      ->execute(array(intval($_GET['remove'])));
  } catch (PDOException $e) {
    $error = array(
      'error' => $e->getMessage(),
      'errorCode' => $e->getCode(),
      'message' => 'آیتم ها از این ویژگی استفاده میکنند'
    );
    http_response_code(400);
  }

}
$response = isset($error) ? $error : $db
  ->query("SELECT * FROM new_anbar_abkari_rang")
  ->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($response);
