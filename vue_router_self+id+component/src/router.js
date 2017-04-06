import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './About.vue'
import firstComponent from './firstComponent.vue'
import Count from './Count.vue'
import CountChildren from './countChildren.vue'
import Vuexx from './vuex_1.vue'
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: firstComponent},
        {path: '/about', component: About},
        {path: '/count', component: Count,
        children:[
            {path:':id',component:CountChildren}// 这样就可以将路径存器来了
        ]},
        {path:'/vuex',component:Vuexx}
    ]
});
export default router