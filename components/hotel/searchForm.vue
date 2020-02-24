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
          v-model="form.checkDate"
          type="daterange"
          range-separator="-"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
          :picker-options="pickerOptions"
          @change="handleDate"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <!-- 弹出框 -->
        <el-popover :disabled="disabled" placement="bottom" width="300" trigger="click">
          <el-input
            v-model="form.persons"
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
              <el-select v-model="adults" placeholder="成人" size="small" @change="handleAdults">
                <el-option v-for="(item,index) in 7" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </el-col>
            <el-col :span="24">
              <el-select v-model="kids" placeholder="儿童" size="small" @change="handleKids">
                <el-option v-for="(item,index) in 5" :key="index" :label="index" :value="index"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row
            type="flex"
            justify="end"
            align="middle"
            style="margin-top:20px;padding-top:20px;border-top:1px solid #ddd;"
          >
            <el-button size="mini" type="primary" @click="handleEnsure">确定</el-button>
          </el-row>
        </el-popover>
      </el-form-item>
      <el-form-item>
        <!-- 按钮 -->
        <el-button type="primary" @click="handleCheckPrice">查看价格</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled:false,
      // 表单数据
      form: {
        cityName: "",
        checkDate: ["", ""],
        persons: ''
      },
      adults: "",
      kids: "",
      adultsN: "",
      kidsN: "",
      // 切换城市
      cityData: [],
      // 禁用过期选项
      pickerOptions: {
        // 如果返回true表示可选
        disabledDate(time) {
          return time.getTime() + 3600 * 1000 * 24 < Date.now();
        }
      }
    };
  },
  methods: {
    // 封装出发城市和到达城市的请求函数
    querySearch(value) {
      // 根据value请求城市列表
      return this.$axios({
        url: "/airs/city",
        // axios的get请求的参数使用params, 如果是post请求使用data
        params: {
          name: value
        }
      }).then(res => {
        // data是数组，但是数组中的对象没有value值
        const { data } = res.data;

        // 给data中没一项都添加一个value属性 (forEach,map)
        const newData = data.map(v => {
          v.value = v.name.replace("市", "");
          // map返回的数组由return组成的
          return v;
        });

        return newData;
      });
    },
    queryCitySearch(value, cb) {
      if (!value) {
        // 如果value为空，把原来的列表清空
        this.cityData = [];
        // 防止空白加载框
        cb([]);
        return;
      }
      this.querySearch(value).then(newData => {
        // 把newData保存到data中
        this.cityData = newData;
        // cb把数组展示到列表中, 数组中每一项必须是对象，对象中必须有value属性
        cb(newData);
      });
    },
    handleCitySelect(val){
      this.$emit('sendCity',val.name)
    },
    handleCityBlur(){

    },
    handleDate(value) {
      // console.log(value)
      this.form.checkDate[0] = value[0];
      this.form.checkDate[1] = value[1];
    },
    handleAdults(val) {
      this.adultsN = val;
      if (val) this.adults = val + " 成人";
    },
    handleKids(val) {
      this.kidsN = val;
      if (val) this.kids = val + " 儿童";
    },
    // 点击确定时触发
    handleEnsure(){
      if(this.adults!=0&&this.kids!=0){
        this.form.persons=this.adults+' '+this.kids
        // console.log(this.persons)
      } else if(this.adults!=0&&this.kids==0){
        this.form.persons=this.adults
      } else if(this.adults==0&&this.kids!=0){
        this.form.persons=this.kids
      } else {
        this.form.persons='未选择'
      }
      this.disabled=true
    },
    handleCheckPrice() {}
  }
};
</script>

<style lang='less' scoped>
</style>