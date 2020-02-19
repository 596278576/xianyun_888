<template>
  <div class="commentShow clearfix">
    <div class="reply">
      <!-- 用户信息 -->
      <div class="userInfo">
        <img class="heads" src="@/assets/1.png" alt="头像" />
        <span class="username">username</span>
        &nbsp;
        <span class="day">2020-2-2</span>
        &nbsp;
        <span class="time">10:45</span>
      </div>
    </div>
    <!-- 用户输入 -->
    <div class="userIn">
        开始的弗兰克坚实的开发坚实的分解
    </div>
    <!-- 回复 -->
    <span class="replybtn" @click="showReply = !showReply ">回复</span>
    <comments v-if="showReply"/>
  </div>
</template>

<script>
import comments from "@/components/post/comments";

export default {
    data () {
        return {
            showReply:false
        }
    },

    components:{
        comments
    }
};
</script>

<style lang="less" scoped>
.commentShow {
    width: 660px    ;
    border:1px solid #eee;
    padding:20px;
  // 回复
  .reply {
    //   头像
    .userInfo {
    color:#999;
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
    .userIn{
        padding: 20px 0;
        text-indent: 20px;
    }
    //回复按钮
    .replybtn{
        float:right;
        cursor: pointer;
        &:hover{
            color: #9400ff
        }
    }
}
.clearfix::before,
.clearfix::after{
    clear: both;
    content:"";
    display: table;
}
</style>