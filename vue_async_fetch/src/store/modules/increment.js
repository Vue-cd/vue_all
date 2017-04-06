import {INCREMENT} from '../types'
import {increment} from '../actions/login'
const state={
    count:0
}

const mutations = {
    [INCREMENT] (state) {
        console.log('INCREMENT')
        state.count++
    },
    DECREMENT (state) {
        state.count--
    }
}
const actions={
    increment
}
const getters={

}
export default {
    actions,
    state,
    mutations
}