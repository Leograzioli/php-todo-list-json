const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [],
            inputTxt: "",
        }
    }, 
    created () {
        axios.get('server.php').then( (resp) => {
            this.todoList = resp.data;
        })
    },
    methods: {
        addTodo () {
            const data = {
                text: this.inputTxt,
                done: false
            }
            axios.post('server.php', data, {
                headers: {'Content-Type': 'multipart/form-data'}
            }).then((resp) => {
                this.todoList = resp.data,
                this.inputTxt = ""
            });
        }
    }
}).mount("#app")