const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [],
            inputTxt: "",
        }
    },
    created() {
        axios.get('server.php').then((resp) => {
            this.todoList = resp.data;
        })
    },
    methods: {
        addTodo() {
            const data = {
                text: this.inputTxt,
            }
            axios.post('server.php', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then((resp) => {
                this.todoList = resp.data,
                    this.inputTxt = ""
            });
        },

        toggleDone(index) {

            this.todoList[index].done = !this.todoList[index].done

            const data = {
                i: index,
                done: this.todoList[index].done
            }

            axios.post('server.php', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
        },

        cancelTask(index) {
            console.log(index);
             const data = {
                index: index
             }

             axios.post('server.php', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then( (resp) => {
                this.todoList = resp.data
            })
        }
    }
}).mount("#app")