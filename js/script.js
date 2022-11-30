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
            if (this.inputTxt.length > 4) {
                const data = {
                    text: this.inputTxt,
                }
                axios.post('server.php', data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then((resp) => {
                    this.todoList = resp.data,
                        this.inputTxt = ""
                });
            }
        },

        toggleDone(index) {

            const data = {
                i: index,
            }

            axios.post('server.php', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then( (resp) => {
                this.todoList = resp.data
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