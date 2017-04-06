import { INCREMENT, DECREMENT } from './mutation-types'
// 这边的state 是发生变化了 但是怎么返给页面 是通过getter 这个方法 这个才是正统的方法
export default {
  [INCREMENT] (state) {
    state.count++
    state.history.push('increment')
  },
  [DECREMENT] (state) {
    state.count--
    state.history.push('decrement')
  }
}
