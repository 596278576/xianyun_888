<template>
  <div class="post">
    <el-row justify="space-around">
      <el-col :span="17">
        <h2>发表新攻略</h2>
        <p class="create-desc">分享你的个人游记，让更多人看到哦</p>

        <el-input v-model="input" placeholder="请输入标题"></el-input>
        <div class="editor-height">
          <rich-editor v-model="content" />
        </div>

        <el-row>
          <el-col :span="12" class="chengshi">
            <el-input placeholder="请搜索游玩城市" v-model="input">
              <template slot="prepend">选择城市</template>
            </el-input>
          </el-col>
        </el-row>

        <el-col :span="12" class="first">
          <el-button type="primary">发布</el-button>
          <span>
            或者
            <a href="javascript:void(0);">保存到草稿箱</a>
          </span>
        </el-col>
      </el-col>
      <!-- 草稿箱 -->
      <el-col :span="5" class="caogaoxiang">
        <div class="draft-box">
          <h4>草稿箱(0)</h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      input: ""
    };
  }
};
</script>

<style lang='less' scoped>
.chengshi {
  margin-top: 0px;
}
h2 {
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 10px;
}
.create-desc {
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}
/deep/.el-input__inner {
  position: relative;
  right: 0;
}
.post {
  position: relative;
  padding-top: 20px;
  min-width: 1000px;
  margin: 0 auto;
  width: 1000px;
}
.editor-height {
  margin: 25px 0px;
  /deep/.ck-content {
    height: 400px;
  }
}
/deep/.el-button {
  font-size: 12px;
  padding: 9px 15px;
}
.first {
  margin: 20px 0px 20px 0px;
  span {
    font-size: 14px;
    margin: 0px 10px;
  }
  a {
    color: orange;
  }
}

.draft-box {
  width: 200px;
  border: 1px solid #ccc;
  padding: 10px;
  h4 {
    margin-bottom: 10px;
    font-weight: 400;
    color: #666;
  }
}
.caogaoxiang{
    margin-left: 70px;
    }
</style>