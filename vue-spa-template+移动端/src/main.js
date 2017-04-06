// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Swiper from 'swiper'
import FastClick from 'fastclick'
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import storeOption from './store';
require('swiper/dist/css/swiper.css');
console.log('Swiper->',Swiper);
Vue.use(Vuex);
Vue.use(VueRouter);
// 处理swiper
//防止出现三秒点击的
FastClick.attach(document.body);
//计算所有的
~function () {
  var winW = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = winW /320 * 100 + "px";
}();

new Swiper(".swiper-container", {
  loop: true,
  direction: "vertical",
  //->向上切换结束:swiper->当前本次初始化new Swiper创建出来的实例
  onSlidePrevEnd: changeEnd,
  //->向下切换结束:swiper.activeIndex当前活动块的索引
  onSlideNextEnd: changeEnd
});

//->当切换结束的时候,我们需要做的事情:清除所有slide块的ID,在让当前活动块拥有对应的ID即可,拥有对应的ID才会有对应的动画
function changeEnd(swiper) {
  console.log('swiper')
  var n = swiper.activeIndex,
      slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
  [].forEach.call(slideAry, function (slide, index) {
    if (n === index) {
      /*slide.id = (n == 1 || n == 4) ? "page1" : "page2";
       return;*/
      if(n==0||n==5){
        slide.id="page5";
        return;
      }
      if(n==1||n==6){
        slide.id="page1";
        return;
      }
      if(n==2){
        slide.id="page2";
        return;
      }
      if(n==3){
        slide.id="page3";
        return;
      }
      if(n==4){
        slide.id="page4";
        return;
      }
    }
    slide.id = null;
  });
}


// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

// 创建一个 store 对象用于管理应用状态
const store = new Vuex.Store(storeOption);

window.__lendApp__ = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});