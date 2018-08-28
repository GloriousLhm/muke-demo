import Vue from 'vue'
import Router from 'vue-router'
import Indexdemo from "../components/demo/indexdemo.vue";
import Routers from '../components/demo/routers.vue'
import RedRouters from '../components/demo/redRouter.vue'



Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    // {
    //   // 重定向
    //   path: "/",
    //   redirect: '/routers'
    // },
    {
      path: '/',
      name: "/",
      component: Indexdemo
    },
    {
      // 带有冒号的是属性
      path: '/routers',
      // path: '/routers/:color/detail/:type',
      name: "/routers",
      component: Routers,
      children: [{
        path: "red",
        name: "red",
        component: RedRouters
      }]
    }
  ]
})



// 编程式导航

// router.push()

// router.beforEach(router.push(path))































// -----------------------------------------------------------------------------

// 这是pc和移动切换的方法

// const _getRoute = (a, b) => {
//   return document.body.clientWidth >= 640 ? a : b;
// }

// export default new Router({

//   routes: [{
//       path: '/',
//       name: 'index',
//       component: _getRoute(Index, UserCenter),
//     },
//     {
//       path: '/userCenter',
//       name: 'userCenter',
//       component: UserCenter,
//       children: [{
//         path: 'userInfo',
//         name: 'userInfo',
//         component: UserInfo
//       }]
//     }
//   ]
// })
