<template>
  <div class="hotelItem">
    <el-row type="flex" :gutter="20">
      <el-col :span="8" class="hotelPhoto">
        <img
          src="https://p1.meituan.net/deal/__28971196__1332429.jpg%40700w_700h_0e_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
          alt="锦江之星(上海锦江乐园店)"
        />
      </el-col>
      <el-col :span="10">
          <h4>锦江之星(上海锦江乐园店)</h4>
          <span class="spell">jin jiang zhi xing (shang hai jin jiang le yuan dian)</span>
          <span><i class="iconfont iconhuangguan orange"></i></span>
          <span class="hotelType">舒适型</span>
          <el-row type="flex" :gutter="10" style="margin:10px 0;">
              <el-col :span="10">
                  <el-rate v-model="stars"
                   disabled
                    show-score
                    text-color="#ff9900"
                     :score-template="stars+'分'"></el-rate>
              </el-col>
              <el-col :span="7">
                  <span class="orange">66</span>&nbsp;条评价
              </el-col>
              <el-col :span="7">
                  <span class="orange">81</span>&nbsp;篇游记
              </el-col>
          </el-row>
          <el-row>
              <span class="location">
                  <i class="iconfont iconlocation"></i>位于: 川沙镇翔川路525弄9号楼(翔川家园旁边，靠近艳阳路)
              </span>
          </el-row>
      </el-col>
      <el-col :span="6">
          <el-row type="flex" class="chances">
              <el-col :span="12" class="company"><span>携程</span></el-col>
              <el-col :span="12" class="perprice">
                  <span class="orange">￥265</span>起
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
            stars:4.5
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
.orange {
    color: #f90;
}
</style>