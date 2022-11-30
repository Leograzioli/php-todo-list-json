<?php 
$todo = file_get_contents('todo.json');
$todo_list =json_decode($todo, true);

if(isset($_POST["text"])) {
    $input_txt = $_POST["text"];
    $todo_list[] = ["text" => $input_txt, "done" => false ];
    file_put_contents("todo.json", json_encode($todo_list));
}

if (isset($_POST["i"])) {
    $done = $_POST["i"];
    $todo_list[$done]["done"] = !$todo_list[$done]["done"];
    file_put_contents("todo.json", json_encode($todo_list));
}

if (isset($_POST["index"])) {
    $index = $_POST['index'];
    array_splice($todo_list, $index, 1);
    file_put_contents("todo.json", json_encode($todo_list));
}

header("Content-Type: application/json");
echo json_encode($todo_list);