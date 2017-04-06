<template>
    <div>
       <div>{{msg}}</div>
        <p>{{count}}</p>
        <button>+</button>
    </div>
</template>
<style>
</style>
<script>
    import {increment} from '../store/actions/login'
    import {mapActions} from 'vuex'
    export default{
       /* vuex:{
          actions:{increment:increment}
        },*/
        data(){
            return{
                msg:'hello ticket'
            }
        },
        components:{
        },
        methods:{
                ...mapActions([
                        'increment'
                ])
        },
        created(){
            this.increment()
            console.log('this.$router---->',this.$router)
            console.log('this.$router---->',this.$route)
            console.log('this.$router---->',this.$route.params.id)
        }
    }
</script>
