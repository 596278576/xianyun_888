<template>
  <div>
    <div class="seach">
      <input type="text" placeholder="请输入你想去的地方比如广州" />
      <i class="el-icon-search"></i>
    </div>
    <!-- 推荐 -->
    <div class="recommend">
      <span>推荐</span>
      <a href="#">广州</a>
      <a href="#">上海</a>
      <a href="#">北京</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.seach {
  position: relative;
  height: 40px;
  line-height: 30px;
  // background: #ffa500;
  border: 3px solid #ffa500;
  box-sizing: border-box;
  input {
    border: none;
    outline: none;
    width: 650px;
    height: 34px;
    // line-height: 20px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 14px;
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #999;
    }
  }
  i {
    position: absolute;
    top: 5px;
    font-size: 24px;
    color: orange;
    font-weight: 700;
  }
}
.recommend {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  span {
    margin-right: 10px;
  }
  a {
    margin-left: 10px;
    &:hover {
      color: #ffa500;
      text-decoration: #ffa500;
    }
  }
}
</style>