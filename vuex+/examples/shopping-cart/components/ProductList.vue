<template>
  <ul>
    <li v-for="p in products">
      {{ p.title }} - {{ p.price | currency }}
      <br>
      <button
        :disabled="!p.inventory"
        @click="addToCart(p)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { getAllProducts, addToCart } from '../vuex/actions'
import {mapGetters} from 'vuex'

export default {
  vuex: {
    getters: {
      //解释一下  里面的 有一个全句的state，一个是自己的state 不过那个是
      products: ({ products }) => products.all
    },
    actions: {
      getAllProducts,
      addToCart
    }
  },
/*  computed:{
          ...mapGetters([
            'products'
          ])
  },*/
  // created 这个不是一个生命周期吗
  created () {
    this.getAllProducts()
  }
}
</script>
