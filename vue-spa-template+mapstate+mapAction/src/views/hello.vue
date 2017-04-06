<template>
    <div class="hello">
        <c-title :text="title"></c-title>
        <img class="logo" src="../assets/images/logo.png">
        <div>{{message}}</div>
        <button @click="handleClick">button</button>
        <div>{{click}}</div>
        <div>{{data}}</div>
        <button @click="mapClick">我是mapAction</button>
        {{testAction}}
        <div><span>storeOption</span> {{storeOption}}
        </div>
        <div v-html="content"></div>
    </div>
</template>

<script>

    import {mapState, mapActions} from 'vuex';
    import cTitle from 'components/title';

    export default {
        data () {
            return {
                title: 'Hello Vue!0-----',
                content: ''
            }
        },
        computed: {
            ...mapState([
                'storeOption',// 重点: 假如有modules的话就 mapState 这个位置就写什么
                'message',//这种写法  是没有modules 的
                'testAction',
                'data',//直接是内容 不是 type 是没有关系的 actions
            ])
        },
        methods: {
            async getContent () {
                const response = await
                fetch('/api/hello');
                this.content = await
                response.text();
            },
            ...mapActions([
                'mapClick' // action 是没有问题的
            ]),
            handleClick(){
                //区分大小写  type
                this.$store.commit('click', '测试data_click')
            }
        },
        mounted () {
            this.$store.commit('MESSAGE', '欢迎使用 vue！！！！！');

//            this.getContent();
        },

        components: {cTitle}
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    h1 {
        color: #42b983;
    }

    .logo {
        width: 100px;
        height: 100px;
        a {
            color: #42b983;
            text-decoration: none;
        }
    }
</style>
