const { createApp } = Vue;

const App = {
    name: "App",
    data() {
        return {
            text: "",
            todos: [{
                id: 0,
                text: "exempel"
            }],
            counter: 0,
            doShowComplete: true,
            search: ""
        };
    }
};

const app = createApp(App);

app.component('item', {
    name: "Item",
    /* lägg till props, data och metoder för item komponenten */
    template: `#item-template`
});

app.mount("#app");
