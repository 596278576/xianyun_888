<template>
  <div class="postdetail">
    <el-row type="flex" justify="space-between">
      <!-- 左侧 -->
      <div class="main clearfix">
        <!-- 文章详情 -->
        <!-- 文章不存在 -->
        <div class="noarticle" v-if="!articledata">
          <div>404！</div>
          <div>您的文章被妖怪抓走了</div>
        </div>
        <!-- 文章存在 -->
        <articleDetail v-if="articledata" :articledata="articledata" />
        <!-- 用户输入 -->
        <comments @addComments="addComments" :commentTitle="'评论'" />
        <div style="height:20px"></div>
        <!-- 没有数据的时候 -->
        <div class="nodata" v-if="total == 0">暂无数据</div>
        <!-- 展示评论 -->
        <commentShow 
        v-for="(item,index) in commnetsdata" 
        :key="index" 
        :commnetsdata="item" 
        @addReplay="addComments"/>
        <div class="block" v-if="total !== 0">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[2,4,6,8]"
            :page-size="commnetsdata.length"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
      <!-- 右侧 -->
      <!-- 相关攻略 -->
      <div class="right">
        <div class="someRecommend">相关攻略</div>
        <hr />
        <recommend v-for="(item,index) in recommendData" :key="index" :recommendData="item" />
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
      recommendData: [],
      total: 0,
      //当前页面
      currentPage: 1,
      //开始数据
      start: 0,
      // 条数
      limit: 2,
      // 文章数据
      articledata: {
        comments: []
      }
    };
  },
  mounted() {
    //加载评论
    this.init();
    // 加载文章
    this.articleinit();
    //加载攻略
    this.initrecommend();
  },
  methods: {
    //改变每页显示条数
    handleSizeChange(val) {
      this.limit = val;

      this.init();
    },
    // 改变当前页面
    handleCurrentChange(val) {
      this.start = (val - 1) * this.limit;
      this.init();
    },
    // 添加评论时
    addComments() {
      console.log(123);
      this.init();
    },
    //加载攻略
    initrecommend() {
      this.$axios({
        url: "/posts/recommend",
        params: {
          id: this.$route.query.id
        }
      }).then(res => {
        // console.log(res);
        this.recommendData = res.data.data;
      });
    },
    //加载文章
    articleinit() {
      this.$axios({
        url: "/posts",
        params: {
          id: this.$route.query.id
        }
      }).then(res => {
        // 若该id下有文章
        if (res.data.data[0]) {
          // 获取文章相关信息
          this.articledata = res.data.data[0];
        } else {
          this.articledata = false;
        }
      });
    },
    //加载评论
    init() {
      // 加载评论
      this.$axios({
        url: "/posts/comments",
        params: {
          post: this.$route.query.id,
          _start: this.start,
          _limit: this.limit
        }
      }).then(res => {
        // console.log(res);
        this.commnetsdata = res.data.data;
        this.total = res.data.total;
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
  },
  watch: {
    $route() {
      //加载评论
      this.init();
      // 加载文章
      this.articleinit();
      //加载攻略
      this.initrecommend();
      console.log(123);
    }
  }
};
</script>

<style scoped>
/* 无文章数据时 */
.noarticle {
  font-size: 60px;
  color: #ccc;
  height: 400px;
  line-height: 150px;
  text-align: center;
}
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
.someRecommend {
  margin-bottom: 20px;
}
.right {
  width: 262px;
}
.nodata {
  font-size: 24px;
  color: #ccc;
  font-weight: blod;
  text-align: center;
}
</style>