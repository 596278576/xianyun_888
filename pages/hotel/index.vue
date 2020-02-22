<template>
  <div class="hotel">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{cityName}}酒店预订</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 搜索栏 -->
    <el-row type="flex" justify="space-between" class="checkPrice" :gutter="20">
      <!-- 搜索城市 -->
      <el-col :span="7">
        <el-input v-model="cityName" placeholder="切换城市" suffix-icon="el-icon-map-location"></el-input>
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
        <!-- 弹出框 -->
        <el-popover placement="bottom" width="300" trigger="click">
          <el-input
            v-model="persons"
            placeholder="人数未定"
            suffix-icon="el-icon-user"
            slot="reference"
            readonly="readonly"
          ></el-input>
          <!-- 选项 -->
          <el-row type="flex" :gutter="10" align="middle" class="chiose">
            <el-col :span="24">
              <span>每间</span>
            </el-col>
            <el-col :span="24">
              <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            @select="handleSelectAdult"
            readonly="readonly"
          ></el-autocomplete>
            </el-col>
            <el-col :span="24">
              <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            @select="handleSelectChild"
            readonly="readonly"
          ></el-autocomplete>
            </el-col>
          </el-row>
          <el-row type="flex" justify="end" align="middle" style="margin-top:20px;padding-top:20px;">
            <el-button type="primary">确定</el-button>
          </el-row>
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
            <!-- style=visibility:hidden -->
          </el-col>
        </el-row>
        <!-- 均价 -->
        <el-row type="flex">
          <el-col :span="3">
            <span>均价：</span>
          </el-col>
          <el-col :span="6">
            <span>
              <i class="iconfont iconhuangguan orange"></i>
            </span>
            <span class="hotelType">舒适型</span>
          </el-col>
          <el-col :span="6">
            <span>
              <i class="iconfont iconhuangguan orange"></i>
            </span>
            <span class="hotelType">舒适型</span>
          </el-col>
          <el-col :span="6">
            <span>
              <i class="iconfont iconhuangguan orange"></i>
            </span>
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
      <!-- 价格 -->
      <el-col :span="8" class="hotelFilter-price">
        <el-row type="flex" justify="space-between">
          <el-col>价格</el-col>
          <el-col>0-4000</el-col>
        </el-row>
        <el-slider v-model="budget" :min="0" :max="4000"></el-slider>
      </el-col>
      <!-- 酒店等级 -->
      <el-col :span="6" class="hotelFilter-item">
        <el-row>酒店等级</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in options.levels" :key="index">
              <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <!-- 酒店类型 -->
      <el-col :span="6" class="hotelFilter-item">
        <el-row>酒店类型</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in options.types" :key="index">
              <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <!-- 酒店设施 -->
      <el-col :span="6" class="hotelFilter-item">
        <el-row>酒店设施</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in options.assets" :key="index">
              <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <!-- 酒店品牌 -->
      <el-col :span="6" class="hotelFilter-item">
        <el-row>酒店品牌</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in options.brands" :key="index">
              <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
            </el-dropdown-item>
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
        :pager-count="5"
        prev-text="< 上一页"
        next-text="下一页  >"
      ></el-pagination>
    </el-row>
  </div>
</template>

<script>
import Map from "@/components/hotel/map";
import HotelItem from "@/components/hotel/hotelItem";
export default {
  data() {
    return {
      // 搜索城市
      cityName:'',
      // 酒店选项
      options:{
        levels:[],    // 酒店等级
        types:[],     // 酒店类型
        assets:[],    // 酒店设施
        brands:[]     // 酒店品牌
      }
    };
  },
  components: {
    Map,
    HotelItem
  },
  mounted(){
    this.$axios({
      url:'/hotels/options'
    }).then(res=>{
      // console.log(res)
      this.options=res.data.data
    })
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
    margin: 0 10px;
  }
}
</style>