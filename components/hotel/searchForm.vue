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
      form: {
        // 搜索城市
        cityName: "",
        // 选择日期
        checkDate: ""
      }
    };
  }
};
</script>

<style lang='less' scoped>
</style>