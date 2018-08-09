<template>

  <div>
    hello这是comA
    <button @click="emitMyevent">
      emit
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hello: "i am com a"
      }
    },
    methods: {
      emitMyevent() {
        this.$emit('my-event', this.hello)
      }
    },
    components: {

    }
  }

</script>