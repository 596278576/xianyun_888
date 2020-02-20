<template>
  <div class="detail clearfix">
    <div class="tag">
      <nuxt-link to="/post">旅游攻略</nuxt-link>&nbsp;/&nbsp;
      <span>攻略详情</span>
    </div>
    <div class="article">
      <h1>{{articledata.title}}</h1>
      <hr />
      <div class="read">
        <span>攻略：2019-05-22 10:57</span>
        &nbsp;&nbsp;&nbsp;
        <span>阅读: {{articledata.watch}}</span>
      </div>
      <div class="content" v-html="articledata.content"></div>
      <!-- 评论 -->
      <el-row type="flex" justify="center" align="middle">
        <div class="comment">
          <div class="up">
            <i class="iconfont iconpinglun"></i>
          </div>
          <div class="down">
            评论
            <span>({{articledata.comments.length}})</span>
          </div>
        </div>
        <div class="share">
          <div class="up">
            <i class="iconfont iconfenxiang"></i>
          </div>
          <div class="down">分享</div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articledata: {
        comments: []
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$axios({
        url: "/posts",
        params: {
          id: this.$route.query.id
        }
      }).then(res => {
        // 获取文章相关信息
        this.articledata = res.data.data[0];
        // console.log(res.data.data[0]);
      });
    }
  }
};
</script>

<style lang="less" scoped>

.detail {
  width: 700px;
  float: left;
  /*面包屑*/
  .tag {
    a {
      font-weight: bold;
    }
    a:hover {
      color: #0094ff;
    }
  }
  /*文章  */
  .article {
    h1 {
      font-size: 32px;
      padding: 20px 0;
    }
    .read {
      font-size: 16px;
      margin-right: 16px;
      text-align: right;
      height: 46px;
      line-height: 46px;
      color: #999;
    }
    .el-row {
      height: 200px;
      /*评论*/
      .comment {
        margin-right: 30px;
      }
      /* 分享d */
      .share {
        margin-right: 30px;
      }
      .comment,
      .share {
        font-size: 16px;
        line-height: 36px;
        color: #999;
        text-align: center;
      }
      /* 图标 */
      .iconpinglun:before,
      .iconfenxiang:before {
        font-size: 26px;
        color: #ffa500;
      }
    }
    .content{
      /deep/img{
        width:100%;
      }
    }
  }
  // 内容
  
}
</style>