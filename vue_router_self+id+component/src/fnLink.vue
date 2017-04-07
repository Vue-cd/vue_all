<template>
    <div>
        <p>编程式导航</p>
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