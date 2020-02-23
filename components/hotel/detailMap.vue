<template>
  <div class="info-row">
    <div class="map-view">
      <div id="container" class="map-box"></div>
      <div class="poi-list">
        <el-tabs v-model="editableTabsValue" type="border-card" @tab-click="handleSearch">
          <el-tab-pane label="风景" name="1">
            <div class="poi-list-ol" id="panel"></div>
          </el-tab-pane>
          <el-tab-pane label="交通" name="2">
            <div class="poi-list-ol" id="traffic"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {
        location: {},
        list: []
      }
    }
  },
  data() {
    return {
      editableTabsValue: "1",
      map: ""
    };
  },
  mounted() {
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=7bc14854874f66a0277e73e3ff35da35&callback=onLoad&plugin=AMap.PlaceSearch";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
    //组件加载完后执行的函数
    setTimeout(() => {
      this.mapInit();
    }, 200);
  },
  methods: {
    //地图初始化
    mapInit() {
      window.onLoad = () => {
        this.map = new AMap.Map("container", {
          // center: this.centerInfo,
          zoom: 14, //初始地图级别
          resizeEnable: true
        });
        this.searchScenery();
      };
    },
    searchScenery() {
      AMap.service(["AMap.PlaceSearch"], () => {
        //构造地点查询类
        var placeSearch = new AMap.PlaceSearch({
          pageSize: 10, // 单页显示结果条数
          pageIndex: 1, // 页码
          // city: this.data.city.name, // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: this.map, // 展现结果的地图实例
          panel: "panel", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });

        let cpoint = [
          this.data.location.longitude,
          this.data.location.latitude
        ]; //中心点坐标
        //关键字查询
        // undefrfinded----箭头函数
        placeSearch.searchNearBy("风景", cpoint, 3000, (status, result) => {
          console.log(result);
          this.list = result.poiList.pois;
        });
      });
    },
    searchTraffic() {
      AMap.service(["AMap.PlaceSearch"], () => {
        //构造地点查询类
        var placeSearch = new AMap.PlaceSearch({
          pageSize: 10, // 单页显示结果条数
          pageIndex: 1, // 页码
          // city: this.data.city.name, // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: this.map, // 展现结果的地图实例
          panel: "traffic", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        let cpoint = [
          this.data.location.longitude,
          this.data.location.latitude
        ]; //中心点坐标
        //关键字查询
        placeSearch.searchNearBy("交通", cpoint, 3000, (status, result) => {
          console.log(result);
          this.list = result.poiList.pois;
        });
      });
    },

    handleSearch(tab, event) {
      // 根据地图的容器生成地图
      this.map = new AMap.Map("container", {
        resizeEnable: true
      });
      if (tab.label == "风景") {
        this.searchScenery();
      }
      if (tab.label == "交通") {
        this.searchTraffic();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.info-row {
  margin: 40px 0;
}
.map-view {
  display: flex;
  flex: 1;
  height: 360px;
  .map-box {
    width: 65%;
    height: 100%;
  }
  .poi-list {
    padding-left: 20px;
    width: 35%;
    /deep/.el-tabs--border-card > .el-tabs__content {
      padding: 10px;
      padding-right: 0px;
    }
    .poi-list-ol {
      height: 300px;
      overflow: auto;
      font-size: 14px;
      color: #666;
      /deep/.amap_lib_placeSearch {
        border: 0;
        /deep/.amap_lib_placeSearch_page {
          background: #fff;
        }
        /deep/.pageLink {
          border-radius: 20%;
        }
      }
    }
  }
}
</style>
