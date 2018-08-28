<template>
  <div>

    <headered></headered>

    <home></home>
    <p>这是demo的主页</p>
    <father></father>

    <!-- watch的使用 -->
    <div class="watch">
      <input type="text" v-model="person.money"> {{msg}}
      <input type="text" v-model="msg">
    </div>

    <!--自定义指令 -->
    <div class="directived">
      <p v-color="'green'">此处是自定义指令</p>
      <input type="text" v-focus>

    </div>

    <!-- 次处是路由相关的 -->

    <router-link to="/routers">跳转到路由的页面</router-link>

    <foot></foot>
  </div>
</template>

<script>
  // import Vue from 'vue'
  // import "../../main.js"
  // import directive from '../.././assets/commn/directives.js'
  import father from './father.vue'
  import home from './home.vue'
  import headered from './header.vue'
  import foot from './footer.vue'
  // import son from './son.vue'
  export default {
    data() {
      return {
        msg: "May是世界上最好的人",
        person: {
          name: "刘慧敏",
          money: 100000
        }
      }
    },
    // directives: {
    //   color: function(el, binding) {
    //     // el就是当前绑定指令的元素
    //     // binding 是一个对象 就是绑定的变量（例如字符串表达式什么的）
    //     el.style.color = binding.value
    //   }
    // },
    components: {
      father,
      home,
      headered,
      foot
    },
    watch: {
      msg: function(newValue, oldValue) {
        console.log(newValue, oldValue);
        console.log("有人在太岁头上动土");
      },
      person: {
        handler: function(nv, ov) {
          console.log("有人动我钱，我给你拼了！！！");
        },
        deep: true,
        immediate: true
      }
    }
  }


</script>

<style scoped>
.watch {
  margin: 10px;
}
.directived {
  width: 100%;
  height: 200px;
  border: 1px solid purple;
  margin: 10px 0;
}
</style>
