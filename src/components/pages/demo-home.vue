<template>
    <div>Welcome to {{ name }}</div>
</template>

<script>
    import { mapState } from 'vuex'
    // 路由已经设置了代码拆分
    // 惰性注册store，拆分store模块代码
    import demoStoreModule from 'stores/demo'

    export default{
        asyncData({ store, route }){
            // 惰性注册
            store.registerModule('demo',demoStoreModule)
            return store.dispatch('demo/fetchName');
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
        },
        destroyed(){
            // 当多次访问路由时，避免在客户端重复注册
            this.$store.unregisterModule('demo')
        }
    }
</script>