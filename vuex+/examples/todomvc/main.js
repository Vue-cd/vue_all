import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

new Vue({
  store, // inject store to all children    注册所有的store实例到所有的子组件
  el: '#app',
  render: h => h(App)
})
