import {
    Home,
    Login,
    Mine,
    Shipping,
    Classification,
    Collection
}from 'pages'

export const TabBarRoute = [
    {
        path:'/home',
        component:Home,
        meta:{
            flag:true
        },
        icon:'\ue601',
        text:'首页'
    },
    {
        path:'/shipping',
        component:Shipping,
        meta:{
            flag:true
        },
        icon:'\ue78f',
        text:'9.9包邮'
    },
    {
        path:'/classification',
        component:Classification,
        meta:{
            flag:true
        },
        icon:'\ue726',
        text:'分类'
    },
    {
        path:'/collection',
        component:Collection,
        meta:{
            flag:true
        },
        icon:'\ue678',
        text:'收藏'
    },
    {
        path:'/mine',
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:'\ue660',
        text:'我的'
    },
]

export const NoTabBarRoute = [
    {
        path:'/login',
        component:Login,
        meta:{},
    },
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);