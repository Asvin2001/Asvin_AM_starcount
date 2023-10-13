<?php
include 'connection.php';


  
  
    $sql="select * from STAR";
    $result = mysqli_query($conn, $sql);
$stars=0;
    while($row = mysqli_fetch_assoc($result)) {
        $star=$row['star'];
        $stars=$stars+$star;
        
    }



   



    
    
    if ($result) {
       
        header("location:http://127.0.0.1:5500/index.html?res=star&stars=$stars");
   
    }
