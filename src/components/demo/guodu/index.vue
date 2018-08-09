<template>
  <div>
    <!-- 使用css -->
    <div class="one">
      <button @click="show=!show">
        Toggle1

      </button>

      <transition name="fade" mode="out-in">
        <!-- 相同标签显示动画效果需要加key值 -->
        <p v-if="show" :key="1">i am a p</p>
        <p v-else :key="2"> i am a div</p>
      </transition>
    </div>

    <!-- ---------------------------------------------------------------------- -->
    <!-- 动态组件的动画 -->
    <div class="two">
      <button @click="toogle">
        Toggle2
      </button>
      <transition name="fade" mode="out-in">
        <div :is="currentView"></div>

      </transition>
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <!-- 使用js实现动画效果 -->
    <div class="three">
      <button @click="show = !show">
        toogle3
      </button>

      <transition @befor-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled" :css="false" mode="out-in">

        <p class="animate-p" v-show="show">
          i am a p标签
        </p>

      </transition>
    </div>

    <!-- -------------------------------------------------------------------------- -->
    <!-- 自定义指令 -->
    <div class="four">
      <p v-color="'red'">hellow world</p>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import aVue from './a.vue'
  import bVue from "./b.vue";
  export default {
    data() {
      return {
        show: true,
        currentView: 'aVue'
      }
    },
    components: {
      aVue, bVue
    },
    // directives:{
    //   color:function(el,binding){
    //     el.style.color=binding.value

    //   }
    // },
    methods: {
      toogle() {
        if (this.currentView === "aVue") {
          this.currentView = "bVue"
        } else {
          this.currentView = "aVue"
        }
      },
      // --------
      // 进入中
      // --------

      beforeEnter: function(el) {
        // ...
        $(el).css({
          left: "-500px",
          opacity: 0
        })
      },
      // 此回调函数是可选项的设置
      // 与 CSS 结合时使用
      enter: function(el, done) {
        $(el).animate({
          left: 0,
          opacity: 1

        }, {
            // 动画持续的毫秒数
            duration: 1500,
            // 动画完成之后做什么(调用done方法)
            complete: done
          });
        // ...
        // done()
      },
      afterEnter: function(el) {

        // ...
      },
      enterCancelled: function(el) {
        // ...
      },

      // --------
      // 离开时
      // --------

      beforeLeave: function(el) {
        // ...
      },
      // 此回调函数是可选项的设置
      // 与 CSS 结合时使用
      leave: function(el, done) {
        // ...
        $(el).animate({
          left: "500px",
          opacity: 0

        }, {
            duration: 1500,
            complete: done
          });
        // ...
        done()
      },
      afterLeave: function(el) {
        // ...
      },
      // leaveCancelled 只用于 v-show 中
      leaveCancelled: function(el) {
        // ...
      }
    }
  }


</script>
<style scoped>
#app {
  padding: 20px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
div {
  float: left;
  margin: 10px;
}
.one {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
.two {
  width: 100px;
  height: 100px;
  border: 1px solid pink;
}
.three {
  width: 500px;
  height: 100px;
  border: 1px solid purple;
  position: relative;
}
.animate-p {
  position: absolute;
  top: 30px;
  left: 0;
}
</style>