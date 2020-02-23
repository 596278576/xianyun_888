<template>
  <div class="map" id="container"></div>
</template>

<script>
export default {
  data() {
    return {
      map: "",
      marker:'',
      cityName:'',
      citybounds:{}
    };
  },
  props:{
    data:{
      type:Object,
      default:{}
    }
  },
  mounted() {
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=b9ea2abac486db051ae7ee12b6e62b5c&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
    this.mapInit();
  },
  methods: {
    mapInit() {
      window.onLoad = function() {
        // 创建一个 Map 实例：
        this.map = new AMap.Map("container", {
          resizeEnable: true
        });
        AMap.plugin("AMap.CitySearch", function() {
          var citySearch = new AMap.CitySearch();
          citySearch.getLocalCity(function(status, result) {
            if (status === "complete" && result.info === "OK") {
              // 查询成功，result即为当前所在城市信息
              if(result&&result.city&&result.bounds){
                this.cityName=result.city;
                this.citybounds=result.bounds;
              console.log(result);
              }
              this.$store.commit("hotel/setCity", this.citybounds);
            }
          });         
        });
        // 创建一个 Marker 实例：
          this.marker = new AMap.Marker({
            position: new AMap.LngLat(this.data.location.longitude, this.data.location.latitude), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: this.cityName
          });

          // 将创建的点标记添加到已有的地图实例：
          map.add(marker);

          // 多个点实例组成的数组
          // var markerList = [marker1, marker2, marker3];
          // map.add(markerList);

          // 移除已创建的 marker
          // map.remove(marker);
      };
    }
  }
};
</script>

<style lang='less' scoped>
.map {
  width: 420px;
  height: 260px;
}
</style>