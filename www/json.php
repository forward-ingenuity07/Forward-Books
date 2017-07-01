<?php
include "db.php";
$data=array();
$retreive=mysqli_query($con,"SELECT * FROM books");
while($row=mysqli_fetch_assoc($retreive))
{
$data[]=$row;

}
echo json_encode($data);
?>