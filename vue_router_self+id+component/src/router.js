import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './About.vue'
import firstComponent from './firstComponent.vue'
import Count from './Count.vue'
import CountChildren from './countChildren.vue'
import Vuexx from './vuex_1.vue'
import VueResource from './vue-resource.vue'
import  FnLink from './fnLink.vue'
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',// vue 默认是 hash 我们可以利用mode:History 会自动进入hash
    // linkActiveClass:'active', //直接加入 然后在app.vue  里面写入就可以或者直接写router-link-active 样式
    routes: [// '/'这个路由是默认的样式
        {path: '/first', component: firstComponent},
        {path: '/about', component: About},
        {path: '/count', component: Count,
        children:[
            {path:':id',component:CountChildren}// 这样就可以将路径存器来了
        ]},
        {path:'/vuex',component:Vuexx},
        {path:'/vue-resource',component:VueResource},
        {path:'/fnLink',component:FnLink}
    ]
});
export default router