<template>
  <div class="post">
    <el-row type="flex" class="row-bg" justify="space-between">
      <div class="post_left">
        <PostLeft />
      </div>
      <div class="post_right">
        <!-- 右侧 -->
        <!-- 搜索 -->
        <PostSeach />
        <!-- 相关攻略 -->
        <el-row type="flex" class="row-bg recommendedRaiders" justify="space-between">
          <div class="recommendedRaidersLeft">相关攻略</div>
          <nuxt-link to="/post/create">
            <el-button type="primary" icon="el-icon-edit" class="travels">写游记</el-button>
          </nuxt-link>
        </el-row>
        <!-- 文章列表 -->
        <PostList />
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
    PostSeach,
    PostList,
    PostLeft
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next();
    // this.$meit('click')
    this.$store.commit('post/setColor',true)

  },
  destroyed(){
    this.$store.commit('post/setColor',false)
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
      .recommendedRaidersLeft {
        color: #ffa500;
        border-bottom: 1px solid #ffa500;
      }
    }
  }
}
</style>