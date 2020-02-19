<template>
  <div class="hotel">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>酒店</el-breadcrumb-item>
      <el-breadcrumb-item>广州市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
    <!-- 搜索栏 -->
    <el-row type="flex" justify="space-between" class="checkPrice" :gutter="20">
      <!-- 搜索城市 -->
      <el-col :span="7">
        <el-input v-model="city" placeholder="切换城市" suffix-icon="el-icon-map-location"></el-input>
      </el-col>
      <!-- 日期选择器 -->
        <el-date-picker
          v-model="value"
          type="daterange"
          range-separator="-"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
        ></el-date-picker>
      <!-- 选择人数 -->
      <el-col :span="7">
        <el-popover 
        placement="bottom" 
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <el-input v-model="persons" placeholder="人数未定" suffix-icon="el-icon-user"  slot="reference" readonly='readonly'></el-input>
        </el-popover>
      </el-col>
      <!-- 按钮 -->
        <el-button type="primary">查看价格</el-button>
    </el-row>
    <!-- 定位 -->
    <el-row type="flex">
      <!-- 区域 -->
      <el-col :span="14">
         <el-row>
           <span>区域：</span>
           <el-collapse v-model="activeNames" @change="handleChange">
             <el-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
           </el-collapse>
         </el-row>
         <!-- 均价 -->
         <el-row>
           <span>均价：</span>
         </el-row>
      </el-col>
      <!-- 地图 -->
      <el-col :span="10">

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      value: ""
    };
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
.checkPrice {
  width: 100%;
}
</style>