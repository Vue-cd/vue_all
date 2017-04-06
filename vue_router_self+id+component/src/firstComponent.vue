<template>
    <div>
        <div>{{name}}</div>
        <button @click="handleClick">button</button>
        <input type="text" v-model="price">
        <br>
        <input type="number" v-model="number">
        <br>
        <p><span class='count'>总的价格:</span><span v-text="count"></span></p>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                name: 'vue 渐进式的框架',
                price: 10,
                number: 1,
            }
        },
        methods: {
            handleClick(){
                console.log('------------')
            }
        },
        computed: {
            count(){
                return this.price * this.number
            }
        }
    }
</script>
<style lang="scss">
    .count {
        font-size: 12px;
        color:darkgoldenrod;
        border: 1px solid red;
    }
</style>