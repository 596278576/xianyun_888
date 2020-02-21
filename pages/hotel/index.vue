<template>
  <div class="hotel">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>酒店</el-breadcrumb-item>
        <el-breadcrumb-item>广州市酒店预订</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 搜索栏 -->
    <el-row type="flex" justify="space-between" class="checkPrice" :gutter="20">
      <!-- 搜索城市 -->
      <el-col :span="7">
        <el-input v-model="city" placeholder="切换城市" suffix-icon="el-icon-map-location"></el-input>
      </el-col>
      <!-- 日期选择器 -->
      <el-date-picker
        v-model="value"
        type="daterange"
        range-separator="-"
        start-placeholder="入住日期"
        end-placeholder="离店日期"
      ></el-date-picker>
      <!-- 选择人数 -->
      <el-col :span="7">
        <el-popover
          placement="bottom"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <el-input
            v-model="persons"
            placeholder="人数未定"
            suffix-icon="el-icon-user"
            slot="reference"
            readonly="readonly"
          ></el-input>
        </el-popover>
      </el-col>
      <!-- 按钮 -->
      <el-button type="primary">查看价格</el-button>
    </el-row>
    <!-- 定位 -->
    <el-row type="flex" :gutter="5">
      <!-- 区域 -->
      <el-col :span="14">
        <el-row type="flex">
          <el-col :span="3"> 
          <span>区域：</span>
          </el-col>
          <!-- <el-collapse v-model="activeNames" @change="handleChange">
             <el-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
          </el-collapse>-->
        </el-row>
        <!-- 均价 -->
        <el-row type="flex">
          <el-col :span="3">
            <span>均价：</span>
          </el-col>
          <el-col :span="6">
            <span><i class="iconfont iconhuangguan orange"></i></span>
            <span class="hotelType">舒适型</span>
          </el-col>
          <el-col :span="6">
            <span><i class="iconfont iconhuangguan orange"></i></span>
            <span class="hotelType">舒适型</span>
          </el-col>
          <el-col :span="6">
            <span><i class="iconfont iconhuangguan orange"></i></span>
            <span class="hotelType">舒适型</span>
          </el-col>
        </el-row>
      </el-col>
      <!-- 地图 -->
      <el-col :span="10">
        <Map></Map>
      </el-col>
    </el-row>
    <!-- 过滤器 -->
    <el-row type="flex" class="hotelFilter">
      <el-col :span="8" class="hotelFilter-price">
        <el-row type="flex" justify="space-between">
          <el-col>价格</el-col>
          <el-col>0-4000</el-col>
        </el-row>
        <el-slider v-model="budget" :min="0" :max="4000"></el-slider>
      </el-col>
      <el-col :span="6" class="hotelFilter-item">
        <el-row>住宿等级</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><el-checkbox v-model="checked">备选项</el-checkbox></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="6" class="hotelFilter-item">
        <el-row>住宿类型</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><el-checkbox v-model="checked">备选项</el-checkbox></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="6" class="hotelFilter-item">
        <el-row>酒店设施</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><el-checkbox v-model="checked">备选项</el-checkbox></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="6" class="hotelFilter-item">
        <el-row>酒店品牌</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><el-checkbox v-model="checked">备选项</el-checkbox></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <!-- 搜索结果 -->
    <HotelItem></HotelItem>
    <!-- 分页 -->
    <el-row type="flex" justify="end" style="padding:20px 0 40px;">
      <el-pagination
    small
    layout="prev, pager, next"
    :total="500"
    :pager-count='5'
    prev-text='< 上一页'
    next-text='下一页  >'>
  </el-pagination>
    </el-row>
  </div>
</template>

<script>
import Map from "@/components/hotel/map";
import HotelItem from '@/components/hotel/hotelItem'
export default {
  data() {
    return {
      input: "",
      value: "",
      budget: ""
    };
  },
  components: {
    Map,HotelItem
  }
};
</script>

<style lang='less' scoped>
.hotel {
  margin: 0 auto;
  width: 1000px;
}
.breadcrumb {
  padding: 20px 0;
}
.checkPrice {
  width: 100%;
  margin-bottom: 20px;
}
.hotelFilter {
  width: 100%;
  border: 1px solid #ddd;
  padding: 5px 20px;
  margin: 25px 0;
  .hotelFilter-price,
  .hotelFilter-item {
    padding: 5px 20px;
  }
  .hotelFilter-item {
    border-left: 1px solid #ddd;
  }
  /deep/.dropdown-link-text {
    display: block;
    width: 100%;
  }
}
/deep/.el-pagination .btn-prev,
/deep/.el-pagination .btn-next {
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 28px;
  &:hover {
    background-color: #ecf5ff;
  }
  span {
    font-size: 10px;
    margin: 0 10px
  }
}
</style>