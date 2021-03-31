Vue.component('add-todo', {
    template: 
    `<header>
        <input type="text" placeholder="Add new task" v-model="text" v-on:keyup.enter="addTodo" />
        <a href="#" class="btn" v-on:click="addTodo" >
            <img src="img/add.svg" alt="add">
        </a>
    </header>`,
    data() {
        return {
            text: ''
        }
    },
    methods: {
        addTodo(){
            // call on click
            let todo = {
                text: this.text,
                done: false
            };

            // update local state
            this.$parent.todos.push(todo);

            // update local storage
            localStorage.setItem('todos', JSON.stringify(this.$parent.todos));

            //empty input
            this.text = '';
        }
    }
})


Vue.component('todo-item', {
    props: {
        todo: Object,
        index: Number
    },
    template: `
    <article class="todo" 
    v-bind:class="{ done : todo.done }" 
    v-on:click="toggleDone"
    v-on:click.alt="remove"
    >
        <input type="checkbox" v-model="todo.done">
        <span>{{ todo.text }}</span>
    </article>`,
    methods: {
        toggleDone(){
            this.todo.done = !this.todo.done

            // update local storage
            localStorage.setItem('todos', JSON.stringify(this.$parent.todos));
        },
        remove(){
            
            // update local state
            this.$parent.todos.splice(this.index, 1);

            // update local storage
            localStorage.setItem('todos', JSON.stringify(this.$parent.todos));
        }
    }
})


new Vue({
    el: '#app',
    data: {
        todos: []
    },
    beforeMount(){

        let todos = localStorage.getItem('todos');

        if(todos !== null){
            
            this.todos = JSON.parse(todos);

        }

    }
});