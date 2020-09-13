import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Index from '../pages/Index/Index'
// 登陆
import Login from '../pages/Login/Login'
// 关注
import Attention from '../pages/Attention/Attention'
// 聊天
import Chat from '../pages/Chat/Chat'
// 个人中心
import MD from '../pages/MD/MD'
// 一个设置
import MDSZ from '../pages/MD/MDSZ'
// 分类
import Classification from '../pages/Classification/Classification'
// 搜索
import Search from '../pages/Search/Search'
// 商品详情
import Dateils from '../pages/Dateils/Dateils'
// 收藏
import Collection from '../pages/Collection/Collection'
// 支付
import Pay from '../pages/Pay/Pay'





// 二级路由
import Recommend from '../pages/Index/Childer/Recommend'
import BM from '../pages/Index/Childer/BM'

Vue.use(VueRouter)


const routes = [
    {
        path:'/',
        name:'index',
        component:Index,
        meta:{showBottomTabbar:true},
        children:[
            {
                path:'/index/Recommend',
                name:'Recommend',
                component:Recommend,
                meta:{showBottomTabbar:true}
            },
            {
                path:'/',
                name:'Recommend',
                component:Recommend,
                meta:{showBottomTabbar:true}
            },
            {
                path:'/index',
                name:'Recommend',
                component:Recommend,
                meta:{showBottomTabbar:true}
            },
            {
                path:'/index/BM',
                name:'BM',
                component:BM,
                meta:{showBottomTabbar:true}
            },
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/Attention',
        name:'Attention',
        component:Attention,
        meta:{showBottomTabbar:true}
    },
    {
        path:'/Chat',
        name:'Chat',
        component:Chat,
        meta:{showBottomTabbar:true}
    },
    {
        path:'/MD',
        name:'MD',
        component:MD,
        meta:{showBottomTabbar:true}
    },
    {
        path:'/MDSZ',
        name:'MDSZ',
        component:MDSZ
    },
    {
        path:'/Classification',
        name:'Classification',
        component:Classification,
        meta:{showBottomTabbar:true}
    },
    {
        path:'/Search',
        name:'Search',
        component:Search
    },
    {
        path:'/Dateils',
        name:'Dateils',
        component:Dateils
    },
    {
        path:'/Collection',
        name:'Collection',
        component:Collection
    },
    {
        path:'/Pay',
        name:'Pay',
        component:Pay
    },
    {path:"/*",component:function(){
        document.write("错误输入地址栏")
    }}
]

const router = new VueRouter({
    routes
})

export default router