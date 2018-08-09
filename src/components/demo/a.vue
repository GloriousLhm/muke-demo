<template>
  <div>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <p v-html="hello"></p>
    <p v-text="hello"></p>
    {{hello}} {{status?"success":"fail"}}
    <ul>
      <li v-for="item in list">
        {{item.name}} {{item.price}}
      </li>
      <li v-for="(key,value) in objList">
        {{value}} {{key}}
      </li>
    </ul>

    <a :href="link" :class="classStr" class="fr">to 百度</a>
    <button @click="alertone">你点我呀{{item}}</button>

    <!-- <componentA v-for="(value,key) in objList" :key="key"></componentA> -->
    这是a组件
    <div class="top">
      <ul class="topul">
        <router-link to="/">
          <li>关于首页</li>

        </router-link>
        <a>
          <li>关于品牌</li>
          <li>关于</li>

        </a>
        <a>
          <li>日本高级体检</li>

        </a>
        <a>
          <li>套餐价格</li>

        </a>
        <a>
          <li>服务案例</li>
        </a>
      </ul>
      <div class="bottom">
        <div>

          <!-- Nav tabs -->
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
              <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a>
            </li>
            <li role="presentation">
              <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a>
            </li>
            <li role="presentation">
              <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a>
            </li>
            <li role="presentation">
              <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">Home</div>
            <div role="tabpanel" class="tab-pane" id="profile">Profile</div>
            <div role="tabpanel" class="tab-pane" id="messages">Message</div>
            <div role="tabpanel" class="tab-pane" id="settings">setting</div>
          </div>

        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import Vue from 'vue'
  export default {


    data() {
      return {
        hello: "i am component a",
        xianshi: true,
        yincang: false,
        hello: "world",
        status: true,
        list: [{
          name: "apple",
          price: 34
        },
        {
          name: "banana",
          price: 56
        },
        {
          name: "orange",
          price: 65
        }],
        objList: {
          name: 'apple',
          price: 34,
          clolr: "red",
          weight: 14
        },
        item: 0,
        link: "http://www.baidu.com",
        classStr: "red-font",
        className: {
          "red-font": true,
          "green-font": true

        }
      }
    },
    components: {

    },
    methods: {
      alertone() {
        // alert("one")
        // this.list.push({
        //   name: "banana",
        //   price: 56
        // })
        Vue.set(this.list, 1, {
          name: "panapple",
          price: 65
        })
      }
    }
  }


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: red;
}
.top {
  width: 100%;
  height: 50px;
  background-color: pink;
  position: relative;
  cursor: pointer;
}
.bottom {
  width: 100%;
  height: 200px;
  background-color: yellow;
  /* display: none; */
  position: absolute;
  top: 50px;
  left: 0;
  display: none;
}
.top:hover .bottom {
  display: block;
}
a:hover {
}
.top ul {
  float: right;
  display: inline;
}
.top li {
  float: left;
  font-size: 14px;
  margin-right: 15px;
}
.tab-content {
  float: right;
}
</style>

