<template>
  <div>
    <h2>Dashboard</h2>
    <p>Yay you made it!</p>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        name:'yangchongduo'
      }
    },
    created(){
      console.log('dashboradcreted');
      console.log(this.$route);
    }
  }



</script>