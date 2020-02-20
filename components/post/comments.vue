<template>
  <!-- 用户评论 -->
  <div class="commentContainer">
    <strong>{{commentTitle}}</strong>
    <div class="userInput" ref="commentcontent" contenteditable="true"></div>
    <!-- 图片及按钮 -->
    <div class="commentdown">
      <el-row type="flex" justify="space-between">
        <!-- 图片预览 -->
        <div class="showImg">
          <el-upload
            :action="$axios.defaults.baseURL+'/upload'"
            list-type="picture-card"
            :on-success="upsuccess"
            :on-remove="removesuccess"
            name="files"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
        <el-button icon="userCommit" type="primary" @click="commitComment">提交</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pics: [],
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  //数据： 头部坐上角显示  判断是否回复用户
  props: ["commentTitle",'fllow'],
  methods: {
    // 上传成功图片时
    upsuccess(response, file, fileList) {
      file.response[0].url =
        this.$axios.defaults.baseURL + file.response[0].url;
      this.pics.push(file.response[0]);
      console.log();
    },
    //文件删除时
    removesuccess(file, fileList) {
      this.pics.forEach((item, index) => {
        if (file.response[0].id == item.id) {
          this.pics.splice(index, 1);
        }
      });
      console.log(this.pics);
    },
    //点击提交
    commitComment() {
      // 若是用于回复
      if (this.commentTitle === "评论") {
        this.$axios({
          url: "/comments",
          method: "POST",
          data: {
            content: this.$refs.commentcontent.innerText,
            pics: this.pics,
            post: this.$route.query.id
          },
          headers: {
            // 'Content-Type':'application/json',
            Authorization: "Bearer " + this.$store.state.user.userInfo.token
          }
        }).then(res => {
          this.$message.success("评论成功");
          this.$emit("addComments");
        });
      }
      //若是用于评论 
      else {
        this.$axios({
          url: "/comments",
          method: "POST",
          data: {
            content: this.$refs.commentcontent.innerText,
            pics: this.pics,
            post: this.$route.query.id,
            follow:this.fllow
          },
          headers: {
            // 'Content-Type':'application/json',
            Authorization: "Bearer " + this.$store.state.user.userInfo.token
          }
        }).then(res => {
          this.$message.success("回复成功");
          this.$emit("addComments");
        });
      }

      this.pics = [];
      let userInput = document.querySelector(".userInput");
      userInput.innerText = "";
      this.dialogImageUrl = "";
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
.commentContainer {
  max-width: 712px;
  width: 98%;
}
/*提交按钮*/
.el-button--primary {
  height: 38px;
  margin-right: 13px;
}
/* 输入框 */
.userInput {
  width: 90%;
  border: 1px solid #0094ff;
  padding: 10px 20px;
  text-align: left;
  margin: 0 auto;
  margin-top: 20px;

  color: #999;
}
/* 图片预览 */
.showImg {
  margin-left: 14px;
  width: 610px;
}
.commentdown {
  /* padding:20px; */
  margin-top: 20px;
}
/* 文件上传 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>