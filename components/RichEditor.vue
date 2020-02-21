<template>
    <!-- editor：固定的官网的包
    value：是编辑器绑定的值
    configconfig： 编辑器的配置
    input：每次编辑编辑器的内容都会触发的事件 -->
   <ckeditor
      :editor="editor"
      :value="value"
      :config="editorConfig"
     @input="ev => $emit('input', ev)" 
   />
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'RichEditor',
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
      editorConfig: this.options,
    }
  }
}
</script>