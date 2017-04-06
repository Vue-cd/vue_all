<template>
    <div>
        <span>{{name}}</span>
        <br>
        count: <span>{{count}}</span>
        <button @click="increase">button</button>
    </div>
</template>
<script>
    import {increase} from './vuex/actions'
    import {count} from './vuex/getters'
    import {mapActions, mapState} from 'vuex'
    export  default{
        vuex: {
            getters: {count:count},
            actions: {increase}
        },
        data(){
            return {
                name: 'cccccccccccccc',
            }
        },
        methods: {
//            increase(){
//                console.log('increase')
//            }
//            ...mapActions([
//                'increase'
//            ])
        },
        computed: {
//            ...mapState([
//
//            ])
        }
    }


</script>