<?php
require_once "./conf.php";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $_POST = json_decode(file_get_contents('php://input'), true);
  $stmt = $db
    ->prepare("INSERT INTO new_anbar_models (name, type) VALUES (:name, :type)")
    ->execute(array(
      ':name' => $_POST['name'],
      ':type' => $_POST['type'],
    ));
}
if(isset($_GET['remove']) && intval($_GET['remove']) !== 0 ){
  try {
    $stmt = $db
      ->prepare("DELETE FROM new_anbar_models WHERE id=?")
      ->execute(array(intval($_GET['remove'])));
  } catch (PDOException $e) {
    $error = array(
      'error' => $e->getMessage(),
      'errorCode' => $e->getCode(),
      'message' => 'آیتم ها از این مدل استفاده میکنند'
    );
    http_response_code(400);
  }

}
$response = isset($error) ? $error : $db
  ->query("SELECT * FROM new_anbar_models")
  ->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($response);
