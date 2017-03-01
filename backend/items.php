<?php
require_once "./conf.php";

$response = array();
$whereArr = array();
if(isset($_GET['code']) && intval($_GET['code']) !== 0 ){
  $whereArr[] = " code = ".intval($_GET['code']);
}
if(isset($_GET['item_model']) && $_GET['item_model'] != '' ){
  $whereArr[] = " item_model = ".$_GET['item_model'];
}
if(isset($_GET['item_type']) && $_GET['item_type'] != '' ){
  $whereArr[] = " item_type = ".$_GET['item_type'];
}
if(isset($_GET['abkari_rang']) && $_GET['abkari_rang'] != '' ){
  $whereArr[] = " abkari_rang = ".$_GET['abkari_rang'];
}
if(isset($_GET['brand']) && $_GET['brand'] != '' ){
  $whereArr[] = " brand = '".$_GET['brand']."'";
}
if(isset($_GET['group']) && $_GET['group'] != '' ){
  $whereArr[] = " nagi.groupId = '".$_GET['group']."'";
}


$where = count($whereArr) ? " WHERE " . implode(" AND ", $whereArr) : NULL;
$orderBy =  " ORDER BY id DESC ";

$query = "SELECT DISTINCT
  na.*, IFNULL(na.abkari_rang, '') AS abkari_rang
  FROM new_anbar AS na
  LEFT JOIN new_anbar_groups_items as nagi ON ( na.id = nagi.itemId )
   $where $orderBy";
try {
  $response = $db->query( $query )->fetchAll(PDO::FETCH_ASSOC);
  $response = array_map($addGroups, $response);
} catch (Exception $e) {
  http_response_code(400);
  $response = array(
    'error' => $e->getMessage()
  );
}



echo json_encode($response);
