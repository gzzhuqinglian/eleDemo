import App from '../App'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/index', //首页
                component: resolve => require(['../pages/index/'], resolve),
                children:[

                    {   path:'goods',
                        name:'goods',
                        component:resolve=>require(['../pages/index/goods'],resolve)
                    },
                    {
                        path:'shoppj',
                         name:'shoppj',
                        component:resolve=>require(['../pages/index/shoppj.vue'],resolve)
                    },
                    {   path:'',
                        redirect: 'goods'
                    },
                    {
                         path: '*', //其他页面，强制跳转到登录页面
                         redirect: 'goods'
                    }

                ]
            },
            {
                path: '/shopDatail', 
                component: resolve => require(['../pages/shopDatail'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/index'
            }
        ]
    }
]