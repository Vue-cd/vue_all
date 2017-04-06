<template>
    <div>
        <p>vue-about</p>
        <p>{{name}}</p>
        <button @click="handleClick">button</button>
        <br>
        flag:{{flag}}
        <div>
            <div v-if="flag">
                <Children></Children>
            </div>
            <h1 v-else>No</h1>
        </div>
    </div>
</template>
<script>
    import  Children from './children.vue'
    export default{
        name: 'about',
        components: {
            Children
        },
        data(){
            return {
                name: 'vue -about',
                flag: false
            }
        },
        methods: {
            handleClick(){
                this.flag = !this.flag
            }
        }
    }
</script>