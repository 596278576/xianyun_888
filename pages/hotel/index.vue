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
        v-model="checkDate"
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
    <!-- 过滤条件 -->
    <HotelsFilters></HotelsFilters>
    <!-- 搜索结果 -->
    <HotelItem v-for="(item,index) in hotelsData" :key="index" :data='item'></HotelItem>
    <!-- 分页 -->
    <el-row type="flex" justify="end" style="padding:20px 0 40px;">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        :pager-count="5"
        prev-text="< 上一页"
        next-text="下一页  >"
      ></el-pagination>
    </el-row>
  </div>
</template>

<script>
import Map from "@/components/hotel/map";
import HotelsFilters from '@/components/hotel/hotelsFilters'
import HotelItem from "@/components/hotel/hotelItem";
export default {
  data() {
    return {
      // 搜索城市
      cityName:'',
      // 选择日期
      checkDate:'',
      hotelsData:[],
      total:0
    };
  },
  components: {
    Map,
    HotelsFilters,
    HotelItem
  },
  mounted(){
    this.$axios({
      url:'/hotels/options'
    }).then(res=>{
      // console.log(res)
      this.options=res.data.data
    });
    this.getList()
  },
  methods:{
    getList(){
      // 请求酒店列表数据
      this.$axios({
        url:'/hotels',
        params:this.$route.query
      }).then(res=>{
        console.log(res)
        // 前十条数据
        this.hotelsData=res.data.data
        // 总条数
        this.total=this.hotelsData.total
      })
    }
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