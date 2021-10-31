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
        component: () => import('@/views/home')
      },
      {
        path: '/class',
        component: () => import('@/views/class')
      },
      {
        path: '/car',
        component: () => import('@/views/car'),
        meta: {
          login: true
        }
      },
      {
        path: '/my',
        component: () => import('@/views/my'),
        meta: {
          login: true
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/myOrder',
    component: () => import('@/views/myOrder')
  },
  {
    path: '/searchPage',
    component: () => import('@/views/searchPage')
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
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

export default router
