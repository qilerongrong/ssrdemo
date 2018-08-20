<template>
   <div>Hi, {{name}}</div>
</template>

<script>
    import { mapState } from 'vuex'
    export default({
        asyncData(){

        },
        data(){

        },
        computed:mapState({
            name:state => state.demo.name
        })
    })
</script>