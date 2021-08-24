import Vue from 'vue';
import Router from 'vue-router';
import 首页 from '@/views/Home';
import 关于吉祥 from '@/views/关于吉祥';
import 游戏动态 from '@/views/游戏动态';
import 游戏产品 from '@/views/游戏产品';
import 联系我们 from '@/views/联系我们';
import 吉祥赛事 from '@/views/吉祥赛事';

Vue.use(Router)

export default new Router({
    mode: "history", // hash，选择模式，history/hash
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: '首页',
            component: 首页
        },
        {
            path:'/关于吉祥',
            name: '关于吉祥',
            component: 关于吉祥
        },
        {
            path:'/游戏动态',
            name: '游戏动态',
            component: 游戏动态
        },
        {
            path:'/吉祥赛事',
            name: '吉祥赛事',
            component: 吉祥赛事
        },
        {
            path:'/游戏产品',
            name: '游戏产品',
            component: 游戏产品
        },
        {
            path:'/联系我们',
            name: '联系我们',
            component: 联系我们
        },
        {
            path: "*", // 这个路由可以匹配所有的路径 /list
            name: "404",
            component: () =>
                import(/* webpackChunkName: "404" */ "../views/404.vue")
        }
    ]
})
