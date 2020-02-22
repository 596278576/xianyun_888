<template>
  <div class="Information">
    <el-row type="flex" class="info">
      <el-col :span="4">基本信息</el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">入住时间: 14:00之后</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">离店时间: 12:00之前</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">{{data.creation_time}} / {{data.renovat_time}}</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">酒店规模: {{data.roomCount}}间客房</div>
      </el-col>
    </el-row>
    <!-- 设施 -->
    <el-col :gutter="20" class="facility">
      <el-col :span="4">
        <div class="grid-content bg-purple">基本设施</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <i>热水壶</i>
        </div>
      </el-col>
    </el-col>
    <!-- 服务 -->
    <el-row class="serve" type="flex">
      <el-col :span="4">
        <div class="grid-content bg-purple">停车服务</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">-</div>
      </el-col>
    </el-row>
    <!-- 品牌 -->
    <el-row type="flex" class="brand">
      <el-col :span="4">
        <div class="grid-content bg-purple">品牌信息</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <span>贝壳</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {
        hotelbrand: {} //酒店品牌
      }
    }
  }
};
</script>

<style scoped lang="less">
.info {
  margin-top: 50px;
  padding: 20px 10px;
  color: #000;
  border-bottom: 1px solid #ccc;
  .bg-purple {
    color: #666;
  }
}
.facility {
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
  /deep/ i {
    border: 1px solid #eee;
    border-radius: 4px;
    color: #666;
    background-color: #eee;
    padding: 4px 10px;
    margin-right: 10px;
  }
}
.serve,
.brand {
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
}
</style>