<template>
    <div>
        <!-- 地图的容器 -->
        <div id="container"></div>
        <span>{{filter}}</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            locations:[]
        }
    },props:{
        data:{
            type:Array,
            default:[]
        }
    },
    computed:{
        // 监听传入数据
        filter(){
            this.data.forEach(v=>{
                this.locations.push(v.location)
            })
            return ''
        }
    },
    mounted() {
        // 异步导入地图js （来自于官网）
        var url = 'https://webapi.amap.com/maps?v=1.4.15&key=0e50af054087c7bec2bd57e4356a4bd3&callback=onLoad';
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);
        
        // 地图加载完毕之后会触发
        window.onLoad  = function(){
            // 加载地图容器
            var map = new AMap.Map('container', {
                zoom:11,//级别
            })
            // 调用地图的插件，获取城市名字
            AMap.plugin('AMap.Geolocation', function() {
                var geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                    buttonOffset: new AMap.Pixel(10, 20),
                    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    zoomToAccuracy: true,     
                    //  定位按钮的排放位置,  RB表示右下
                    buttonPosition: 'RB'
                })
                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', onComplete)
                AMap.event.addListener(geolocation, 'error', onError)
                function onComplete (data) {
                    // data是具体的定位信息
                    this.open(data.addressComponent.city)
                    var markerList=[]
                    this.locations.forEach((v,i)=>{
                        // (点标记)创建一个 Marker 实例：
                    var marker = new AMap.Marker({
                        position: new AMap.LngLat(v.longitude, v.latitude),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                        title: data.formattedAddress,
                        map:map,
                        offset:new AMap.Pixel(-10,-10),
                        icon: "//vdata.amap.com/icons/b18/1/2.png"
                    });
                    
                    // 将创建的点标记添加到已有的地图实例：
                    markerList.push(marker);
                    })
                    
                }
                function onError (data) {
                    // 定位出错
                }
            })
        }
    },
    methods: {
        open(data) {
          this.$alert(`当前定位城市是${data}`, "提示", {
            confirmButtonText: "确定",
            type: "success",
            callback: action => {
              this.$emit("getLocation", data);
            }
          });
        }
    }
}
</script>

<style scoped lang="less">
#container {
    width: 420px;
    height: 260px;
}
</style>