<template>
  <!-- editor：固定的官网的包
    value：是编辑器绑定的值
    configconfig： 编辑器的配置
  input：每次编辑编辑器的内容都会触发的事件-->
  <ckeditor
    :editor="editor"
    :value="value"
    :config="editorConfig"
    @input="ev => $emit('input', ev)"
    @ready="onReady"
  />
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const upload = require("../assets/upload");

export default {
  name: "RichEditor",
  props: {
    value: [String],
    options: {
      type: [Object],
      default: () => {}
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
          extraPlugins: [upload.MyCustomUploadAdapterPlugin]
      }
    };
  },
  methods: {
    onReady(editor) {
      // 在可编辑区域之前插入工具栏。
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    }
  }
};
</script>