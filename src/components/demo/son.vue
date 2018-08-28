<template>
  <div>
    <p>这是整个子组件:</p>
    <div>
      {{msgfromFather}}
    </div>
    <button @click="sendMsgToMsg">这是子组件中的按钮吗，发送消息给父组件</button>

    <hr>
    <!-- ------------------------------------------- -->
    <p>这是评论功能组件:</p>

    <div id="comment">

      <post @tellfatheraddcmt="addComment"></post>

      <p class="hint">这个下面的列表是写在post的父组件 son中的</p>

      <div class="comlist" v-for="(item,index) in cmtList">
        <div class="cmt-inf">
          <span>第{{index+1}}楼</span>
          &nbsp;&nbsp;&nbsp;
          <span>用户：匿名用户</span>&nbsp;&nbsp;
          <span>发表时间：{{item.createTime}}</span>&nbsp;&nbsp;
        </div>
        <div class="cmt-content">{{item.content}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  import post from './post.vue'
  export default {
    data() {
      return {
        sonmsg: "这是子组件中的内容",
        cmtList: [
          { content: "窗前明月光", createTime: new Date() },
          { content: "一行白鹭上青天", createTime: new Date() },
          { content: "飞流直下三千尺", createTime: new Date() },
          { content: "不及汪伦送我情", createTime: new Date() },
          { content: "咦嘘兮，危乎高哉", createTime: new Date() }
        ]
      }
    },
    props: ["msgfromFather"],
    methods: {

      // 在子组件中如果要发送数据给父组件，调用 $emit 方法触发在父组件中绑定好的事件
      sendMsgToMsg() {
        this.$emit("senMsg", "爸比，你会唱小星星吗")
      },

      addComment(cmt) {
        this.cmtList.push(cmt)
      }

    },
    components: {
      post
    }
  }
</script>

<style scoped>
.comment-list {
  margin-top: 10px;
}

.cmt-content {
  line-height: 40px;
  font-size: 14px;
  text-indent: 2em;
}
.hint {
  width: 100%;
  height: 20px;
  background-color: yellow;
  opacity: 0.5;
}
</style>
