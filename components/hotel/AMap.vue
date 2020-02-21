<template>
  <div style>
    <el-row type="flex" :gutter="100" justify="space-between">
      <!-- 展示地图 -->
      <el-col :span="12">
        <!-- 地图容器 -->
        <div id="container"></div>
      </el-col>

      <!-- 输入查找的信息 -->

      <el-col :span="12">
        <!-- 搜索按钮 -->
        <div class="item">
          <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
            <el-tabs :tab-position="tabPosition" style="height: 200px;">
              <el-tab-pane label="风景">风景</el-tab-pane>
              <el-tab-pane label="交通">交通</el-tab-pane>
            </el-tabs>
          </el-radio-group>
        </div>
        <div id="panel"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 输入框的值
      inputValue: "",
      // 地图的实例
      map: ""
    };
  },
  mounted() {
    // 动态导入js到head头部中，导入该文件后会有全局的Amap对象
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=0e50af054087c7bec2bd57e4356a4bd3&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
    // 如果文件加载后执行下面的函数
    this.mapInit();
  },
  methods: {
    // 地图初始化
    mapInit() {
      window.onLoad = function() {
        // 根据地图的容器生成地图
        this.map = new AMap.Map("container", {
          resizeEnable: true
        });
      };
    },
    // 点击搜索按钮时候触发的事件
    handleSearch() {
      // 根据地图的容器生成地图
      this.map = new AMap.Map("container", {
        resizeEnable: true
      });
      AMap.service(["AMap.PlaceSearch"], () => {
        //构造地点查询类
        var placeSearch = new AMap.PlaceSearch({
          pageSize: 5, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: "020", // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: this.map, // 展现结果的地图实例
          panel: "panel", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        placeSearch.search(this.inputValue);
      });
    }
  }
};
</script>

<style scoped lang="less">
#container {
  width: 650px;
  height: 360px;
}
.item {
  margin-left: 50px;
  margin-bottom: 30px;
  button {
    width: 100%;
  }
}
#panel {
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  width: 280px;
}
</style>