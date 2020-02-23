<template>
  <div class="searchForm">
    <el-form :inline="true" class="search-form-content" ref="form">
      <el-form-item>
        <el-autocomplete
          v-model="form.cityName"
          :fetch-suggestions="queryCitySearch"
          placeholder="切换城市"
          @select="handleCitySelect"
          @blur="handleCityBlur"
          class="el-autocomplete"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item>
        <!-- 日期选择器 -->
        <el-date-picker
          v-model="checkDate"
          type="daterange"
          range-separator="-"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <!-- 弹出框 -->
        <el-popover placement="bottom" width="300" trigger="click">
          <el-input
            v-model="persons"
            placeholder="人数未定"
            suffix-icon="el-icon-user"
            slot="reference"
            readonly="readonly"
          ></el-input>
          <!-- 选项 -->
          <el-row type="flex" :gutter="10" align="middle" class="chiose">
            <el-col :span="24">
              <span>每间</span>
            </el-col>
            <el-col :span="24">
              <el-autocomplete
                class="inline-input"
                size="mini"
                v-model="state1"
                placeholder="请选择"
                :fetch-suggestions="querySearch"
                @select="handleSelectAdult"
                readonly="readonly"
              ></el-autocomplete>
            </el-col>
            <el-col :span="24">
              <el-autocomplete
                class="inline-input"
                size="mini"
                v-model="state1"
                placeholder="请选择"
                :fetch-suggestions="querySearch"
                @select="handleSelectChild"
                readonly="readonly"
              ></el-autocomplete>
            </el-col>
          </el-row>
          <el-row
            type="flex"
            justify="end"
            align="middle"
            style="margin-top:20px;padding-top:20px;border-top:1px solid #ddd;"
          >
            <el-button size="mini" type="primary">确定</el-button>
          </el-row>
        </el-popover>
      </el-form-item>
      <el-form-item>
        <!-- 按钮 -->
        <el-button type="primary">查看价格</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        city:'73',
        enterTime:'',
        leftTime:'',
        _limit:10,
        _start:0,
        cityName:''
      }
    };
  },
  methods:{
    // 封装出发城市和到达城市的请求函数
        querySearch(value){
            // 根据value请求城市列表
            return this.$axios({
                url: "/airs/city",
                // axios的get请求的参数使用params, 如果是post请求使用data
                params: {
                    name: value
                }
            }).then(res => {
                // data是数组，但是数组中的对象没有value值
                const {data} = res.data;

                // 给data中没一项都添加一个value属性 (forEach,map)
                const newData = data.map(v => {
                    v.value = v.name.replace("市", "");
                    // map返回的数组由return组成的
                    return v;
                })

                return newData;
            })   
        },
  }
};
</script>

<style lang='less' scoped>
</style>