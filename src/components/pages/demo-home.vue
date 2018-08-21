<template>
    <div>Welcome to {{ name }}</div>
</template>

<script>
    import {mapState} from 'vuex'
    export default({
        asyncData(store, route){
            store.dispatch('demo/fetchName');
        },
        data(){
            return {
                
            }
        },
        computed:mapState({
            name:state => state.demo.name
        }),
        beforeCreate(){
            this.$store.dispach('demo/fetchName')
        }
    })
</script>