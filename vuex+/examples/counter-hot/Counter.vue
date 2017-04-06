<template>
  <div>
    Value: {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>
      <div>Recent History: {{recentHistory}}</div>
    </div>
    <div>
      {{value}}
    </div>
    <div v-if="count==5">
      我终于出来了
    </div>
    <div v-else="" class="">
      count是5 才出来
    </div>
  </div>
</template>

<script>

import { recentHistory } from './vuex/getters'
import * as actions from './vuex/actions'
export default {
  vuex: {
    actions,// 这是actions 获取 派发actions
    getters: {
      count: state => state.count,
      recentHistory
    }
  },
  data(){// getInitialState this.state
    return {
      value:'yangchongdduo'
    }
  },
  created(){
    console.log('我只会执行一次 和ComponentDidMount 产不多')
  },
  watch:{//这个监视一个
    'count':'con'
  },
  methods:{
    con(){
      console.log(this.count)
    }
  },
  computed:{

  }
}
</script>

