<template>
    <div class="login">
        <el-form @submit.prevent="loginIn" :model="formAlignLeft" class="form" label-position="left" label-width="80px">
            <el-form-item label="user_id">
                <el-input v-model="user_id"></el-input>
            </el-form-item>
            <el-form-item label="password">
                <el-input v-model="user_password"></el-input>
            </el-form-item>
            <el-button @click.prevent="loginIn" type="text">login</el-button>
        </el-form>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import {fetchServer} from '../utils/fetchServer'
    import {userStorage} from '../utils/index'
    import local from '../utils/local'
    export default {
        beforeCreate(){
           var data= local.get('userInfo')
            console.log('beforeCreate',data)
            if(typeof data !==undefined){
                console.log('undefined')
                this.$router.push('dashboard')
            }
        },
        created(){

        },
        computed: {
            ...mapGetters([
                'login'
            ]),
            total(){
                return this.data * 2
            }
        },
        methods: {
            /*  ...mapActions([
             'login'
             ]),*/
            loginIn(){
                const user_id = this.user_id
                const user_password = this.user_password

                const json = {
                    user_id: user_id,
                    user_password: user_password
                }
                const body = JSON.stringify(json); //登录页面到dashboard 最好不用
               // this.$store.dispatch('loginAction', {body, json})
                const _this = this
                 var str='auth/access_token/basic'//`${url}auth/access_token/basic`
                 fetchServer(str,{body,json,method:'post'}).then(res=>{
                 userStorage(res.body)
                 }).then(()=>{
                     _this.$router.push('dashboard');
                 })
            }
        },
        watch: {
            "data": "con"//监控的对象:执行的函数
        },
        components: {},
        data() {
            return {
                user_id: '',
                user_password: '',
                color: 'color'
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    body a{
        text-decoration: none;
    }
    .login {
        padding: 20px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 400px;
        height: 200px;
        border: 2px solid green;
        text-align: center;
        a {
            color: #42b983;
            text-decoration: none;
        }
    }


</style>
<!--
   .login {
        padding: 20px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 400px;
        height: 200px;
        border: 2px solid green;
        &>span{
            text-align: center;
        }
    }



-->