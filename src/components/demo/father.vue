<template>
  <div class="father">
    <p>这是整个父组件</p>

    <!-- 这是子组件 -->
    <div class="soncontent">
      <son :msgfromFather="fatherMsg" @senMsg="getMsgFromSon"></son>
    </div>

    <hr>

    <!-- --------------------------------------------------- -->
    <!-- <p>下面的是评论功能的实现：</p> -->

  </div>
</template>

<script>
  import son from './son.vue'
  export default {
    data() {
      return {
        // 父传子 在子组件中绑定这个属性
        fatherMsg: "这是父组件中的内容,我是从父组件来的"
      }
    },
    components: {
      son
    },

    methods: {
      getMsgFromSon(msg) {
        // 子传父 在父组件中声明一个函数，用来接收子组件传递过来的数据
        console.log("我的儿子来信了，说：" + msg)
      }
    }
  }
</script>

<style scoped>
.father {
  width: 100%;
  border: 1px solid pink;
  padding: 10px;
}
.soncontent {
  width: 100%;
  /* height: 200px; */
  border: 1px solid red;
}
</style>
