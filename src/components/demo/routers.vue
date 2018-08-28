<template>

  <div>
    <p>这是路由的页面</p>
    <p>{{$route.params.color}}</p>
    <button @click="getparam">获取param</button>
    <router-link to="/routers/red" tag="li">to redruter</router-link>

    <router-link :to="{path:'/',param:{color:'red'}}">跳转</router-link>

    <router-view></router-view>

    {{totalPrice}}
  </div>
</template>
<script>
  export default {
    data() {
      return {
        totalPrice: ""
      }
    },
    methods: {
      getparam() {
        console.log(this.$route.params)
      }
    },
    computed: {
      // totalPrice() {
      //   return this.$store.state.totalPrice
      // }
    }
  }
</script>

<style scoped>
li {
  color: red;
}
a {
  color: blue;
}
</style>
