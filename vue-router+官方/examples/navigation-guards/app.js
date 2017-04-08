import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {template: '<div>home</div>'}
const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}
//
/**
 * Signatre of all route guards:
 * @param {Route} route
 * @param {Function} next - confirm the navigation
 * @param {Function} redirect - cancel and redirect to another route
 * @param {Function} abort - abort the navigation
 */
function guardRoute(to, from, next) {
    console.log('guardRoute');
    if (window.confirm(`Navigate to ${to.path}?`)) {
        next()
    } else if (window.confirm(`Redirect to /baz?`)) {
        next('/baz')
    } else {
        next(false)
    }
}

// Baz implements an in-component beforeRouteLeave hook
const Baz = {
    data () {
        return {saved: false}
    },
    template: `
    <div>
      <p>baz ({{ saved ? 'saved' : 'not saved' }})<p>
      <button @click="saved = true">save</button>
    </div>
  `,
    beforeRouteLeave (to, from, next) {//和beforeLeave 是一个性质的 都有三个参数 两个钩子
        console.log('beforeRouterLeave');
        // 每次组件里的this都是组件本身
        if (this.saved || window.confirm('Not saved, are you sure you want to navigate away?')) {
            next()//我知道了  这个next的目的就是为了能去下一个路由没有这个 是无法往下一个路由走的
        } else {
            console.log('我是一直 不会走的')
            next(false)
        }
    }
}

// Baz implements an in-component beforeRouteEnter hook
const Qux = {
    data () {
        return {
            msg: null
        }
    },
    template: `<div>{{ msg }}</div>`,
    beforeRouteEnter (to, from, next) {
        /*    // Note that enter hooks do not have access to `this`
         // because it is called before the component is even created.
         // However, we can provide a callback to `next` which will
         // receive the vm instance when the route has been confirmed.
         //
         // simulate an async data fetch.
         // this pattern is useful when you want to stay at current route
         // and only switch after the data has been fetched.*/
        // 异步做了一些事情
        console.log('beforeRouteEnter马上进来'); //具体这个是做什么我也不知道
        setTimeout(() => {
            console.log('xiaohong');
            next(vm => {/* // 这个情况和 componentWillMount 差不多 来发送请求差不多*/
                // 获取完数据 然后渲染到页面上; watch 这个比较好监听router的变化 是不是就只监听router的变化
                console.log('hong');
                vm.msg = 'Qux'
            })
        }, 300)
    }
};
//
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Home},

        // inline guard
        {path: '/foo', component: Foo, beforeEnter: guardRoute},//是局部路由

        // using meta properties on the route config
        // and check them in a global before hook
        {path: '/bar', component: Bar, meta: {needGuard: true}},

        // Baz implements an in-component beforeRouteLeave hook
        {path: '/baz', component: Baz},

        // Qux implements an in-component beforeRouteEnter hook
        {path: '/qux', component: Qux},

        // in-component beforeRouteEnter hook for async components
        {
            path: '/qux-async', component: resolve => {
            // 先执行这个 所有加载就可以了
            console.log('qux-async');
            setTimeout(() => {
                // 还是这个组件
                console.log('resolve');
                resolve(Qux)
            }, 0)
        }
        }
    ]
})
// 每次进入前 是beforeEach  和react中的onEnter onLeave 一个性质应该是  好像是一种断言库的东西
router.beforeEach((to, from, next) => {// 每次要做事  假如cookie 我感觉不错 token 最好
    console.log('router.beforeEach'); // to 和from 都是 路由对象
    console.log('to', to); //整个路由的信息 query 和params 等等
    // 需要研究一下这个  to 或者
    if (to.matched.some(m => m.meta.needGuard)) {
        console.log('to.matched.some');//对一个特定的路由做处理，当然 还有一些其他的 大家都做的路由
        guardRoute(to, from, next)//警卫路线
    } else {
        next()
    }
})

new Vue({
    router,
    template: `
    <div id="app">
      <h1>Navigation Guards</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <li><router-link to="/baz">/baz</router-link></li>
        <li><router-link to="/qux">/qux</router-link></li>
        <li><router-link to="/qux-async">/qux-async</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');
