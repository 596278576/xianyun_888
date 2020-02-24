<template>
  <div>
    <el-table :data="data.products" style="width: 100%" @click="photo">
      <el-table-column prop="name" label="价格来源" width="400px"></el-table-column>
      <el-table-column prop="bestType" label="低价房型" width="400px"></el-table-column>
      <el-table-column prop="price" label="最低价格/每晚">
        <template slot-scope="scope">
          <div>
            <span class="price">￥{{ scope.row.price }}</span> 起
            <span>
              <i class="height-light" style="color: #f90;"></i>
            </span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    //点击图片跳转
    photo(column) {
      window.location.href("https://hotels.ctrip.com/hotel/694679.html");
    }
  }
};
</script>

<style scoped lang="less">
.price {
  font-size: x-large;
  color: #f90;
}
/deep/.el-table__row {
  cursor: pointer;
}
</style>