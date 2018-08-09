<template>
  <div>
    这是bvue：
    <!-- <h1 :is="comTorender"></h1> -->
    <!-- <b-children number-to-do=78 @my-emit="onbvueEmit" :my-value="myValue"></b-children> -->

    <b-children>
      <!-- <p>这是一个p标签</p> -->
      <p slot="header" 这是header</p>
        <p slot="footer">这是footer</p>

    </b-children>

    <hr>
    <input type="text" v-model.number="myValue">
    <p>这又是一个p标签</p>

  </div>
</template>
<script>
  import bChildren from "./bchildren.vue"
  export default {
    data() {
      return {
        comTorender: "b-children",
        myValue: ""
      }
    },
    components: {
      bChildren
    },
    methods: {
      onbvueEmit(hello) {
        alert(111 + hello)
      }
    },
    created() {
      this.myValue = new Date()
    },
  }
</script>
<style scoped>
</style>

