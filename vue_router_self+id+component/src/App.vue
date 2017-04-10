<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
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
      <li><router-link :to="{path:'/TestVue',query:{name:'xxxxx'}}">TestVue</router-link></li>
      <li><router-link :to="{path:'/FiltersDriective'}">FiltersDriective</router-link></li>
      <li><router-link :to="{path:'/transition'}">transition</router-link></li>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
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
/* 路由的颜色样式*/
.router-link-active{
  color: darkgrey;
}
.active{
  color: red;
}
a {
  color: #42b983;
}
/*两者缺一不可*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
