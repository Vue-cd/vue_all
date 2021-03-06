import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);// Vue.use(VueRouter); Vue.use(Vuex)

// A route component can also contain <router-view> to render
// nested children route components
const Parent = {
  template: `
    <div class="parent">
      <h2>Parent</h2>
      <router-view class="child"></router-view>
    </div>
  `
}

const Default = { template: '<div>default</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

const router = new VueRouter({
  mode: 'history',//hash
  base: __dirname,
  routes: [// 我靠和react的理由，特别一样有 路由的嵌套  对了express 是一个方法 koa2是
     { path: '/', redirect: '/parent' },
     { path: '/parent', component: Parent,
      children: [
        // an empty path will be treated as the default, e.g.
        // components rendered at /parent: Root -> Parent -> Default
        { path: '', component: Default },

        // components rendered at /parent/foo: Root -> Parent -> Foo
        { path: 'foo', component: Foo },

        // components rendered at /parent/bar: Root -> Parent -> Bar
        { path: 'bar', component: Bar },

        // NOTE absolute path here!
        // this allows you to leverage the component nesting without being
        // limited to the nested URL.
        // components rendered at /baz: Root -> Parent -> Baz
        { path: '/baz', component: Baz }// 之前react 好像是需要传入进去才可以
      ]
    }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <h1>Nested Routes</h1>
      <ul>
        <li><router-link to="/parent">/parent</router-link></li>
        <li><router-link to="/parent/foo">/parent/foo</router-link></li>
        <li><router-link to="/parent/bar">/parent/bar</router-link></li>
        <li><router-link to="/baz">/baz</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');

