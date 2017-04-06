<!--suppress ALL -->
<template>
    <div id="app">
        <Form :model="formAlignLeft" class="form" label-position="left" label-width="80px">
            <FormItem label="user_id">
                <Input v-model="user_id"></Input>
            </FormItem>
            <FormItem label="user_password">
                <Input v-model="user_password"></Input>
            </FormItem>
            <Button @click="login">login</Button>
        </Form>
        <!-- <Form>
             <FormItem name="hd" label="我是">
                 <Input  placeholder="我是自己写的">
             </FormItem>
         </Form>-->
    </div>
</template>
<script>
    import {Form, Input, FormItem, Button} from 'element-ui'
    export default {
        vuex: {
            getters: {}, actions: {}
        },
        created(){
            console.log('componentDidMount')
        },
        computed: {
            total(){
                return this.data * 2
            }
        },
        methods: {
            login(){
                console.log('66666666')
                const user_id = this.user_id
                const user_password = this.user_password
                console.log(user_id, user_password)
                const json = {
                    user_id: user_id,
                    user_password: user_password
                }
                const body = JSON.stringify(json)
                var url = 'http://localhost:3030/mock/backend-sense-passport/v1/auth/access_token/basic'
                const obj = {body, json, method: 'post'}
                console.log(obj)
                fetch(url, {
                    ...obj,
                    headers: {
                        'X-Le-Sense-AT': '',
                        'Content-type': 'application/json'
                    }
                }).then(res=>res.json()).then(res=> {

                })
            },
        },
        watch: {
            "data": "con"//监控的对象:执行的函数
        },
        components: {
            Button,
            Input,
            Form,
            FormItem
        },
        data() {
            return {
                user_id: '',
                user_password: ''
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    html {
        height: 100%;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    #app {
        border: 1px solid red;
        padding: 20px;
        color: #2c3e50;
        margin-top: -100px;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
        a {
            color: #42b983;
            text-decoration: none;
        }
    }

</style>
