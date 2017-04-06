/**
 * Created by an.han on 16/10/15.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import {loginAction,getLimits} from './actions/login'
import dashboard from './modules/dashboard'
import tickets from './modules/tickets'
import increment from './modules/increment'
Vue.use(Vuex)
// 假如这边使用actions 或者getter的话 这边这是全局的
export default new Vuex.Store({
    actions: {loginAction},
    plugins: [],
    modules: {
        login, dashboard,tickets,increment
    }
})