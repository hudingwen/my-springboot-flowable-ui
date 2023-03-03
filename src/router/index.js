//引入响应文件
import Vue from 'vue'
import Router from 'vue-router'

//使用路由
Vue.use(Router)

//创建静态路由
export const staticRoutes = [
  {
    path: '/',
    component: () => import('@/views/map/chengdu'),  //引入vue页面
    // component: () => import('@/components/HelloWorld'),  //引入vue页面
    meta: {
      title: '首页'
    }
  },
  {
    path: '/lims/form',
    component: () => import('@/views/lims/DynamicForm'),  //引入vue页面
    meta: {
      title: '构建记录单'
    }
  },
  {
    path: '/lims/excel',
    component: () => import('@/views/lims/OnlineExcel'),  //引入vue页面
    meta: {
      title: '构建记录单'
    }
  },
  {
    path: '/lims/spread',
    component: () => import('@/views/lims/SpreadExcel'),  //引入vue页面
    meta: {
      title: '构建记录单'
    }
  },
  {
    path: '/lims/spread2',
    component: () => import('@/views/lims/SpreadExcel2'),  //引入vue页面
    meta: {
      title: '构建记录单'
    }
  },
  {
    path: '/lims/spreadDesigner',
    component: () => import('@/views/lims/SpreadDesigner'),  //引入vue页面
    meta: {
      title: '构建记录单'
    }
  },
  {
    path: '/flow/process',
    component: () => import('@/views/flow/process'),  //引入vue页面
    meta: {
      title: '流程定义'
    }
  },
  {
    path: '/flow/instance',
    component: () => import('@/views/flow/instance'),  //引入vue页面
    meta: {
      title: '流程实例'
    }
  },
  {
    path: '/flow/history',
    component: () => import('@/views/flow/history'),  //引入vue页面
    meta: {
      title: '完成实例'
    }
  },
]

// 防止连续点击多次路由报错
let routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}


const router = new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: staticRoutes
})


//添加动态路由
router.$addRoutes = (params) => {

  //在此处可以过滤掉自己的不需要的路由,如果没有就不需要动他
  params = params.filter(item => {
    if (item)
      return true;
  });
  //添加路由到vue
  router.addRoutes(params)
}

export default router