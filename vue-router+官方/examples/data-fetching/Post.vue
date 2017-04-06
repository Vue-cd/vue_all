<template>
    <div class="post">
        <div class="loading" v-if="loading">Loading...</div>
        <div v-if="error" class="error">
            {{ error }}
        </div>
        <transition name="slide">
            <!--
              giving the post container a unique key triggers transitions
              when the post id changes.
            -->
            <div v-if="post" class="content" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p>{{ post.body }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
import { getPost } from './api'

export default {
  data () {//data是我们获取数据 只要有我们就可以用
  console.log('data')
    return {
      loading: false,
      post: null,
      ycd:'yangchongduo',
      error: null
    }
  },
  created () {// 数据解析完成 不是编译 这个是   异步组件 和发送请求 生命钩子(这边可以发送请求优化是可以的)；监听数据的变化 $route query to
  console.log('created')
    this.fetchData()
  },
  // 这是获取数据是吗  发送ajax 可以用fetch
  //watch就是用来监听数据变化的
 // 我监听到路由的变化 就会自动执行一个函数
  watch: {
    '$route': 'fetchData'
  },
  // computed 是中文意思是计算的意思 是处理数据
  computed(){
    // 这里面写的是方法可以写方法
  },
  methods: {
    fetchData () {
    console.log('methods')
      this.error = this.post = null
      this.loading = true
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
        console.log('cb')
          this.post = post
        }
      })
    }
  }
}

</script>

<style>
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
}
.error {
  color: red;
}
.content {
  transition: all .35s ease;
  position: absolute;
}
.slide-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}

</style>
