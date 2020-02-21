<template>
    <div style="margin: 30px;">
         <rich-editor v-model="content" />
    </div>
</template>

<script>


export default {
    data() {
        return {
           content: ""
        };
    }
};
</script>

<style>
</style>