import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout'
// 公有路由表
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile'),
        meta: {
          title: '个人中心',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('../views/chart'),
        meta: {
          title: '数据可视化 ',
          icon: 'chart'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401')
      }
    ]
  }
  // {
  //   path: '/',
  //   name: 'profile',
  //   component: () => import('../views/profile')
  // }
]

const privateRoutes = [
  {
    path: '/user',
    component: () => Layout,
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        component: () => import('@/views/user-manage/index'),
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        component: () => import('@/views/role-list/index'),
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        component: () => import('@/views/permission-list/index'),
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/user-info/index'),
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import/index'),
        meta: {
          title: 'excelImport'
        }
      }
    ]
  },
  {
    path: '/article',
    component: () => Layout,
    redirect: '/article/ranking',
    meta: {
      title: '文章',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        component: () => import('@/views/article-ranking/index'),
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/:id',
        component: () => import('@/views/article-detail/index'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/create',
        component: () => import('@/views/article-create/index'),
        meta: {
          title: '文章创建',
          icon: 'article-create'
        }
      },
      {
        path: '/article/:id',
        component: () => import('@/views/article-detail')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
