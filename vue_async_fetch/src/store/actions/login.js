import * as types from '../types'
import 'isomorphic-fetch';
import local from '../../utils/local'
import {url} from '../../config'
import  {userStorage} from '../../utils/index'
import {fetchServer} from '../../utils/fetchServer'
//  这个废了
export const loginAction=({commit,state},data)=>{
    console.log('----------')
    console.log(data)
    var str='auth/access_token/basic'//`${url}auth/access_token/basic`
    fetchServer(str,{...data,method:'post'}).then(res=>{
        userStorage(res.body)
    });
    commit(types.LOGIN)
};
export const getLimits=({commit,state},data)=>{
    // 这个位置我要获取权限 只有获取了权限才能
   //加载组件的时候就会讲所有的 state 弄好
    const user_id=  local.get('userInfo').user_id
    //var user_id=state.userInfo.user_id

    const menus=[]
    var str=`limits/user?user_id=${user_id}`
    return fetchServer(str).then(res=>{// 先走getters 里面 然后是异步的  最后是reducers
        //console.table(res.body.limits)
        res.body.limits.forEach((item,index)=>{
            if(item.limit_type=="menu"){
                menus.push({
                    path: item.limit_uri,
                    name: item.limit_name,
                });
            }
        })
    }).then(()=>{
        state.menus=menus
        commit(types.GET_LIMITS)//
    })

/*两种写法都可以 好像是因为在赋值的过程中赋值了
*  state.menus=menus
 commit(types.GET_LIMITS)//
*
* */
};
export const getTickets=({commit,state},data)=>{

    var  str='tickets'
    if(typeof data =='number'){
       str+=`?to_page=${data}`
    }
    return fetchServer(str).then(res=>{
        commit(types.GET_TICKETS,res)
        return res
    })
};
export const increment=({commit})=>{
    console.log('--------------')
    commit(types.INCREMENT)
}
