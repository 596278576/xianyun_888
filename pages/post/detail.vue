<template>
  <div class="postdetail">
    <el-row type="flex">
      <!-- 左侧 -->
      <div class="main clearfix">
        <!-- 文章详情 -->
        <articleDetail />
        <!-- 用户输入 -->
        <comments />
        <!-- 展示评论 -->
        <commentShow/>
      </div>

      <!-- 右侧 -->
      <div class="about">相关攻略</div>
    </el-row>
  </div>
</template>

<script>
import articleDetail from "@/components/post/articleDetail";
import comments from "@/components/post/comments";
import commentShow from "@/components/post/commentShow";


export default {
  components: {
    // 文章
    articleDetail,
    // 评论输入
    comments,
    // 展示评论
    commentShow
  }
};
</script>

<style>
.postdetail {
  width: 1000px;
  margin: 0 auto;
  padding:20px 0;
}

.clearfix::before,
.clearfix::after{
    content: "";
    clear:both;
    display: block;
}
</style>