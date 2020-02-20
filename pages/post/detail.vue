<template>
  <div class="postdetail">
    <el-row type="flex" justify="space-between">
      <!-- 左侧 -->
      <div class="main clearfix">
        <!-- 文章详情 -->
        <articleDetail />
        <!-- 用户输入 -->
        <comments @addComments="addComments" :commentTitle="'评论'" />
        <div style="height:20px"></div>
        <!-- 展示评论 -->
        <commentShow v-for="(item,index) in commnetsdata" :key="index" :commnetsdata="item" />
      </div>

      <!-- 右侧 -->
      <!-- 相关攻略 -->
      <div class="right">
        <div class="someRecommend">
          相关攻略
        </div>
        <hr>
        <recommend 
        v-for="(item,index) in recommendData"
        :key="index"
         :recommendData="item"/>
      </div>

      <!-- <div class="about">相关攻略</div> -->
    </el-row>
  </div>
</template>

<script>
import articleDetail from "@/components/post/articleDetail";
import comments from "@/components/post/comments";
import commentShow from "@/components/post/commentShow";
import recommend from "@/components/post/recommend";

export default {
  data() {
    return {
      //评论数据
      commnetsdata: [
        {
          account: {}
        }
      ],
      //推荐文章的数据
      recommendData:[]
    };
  },
  mounted() {
    this.init();
     //加载攻略
     this.$axios({
       url:'/posts/recommend',
       params:{
         id:this.$route.query.id
       }
     }).then(res=>{
       console.log(res);
       this.recommendData = res.data.data
     })
  },
  methods: {
    // 添加评论时
    addComments() {
      this.init();
    },
    init() {
      // 加载文章、评论
      this.$axios({
        url: "/posts/comments",
        params: {
          post: this.$route.query.id,
          _start: 0,
          _limit: 5
        }
      }).then(res => {
        // console.log(res);
        this.commnetsdata = res.data.data;
      });
     

    }
  },
  components: {
    // 文章
    articleDetail,
    // 评论输入
    comments,
    // 展示评论
    commentShow,
    //相关推荐
    recommend
  }
};
</script>

<style>
.main {
  /* overflow: hidden; */
}
.postdetail {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}

.clearfix::before,
.clearfix::after {
  content: "";
  clear: both;
  display: block;
}
.someRecommend{
  margin-bottom: 20px;
}
.right{
  width:262px;
}
</style>