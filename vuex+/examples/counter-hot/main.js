/*
import Vue from 'vue'
import store from './vuex/store'
import Counter from './Counter.vue'

new Vue({
  el: '#app',
  store,// in
  render: h => h(Counter)
});
*/

import Vue from 'vue'
import  Counter from './Counter.vue'// 这个里面写路由 来进行 需要些vue的实例吗
import store from  './vuex/store'
new Vue({
    el: '#app',
    store,
    render: h => h(Counter)
})




