// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app';
import router from './routes';
import store from './store';
// vue是不是也是中间件的意思 有可能 对就是中间件
Vue.use(ElementUI)
Vue.use(Vuex);
Vue.use(VueRouter);

// 创建一个路由对象用于管理页面的路由

// 创建一个 store 对象用于管理应用状态
//const store = new Vuex.Store(storeOption);
 new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});