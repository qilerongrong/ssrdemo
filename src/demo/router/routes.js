const home = () => import('pages/demo-home')

export default [
    {
        path:'/',
        component:home
    },{
        path:'/home',
        name:'home',
        component:home
    }
]