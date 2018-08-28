<template>
  <div id="post">
    <div>
      <textarea id="" cols="30" rows="10" class="post-text" v-model="content"></textarea>

      <button @click="post">发表评论</button>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: ""
      }
    },
    created() {

    },
    methods: {
      post() {
        this.$emit("tellfatheraddcmt", { content: this.content, createTime: new Date() })
        this.content = ""
      }
    },
  }
</script>
<style scoped>
button {
  width: 100%;
  height: 50px;
  background-color: skyblue;
  border-radius: 5px;
}
.post-text {
  border: 1px solid black;
  width: 100%;
  border-radius: 5px;
}
</style>
