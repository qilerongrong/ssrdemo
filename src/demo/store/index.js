import Vue from 'vue'
import Vuex from 'vuex'
import demo from 'stores/demo'
Vue.use(Vuex);
const state = {
    message:{
        type:'error',
        errCode:500,
        msg:'xxxx'
    },
    authInfo:{
        accessToken:'',
        expiredTime:'',
        deviceId:'',
        clientId:''
    },
    user:{
        userId:'',
        passportId:'',
        name:'',
        userType:''
    }
}

const actions = {

}

const mutations = {

}

const createStore = () => {
    return new Vuex.Store({
        state,
        actions,
        mutations,
        modules:{
            demo
        }
    })
}
export  {createStore }