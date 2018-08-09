import Vue from 'vue'
import Router from 'vue-router'
import avue from '../components/demo/a.vue'
import indexdemo from '../components/demo/indexdemo.vue'
import bvue from '../components/demo/b.vue'
import guodu from '../components/demo/guodu/index.vue'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: "indexdemo",
      component: indexdemo
    }, {
      path: '/avue',
      name: "avue",
      component: avue
    },
    {
      path: '/bvue',
      name: "bvue",
      component: bvue
    },

    {
      path: '/guodu',
      name: "guodu",
      component: guodu
    }
  ]
})


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
