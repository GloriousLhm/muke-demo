<template>
  <div id="footer">
    <p>这是底部</p>
    <div>
      <button>发送消息给头部</button>
    </div>
    <div>{{datas}}</div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    data() {
      return {
        datas: ""
      }
    },

    created() {
      //组件一跟组件二都要绑定相同的eventName
      this.$root.eventHub.$on("eventName", (tar) => {

        this.fn(tar)
        //$on是监听事件，如果组件一得$emit触发了，$on就会触发this.fn事件

      })
    },
    methods: {
      fn(tar) {
        this.datas = tar
      }
    },
  }
</script>

<style scoped>
#footer {
  width: 100%;
  height: 50px;
  background-color: skyblue;
  color: #fff;
}
</style>
