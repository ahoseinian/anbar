<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type');
// phpinfo();
$uploaddir = './uploads';
$uploadfile = $uploaddir . '/' . $_POST['id'] .'.jpg';
$thumbnailFile = './thumbnails/' . $_POST['id'] .'.jpg';

// if (move_uploaded_file($_FILES['image']['tmp_name'], $uploadfile)) {
//   echo "File is valid, and was successfully uploaded.\n";
// } else {
//   echo "Upload failed";
// }

include('./SimpleImage-master/src/abeautifulsite/SimpleImage.php');

try {
  $img = new abeautifulsite\SimpleImage($_FILES['image']['tmp_name']);
  $img
    ->thumbnail(400, 400)
    ->save($uploadfile)
    // ->text('SALAR STAR', './fonts/tahoma.ttf', 14, '#000000', 'top', -45, 180)
    ->thumbnail(200, 200)
    ->save($thumbnailFile);
} catch(Exception $e) {
  echo 'Error: ' . $e->getMessage();
}


?>
