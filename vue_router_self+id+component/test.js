import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(Vuex);// mapAction mapState;

const router = new VueRouter({
    hash: 'history',
    routes: [
        {
            path: '/', component: '',
            children: [
                {path: ':id', component: ''}
            ],
        }
    ]
});
router.beforeEach((to,from,next)=>{
    next()// 没有这个不是让执行的
});
const store=new Vuex.Store({
    modules:{},

});
new Vue({
    el:'#ap',
    store,
    router,
    render:h=>h(app)//组件
})