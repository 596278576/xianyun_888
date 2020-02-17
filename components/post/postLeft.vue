<template>
  <el-row type="flex" class="row-bg postLeft" justify="space-between" align="middle">
    <div class="listleft">
      <div @mouseover="listRight" @mouseout="listRight_show">
        <el-row type="flex" class="row-bg li" justify="space-between" align="middle">
          <span>热门城市</span>
          <span class="el-icon-arrow-right"></span>
        </el-row>
      </div>

      <div @mouseover="listRight">
        <el-row type="flex" class="row-bg li" justify="space-between" align="middle">
          <span>热门城市</span>
          <span class="el-icon-arrow-right"></span>
        </el-row>
      </div>
      <div @mouseover="listRight">
        <el-row type="flex" class="row-bg li" justify="space-between" align="middle">
          <span>热门城市</span>
          <span class="el-icon-arrow-right"></span>
        </el-row>
      </div>
      <div @mouseover="listRight">
        <el-row type="flex" class="row-bg li" justify="space-between" align="middle">
          <span>热门城市</span>
          <span class="el-icon-arrow-right"></span>
        </el-row>
      </div>
    </div>
    <div class="listRight" v-if="listRight_if">
      <p>
        <span>1</span>
        <span>北京</span>
        <span>描述</span>
      </p>
      <p>
        <span>1</span>
        <span>北京</span>
        <span>描述</span>
      </p>
      <p>
        <span>1</span>
        <span>北京</span>
        <span>描述</span>
      </p>
      <p>
        <span>1</span>
        <span>北京</span>
        <span>描述</span>
      </p>
      <p>
        <span>1</span>
        <span>北京</span>
        <span>描述</span>
      </p>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      listRight_if: false
    };
  },
  methods: {
    listRight() {
      this.listRight_if = true;
    },
    listRight_show() {
      this.listRight_if = false;
    }
  }
};
</script>

<style scoped lang='less'>
.postLeft {
  .listleft {
    position: relative;
    width: 260px;
    border: 1px solid #ddd;
    /deep/ .li {
      //   line-height: 40px !important;
      height: 40px;
      padding: 0 20px;
      border-bottom: 1px solid #ddd;
      font-size: 14px;
        box-sizing: border-box;
      &:hover {
        color: #ffa500;
        // box-sizing: border-box;
        box-shadow:5px 0 3px 0px #fff; ;
        z-index: 30;
      }
    }
  }
  .listRight {
    position: absolute;
    left: 260px;
    top: 0px;
    width: 400px;
    font-size: 16px;
    background: #fff;
    z-index: 2;
    border: 1px solid #ccc;
    padding: 0 10px;
    p {
      height: 40px;
      line-height: 40px;
      span {
        &:nth-child(1) {
          color: #ffa500;
          font-style: italic;
        }
        &:nth-child(2) {
          color: #ffa500;
          margin-left: 10px;
        }
        &:nth-child(3) {
          color: #8f8f8f;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>