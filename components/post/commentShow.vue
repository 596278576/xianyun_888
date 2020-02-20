<template>
  <div>
    <!-- 整个回复item组件 -->
    <div class="commentShow clearfix">
      <div class="reply">
        <!-- 用户信息 -->
        <div class="userInfo">
          <img
            class="heads"
            :src="$axios.defaults.baseURL+commnetsdata.account.defaultAvatar"
            alt="头像"
          />
          <span class="username">{{commnetsdata.account.nickname}}</span>
          &nbsp;
          <span class="day">2020-2-2</span>
          &nbsp;
          <span class="time">10:45</span>
        </div>
      </div>
      <!-- 显示评论的内容-->
      <div class="userIn">
        <div>{{commnetsdata.content}}</div>
        <div class="userInImg">
          <!-- 图片 -->
          <img
            v-for="(item,index) in commnetsdata.pics"
            :key="index"
            :src="$axios.defaults.baseURL+item.url"
          />
        </div>
      </div>
      <commentShow v-if="commnetsdata.parent" :commnetsdata="commnetsdata.parent" />
      <!-- 回复 BUG-->
      <span class="replybtn" @click="showReply = !showReply;">回复</span>
      <comments v-if="showReply" />
    </div>
  </div>
</template>

<script>
import comments from "@/components/post/comments";
export default {
  name: "commentShow",
  data() {
    return {
      showReply: false
    };
  },
  props: ["commnetsdata"],
  components: {
    comments
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.commentShow {
  max-width: 700px;
  width: 98%;
  border: 1px solid #eee;
  padding: 10px;
  margin: 0 auto;
  .commentShow {
    background: #bfa;
    border: 1px solid white;
  }
  // 回复
  .reply {
    //   头像
    .userInfo {
      color: #999;
      height: 50px;
      line-height: 50px;
      .heads {
        margin-right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
  }
  // 用户输入的内容
  .userIn {
    padding: 20px 0;
    text-indent: 20px;
    .userInImg{
      margin-top: 20px;
    }
    /deep/img {
      width: 100px;
    }
  }
  //回复按钮
  .replybtn {
    float: right;
    cursor: pointer;
    &:hover {
      color: #9400ff;
    }
  }
}
.clearfix::before,
.clearfix::after {
  clear: both;
  content: "";
  display: table;
}
</style>