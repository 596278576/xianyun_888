<template>
  <div style="margin: 30px;">
      <client-only>
        <vue-editor 
        v-model="inputText"
        ></vue-editor>
    </client-only>
  </div>
</template>

<script>


export default {
    data(){
        return {
            // 编辑器双向数据绑定的变量
            inputText: ""
        }
    },
}
</script>

<style>

</style>