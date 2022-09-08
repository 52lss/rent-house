import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/',
        component: () => import('@/views/Home')
      },
      {
        path: '/home/house',
        component: () => import('@/views/House')
      },
      {
        path: '/home/message',
        component: () => import('@/views/Message')
      },
      {
        path: '/home/profile',
        component: () => import('@/views/Profile'),
        children: [
          {
            path: '/grid',
            component: () => import('@/views/Profile/components/Grid')
          }
        ]
      }
    ]
  },
  {
    path: '/city',
    component: () => import('@/views/city')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/edit',
    component: () => import('@/views/Edit')
  }
]

const router = new VueRouter({
  routes
})

export default router
