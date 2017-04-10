import Vue from 'vue'
import VueRouter from 'vue-router'
// 经过测试 webpack确实 进行 code split
// 方案1:
// import About from './About.vue'
// import firstComponent from './firstComponent.vue'
// import Count from './Count.vue'
// import CountChildren from './ .vue'
// import Vuexx from './vuexx.vue'
// import VueResource from './vueResource.vue'
// import  FnLink from './fnLink.vue'

// 方案2:
// const FnLink = resolve => {
//     // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
//     // （代码分块）
//     require.ensure(['./fnLink.vue'], () => {
//         resolve(require('./fnLink.vue'))
//     })
// };
// const VueResource = resolve => {
//     // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
//     // （代码分块）
//     require.ensure(['./vueResource.vue'], () => {
//         resolve(require('./vueResource.vue'))
//     })
// };
// const Vuexx = resolve => {
//     // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
//     // （代码分块）
//     require.ensure(['./vuexx.vue'], () => {
//         resolve(require('./vuexx.vue'))
//     })
// }
// const CountChildren = resolve => {
//     // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
//     // （代码分块）
//     require.ensure(['./countChildren.vue'], () => {
//         resolve(require('./countChildren.vue'))
//     })
// };;
// const Count = resolve => {
//     // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
//     // （代码分块）
//     require.ensure(['./Count.vue'], () => {
//         resolve(require('./Count.vue'))
//     })
// };
// //firstComponent  About
// const firstComponent = resolve => {
//     // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
//     // （代码分块）
//     require.ensure(['./firstComponent.vue'], () => {
//         resolve(require('./firstComponent.vue'))
//     })
// };
// // 这是按照模块增加
// const About = resolve => {
//     // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
//     // （代码分块）
//     require.ensure(['./About.vue'], () => {
//         resolve(require('./About.vue'))
//     })
// };
//上面是 webpack 最基本的做法， 之前做的react 的sense 平台就是利用这个
// 假如使用了webpack2.x的就可以使用
// 方案三:
// very good   利用webpack2 进行load lazy
const About = () => System.import('./About.vue')
const firstComponent = () => System.import('./firstComponent.vue')
const Count = () => System.import('./Count.vue')
const CountChildren  = () => System.import('./countChildren.vue')
const Vuexx = () => System.import('./vuexx.vue')
const VueResource = () => System.import('./vueResource.vue')
const FnLink = () => System.import('./fnLink.vue')
const TestVue=()=>System.import('./test.vue')
const FiltersDriective=()=>System.import('./FiltersDriective.vue');
const  Transition=()=>System.import('./transition.vue')
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
        {path:'/fnLink',component:FnLink},
        {path:'/TestVue',component:TestVue},
        {path:'/FiltersDriective',component:FiltersDriective},
        {path:'/transition',component:Transition}
    ]
});
export default router