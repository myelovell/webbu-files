



const App = new Vue({
    el: '#app',
    data: {
        text: '',
        todos: []
    },
    methods: {
        addTodo() {
            // call on click
            let todo = {
                text: this.text,
                done: false
            };

            this.todos.push(todo);

            // empty input
            this.text = '';
        }
    }
});
