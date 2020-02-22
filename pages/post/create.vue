<template>
  <div class="post">
    <el-row justify="space-around">
      <el-col :span="17">
        <h2>发表新攻略</h2>
        <p class="create-desc">分享你的个人游记，让更多人看到哦</p>

<<<<<<< HEAD
        <el-input v-model="title" placeholder="请输入标题"></el-input>

        <div class="editor-height">
          <rich-editor @input="editor"/>
=======
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        <div class="editor-height">
          <rich-editor v-model="form.content" />
>>>>>>> 01de65a16ed08b1421571adaae8229d030bb215b
        </div>

        <el-row>
          <el-col :span="12" class="chengshi">
            <el-input placeholder="请搜索游玩城市" v-model="form.city">
              <template slot="prepend">选择城市</template>
            </el-input>
          </el-col>
        </el-row>

        <el-col :span="12" class="first">
          <el-button type="primary" @click="post">发布</el-button>
          <span>
            或者
            <a href="javascript:void(0);" @click="save">保存到草稿箱</a>
          </span>
        </el-col>
      </el-col>
      <!-- 草稿箱 -->
      <el-col :span="5" class="caogaoxiang">
        <div class="draft-box">
          <h4>草稿箱({{recordB.length-1}})</h4>
          <div class="save" v-for="(item,index) in recordB" :key="index" @click="editsave(index)">
            <span class="orange" v-show="index!=0">
              {{item.title}}
              <i class="el-icon-edit"></i>
            </span>
            <p>{{item.departDate}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: {
        content: "",
        title: "",
        city: "",
        departDate: ""
      },
      record: [],
      recordB: [],
      // 城市列表
      departData: []
    };
  },
  // watch: {
  //   recordB(newv,old){
  //     this.recordB=newv
  //   }
  // },
  methods: {
    // 新增文章
    post() {
      if (
        this.form.content == "" &&
        this.form.title == "" &&
        this.form.city == ""
      ) {
        this.$message({
          message: "请填写完整",
          type: "warning"
        });
        return;
      }

      this.$axios({
        url: "/posts",
        method: "POST",
        headers: {
          Authorization: `Bearer ` + this.$store.state.user.userInfo.token
        },
        data: {
          content: this.form.content,
          title: this.form.title,
          city: this.form.city
        }
      }).then(res => {
<<<<<<< HEAD
        // console.log(123);
        console.log(res);
=======
>>>>>>> 01de65a16ed08b1421571adaae8229d030bb215b
        this.$message({
          message: "恭喜你，这是一条成功消息",
          type: "success"
        });
        this.$router.push({
          path: "/post"
        });
      });
    },
    // 保存
    save() {
      let dd = new Date();
      this.form.departDate = moment(dd).format("YYYY-MM-DD");
      this.recordB.push(this.form);
      localStorage.setItem("save", JSON.stringify(this.recordB));
      // (this.form.content = ""), (this.form.title = ""), (this.form.city = "");
      this.$message({
        message: "保存成功",
        type: "success"
      });
    },
<<<<<<< HEAD
    //富文本编辑器传过来的内容
    editor(data){
      this.content=data
=======
    // 编辑保存
    editsave(index) {
      console.log(index);

      this.form = this.recordB[index];
      console.log(this.recordB);
    }
  },

  mounted() {
    if (localStorage.getItem("save")) {
      this.recordB = JSON.parse(localStorage.getItem("save"));
    } else {
      localStorage.setItem("save", 0);
      this.recordB.push(JSON.parse(localStorage.getItem("save")));
>>>>>>> 01de65a16ed08b1421571adaae8229d030bb215b
    }
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
.caogaoxiang {
  margin-left: 70px;
}
.save {
  height: 100%;
  width: 100%;
  margin: 5px 0px;
  border-bottom: 1px solid skyblue;
  p {
    margin: 4px 0px;
    color: #999;
    font-size: 14px;
  }
}
.orange:hover {
  color: orange;
  cursor: pointer;
}
</style>