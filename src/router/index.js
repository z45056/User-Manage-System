import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component:()=>import("../components/home/home.vue"),
    children:[
      {
        path: '',
        name: 'Valoran',
        component: ()=>import("../components/home/Valoran"),
      },
      {
        path: '/Ionia',
        name: 'Ionia',
        component: ()=>import("../components/home/Ionia"),
        meta:['城邦','艾欧尼亚']
      },
      {
        path: '/blackRose',
        name: 'blackRose',
        component: ()=>import("../components/home/blackRose"),
        meta:['城邦','黑色玫瑰']
      },
      {
        path: '/Noxus',
        name: 'Noxus',
        component: ()=>import("../components/home/Noxus"),
        meta:['城邦','诺克萨斯']
      },
      {
        path: '/Demacia',
        name: 'Demacia',
        component: ()=>import("../components/home/Demacia"),
        meta:['城邦','德玛西亚']
      },
      {
        path: '/NewCity',
        name: 'NewCity',
        component: ()=>import("../components/home/NewCity"),
        meta:['Add the polis','添加城邦']
      },
      {
        path: '/NewHero',
        name: 'NewHero',
        component: ()=>import("../components/home/NewHero"),
        meta:['Add the polis','添加英雄']
      },
     
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
