<template>
    <div>
       <div>{{msg}}</div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello TicketDetail'
            }
        },
        components:{
        },
        created(){
            console.log('this.$router---->',this.$router)
            console.log('this.$router---->',this.$route)
            console.log('this.$router---->',this.$route.params.id)
        }
    }
</script>
