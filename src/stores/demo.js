import api from 'api/index'
const state = {
    name:'Hello World'
}
const actions = {
    fetchName({commit}){
        return api.getName().then((name) => {
            commit('updateName',name);
        })
    }
}
const mutations = {
    updateName(state,name){
        state.name = name;
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}