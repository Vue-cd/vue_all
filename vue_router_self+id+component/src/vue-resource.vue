<template>
    <div>
        <p>testWatch</p>
        <p>{{name}}</p>
        <p>vue-resource</p>
        <button @click="handleClick">axios</button>
        <div v-for="item in items">
            {{item.content}}
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                name: 'xxx',
                items: [],
            }
        },

        methods: {
            test:function (to) {
                console.log(to)
                console.log('testRoute')
            },
            async handleClick(){
                var data = await axios.get('https://cnodejs.org/api/v1/topics').then((response) => {
                    return response.data.data
                });
                console.log('data', data)
            }
        },
        watch: {
            '$route': 'test'
        },
        created(){
//            this.$http.get('https://cnodejs.org/api/v1/topics').then((response) => {
//                console.log(response.body.data);
//                this.items = response.body.data
//            }).catch((err) => {
//                console.log(err)
//            })
        }
    }
</script>