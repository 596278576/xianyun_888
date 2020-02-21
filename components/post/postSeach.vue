<template>
  <div>
    <div class="seach">
      <input type="text" v-model="city" placeholder="请输入你想去的地方比如广州" @change="sendSearch"/>
      <i class="el-icon-search"></i>
    </div>
    <!-- 推荐 -->
    <div class="recommend">
      <span>推荐</span>
      <a href="javascript:undefined" v-for="(item,index) in tuijianCity" :key="item" @click="tuijian(index)">{{item}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city:'',
      tuijianCity:['广州','上海','北京']
    }
  },
  methods:{
    sendSearch(){
      this.$store.commit('post/setSearch',this.city)
    },
    tuijian(index){
      this.city=this.tuijianCity[index]
      this.$store.commit('post/setSearch',this.city)
    }
  },
  watch: {
    "$store.state.post.search"(){
      this.city=this.$store.state.post.search
    }
  }
};
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