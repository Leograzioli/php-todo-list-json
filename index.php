<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Axios -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js" integrity="sha512-odNmoc1XJy5x1TMVMdC7EMs3IVdItLPlCeL5vSUPN2llYKMJ2eByTTAIiiuqLg+GdNr9hF6z81p27DArRFKT7A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- Vue -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div id="app">
        <div class="container mt-5">
            <h1 class="text-center mb-5">My Todo List</h1>
            <div class="row justify-content-center">
                <div class="col-7 text-center">
                    <ul class="list-group text-start">
                        <li v-for="(item, i) in todoList"  class="list-group-item d-flex justify-content-between">
                            <div class="todos" :class="item.done? 'text-decoration-line-through' : ''" @click="toggleDone(i)">
                                {{item.text}}
                            </div>

                            <div class="is-done d-flex">
                                <div v-if="item.done">
                                    &#x2714;
                                </div>
                                <div v-else >
                                    &#x2716;
                                </div>
                                <button class="btn btn-danger ms-2" @click="cancelTask(i)">delete</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-7 mt-5">
                    <input type="text" @keyup.enter="addTodo" class="form-control" placeholder="input new todo" aria-label="input new todo" v-model="inputTxt">
                    <button @click="addTodo" class="btn btn-primary mt-1">ADD!</button>
                </div>

            </div>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>

</html>