<template>
  <div class="recommendContainer">
    <el-row type="flex">
      <img v-if="recommendData.img" src="@/assets/1.png" alt />
      <el-row>
        <div class="up">{{recommendData.title}}</div>
        <div class="down">{{time}}&nbsp;&nbsp;&nbsp;阅读{{recommendData.watch}}</div>
      </el-row>
    </el-row>
  </div>
</template>

<script>
var moment = require('moment');
export default {
    props:['recommendData'],
    data () {
        return {
            
            time:''
        }
    },
    mounted () {
         let data = this.recommendData.created_at
        /*let d = new Data(data)
        let time = moment().format(); */
        let day = moment(data).format('YYYY-MM-DD');
       
        let time = moment(data).format('hh:mm');
         this.time = day + time
    }
};
</script>

<style lang="less" scoped>
.recommendContainer {
  width: 100%;
  float: right;
  margin-right: 0;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  img {
    width: 100px;
    height: 80px;
  }
  .up {
    padding: 0 20px;
  }
  .down {
    padding: 0 20px;
    margin-top: 30px;
    margin-bottom: 0;
    font-size: 12px;
  }
}
</style>