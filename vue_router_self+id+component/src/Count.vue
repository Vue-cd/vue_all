<template>
    <div>
        <span>加</span><span>{{number}}</span>
        <div>{{name}}</div>
        <button @click="handleClick">button</button>
        <countChildren></countChildren>
    </div>
</template>
<script>
    import countChildren from './countChildren.vue'
    export default{
        components:{
            countChildren
        },
        data(){
            return{
                number:0
            }
        },
        methods:{
            handleClick(){
                this.number+=1
            }
        },
        created(){
            this.name=this.$route.query.name
        }
    }

</script>