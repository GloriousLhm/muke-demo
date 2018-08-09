<template>
  <div>
    <div class="one">
      bChildern
    </div>{{numberToDo}}

    <button @click="emitMyEvent">
      emit
    </button>
    <!-- {{myValue}} -->

    <!-- <slot>no solt</slot> -->
    <slot name="header">
      no header
    </slot>
    <slot name="footer">
      no  
    </slot>
  </div>
</template>
<script>
  export default {
    props: ["number-to-do", "fish"],
    // props: {
    //   "number-to-do": [Number, String, Object],
    //   "my-value": [Number, String]
    // },
    data() {
      return {
        comToRender: "com-a",
        myValue: "",
        hello: "我是b的孩子"
      }
    },
    computed: {

    },
    methods: {
      emitMyEvent() {
        this.$emit("my-emit", this.hello);
      }
    },


  }
</script>

<style scoped>
.one {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
</style>

