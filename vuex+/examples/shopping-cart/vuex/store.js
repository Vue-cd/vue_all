import Vue from 'vue'
import Vuex from '../../../src'
import cart from './modules/cart'// 因为是default 一个对象，
import products from './modules/products'
import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'
// 一个是state  一个是 突变  插件就是辅助性  和react 的中间件一个性质
//plugins 和react中的middle promise 和函数 logger
// 假如有多个reducer 的话就需要使用 modules 这个
export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
