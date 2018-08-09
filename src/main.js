// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
     directives:{
      color:function(el,binding){
        el.style.color=binding.value

      }
    },
  // directives:{
  //   color:{
  //     bind(el,binding){
       
  //     },
  //     inserted(el,binding){
  //       el.style.color=binding.value
  //     }
  //   }
  // }
})