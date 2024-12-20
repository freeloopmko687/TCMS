<template>
  <div v-html="formulaData" class="con"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import request from '@/utils/request'
const formulaData = ref(null)
onMounted(() => {
  request.get('/formula').then((res) => {
    formulaData.value = res.data
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
