import {url} from '../config'
import local from './local'
//http://test.api.sense.letv.cn/backend-sense-ticket/v1/tickets
const createFetch=(url)=>{
    const fetchFN= async (halfEnd,arg)=>{
        if(halfEnd =='tickets' ){
            url='http://test.api.sense.letv.cn/backend-sense-ticket/v1/'
        }
        const EndUrl=url+halfEnd
        const options={
            ...arg
        }
        //每次需要发送 token
        const accessToken = local.get('accessToken')
        const response= await fetch(EndUrl,{
            ...options,
            headers:{
                'Content-type':'application/json',
                ['X-Le-Sense-AT']:accessToken && accessToken
            }
        }).then(res=>{
            return res
        })
         const res = await response.json()
        return handleResponse(res)
    }
    return fetchFN
}
const fetchServer=createFetch(url)
const handleResponse=(res)=>{
    return new Promise((resolve,reject)=>{
        resolve(res)
    })
}
export {fetchServer}