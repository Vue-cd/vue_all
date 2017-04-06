<template>
    <div class="app">
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <product-list></product-list>
        <hr>
        <cart></cart>
        <div>{{name}}</div>
    </div>
</template>

<script>
    import ProductList from './ProductList.vue'
    import Cart from './Cart.vue'
    // 子组件
    export default {
        components: {ProductList, Cart},
        vuex: {
            getter: {}, actions: {}
        },
        data(){
            return{
                name:'yangchonagduo'
            }
        },
        created(){
            console.log('data');
        },
    }


</script>
