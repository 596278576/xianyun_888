<template>
    <div class="map" id="container">

    </div>
</template>

<script>
export default {
  data() {
    return {
      map: ""
    };
  },
  mounted() {
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=b9ea2abac486db051ae7ee12b6e62b5c&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
    this.mapInit()
  },
  methods: {
    mapInit() {
      window.onLoad = function() {
        this.map = new AMap.Map("container",{
            resizeEnable:true
        });
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