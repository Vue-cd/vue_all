<!--suppress ALL -->
<template>
    <div id="app">
        <Button @click="count">button</Button>
        <p>name:{{name}}</p>
        <p>data:{{data}}</p>
        <p>total:{{total}}</p>
    </div>
</template>
<script>
    import {Button} from 'element-ui'
    export default {
        vuex:{
            getters:{},
            actions:{}
        },
        data(){
            return{
                name:'yangchongduo',
                data:1
            }
        },
        created(){
            console.log('我就上来执行一次')
        },
        watch:{
            "data":"con"
        },
        methods:{
            count(){
                console.log(`%c 我是要执行的函数`,'background:red;color:#fff');
                console.log(this.data)
                return this.data+=1
            },
            con(){
                console.log("watch")
            }
        },
        computed:{
            // 因为上面用到了我才会执行
            total(){
                console.log('computed')
                return this.data *3
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    html {
        height: 100%;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    #app {
        color: #2c3e50;
        margin-top: -100px;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
        a {
            color: #42b983;
            text-decoration: none;
        }
    }

</style>
