import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './vuex/store'
import { currency } from './currency'
//自定义过滤器  厉害
Vue.filter('currency', currency)

new Vue({
  el: '#app',
  store,// inject store  all children
  render: h => h(App)
})
