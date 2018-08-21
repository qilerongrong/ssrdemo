import Vuex from 'vuex'
import demo from 'stores/demo'

const state = {
    name:'home'
}

const actions = {

}

const mutations = {

}

export default createStore = () => {
    return new Vuex.Store({
        state,
        actions,
        mutations,
        modules:{
            demo
        }
    })
}