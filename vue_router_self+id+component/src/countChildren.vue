<template>
    <div>
        <p>{{name}}</p>
        params: <span>{{params}}</span>
        <br>
        query: <span>{{query}}</span>
    </div>
</template>
<script>
export  default{
    data(){
        return{
            name:'xxxxxxxxxxxxxxxxxxxxx',
            params:'',
            query:''
        }
    },
    created(){
//        console.log(this.$route.params.id)
        this.params=this.$route.params.id
        this.query=this.$route.query.fs
    }
}


</script>