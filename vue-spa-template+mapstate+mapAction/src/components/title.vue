<template>
  <h1 v-if="!hide">{{ text }}</h1>
</template>

<script>
  export default {
    props: ['text', 'hide'],//接受父级 的属性和方法
    mounted: function () {
        console.log('this.text',this.text)
        console.log('this.hide',this.hide);
        // 从父级组件接受参数 没有参数就
      document.title = this.text;
    }
  }
</script>