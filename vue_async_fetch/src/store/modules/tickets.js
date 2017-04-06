import {GET_TICKETS} from '../types'
import {getTickets} from '../actions/login'



const state = {
    tickets: {},    // 所有请求下来的券码信息
    pending: false, // 加载状态
    keysInPage: [], // 当前页券码 key
    count: 0,       // 券码总数
    params: {},      // 表格的请求参数
};
const mutations = {
    [GET_TICKETS](state, action){
        state.tickets=action.body.tickets//count
        state.count=action.body.count;
        return state
      //  console.log('GET_TICKETS')
    }
};
const actions = {
    getTickets
};
//getters .vue下面肯定要有getter 否则 没有最新的数据过去
const getters = {
    tickets(state){

        console.log(state)
        return state
    }
}
export default {
    mutations,
    state,
    actions,
    getters
}