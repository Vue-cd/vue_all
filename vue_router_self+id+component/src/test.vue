<template>
    <div>
        <p>testVue</p>
        {{name}}
        <button @click="handleClick">handleClick</button>
        <span>写法一:</span><p v-bind="{id:'xxx'}">xxxx</p>
        <span>写法二:</span><p :id="'cccc'">cccc</p>
        <p>可以像react一样 做{} 一些简单的业务逻辑处理</p>
        <p>{{age+1}}</p>
        <p>三元运算符</p>
        <p>{{ok?true:false}}</p>
        <button @click="handleOK">handleOK</button>
        <p>{{ message.split('').reverse().join('') }}</p>
        <a :href="url">goBAIdu</a>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                name: 'xxx',
                age:99,
                ok:true,
                url:'www.baidu.com',
                message:'yangchongduo'
            }
        },
        methods: {
            handleOK(){
              this.ok= false
            },
            handleClick(event){
//                console.log(event)
//                console.log(this.$el)
//                console.log(this.$data)
                this.name = 'ttttt'
            },
            nameChange(val, oldVal){
                console.log(val);
                console.log(oldVal)
                console.log('ccccccccccccccccccc')
            }
        },
        watch: {
            //
//            'name': function (val, oldVal) {
//                console.log(val);
//                console.log(oldVal)
//              //  console.log('lllllllll')
//            },
            'name':'nameChange',
            '$route' (to, from) {
                console.log('-----------------')
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            },
        }
    }
</script>