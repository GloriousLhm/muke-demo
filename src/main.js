// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

// let store = new Vuex.store({
//   state: {
//     totalPrice: 0
//   },
//   mutations: {
//     increment(state, price) {
//       state.totalPrice += price
//     },
//     decrement(state, price) {
//       state.totalPrice -= price
//     }
//   }
// })


// import directive from './assets/commn/directives'

Vue.config.productionTip = false


// Vue.use(router)
// let router = new router9({})

Vue.directive("color", {
  inserted: function(el, binding) {
    el.style.color = binding.value
  }
})
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  // store,

  // --------------------------------------------------------------------
  // 这个是想再实例化一个对象的(这个在footer组见中用到了，用来实现兄弟组件之间传递数据的)
  data: {
    eventHub: new Vue() // 在main.js设置所有组件都能用调用
  },

})
