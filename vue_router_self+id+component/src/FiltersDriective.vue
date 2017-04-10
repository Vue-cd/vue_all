<template>
    <div>
        <h5>FiltersDriective</h5>
        <p>
            {{name}}
        </p>
        <input type="text" v-focus:name.a.b="message">
        <br>
        <div>{{ary | odd}}</div>
    </div>
</template>
<script>
    export  default{
        data(){
            return {
                message: 'leshi',
                age: 99,
                name: 'xxx',
                ary: [1, 2, 3, 4, 5]
            }
        },
        directives: {
            focus: function (el, binding) {
               // console.log(binding);

//                console.log(el);
//                console.log('-----------');
                // 奇怪我也知道为什么非得异步执行才可以
                //问题1:
//                el.focus()
                setTimeout(() => {
                    el.focus()
                })

            }
        },
        filters: {
            // 这就是 过滤器
            odd: function (n) {
                return n.filter((item) => {
                    return item % 2 == 0
                })
            }
        },
        mounted(){
            console.log('mounted')
        },
        created(){
            console.log('created')
        }

    }


</script>