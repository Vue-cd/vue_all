<template>
  <div id="app">
    <h1>Auth Flow</h1>
    <ul>
      <li>
        <router-link v-if="loggedIn" to="/logout">Log out</router-link>
        <router-link v-if="!loggedIn" to="/login">Log in</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/dashboard">Dashboard</router-link>
        (authenticated)
      </li>
    </ul>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>
  </div>
</template>

<script>
import auth from '../auth'
//我们只要return之后在全局下面就可以有 了这个变量， 我们执行方法所以都可以传入
export default {
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {//react componentWillMount这个 是将要加载这个数据要做的事情
  console.log('appcreated')
  console.log(this.$route)
  console.log(this.$router)
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
