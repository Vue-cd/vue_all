<template>
    <div>
        <div>handleEmit</div>
        <div v-if="flag">testEmit</div>
        <div v-else="flag">falseFLAG</div>
        <span>加</span><span>{{number}}</span>
        <div>{{name}}</div>
        <button @click="handleClick">button</button>
        <p>父子组件通信的时候 v-on是绝对不能去掉的 v-on </p>
        <countChildren @emit="handleEmit" :paFlag="flag"></countChildren>
        <p>-------------------------------</p>
        <Emit></Emit>
    </div>
</template>
<script>
    import countChildren from './countChildren.vue'
    import Emit from './emit.vue'
    export default{
        components:{
            countChildren,
            Emit
        },
        data(){
            return{
                flag:false,
                number:0
            }
        },
        methods:{
            handleClick(){
                this.number+=1
            },
            handleEmit(msg){
                this.flag=msg
            }
        },
        created(){
            console.log('this.flag',this.flag)
            this.name=this.$route.query.name;
//            this.$on('testEmit',function (msg) {
//               // this.$router.push('/')
//                console.log(msg)
//            })
        }
    }

</script>