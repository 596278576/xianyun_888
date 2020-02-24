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
    <SearchForm @sendCity="sendCity"></SearchForm>
    <!-- 定位 -->
    <el-row type="flex" :gutter="10" class="location">
      <!-- 区域 -->
      <el-col :span="14">
        <el-row type="flex">
          <el-col :span="3">
            <span>区域：</span>
          </el-col>
          <el-col :span="24">
            <div id="clickArea" :class="{active:isShow}">
              <a
                href="#"
                class="area"
                v-for="(item,index) in cityArea.scenics"
                :key="index"
              >{{item.name}}</a>
            </div>
            <a href="#" @click="isShow=!isShow">
              <i class="el-icon-d-arrow-right orange arrow-down"></i>
              等{{this.cityArea.scenics.length}}个区域
            </a>
          </el-col>
        </el-row>
        <!-- 均价 -->
        <el-row type="flex">
          <el-col :span="3">
            <span>
              均价
              <el-tooltip
                class="item"
                effect="dark"
                content="等级均价由平日价格计算得出，节假日价格会有上浮。"
                placement="bottom-start"
              >
                <i class='questionMark'>?</i>
              </el-tooltip>：
            </span>
          </el-col>
          <el-col :span="6">
            <el-tooltip
              :visible-arrow="false"
              class="item"
              effect="dark"
              content="等级评定是针对房价，设施和服务等各方面水平的综合评估。"
              placement="bottom"
            >
              <span class="price-budget">
                <i class="iconfont iconhuangguan orange"></i>
                <i class="iconfont iconhuangguan orange"></i>
                <i class="iconfont iconhuangguan orange"></i>
                ¥332
              </span>
            </el-tooltip>
          </el-col>
          <el-col :span="6">
            <el-tooltip
              :visible-arrow="false"
              class="item"
              effect="dark"
              content="等级评定是针对房价，设施和服务等各方面水平的综合评估。"
              placement="bottom"
            >
              <span class="price-budget">
                <i class="iconfont iconhuangguan orange"></i>
                <i class="iconfont iconhuangguan orange"></i>
                <i class="iconfont iconhuangguan orange"></i>
                ¥521
              </span>
            </el-tooltip>
          </el-col>
          <el-col :span="6">
            <el-tooltip
              :visible-arrow="false"
              class="item"
              effect="dark"
              content="等级评定是针对房价，设施和服务等各方面水平的综合评估。"
              placement="bottom"
            >
              <span class="price-budget">
                <i class="iconfont iconhuangguan orange"></i>
                <i class="iconfont iconhuangguan orange"></i>
                <i class="iconfont iconhuangguan orange"></i>
                ¥768
              </span>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-col>
      <!-- 地图 -->
      <el-col :span="10">
        <Map :data="hotelsData" @getLocation="getLocation"></Map>
      </el-col>
    </el-row>
    <!-- 过滤条件 -->
    <HotelsFilters :data="options" @searchHotel="searchHotel"></HotelsFilters>
    <!-- 搜索结果 -->
    <HotelItem v-for="(item,index) in hotelsData" :key="index" :data="item"></HotelItem>
    <!-- 分页 -->
    <el-row type="flex" justify="end" style="padding:20px 0 40px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-row>
  </div>
</template>

<script>
import Map from "@/components/hotel/map";
import SearchForm from "@/components/hotel/searchForm";
import HotelsFilters from "@/components/hotel/hotelsFilters";
import HotelItem from "@/components/hotel/hotelItem";
export default {
  data() {
    return {
      // 酒店选项
      options: {},
      hotelsData: [],
      total: 0,
      pageIndex: 1,
      pageSize: 10,
      cityArea: {
        scenics: []
      },
      isShow: true,
      form: {
        city: "73",
        enterTime: "",
        leftTime: "",
        _limit: 10,
        _start: 0
      },
      cityName: "上海市"
    };
  },
  components: {
    Map,
    SearchForm,
    HotelsFilters,
    HotelItem
  },
  mounted() {
    this.getArea();
    this.getList();
    this.$axios({
      url: "/hotels/options"
    }).then(res => {
      // console.log(res)
      this.options = res.data.data;
    });
  },
  // 在当前路由改变，但是该组件被复用时调用
  // to: 要跳转的页面路由对象
  // from：要离开页面路有对象
  // next 是必须要调用
  beforeRouteUpdate(to, from, next) {
    // 每次url变化时候把pageIndex初始化为1
    this.pageIndex = 1;

    // 跳转到下一页
    next();

    // 请求酒店列表数据
    this.getList();
  },
  methods: {
    getLocation(data) {
      this.city = data;
    },
    // 从searchForm接受数据
    sendCity(val) {
      this.city = val;
      // this.
    },

    getList() {
      let paramsArr = [];

      // 请求酒店列表数据
      this.$axios({
        url: "/hotels",
        params: this.form
      }).then(res => {
        console.log(res);
        // 前十条数据
        this.hotelsData = res.data.data;
        // 总条数
        this.total = this.hotelsData.total;
      });
    },
    // 获取城市区域和id
    getArea() {
      this.$axios({
        url: "/cities",
        params: {
          name: this.cityName
        }
      }).then(res => {
        // console.log(res);
        // 区域
        this.cityArea = res.data.data[0];
        // 城市id
        this.form.city = res.data.data[0].id;
      });
    },
    handleSizeChange(index) {
      this.pageSize = index;
    },
    handleCurrentChange(index) {
      this.pageIndex = index;
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
#clickArea {
  a:hover {
    color: #0094ff;
    text-decoration: underline;
  }
}
.active {
  height: 40px;
  overflow: hidden;
}
.area {
  margin-right: 14px;
  padding: 0 2px;
}
.arrow-down {
  transform: rotate(90deg);
}
.questionMark {
  display: inline-block;
  width: 14px;
  height: 14px;
  font-size: 5px;
  text-align: center;
  line-height: 14px;
  border-radius: 7px;
  background-color: #666;
  color: #fff;

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
.orange {
  color: #f90;
}
</style>