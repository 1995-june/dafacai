import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: () => import('@/views/main'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/class',
        name: 'class',
        component: () => import('@/views/class'),
        meta: {
          title: '分类'
        }
      },
      {
        path: '/car',
        name: 'car',
        component: () => import('@/views/car'),
        meta: {
          login: true,
          title: '购物车'
        }
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my'),
        meta: {
          login: true,
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: '登陆'
    }
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: () => import('@/views/myOrder'),
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/searchPage',
    name: 'searchPage',
    component: () => import('@/views/searchPage'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/detail/:id/:title',
    name: 'detail',
    component: () => import('@/views/detail'),
    meta: {
      title: '详情'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // 使用前端路由，当切换到新路由时，想要页面滚到顶部，
  // 或者是保持原先的滚动位置，就像重新加载页面那样
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = document.cookie.includes('token')
  if (to.meta.login) {
    if (isLogin) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          callback: to.path
        }
      })
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  if (to.name !== 'detail') {
    document.title = to.meta.title
    console.log(to)
  }
})

export default router
