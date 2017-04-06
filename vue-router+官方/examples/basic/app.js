import Vue from  'vue'
import VueRouter from  'vue-router';
Vue.use(VueRouter);
const Home = {template: '<div>h00000000000000e</div>'};

const About = {
    template: `
    <div>
      <h2>Users</h2>
      <router-view></router-view>
    </div>
  `
};
const Ab = {template: '<div><p>pppppppppp</p>{{$route.params.ab}}{{$route.query}}</div>'}
const AAA = {template: `<div>我是通过to过来的不是通过:to过来{{$route.params.ab}}{{$route.query}}</div>`}
//这个本身就是路由本身
//

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [//routes 怎么弄得 和 webpack2 差不多
        {path: '/', component: Home},
        {// 这个位置 必须有 '///////';否者是不显示的
            path: '/about', component: About, //这个位置是无所谓的
            children: [//可以有子路由，但是模板里面必须要有  router-view来进行显示
                {path: ':ab', component: AAA},//这是query的方式是笔记好的
                // {path: 'ab', component: AAA} //这个位置是绝对不能加 ""{{{/}}}}""" 这东西的
            ]//上面两种都是的可以的  :就是证明有params存起来
        }
    ]
});
// 请看模板的假如没有 router-view 没有路径的内容是没有办法进行匹配的
new Vue({
    router,
    template: `  <div id="app">
        <h1>ycd</h1>
        <ul>
            <li><router-link to="/">home</router-link></li>
             <li><router-link to="/about/ab">通过to过去的 不是通过:to</router-link></li>
             <li><router-link :to="{path:'/about'}">我是有query形式的</router-link></li>
            <li><router-link :to="{path:'/about/ab',query:{name:'yangchongduo'}}">我是有query形式的</router-link></li>
        </ul>
      <router-view class="view"></router-view>
    </div>`

}).$mount('#app')