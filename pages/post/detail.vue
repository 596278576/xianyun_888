<template>
  <div class="postdetail">
    <el-row type="flex">
      <!-- 左侧 -->
      <div class="main">
        <!-- 文章详情 -->
        <articleDetail />
        <!-- 用户评论 -->
        <div class="usercomment">
          <div>评论</div>
          <textarea></textarea>
        </div>
      </div>

      <!-- 右侧 -->
      <div class="about">相关攻略</div>
    </el-row>
  </div>
</template>

<script>
import articleDetail from "@/components/post/articleDetail";
export default {
  components: {
    articleDetail
  }
};
</script>

<style>
.postdetail {
  width: 1000px;
  margin: 0 auto;
}
</style>