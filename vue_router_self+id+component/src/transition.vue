<template>
    <div>
        <button @click="handle">button</button>
        <transition name="fade" mode="out-in" appear>
            <div v-if="ok">toggled content</div>
        </transition>
    </div>
</template>
<script>
    export  default{
        data(){
            return {
                ok:false
            }
        },
        methods:{
            handle(){
                this.ok=!this.ok
            }
        }
    }
</script>