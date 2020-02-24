<template>
  <div class="filter">
    <el-row type="flex" class="hotelFilter">
      <!-- 价格 -->
      <el-col :span="8" class="hotelFilter-price">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">价格</el-col>
          <el-col :span="12" style="text-align:right;">0-4000</el-col>
        </el-row>
        <el-slider v-model="filters.price_it" :min="0" :max="4000" :step="20"></el-slider>
      </el-col>
      <!-- 酒店等级 -->
      <el-col :span="6" v-for="(item,index) in options" :key="index" class="hotelFilter-item">
        <el-row>{{item.name}}</el-row>
        <el-row justify="space-between">
          <el-dropdown>
            <span class="el-dropdown-link">
              <span>{{item.show}}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(v,i) in item"
                :key="i"
                @click.native="handleSelect(v,i,index)"
                :command="v"
              >
                <i :class="{'iconfont':true,'iconcircle':!v.select,'iconright-1':v.select}"></i>
                {{v.name}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 酒店选项
      options: {
        levels: [], // 酒店等级
        types: [], // 酒店类型
        assets: [], // 酒店设施
        brands: [] // 酒店品牌
      },
      choices: ["住宿等级", "住宿类型", "酒店设施", "酒店品牌"],
      filters: {
        price_it: 4000,
        hotellevel_in: [], 
        hoteltype_in: [],
        hotelasset_in: [],
        hotelbrand_in: []
      }
    };
  },
  computed:{
    filter(){
      this.filters.price_lt += 0;
      // console.log(
      //   this.filters.hotellevel_in,
      //   this.filters.hoteltype_in,
      //   this.filters.hotelasset_in,
      //   this.filters.hotelbrand_in
      // );
      this.$emit("filtersData", this.filters);
      return "";
    }
  },
  mounted() {
    this.$axios({
      url: "/hotels/options"
    }).then(res => {
      // console.log(res);
      this.options = res.data.data;
      Object.keys(this.options).map((val, i) => {
        this.options[val].name = this.choices[i];
        this.options[val].show = " 不限";
        this.options[val].map((v, index) => {
          v.select = false;
        });
      });
      // console.log(this.options);
    });
  },
  methods: {
    handleSelect(v, i, index) {
      // console.log(v, i, index);
      if (index == "levels") {
        this.saveData(v, this.filters.hotellevel_in, index);
      } else if (index == "types") {
        this.saveData(v, this.filters.hoteltype_in, index);
      } else if (index == "assets") {
        this.saveData(v, this.filters.hotelasset_in, index);
      } else if (index == "brands") {
        this.saveData(v, this.filters.hotelbrand_in, index);
      }
    },
    saveData(v, arr, index) {
      console.log(v, arr, index);
      if (v.select == false) {
        v.select = true;
        arr.push(v.id);
      } else {
        v.select = false;
        let index = arr.indexOf(v.id);
        if (index > -1) {
          arr.splice(index, 1);
        }
      }
      if (arr.length == 1) {
        this.options[index].show = v.name;
      } else if (arr.length > 1) {
        this.options[index].show = `已选择${arr.length}项`;
      } else {
        this.options[index].show = "不限";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.hotelFilter {
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #666;
  padding: 5px 0;
  margin: 25px 0;
  .hotelFilter-price,
  .hotelFilter-item {
    padding: 5px 20px;
  }
  .hotelFilter-item {
    border-left: 1px solid #ddd;
  }
  .el-dropdown {
  width: 100%;
  margin-top: 10px;
}
.el-icon-arrow-down {
  margin-left: 100px;
}
.el-dropdown-menu {
  max-height: 200px;
  overflow: auto;
}
}
</style>