<template>
    <div>
        <div>firstComponent</div>
        <div>{{name}}</div>
        <button @click="handleClick">button</button>
        <input type="text" v-model="price">
        <br>
        <input type="number" v-model="number">
        <br>
        <p><span class='count'>总的价格:</span><span v-text="count"></span></p>
        <br>
        <button @click="go">go(-1)</button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                name: 'vue 渐进式的框架',
                price: 10,
                number: 1,
            }
        },
        methods: {
            handleClick(){
                console.log('------------')
            },
            go(){
                // 这就是编程是导航
                this.$router.go(-1)
            }
        },
        created(){
          console.log('this.$route.query',this.$route.query)
        },
        computed: {
            count(){
                return this.price * this.number
            }
        },

        // 我们在每个路由离开之前做一些事情 是比较好的  每个路由都可以这么做
        beforeRouteLeave(to,from,next){
            window.confirm('Not saved, are you sure you want to navigate away?')
            console.log('beforeRouterLeave');
            next()
        }
    }
</script>
<style lang="scss">
    .count {
        font-size: 12px;
        color:darkgoldenrod;
        border: 1px solid red;
    }
</style>