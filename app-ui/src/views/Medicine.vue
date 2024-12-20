<template>
  <div v-html="content" class="con"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import request from '@/utils/request'
const content = ref(null)
onMounted(() => {
  request.get('/medicine').then((res) => {
    content.value = res.data
  })
})
</script>
<style lang="less">
.con{
  font-size: 12px;
  color: #323233;
  padding: 0 16px;
}
</style>
