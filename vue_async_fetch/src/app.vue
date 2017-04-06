<!--suppress ALL -->
<template>
    <div id="app">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import Login from './components/login.vue'
    import Dashboard from './components/dashboard.vue'
    import local from './utils/local'
    export default {
        created(){
        },
        computed: {
        },
        methods: {},
        watch: {
            "data": "con"//监控的对象:执行的函数
        },
        components: {
            Login,
            Dashboard
        },
        data() {
            return {
                name: 'ycd'
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    html {
        width: 100%;
        height: 100%;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    #app{
        width: 100%;
        height: 100%;
    }
    .content{
        width: 100%;
        height: 100%;
    }

    .font_size {
        font-size: 40px;
    }

</style>
