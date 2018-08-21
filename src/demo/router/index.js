import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
const createRouter = () => {
    return new Router({
        mode:'history',
        routes,
        beforeEnter(route,next){
            next();
        }
    })
}
export { createRouter }