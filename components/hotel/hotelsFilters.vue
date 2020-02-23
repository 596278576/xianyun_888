<template>
  <div class="filter">
      <el-row type="flex" class="hotelFilter">
      <!-- 价格 -->
      <el-col :span="8" class="hotelFilter-price">
        <el-row type="flex" justify="space-between">
          <el-col>价格</el-col>
          <el-col>0-4000</el-col>
        </el-row>
        <el-slider v-model="budget" :min="0" :max="4000"></el-slider>
      </el-col>
      <!-- 酒店等级 -->
      <el-col :span="6" class="hotelFilter-item">
        <el-row>酒店等级</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in data.levels" :key="index">
              <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <!-- 酒店类型 -->
      <el-col :span="6" class="hotelFilter-item">
        <el-row>酒店类型</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in data.types" :key="index">
              <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <!-- 酒店设施 -->
      <el-col :span="6" class="hotelFilter-item">
        <el-row>酒店设施</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in data.assets" :key="index">
              <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <!-- 酒店品牌 -->
      <el-col :span="6" class="hotelFilter-item">
        <el-row>酒店品牌</el-row>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu 
          slot="dropdown" 
          class="infinite-list" 
          v-infinite-scroll="load" 
          style="overflow:auto"
          >
            <el-dropdown-item v-for="(item,index) in data.brands" :key="index" class="infinite-list-item">
              <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
   data () {
       return {
      //       // 酒店选项
      // options:{
      //   levels:[],    // 酒店等级
      //   types:[],     // 酒店类型
      //   assets:[],    // 酒店设施
      //   brands:[]     // 酒店品牌
      // }
       }
   },
   props:{
     data:{
       type:Object,
       default:{}
     }
   }
}
</script>

<style lang="less" scoped>
.hotelFilter {
  width: 100%;
  border: 1px solid #ddd;
  padding: 5px 20px;
  margin: 25px 0;
  .hotelFilter-price,
  .hotelFilter-item {
    padding: 5px 20px;
  }
  .hotelFilter-item {
    border-left: 1px solid #ddd;
  }
  /deep/.dropdown-link-text {
    display: block;
    width: 100%;
  }
}
</style>