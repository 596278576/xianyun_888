<template>
  <div class="postList">
    <div v-for="(item,index) in dataList" :key="index">
      <!-- 这是上下图文的 -->
      <div class="upper_lower" v-if="item.images.length>=3">
        <nuxt-link :to="`/post/detail?id=${item.id}`">
          <p>{{item.title}}</p>
          <div class="content" v-html="item.content"></div>
          <el-row type="flex" class="row-bg img" justify="space-between">
            <img v-for="(items,indexs) in item.images" :key="indexs" :src="items" alt />
          </el-row>
          <el-row type="flex" class="row-bg footer" justify="space-between">
            <div class="left">
              <span class="el-icon-location-outline"></span>
              <span>{{item.cityName}}</span>
              <span>by</span>
              <span>
                <img
                  :src="`${$axios.defaults.baseURL}${item.account.defaultAvatar}`"
                  class="user"
                  alt
                />
              </span>
              <span class="nickname">{{item.account.nickname}}</span>
              <span class="el-icon-view"></span>
              <span>{{item.watch}}</span>
            </div>
            <div class="right">
              <span class="like">{{item.like}}赞</span>
            </div>
          </el-row>
        </nuxt-link>
      </div>
      <!-- 左右土文 -->
      <div class="left_right" v-else-if="item.images.length<=2">
        <nuxt-link :to="`/post/detail?id=${item.id}`">
          <el-row type="flex" class="row-bg" justify="space-between">
            <div class="img">
              <img :src="item.images[0]" alt />
            </div>
            <div class="content">
              <p>{{item.title}}</p>

              <div class="text" v-html="item.content"></div>
              <el-row type="flex" class="row-bg footer" justify="space-between">
                <div class="left">
                  <span class="el-icon-location-outline"></span>
                  <span>{{item.cityName}}</span>
                  <span>by</span>
                  <span>
                    <img
                      :src="`${$axios.defaults.baseURL}${item.account.defaultAvatar}`"
                      class="user"
                      alt
                    />
                  </span>
                  <span class="nickname">{{item.account.nickname}}</span>
                  <span class="el-icon-view"></span>
                  <span>{{item.watch}}</span>
                </div>
                <div class="right">
                  <span class="like">{{item.like}}赞</span>
                </div>
              </el-row>
            </div>
          </el-row>
        </nuxt-link>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3, 5, 10, 15]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      total: 0,
      pageSize: 3, //每页多少条
      currentPage: 1, //第几页
      start: 0,
      limit: 3
    };
  },
  methods: {
    handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
      this.limit = val;
      this.init();
    },
    handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
      this.start = val;
      this.init();
    },
    init(city) {
      this.$axios({
        url: "/posts",
        params: {
          _start: this.start,
          _limit: this.limit
        }
      }).then(res => {
        this.dataList = res.data.data;
        this.total = res.data.total;
        console.log(res);
      });
    }
  },
  mounted() {
    this.init();
    // console.log(this.$store.state.post.search);
  },
  watch: {
    "$store.state.post.search"() {
      if (!this.$store.state.post.search) return;
      // console.log(this.$store.state.post.search);
      this.$axios({
        url: "/posts",
        params: {
          _start: this.start,
          _limit: this.limit,
          city: this.$store.state.post.search
        }
      }).then(res => {
        this.dataList = res.data.data;
        this.total = res.data.total;
        // console.log(res);
      });
    }
  }
};
</script>

<style scoped lang='less'>
.nickname,
.like {
  color: #ffa500;
}
.upper_lower {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
.left_right {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  p {
    height: 24px;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .img {
    width: 220px;
    img {
      width: 100%;
    }
  }
  .content {
    width: 470px;
    .text {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 14px;
      height: 60px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
.postList {
  width: 700px;
  .upper_lower {
    p {
      height: 30px;
      font-size: 18px;
    }
    .content {
      font-size: 14px;
      height: 57px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .img {
      margin: 20px 0;
      img {
        width: 30%;
      }
    }
  }

  .footer {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #666;
    .left {
      span {
        margin-left: 8px;
      }
      .user {
        width: 16px;
        vertical-align: middle;
      }
    }
    .right {
      font-size: 16px;
    }
  }
}
.block {
  margin: 10px 0;
}
</style>