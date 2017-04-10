<template>
    <div>
        <div>handleEmit</div>
        <div v-if="flag">testEmit</div>
        <div v-else="flag">falseFLAG</div>
        <span>加</span><span>{{number}}</span>
        <div>{{name}}</div>
        <button @click="handleClick">button</button>
        <p>父子组件通信的时候 v-on是绝对不能去掉的 v-on </p>
        <pre>动画的方向是 必须这么写  $route 也要放在</pre>
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
        <!--<countChildren @emit="handleEmit" :paFlag="flag"></countChildren>-->
        <p>-------------------------------</p>
        <Emit></Emit>
    </div>
</template>
<script>
    import countChildren from './countChildren.vue'
    import Emit from './emit.vue'
    export default{
        components: {
            countChildren,
            Emit
        },
        watch: {
            '$route': function (to, from, next) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
                console.log(this.transitionName)
            }
        },
        data(){
            return {
                transitionName:'slide-left',
                flag: false,
                number: 0
            }
        },
        methods: {
            handleClick(){
                this.number += 1
            },
            handleEmit(msg){
                this.flag = msg
            }
        },
        created(){
            console.log('this.flag', this.flag)
            this.name = this.$route.query.name;
//            this.$on('testEmit',function (msg) {
//               // this.$router.push('/')
//                console.log(msg)
//            })
        }
    }

</script>
<style lang="scss" scoped>
    /* 局部 作用*/
    /* 定位弄成的*/
    .child-view {
        position: absolute;
        transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);
    }
</style>