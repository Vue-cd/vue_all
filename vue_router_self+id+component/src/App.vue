<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <h2>测试vue的</h2>
    <ul>
      <li><router-link :to="{path:'/first'}">go to default</router-link></li>
      <li><router-link :to="{path:'/about'}">about</router-link></li>
      <li><router-link :to="{path:'/count',query:{'name':'count'}}"> go to   count</router-link></li>
      <li><router-link :to="{path:'/count/children',query:{fs:'node'}}">go  to count/children</router-link></li>
      <li><router-link :to="{path:'/vuex'}"> go to vuex</router-link></li>
      <li><router-link :to="{path:'/vue-resource',query:{name:'xxxx'}}">vue-resource</router-link></li>
      <li><router-link :to="{path:'/fnLink',query:{name:'ccc'}}">编程式导航</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.router-link-active{
  color: darkgrey;
}
.active{
  color: red;
}
a {
  color: #42b983;
}
</style>
