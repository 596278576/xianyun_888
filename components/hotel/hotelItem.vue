<template>
  <div class="hotelItem">
    <el-row type="flex" :gutter="20">
      <el-col :span="8" class="hotelPhoto">
        <img
          :src="data.photos"
          alt="锦江之星(上海锦江乐园店)"
        />
      </el-col>
      <el-col :span="10">
          <h4>{{data.name}}</h4>
          <span class="spell">{{data.alias}}</span>
          <span><i class="iconfont iconhuangguan orange"></i></span>
          <span class="hotelType">{{data.hoteltype.name}}</span>
          <el-row type="flex" :gutter="10" style="margin:10px 0;">
              <el-col :span="10">
                  <el-rate v-model="data.stars"
                   disabled
                    show-score
                    text-color="#ff9900"
                     :score-template="data.stars+'分'"></el-rate>
              </el-col>
              <el-col :span="7">
                  <span class="orange">{{data.all_remarks}}</span>&nbsp;条评价
              </el-col>
              <el-col :span="7">
                  <span class="orange">81</span>&nbsp;篇游记
              </el-col>
          </el-row>
          <el-row>
              <span class="location">
                  <i class="iconfont iconlocation"></i>位于: {{data.address}}
              </span>
          </el-row>
      </el-col>
      <el-col :span="6" class="chances">
          <el-row type="flex" class="chancesItem" v-for="(item,index) in data.products" :key="index">
              <el-col :span="12" class="company"><span>{{item.name}}</span></el-col>
              <el-col :span="12" class="perprice">
                  <span class="orange">￥{{item.price}}</span>起
                  <i class="el-icon-arrow-right"></i>
              </el-col>
          </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props:{
        data:{
            type:Object,
            default:{}
        }
    }
};
</script>

<style lang='less' scoped>
.hotelItem {
  width: 1000px;
  padding: 25px 0;
  border-bottom: 1px solid #ddd;
  .hotelPhoto {
    width: 340px;
    height: 210px;
    img {
        width: 100%;
        height: 210px;
    }
  }
  .spell,
  .hotelType {
      color: #999;
  }
  h4 {
      font-weight: 400;
      font-size: x-large
  }
  .location {
      color: #666;
      font-size: 14px
  }
  .chances {
      margin-top: 20px;
      .chancesItem {
      padding: 0 10px;
      border-bottom: 1px solid #ddd;
      .company,
      .perprice {
        padding: 12px 10px;
        font-size: 14px;
        color: #666;
      }
  }
  }
}
.orange {
    color: #f90;
}
</style>