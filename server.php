<?php 
$todo = file_get_contents('todo.json');
$todo_list =json_decode($todo, true);

header("Content-Type: application/json");
echo json_encode($todo_list);