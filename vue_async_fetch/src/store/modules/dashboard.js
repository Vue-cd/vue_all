import local from '../../utils/local'
import {GET_LIMITS, LOGOUT} from '../types'
import {getLimits} from '../actions/login'
const state = {
    userInfo: local.get('userInfo') || {},
    menus: [],
    pending: false,
}
// 获取权限 getLimits getTickets
const mutations = {
    [GET_LIMITS](state){

        state.userInfo=local.get('userInfo')
         state
    },
    //一会看一下第二个参数是什么
    [LOGOUT](state){

    }
};
const actions = {
    getLimits: getLimits
}
const getters = {
    count(state){
        console.log('state', state);
        console.log('getters')
        return state
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}