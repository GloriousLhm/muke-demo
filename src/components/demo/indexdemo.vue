<template>
  <div>
    这是首页
    <div class="one">
      <ul>
        <router-link to="/">
          <li>去往首页</li>
        </router-link>
        <router-link to="/avue">
          <li>去往avue</li>
        </router-link>
        <a href="">
          <li>去往bvue</li>
        </a>
        <a href="">
          <li>去往cvue</li>
        </a>
        <a href="">
          <li>去往dvue</li>
        </a>
      </ul>
    </div>
    <div class="two">
      <!-- <input v-on:keydown.13="onkeydown"> -->
      <button>addItime</button>
      <input v-model="myValue"> {{myValue}}
      <input v-model="myBox" type="radio" value="apple">
      <input v-model="myBox" type="radio" value="banana">
      <input v-model="myBox" type="radio" value="pinaapple"> {{myBox}}

      <!-- <input v-model="myBox" type="checkbox" value="apple">
      <input v-model="myBox" type="checkbox" value="banana">
      <input v-model="myBox" type="checkbox" value="pinaapple"> {{myBox}} -->
      <select v-model="selection">
        <!-- 必须value有值才可以进行双向数据的绑定 -->
        <option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
      </select>
      {{selection}}
    </div>
    <comA @my-event="onComaMyevent"></comA>
    <hr>
    <input type="text" v-model="myValue"> {{myComputedWithNum}}
  </div>
</template>

<script>
  import comA from './indexchildren.vue'
  export default {
    data() {
      return {
        myValue: "",
        myBox: [],
        selection: null,
        selectOption: [{
          text: 'apple',
          value: 0
        }, {
          text: 'banana',
          value: 1
        }

        ]
      }
    },
    methods: {
      onkeydown() {
        alert(111)
      },
      onComaMyevent(parmfromA) {
        alert(222 + "paraformA")
      },
      getmyValuewithoutNum() {

      }    },
    components: {
      comA
    },
    computed: {
      myComputedWithNum() {
        // return this.myValue.replace(/\d/g, "")
        return Date.now()
      }
    },
    watch: {
      myValue: function(val, oldval) {
        console.log(val, oldval)
      }
    }
  }
</script>
<style scoped>
a:hover {
  color: red;
  /* text-decoration: underline; */
  text-decoration: none;
}
a:focus {
  color: #337ab7;
  text-decoration: none;
}
</style>


