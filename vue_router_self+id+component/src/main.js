import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import count from './vuex/store'
import store from './vuex/index'
import VueResource from 'vue-resource'
import axios from 'axios'
Vue.use(VueResource);
Vue.use(axios);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
