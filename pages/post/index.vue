<template>
  <div class="post">
    <el-row type="flex" class="row-bg" justify="space-between">
      <div class="post_left">
        <PostLeft/>
      </div>
      <div class="post_right">
        <!-- 右侧 -->
        <!-- 搜索 -->
        <PostSeach />
        <!-- 相关攻略 -->
        <el-row type="flex" class="row-bg recommendedRaiders" justify="space-between">
          <div class="recommendedRaidersLeft">
            相关攻略
          </div>
          <nuxt-link to='/post/create'>
            <el-button type="primary" icon="el-icon-edit" class="travels">写游记</el-button>
          </nuxt-link>
          
        </el-row>
        <!-- 文章列表 -->
        <PostList/>
      </div>
    </el-row>
  </div>
</template>

<script>
import PostSeach from "@/components/post/postSeach";
import PostList from "@/components/post/postList";
import PostLeft from "@/components/post/postLeft";
export default {
  components: {
    PostSeach,PostList,PostLeft
  }
};
</script>

<style scoped lang='less'>
.post {
  // margin-top: 20px;
  padding-top: 20px;
  min-width: 1000px;
  margin: 0 auto;
  width: 1000px;
  .post_left {
    width: 260px;
    // position: relative;
  }
  .post_right {
    width: 700px;
    .recommendedRaiders {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      border-bottom: 1px solid #ccc;
      .recommendedRaidersLeft{
        color: #ffa500;
        border-bottom: 1px solid #ffa500;
      }
    }
  }
}
</style>