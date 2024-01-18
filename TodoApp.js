Vue.component('todo-item', {
    props: ['todo'],
    template: `
      <li>
        <input type="checkbox" v-model="todo.isCompleted">
        <span :class="{ completed: todo.isCompleted }">{{ todo.text }}</span>
      </li>
    `
  });
  
  Vue.component('todo-list', {
    data() {
      return {
        newTodoText: '',
        todos: [
          { id: 1, text: 'Aprender JavaScript', isCompleted: false },
          { id: 2, text: 'Estudiar Vue.js', isCompleted: false },
          { id: 3, text: 'Construir algo increíble', isCompleted: false }
        ],
        nextTodoId: 4
      }
    },
    computed: {
      incompleteTodosCount() {
        return this.todos.filter(todo => !todo.isCompleted).length;
      }
    },
    methods: {
      addNewTodo() {
        if(this.newTodoText.trim() !== '') {
          this.todos.push({
            id: this.nextTodoId++,
            text: this.newTodoText,
            isCompleted: false
          });
          this.newTodoText = '';
        }
      }
    },
    template: `
      <div>
        <input v-model="newTodoText" @keyup.enter="addNewTodo" placeholder="Añadir una nueva tarea">
        <button @click="addNewTodo">Añadir</button>
  
        <ul>
          <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
        </ul>
  
        <span>Tareas pendientes: {{ incompleteTodosCount }}</span>
      </div>
    `
  });
  
  new Vue({
    el: '#todo-app'
  });
  