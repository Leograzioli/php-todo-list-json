const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [],
            inputTxt: "",
            clickedIndex: 0
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
            this.clickedIndex = index;
            this.todoList[this.clickedIndex].done = !this.todoList[this.clickedIndex].done
        }
    }
}).mount("#app")