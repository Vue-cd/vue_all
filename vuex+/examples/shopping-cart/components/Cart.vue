<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    <div>我这我的名字 是通过{{name}}</div>
  </div>

</template>

<script>
import { checkout } from '../vuex/actions'
import { products } from '../vuex/getters'
import {mapGetters} from 'vuex'
export default {
  vuex: {//  这是get函数 还有state 也在这个位置这样 可以分别使用mapState mapgeter
    getters: {
     // products: cartProducts,//一个函数
      checkoutStatus: ({ cart }) => cart.lastCheckout//这个是state 本来是这个state 有两个 因为有两个modules有两个
    },
    actions: {
      checkout//就是来派发action 在react 中可以通过createAction 就可以  接受两个参数 一个是{}，
    }
  },
  data(){
    return{
      name:'yangchongduo'
    }
  },
  created(){// 这个是要
    console.log('%c 我一般就执行一次','background:red;color:#fff');
  },
  // 这个是处理数据的 data里面的也可以处理
  computed: {
          ...mapGetters([
            "products"
    ]),
      /*    ...mapGetters({'products':'cartProducts','checkoutStatus':'checkoutStatus'}
          ),*/
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  }
}
</script>
