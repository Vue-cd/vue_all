const Bar = r => require.ensure([], () => r(require('./Bar.vue')), '/bar')//bar是最高层的组件
//一共三个参数

module.exports={
    path:'login',
    getComponent(nextState,cb){
        require.ensure([],(require)=>{
            cb(null,require('./'))
        })
    }
}
