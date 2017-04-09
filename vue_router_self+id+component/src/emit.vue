<template>
    <div>
        <p>emit</p>
    </div>
</template>
<script>
    export default{
        beforeMount(){
            this.$on('input',function () {
                console.log('xxxxxxxxx')
            })

        }
    }

</script>