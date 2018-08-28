<template>
  <div id="header">
    <p>这是头部组件</p>
    <div @click="on()">
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    data() {
      return {
        datas: "这是要传递到footer的数据"
      }
    },
    created() {

    },
    methosd: {
      on() {
        this.$root.eventHunb.$emit("eventName", this.datas)
      }
    },
    props: [""]
  }
</script>

<style scoped>
#header {
  width: 100%;
  height: 50px;
  background-color: skyblue;
  color: #fff;
}
</style>
