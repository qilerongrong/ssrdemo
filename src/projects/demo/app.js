import Vue from 'vue'
import App from './App.vue'

const createApp = () =>{
    const app = new Vue({
        render:h => h(App)
    });
}