import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import count from './vuex/store'
import store from './vuex/index'
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
