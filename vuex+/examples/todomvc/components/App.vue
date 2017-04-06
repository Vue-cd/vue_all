<style src="todomvc-app-css/index.css"></style>

<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="tryAddTodo">
    </header>
    <!-- main section -->
    <section class="main" v-show="todos.length">
      <input class="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll(!allChecked)">
      <ul class="todo-list">
        <todo v-for="todo in filteredTodos" :todo="todo"></todo>
      </ul>
    </section>
    <!-- footer -->
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :href="'#/' + key"
            :class="{ selected: visibility === key }"
            @click="visibility = key">
            {{ key | capitalize }}
          </a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearCompleted">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import Todo from './Todo.vue'

import {
  addTodo,
  toggleAll,
  clearCompleted
} from '../vuex/actions'

const filters = {
  all:
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}
// 上下两个方向的结合 就是为了能todos => todos,够 替代react中的react-redux 中的connect
export default {
  components: { Todo },
  vuex: {
  //getters 就是为了能够获取数据吗？ 因为react dispatch这个方法执行的时候reducer 这个方法也执行得最新的数据state 然后通过render 这方法 马上返回到页面
    getters: {
      todos: state => state.todos
    },
    // 主要是还是为了dispath action
    actions: {
      addTodo,
      toggleAll,
      clearCompleted
    }
  },
  //data 是存放数据的
  data () {
    return {
      visibility: 'all',
      filters: filters
    }
  },
  // 就是在计算属性的函数中直接返回某个 store 的状态： 中文的意思是计算  所以是对数据操作
  //  methods 是我们定义的方法 不对data 里面 或者state里面的数据进行操作
  computed: {
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  //methods 是组件内部写的方法  组件内部使用
  methods: {
    tryAddTodo (e) {
      var text = e.target.value;
      if (text.trim()) {
        this.addTodo(text)
      }
      e.target.value = ''
    }
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>
