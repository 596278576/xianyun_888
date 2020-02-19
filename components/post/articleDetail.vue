<template>
  <div class="detail clearfix">
    <div class="tag">
      <nuxt-link to="/post">旅游攻略</nuxt-link>&nbsp;/&nbsp;
      <span>攻略详情</span>
    </div>
    <div class="article">
      <h1>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h1>
      <hr />
      <div class="read">
            <span>攻略：2019-05-22 10:57</span>
            &nbsp;&nbsp;&nbsp;
            <span>阅读: 12465</span>
      </div>
      <div
        class="content"
      >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。</div>
      <!-- 评论 -->
      <el-row type="flex" justify="center" align="middle">
        <div class="comment">
          <div class="up"><i class="iconfont iconpinglun"></i> </div>
          <div class="down">评论<span>(100)</span></div>
        </div>
        <div class="share">
          <div class="up"><i class="iconfont iconfenxiang"></i> </div>
          <div class="down">分享</div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
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
  .article{
      h1{
          font-size:32px;
          padding:20px 0;
      }
      .read{
          font-size: 16px;
          margin-right: 16px;
          text-align: right;
          height: 46px;
          line-height: 46px;
          color:#999;
      }
      .el-row{
          height: 200px;
          /*评论*/
          .comment{
              margin-right: 30px;
          }
          /* 分享d */
          .share{
              margin-right: 30px;
          }
          .comment,.share{
              font-size:16px;
              line-height: 36px;
              color:#999;
              text-align:center;
          }
          /* 图标 */
          .iconpinglun:before,.iconfenxiang:before  {
              font-size:26px;
              color:#ffa500;
          }
      }
  } 
}

</style>