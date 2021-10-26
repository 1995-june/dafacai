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
        component: () => import('@/views/my')
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
    path: '/details',
    component: () => import('@/views/details')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = document.cookie.indexOf('token') !== -1
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
