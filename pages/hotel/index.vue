<template>
  <div class="hotel">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>酒店</el-breadcrumb-item>
        <el-breadcrumb-item>酒店预订</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 搜索栏 -->
<<<<<<< HEAD
    <el-form :inline="true" class="search-form-content" ref="form">
      <el-form-item>
        <el-autocomplete
                v-model="form.cityName"
                :fetch-suggestions="queryDepartSearch"
                placeholder="切换城市"
                @select="handleDepartSelect"
                @blur="handleDepartBlur"
                class="el-autocomplete"
                ></el-autocomplete>
      </el-form-item>
      <el-form-item>
        <!-- 日期选择器 -->
      <el-date-picker
        v-model="checkDate"
        type="daterange"
        range-separator="-"
        start-placeholder="入住日期"
        end-placeholder="离店日期"
      ></el-date-picker>
      </el-form-item>
      <el-form-item>
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
            size="mini"
            v-model="state1"
                placeholder="请选择"
            :fetch-suggestions="querySearch"
            @select="handleSelectAdult"
            readonly="readonly"
          ></el-autocomplete>
            </el-col>
            <el-col :span="24">
              <el-autocomplete
            class="inline-input"
            size="mini"
            v-model="state1"
            placeholder="请选择"
            :fetch-suggestions="querySearch"
            @select="handleSelectChild"
            readonly="readonly"
          ></el-autocomplete>
            </el-col>
          </el-row>
          <el-row type="flex" justify="end" align="middle" style="margin-top:20px;padding-top:20px;border-top:1px solid #ddd;">
            <el-button size="mini" type="primary">确定</el-button>
          </el-row>
        </el-popover>
      </el-form-item>
      <el-form-item>
        <!-- 按钮 -->
      <el-button type="primary">查看价格</el-button>
      </el-form-item>
    </el-form>
=======
    <SearchForm></SearchForm>
>>>>>>> 32c6cf4a29c4b0765147797d92c19280e9fdb99d
    <!-- 定位 -->
    <el-row type="flex" :gutter="5" class="location">
      <!-- 区域 -->
      <el-col :span="14">
        <el-row type="flex">
          <el-col :span="3">
            <span>区域：</span>
          </el-col>
          <el-col :span="24">
            <!-- <div>
              <a class="area"
              v-for="(item,index) in hotelsData[1].scenic" 
              :key="index"
              >{{item.name}}</a>
            </div> -->
            <a href="#"><i class="el-icon-d-arrow-right orange arrow-down"></i>等{{hotelsData[0].scenic.length}}个区域</a>
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
        <Map :data='hotelsData'></Map>
      </el-col>
    </el-row>
    <!-- 过滤条件 -->
    <HotelsFilters :data='options'></HotelsFilters>
    <!-- 搜索结果 -->
    <HotelItem v-for="(item,index) in hotelsData" :key="index" :data='item'></HotelItem>
    <!-- 分页 -->
    <el-row type="flex" justify="end" style="padding:20px 0 40px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>
    </el-row>
  </div>
</template>

<script>
import Map from "@/components/hotel/map";
import SearchForm from "@/components/hotel/searchForm";
import HotelsFilters from '@/components/hotel/hotelsFilters'
import HotelItem from "@/components/hotel/hotelItem";
export default {
  data() {
    return {   
      // 酒店选项
      options:{},
      hotelsData:[],
      total:0,
      pageIndex:1,
      pageSize:10, 
      form:{
        city:'73',
        enterTime:'',
        leftTime:'',
        _limit:10,
        _start:0
      }
    };
  },
  components: {
    Map,
    SearchForm,
    HotelsFilters,
    HotelItem
  },
  mounted(){
    this.getList();
    this.$axios({
      url:'/hotels/options'
    }).then(res=>{
      // console.log(res)
      this.options=res.data.data
    });
  },
  // 在当前路由改变，但是该组件被复用时调用
    // to: 要跳转的页面路由对象
    // from：要离开页面路有对象
    // next 是必须要调用
  beforeRouteUpdate (to, from, next) {
        // 每次url变化时候把pageIndex初始化为1
        this.pageIndex = 1;

        // 跳转到下一页
        next();

        // 请求酒店列表数据
        this.getList();  
    },
  methods:{
    getList(){
      // 请求酒店列表数据
      this.$axios({
        url:'/hotels',
        params:this.form
      }).then(res=>{
        console.log(res)
        // 前十条数据
        this.hotelsData=res.data.data
        // 总条数
        this.total=this.hotelsData.total
      })
    },
    handleSizeChange(index){
      this.pageSize = index;
    },
    handleCurrentChange(index){
      this.pageIndex=index
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
.location {
  font-size: 14px;
  color: #666;
}
.area {
  margin-right: 14px;
  padding: 0 2px
}
.arrow-down {
  transform: rotate(90deg);
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