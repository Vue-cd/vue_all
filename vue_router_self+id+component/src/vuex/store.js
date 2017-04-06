import Vue from 'vue'
import  Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)
const state = {
    count: 1
};
const mutations = {
    increase(state){
        console.log('state', state)
        return state.count++
    }
};

export default {
    // getters,
    // actions,
    state,
    mutations
}