<template>
  <div class="detail">
    <!-- 顶部面包屑 -->
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/hotel' }">广州酒店</el-breadcrumb-item>
        <el-breadcrumb-item>广州华尔道夫酒店</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 酒店主题 -->
    <el-row class="address">
      <el-col class="el-col el-col-24">
        <h4>
          广州华尔道夫酒店
          <span title="星级">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
        </h4>
        <!-- 拼音 -->
        <el-row class="row">
          <span class="hotel-en-name">shang hai wai tan hua er dao fu hotel</span>
        </el-row>
        <!-- 具体位置 -->
        <el-row class="row">
          <i class="iconfont iconlocation">中山东一路2号，近广东路</i>
        </el-row>
      </el-col>
    </el-row>

    <!-- 酒店全景图 -->
    <el-row class="photo-left">
      <!-- 左侧图片 -->
      <el-col class="left el-col el-col-16">
        <img
          height="360"
          width="640"
          src="http://157.122.54.189:9095/images/hotel-pics/1.jpeg"
          alt=" 广州华尔道夫酒店"
        />
      </el-col>
      <el-col class="right el-col el-col-8">
        <!-- 右侧图片 -->
        <el-row class="photo-right" style="margin-left: -10px; margin-right: -10px;">
          <el-col class="el-col el-col-12" style="padding-left:10px;padding-right:10px">
            <a href="javascript:void(0)">
              <img
                width="160px"
                src="http://157.122.54.189:9095/images/hotel-pics/1.jpeg"
                alt="广州华尔道夫酒店"
              />
            </a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!-- 价格 -->
    <el-row type="flex" class="row-bg" justify="space-between">
      <p>价格来源</p>
      <p>低价房型</p>
      <p>最低价格/每晚</p>
    </el-row>
    <!-- 携程 -->
    <div>
      <el-row type="flex" class="row-bgc" justify="space-between">
        <span>携程</span>
        <span>高级大床房A</span>
        <div class="grid-content bg-purple">
          <span>￥239</span>
          <span>起</span>
          <a href="https://hotels.ctrip.com/hotel/694679.html">
            <i class="el-icon-arrow-right height-light"></i>
          </a>
        </div>
      </el-row>
      <el-row type="flex" class="row-bgc" justify="space-between">
        <span>携程</span>
        <span>高级大床房A</span>
        <div class="grid-content bg-purple">
          <span>￥239</span>
          <span>起</span>
          <a href="https://hotels.ctrip.com/hotel/694679.html">
            <i class="el-icon-arrow-right height-light"></i>
          </a>
        </div>
      </el-row>
      <el-row type="flex" class="row-bgc" justify="space-between">
        <span>携程</span>
        <span>高级大床房A</span>
        <div class="grid-content bg-purple">
          <span>￥239</span>
          <span>起</span>
          <a href="https://hotels.ctrip.com/hotel/694679.html">
            <i class="el-icon-arrow-right height-light"></i>
          </a>
        </div>
      </el-row>
    </div>

    <!-- 地图 -->
    <AMap />

    <!-- 酒店基本信息 -->
    <el-row type="flex" class="info">
      <el-col :span="4">基本信息</el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">入住时间: 14:00之后</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">离店时间: 12:00之前</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">2010年开业 / 2010年装修</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">酒店规模: 153间客房</div>
      </el-col>
    </el-row>
    <!-- 设施 -->
    <el-col :gutter="20" class="facility">
      <el-col :span="4">
        <div class="grid-content bg-purple">基本设施</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <i>热水壶</i>
        </div>
      </el-col>
    </el-col>
    <!-- 服务 -->
    <el-row class="serve" type="flex">
      <el-col :span="4">
        <div class="grid-content bg-purple">停车服务</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">-</div>
      </el-col>
    </el-row>
    <!-- 品牌 -->
    <el-row type="flex" class="brand">
      <el-col :span="4">
        <div class="grid-content bg-purple">品牌信息</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <span>贝壳</span>
        </div>
      </el-col>
    </el-row>

    <!-- 用户评论 -->
    <div class="review">
      <h3>0条真实用户评论</h3>
      <el-row type="flex">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <p>总评论数：64</p>
            <p>好评数：13</p>
            <p>差评数：5</p>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple-light">
            <el-rate show-text></el-rate>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import AMap from "@/components/hotel/AMap";
export default {
  components: {
    AMap
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.detail {
  margin: 0 auto;
  width: 1000px;
}
.header {
  margin-top: 20px;
}
.address {
  padding: 20px 0;
  color: #666;

  h4 {
    font-size: x-large;
    color: #333;
    font-weight: 400;
    i {
      color: #f90;
    }
  }
}

.row-bg {
  padding: 20px 0;
  border-bottom: 1px solid #ebeef5;
}
p {
  color: #909399;
  font-size: 16px;
}
.row-bgc {
  padding: 20px 0;
  border-bottom: 1px solid #ebeef5;
  :hover {
    color: #606266;
  }
  span {
    font-size: 14px;
    color: #606266;
  }
}
.bg-purple {
  i {
    color: #f90;
  }
  span {
    &:nth-child(1) {
      color: #f90;
    }
  }
}
.info {
  margin-top: 50px;
  padding: 20px 10px;
  color: #000;
  border-bottom: 1px solid #ccc;
  .bg-purple {
    color: #666;
  }
}
.facility {
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
  /deep/ i {
    border: 1px solid #eee;
    border-radius: 4px;
    color: #666;
    background-color: #eee;
    padding: 4px 10px;
    margin-right: 10px;
  }
}
.serve,
.brand {
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
}
.review {
  margin: 30px 0;
}
</style>