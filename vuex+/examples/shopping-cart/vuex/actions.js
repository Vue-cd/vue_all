import shop from '../api/shop'
import * as types from './mutation-types'

export const addToCart = ({ dispatch  }, product) => {
  if (product.inventory > 0) {
    dispatch (types.ADD_TO_CART, product.id)
  }
}
//action 这个文件 最终的目的是 diapatch 我们可以在组件内部直接使用这些方法
export const checkout = ({ dispatch , state }, products) => {
  const savedCartItems = [...state.cart.added]
  dispatch (types.CHECKOUT_REQUEST)
  shop.buyProducts(
    products,
    () => dispatch (types.CHECKOUT_SUCCESS),
    () => dispatch (types.CHECKOUT_FAILURE, savedCartItems)
  )
};
export const getAllProducts = ({ dispatch ,state }) => {
  shop.getProducts(products => {
    dispatch (types.RECEIVE_PRODUCTS, products)
  })
}
