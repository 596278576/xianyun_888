<template>
  <el-row class="row-bg postLeft">
    <div class="listleft">
      <div class="listleft-li" v-for="(item,index) in hotCity" :key="index">
        <div @mouseover="listRight(index)" @mouseout="listRight_show">
          <el-row type="flex" class="row-bg li" justify="space-between" align="middle">
            <span>{{item.type}}</span>
            <span class="el-icon-arrow-right"></span>
          </el-row>
        </div>
      </div>
    </div>

    <div class="listRight" v-if="listRight_if" @mousemove="listRight_show2" @mouseout="listRight_show">
      <p v-for="(items,indexs) in children" :key="indexs">
        <span>{{++indexs}}</span>
        <span @click="$store.commit('post/setSearch',items.city)">{{items.city}}</span>
        <span @click="$store.commit('post/setSearch',items.city)">{{items.desc}}</span>
      </p>
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
      index:''
    };
  },
  methods: {
    listRight(index) {
      this.children = this.hotCity[index].children;
      this.listRight_if = true;
      this.index=index
    },
    listRight_show() {
      this.listRight_if = false;
    },
    listRight_show2(){
      this.listRight_if = true;
    }
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      this.hotCity = res.data.data;
      console.log(this.hotCity);
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
      &:hover {
        border-right: none;
      }
    }
    /deep/ .li {
      height: 40px;
      padding: 0 20px;
      font-size: 14px;
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
          cursor:pointer;
        }
        &:nth-child(2) {
          color: #ffa500;
          margin-left: 10px;
          cursor:pointer;
          &:hover{ 
            text-decoration: underline; 
          } 
        }
        &:nth-child(3) {
          color: #8f8f8f;
          margin-left: 10px;
          cursor:pointer;
          // text-decoration: #8f8f8f;
          &:hover{ 
            text-decoration: underline; 
          } 
        }
      }
    }
  }
}
</style>