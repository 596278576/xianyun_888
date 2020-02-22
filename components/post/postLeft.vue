<template>
  <el-row class="row-bg postLeft">
    <div class="listleft">
      <div class="listleft-li" v-for="(item,index) in hotCity" :key="index">
        <div @mouseover="listRight(index)" @mouseleave="listRight_show">
          <el-row type="flex" class="row-bg li" ref="li" justify="space-between" align="middle">
            <span>{{item.type}}</span>
            <span class="el-icon-arrow-right"></span>
          </el-row>
        </div>
      </div>
    </div>

    <div
      class="listRight"
      v-if="listRight_if"
      @mousemove="listRight_show2"
      @mouseleave="listRight_show3"
    >
      <p v-for="(items,indexs) in children" :key="indexs">
        <span>{{++indexs}}</span>
        <span @click="$store.commit('post/setSearch',items.city)">{{items.city}}</span>
        <span @click="$store.commit('post/setSearch',items.city)">{{items.desc}}</span>
      </p>
    </div>

    <!-- 左侧栏显示所有城市 -->
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-row type="flex" class="row-bg" justify="space-between" align="center">
            <span class="cityall">城市大全</span>
            <el-button type="primary" size="mini" plain @click="huan">换一批</el-button>
          </el-row>
        </div>
        <div v-for="(item,index) in cityList" :key="index" class="text item">
          <p @click="cityChange(item.name)" class="cityName">{{item.name}}</p>
        </div>
      </el-card>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      listRight_if: false,
      hotCity: [],
      children: [],
      indexs: "",
      cityList: [],
      cityData:[],
      jishu1:0,
      jishu2:25
    };
  },
  methods: {
    listRight(index) {
      this.children = this.hotCity[index].children;
      this.listRight_if = true;
      this.indexs = index;
    },
    listRight_show() {
      this.listRight_if = false;
    },
    listRight_show2() {
      this.listRight_if = true;
      this.$refs.li.forEach(v => {
        v.$el.classList.remove("test");
      });
      this.$refs.li[this.indexs].$el.classList.add("test");
    },
    //隐藏框的移出事件
    listRight_show3() {
      this.listRight_if = false;
      this.$refs.li.forEach(v => {
        v.$el.classList.remove("test");
      });
    },
    //城市大全点击事件
    cityChange(item) {
      this.$store.commit("post/setSearch", item);
    },
    //切换
    huan(){
      if(this.jishu2<=99){
        this.jishu1+=25;
        this.jishu2+=25;
        this.cityList = this.cityData.slice(this.jishu1,this.jishu2);
      }else{
        this.jishu1=0
        this.jishu2=25
        this.cityList = this.cityData.slice(this.jishu1,this.jishu2);
      }

    }
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      this.hotCity = res.data.data;
      console.log(this.hotCity);
    });

    this.$axios({
      url: "/airs/city",
      params: {
        name: "",
        _start: 0,
        _limit: 10
      }
    }).then(res => {
      // console.log(res);
      this.cityData=[...res.data.data]
      this.cityList = this.cityData.slice(this.jishu1,this.jishu2);
      console.log(this.cityList);
      
    });
  }
};
</script>

<style scoped lang='less'>
.postLeft {
  .listleft {
    position: relative;
    width: 260px;
    border: 1px solid #ddd;
    border-bottom: none;
    &:hover {
      border-right: none;
    }
    .listleft-li {
      border-bottom: 1px solid #ddd;
    }
    /deep/ .li {
      height: 40px;
      padding: 0 20px;
      font-size: 15px;
      box-sizing: border-box;
      &:hover {
        color: #ffa500;
        // box-sizing: border-box;
        box-shadow: 5px 0 3px 0px #fff;
        z-index: 30;
      }
    }
  }
  .listRight {
    position: absolute;
    left: 261px;
    top: 0px;
    width: 400px;
    font-size: 16px;
    background: #fff;
    z-index: 2;
    border: 1px solid #ccc;
    // border-left: none;
    padding: 0 10px;
    p {
      height: 40px;
      line-height: 40px;
      span {
        &:nth-child(1) {
          color: #ffa500;
          font-style: italic;
          cursor: pointer;
        }
        &:nth-child(2) {
          color: #ffa500;
          margin-left: 10px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        &:nth-child(3) {
          color: #8f8f8f;
          margin-left: 10px;
          cursor: pointer;
          // text-decoration: #8f8f8f;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
.test {
  color: #ffa500;
  // box-sizing: border-box;
  box-shadow: 5px 0 3px 0px #fff;
  z-index: 30;
}
.cityName {
  margin: 10px 0;
  &:hover {
    color: #ffa500;
    cursor: pointer;
    text-decoration: underline;
  }
}
/deep/ .el-card__body {
  padding-top: 0px;
}
.huan {
  float: right;
}
.cityall{
  margin-top: 2px;
}
</style>