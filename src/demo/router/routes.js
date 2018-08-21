const home = () => import('pages/demo-home')

export default [
    {
        path:'/',
        name:'home',
        component:home
    },{
        path:'/home',
        name:'home',
        component:home
    }
]