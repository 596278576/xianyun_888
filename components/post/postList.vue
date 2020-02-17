<template>
  <div class="postList">
    <!-- 这是上下图文的 -->
    <div class="upper_lower">
      <p>这是一个标题</p>
      <div
        class="content"
      >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最</div>
      <el-row type="flex" class="row-bg img" justify="space-between">
        <img
          src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
          alt
        />
        <img
          src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
          alt
        />
        <img
          src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
          alt
        />
      </el-row>
      <el-row type="flex" class="row-bg footer" justify="space-between">
        <div class="left">
          <span class="el-icon-location-outline"></span>
          <span>北京市</span>
          <span>by</span>
          <span>
            <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" class="user" alt />
          </span>
          <span>地球发动机</span>
          <span class="el-icon-view"></span>
          <span>13714</span>
        </div>
        <div class="right">
          <span>79</span>
          <span>赞</span>
        </div>
      </el-row>
    </div>
    <!-- 左右土文 -->
    <div class="left_right">
      <el-row type="flex" class="row-bg" justify="space-between">
        <div class="img">
          <img
            src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
            alt
          />
        </div>
        <div class="content">
          <p>这是标题</p>
          <div
            class="text"
          >想象一下一个距离 北京 只有2.5小时飞行距离的城市：身处 亚洲 却能感受到十足的欧陆风情——欧式建筑和街道，金发碧眼的路人，正宗的西餐外加只有国内一半售价的帝王蟹可以敞开吃——更难能可贵的是，这里对国人</div>
          <el-row type="flex" class="row-bg footer" justify="space-between">
            <div class="left">
              <span class="el-icon-location-outline"></span>
              <span>北京市</span>
              <span>by</span>
              <span>
                <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" class="user" alt />
              </span>
              <span>地球发动机</span>
              <span class="el-icon-view"></span>
              <span>13714</span>
            </div>
            <div class="right">
              <span>79</span>
              <span>赞</span>
            </div>
          </el-row>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.upper_lower {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
.left_right {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  p {
    height: 24px;
    font-size: 18px;
  }
  .img {
    width: 220px;
    img {
      width: 100%;
    }
  }
  .content {
    width: 470px;
    .text {
      font-size: 14px;
      height: 60px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
.postList {
  width: 700px;
  .upper_lower {
    p {
      height: 30px;
      font-size: 18px;
    }
    .content {
      font-size: 14px;
      height: 60px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .img {
      margin: 20px 0;
      img {
        width: 30%;
      }
    }
  }

  .footer {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #666;
    .left {
      span {
        margin-left: 8px;
      }
      .user {
        width: 16px;
        vertical-align: middle;
      }
    }
  }
}
</style>