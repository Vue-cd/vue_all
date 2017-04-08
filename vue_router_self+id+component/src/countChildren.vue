<template>
    <div>
        <p>--------------------------children--------------------------------</p>
        <p>{{name}}</p>
        params: <span>{{params}}</span>
        <br>
        query: <span>{{query}}</span>
        <br>
        <button @click="handleEmit">emit</button>
    </div>
</template>
<script>
export  default{
    props:['paFlag'],
    data(){
        return{
            name:'xxxxxxxxxxxxxxxxxxxxx',
            params:'',
            query:''
        }
    },
    methods:{
        handleEmit(){
            console.log('--------------');
            //console.log(this.$emit);
           // this.paFlag=true
            //console.log(this.paFlag);
            //this.paFlag.flag=true
            this.$emit('emit',true)
        }
    },
    created(){
//        console.log(this.$route.params.id)
        this.params=this.$route.params.id
        this.query=this.$route.query.fs
    }
}


</script>