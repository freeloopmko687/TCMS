<template>
  <div class="con">
    <van-space direction="vertical" size="20px" fill>
      <van-button to="formula" color="linear-gradient(to right, #ff6034, #ee0a24)" block
        >方剂</van-button
      >
      <van-button to="medicine" color="#7232dd" block>中药</van-button>
      <van-button @click="add('还没完成')" type="success" block>中基</van-button>
    </van-space>
    <van-barrage v-model="list">
      <div class="video" style="width: 100%; height: 150px"></div>
    </van-barrage>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const defaultList = [
  { id: 100, text: '哇！' },
  { id: 101, text: '牛！' },
  { id: 102, text: '大佬好！' },
  { id: 103, text: '哈哈哈！' },
  { id: 104, text: '厉害了！' },
  { id: 105, text: '弯的否！' },
  { id: 106, text: '666' },
]

const list = ref([...defaultList])
const add = (text) => {
  list.value.push({ id: Math.random(), text })
}
</script>
<style lang="less" scoped>
.con {
  padding: 16px;
}
</style>
