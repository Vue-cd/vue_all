import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = { template: '<div><h2>我是home组件 是通过/ 过来的</h2></div>' }
const About = { template: '<div><h2>About</h2></div>' }

const Users = {
  template: `
    <div>
      <h2>Users</h2>
      <router-view></router-view>
    </div>
  `
}
//$route 传过来的参数放在$router里面 params有这个值就会在 显示子组件
const User = { template: '<div>{{ $route.params.username }}{{$route.query}}</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/users', component: Users,
      children: [
        { path: ':username', name: 'user', component: User }//这样会有username 这样的params name是不能进行query传输的
      ]
    }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <h1>Active Links</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/" exact>/ (exact match)</router-link></li>

        <li><router-link to="/users">/users</router-link></li>
        <li><router-link to="/users" exact>/users (exact match)</router-link></li>

        <li><router-link to="/users/evan">/users/evan</router-link></li>
        <li><router-link to="/users/evan#foo">/users/evan#foo</router-link></li>
        <li>
          <router-link :to="{ path: '/users/evan', query: { foo: 'bar' }}">
            /users/evan?foo=bar
          </router-link>
        </li>
        <li><!-- #635 -->
          <router-link :to="{ name: 'user', params: { username: 'evan' }, query: { foo: 'bar' }}" exact>
            /users/evan?foo=bar (named view + exact match)
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/users/evan', query: { foo: 'bar', baz: 'qux' }}">
            /users/evan?foo=bar&baz=qux
          </router-link>
        </li>

        <li><router-link to="/about">/about</router-link></li>

        <router-link tag="li" to="/about">
          <a>/about (active class on outer element)</a>
        </router-link>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');//这叫做手动挂在 到
/*
* created 是已经各种数据都已经准备好了 还没有还是编译 ，watch 是回调 好像是
*
* */
