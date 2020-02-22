<template>
  <ckeditor
    :editor="editor"
    :value="value"
    :config="editorConfig"
    escapeHtml="false"
    @input="ev => $emit('input', ev)"
    @ready="onReady"
  />
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const upload = require("../assets/upload.js");
export default {
  name: "RichEditor",
  props: {
    value: [String],
    options: {
      type: [Object],
      default: () => {
        return {
          // 指定处理文件上传的服务器的接口址
          url: this.$axios.defaults.baseURL + "/upload",
          // 后台所需要的参数的名称
          name: "files",
          //   传递token
          // headers: this.getToken(),
          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess(res, insert) {
            console.log(111);

            console.log(res);
            // insert("http://localhost:3000" + res.data.data.url);
          }
        };
      }
    }
  },
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        removePlugins: ["MediaEmbed"], //除去视频按钮
        language: "zh-cn", //中文包
        ckfinder: {
          extraPlugins: [upload.MyCustomUploadAdapterPlugin]
        }
      }
    };
  },
};
</script>

<style lang="less" scoped>
</style>