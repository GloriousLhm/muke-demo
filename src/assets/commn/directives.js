import Vue from 'vue'
Vue.directive("color", {
  color: function(el, binding) {
    el.style.color = binding.value
  }
})

export {
  Vue
}
