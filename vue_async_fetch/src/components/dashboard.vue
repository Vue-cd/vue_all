<template>
    <div class="dashboard">
        <el-row>
            <el-col :span="2">
                <div class="grid-content bg-purple">
                    <div v-for="item in count.menus">
                        <router-link :to="{ path: `${item.path}` }">{{item.name}}</router-link>
                    </div>
                </div>
            </el-col>
            <el-col :span="22">
                <div class="grid-content bg-purple-light">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .dashboard {
        background: bisque;
        width: 100%;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }
</style>
<script>
    import {mapGetters, mapActions} from 'vuex'
    export default{
        name: 'dashboard',

        data(){
            return {
                msg: '我是dashboard组件 你看见了吗 我在这 我和登录页面一块显示了'
            }
        },
        components: {},
        computed: {//count是一个集体属性
            ...mapGetters([
                'count'
            ])
        },
        methods: {
            ...mapActions([
                'getLimits'
            ])
        },
        created(){
            this.getLimits().then(res=> {
                this.$router.push('ticket') //({ name: 'post', params: { id } })
            });
        }
    }
</script>
