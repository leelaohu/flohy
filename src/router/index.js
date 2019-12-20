import Vue from 'vue'
import VueRouter from 'vue-router'

let Home =()=>import ('@/views/index')//首页
    let Around = ()=>import('@/views/IndexSon/around')//周边
    let FlowerClass = ()=>import('@/views/IndexSon/flowerClass')//花艺课
    let Flower = ()=>import('@/views/IndexSon/flower')//鲜花
    let Gift = ()=>import('@/views/IndexSon/gift')//礼物
    let Protect = ()=>import('@/views/IndexSon/protect')//养护

let Area =()=>import ('@/views/area')//社区
let Station =()=>import ('@/views/station')//驿站
let Mine =()=>import ('@/views/mine')//我的
let GoodCar =()=>import ('@/views/goodCar')//购物车
let ShopDetail = ()=>import('@/views/shopDetail')//商品详情
let ConfirmOrder = ()=>import('@/views/confirmOrder')//确认订单
let WaitPay = ()=>import('@/views/waitPay')//待付款
let Date =()=>import ('@/views/date')//首页
Vue.use(VueRouter)
const routes = [
    {
      path:'/',
        redirect:'/index'
    },
    {
      path:'/index',
      name:'home',
      component:Home
    },
    {
        path:'/area',
        name:'area',
        component:Area
    },
    {
        path:'/station',
        name:'station',
        component:Station
    },
    {
        path:'/goodCar',
        name:'goodCar',
        component:GoodCar
    },
    {
        path:'/mine',
        name:'mine',
        component:Mine
    },
    {
        path:'/around',
        name:'around',
        component:Around
    },
    {
        path:'/gift',
        name:'gift',
        component:Gift
    },
    {
        path:'/waitPay',
        name:'waitPay',
        component:WaitPay
    },
    {
        path:'/flower',
        name:'flower',
        component:Flower
    },
    {
        path:'/flowerClass',
        name:'flowerClass',
        component:FlowerClass
    },
    {
        path:'/protect',
        name:'protect',
        component:Protect
    },
    {
        path:'/shopDetail',
        name:'shopDetail',
        component:ShopDetail
    },
    {
        path:'/confirmOrder',
        name:'confirmOrder',
        component:ConfirmOrder
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
