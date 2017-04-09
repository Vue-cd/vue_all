<template>
    <div>
        <p>编程式导航</p>
        <p>name:{{$route.query.name}}</p>
        <button @click="handleGO">go</button>
    </div>
</template>
<script>
   export default{
       data(){
           return {
               name:'xxx'
           }
       },
       created(){
           console.log('---------------')
         this.$on('input',function () {
             console.log('xxxxxxxxxxxxxxxx')
         })
       },
       methods:{
           handleGO(){
             //  console.log(this.$router);
            //   this.$router.push('first');
               this.$router.push({path:'first',query:{age:99999}})
               //console.log(this.$route)
           }
       }
   }



</script>