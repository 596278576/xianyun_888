<template>
  <!-- 用户评论 -->
  <div class="commentContainer">
    <strong>评论</strong>
    <div class="userInput" contenteditable="true" @click="handleinput"></div>
    <!-- 图片及按钮 -->
    <div class="commentdown">
      <el-row type="flex" justify="space-between">
        <!-- 图片预览 -->
        <div class="showImg">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <el-button icon="userCommit" type="primary">提交</el-button>
      </el-row>
    </div>  
  </div>
</template>

<script>
export default {
  methods: {
    // 用户的时候
    handleinput() {
      let userInput = document.querySelector(".userInput");
      let value = userInput.innerText;
      console.log(userInput.innerText);
    },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
};
</script>

<style>
/*提交按钮*/
.el-button--primary{
  height: 38px;
}
/* 输入框 */
.userInput {
  width: 660px;
  border: 1px solid #0094ff;
  padding: 10px 20px;
  text-align: left;
  margin-top: 20px;
  color: #999;
}
/* 图片预览 */
.showImg {
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
    border-color: #409EFF;
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