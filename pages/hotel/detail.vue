<template>
  <div class="detail">
    <!-- 顶部面包屑 -->
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hotel' }">{{Detail.big_cate}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/hotel' }">{{Detail.real_city}}酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{Detail.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 酒店主题 -->
    <el-row class="address">
      <el-col class="el-col el-col-24">
        <h4>
          {{Detail.name}}
          <span title="星级"></span>
        </h4>
        <!-- 拼音 -->
        <el-row class="row">
          <span class="hotel-en-name">{{Detail.alias}}</span>
        </el-row>
        <!-- 具体位置 -->
        <el-row class="row">
          <i class="iconfont iconlocation">{{Detail.address}}</i>
        </el-row>
      </el-col>
    </el-row>

    <!-- 酒店全景图 -->
    <HotelImage />

    <!-- 酒店价格 -->
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
          <!-- <span>￥{{ scope.row.price }}</span> -->
          <span>起</span>
          <i class="el-icon-arrow-right height-light"></i>
        </div>
      </el-row>
    </div>

    <!-- 地图 -->
    <DetailMap :data="Detail" />

    <!-- 酒店基本信息 -->
    <DetailInformation :data="Detail" />

    <!-- 用户评论 -->
    <UserReview :data="Detail" />
  </div>
</template>

<script>
// 酒店图片
import HotelImage from "@/components/hotel/hotelimg";
// 用户评论
import UserReview from "@/components/hotel/userReview";
// 酒店信息
import DetailInformation from "@/components/hotel/detailInformation";
// 酒店地图
import DetailMap from "@/components/hotel/detailMap";
export default {
  components: {
    HotelImage,
    DetailMap,
    DetailInformation,
    UserReview
  },
  data() {
    return {
      id: 185,
      Detail: {
        hotelbrand: {}, //酒店品牌
        location: {}, //坐标
        scores: {} //评分
      }
    };
  },
  mounted() {
    this.$axios({
      url: `/hotels?id=` + this.id
    }).then(res => {
      console.log(res.data);
    });
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
</style>