/**
 * Created by an.han on 16/10/15.
 */

export default {
    state: {
        message: '',
        data: 0,
        testAction:99
    },
    mutations: {
        MESSAGE (state, value) {
            console.log('value', value)
            return state.message = value || state.message;
        },
        click(state, value){
            console.log('click', state)
            console.log('value', value)
            return  state.data=value
        },
        testAction(state,value){
            console.log(state);
            console.log('testAction');
            console.log('value',value)
            return state.testAction=value
        }
    },
    actions:{
        mapClick({commit,state},data){
            console.log('mapAction');
            //console.log('data',data);
            commit('testAction','我是测试 testAction ！！！！成功了')
        }
    }
}