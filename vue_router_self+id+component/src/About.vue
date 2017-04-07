<template>
    <div>
        <p>vue-about</p>
        <p>{{name}}</p>
        <button @click="handleClick">button</button>
        <br>
        flag:{{flag}}
        <div>
            <div v-if="flag">
                <Children></Children>
            </div>
            <h1 v-else>No</h1>
        </div>
    </div>
</template>
<script>
    import  Children from './children.vue'
    export default{
        name: 'about',
        components: {
            Children
        },
        data(){
            return {
                name: 'vue -about',
                flag: false
            }
        },
        methods: {
            handleClick(){
                this.flag = !this.flag
            }
        },
        //不管是进入一个路由还是离开一个路由，都是可以的
        beforeRouteEnter(to, from, next){
            window.confirm('进入这个路由要做的事情')
            next()// 必须有这个否则 进行不下去
        }
    }
</script>