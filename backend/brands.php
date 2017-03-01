<?php
require_once "./conf.php";

$all = $db->query("SELECT * FROM salar_brand ORDER BY brand ASC")
  ->fetchAll(PDO::FETCH_ASSOC);
$used = $db->query("SELECT id, brand FROM new_anbar WHERE brand != '' GROUP BY brand  ORDER BY brand ASC")
  ->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(array(
  'all' => $all,
  'used' => $used
));
