/*const Hello = r => require(['views/hello'], r);
 const NotFound = r => require(['views/notfound'], r);

 // 根目录
 const rootPath = '';

 // 页面路由
 const routes = [
 {path: '', redirect: {name: 'hello'}},
 {path: '/hello', component: Hello, name: 'hello'}
 ].map(route => {
 route.path = rootPath + route.path;
 return route;
 });

 // 404 页
 routes.push({path: '*', component: NotFound, name: 'notfound'});

 export default routes;*/
import login from '../components/login.vue'
import dashboard from '../components/dashboard.vue'
import tickets from '../components/tickets.vue'
import markets from '../components/markets.vue'
import ticketEdit from '../components/ticketEdit.vue'
import ticketDetail from '../components/ticketDetail.vue'
import VueRouter from 'vue-router'
import local from '../utils/local'
/*path: '/login',
 query: { redirect: to.fullPath }*/
const requireAuth = (to, from, next)=> {
    console.log('-----------')
    if (!local.get('userInfo')) {
        next({
            path: '/',
        })
    } else {
        next()
    }
}//beforeEnter:requireAuth
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [// 第一个是必须要加‘/’
        {path: '/', component: login},
        {
            path: '/dashboard', component: dashboard, beforeEnter: requireAuth,
            children: [
                {path: '/ticket', component: tickets},
                {path:'/ticket/:id/edit',component:ticketEdit},
                {path:'/ticket/:id',component:ticketDetail},
                {path:'/market',component:markets}
            ]
        }
    ]
})













