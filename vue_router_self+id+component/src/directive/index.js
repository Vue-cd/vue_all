import Vue from 'vue'
Vue.directive('focus',function (el) {
    setTimeout(()=>{
        el.focus()
    })
});
