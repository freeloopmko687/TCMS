<template>
  <main>
    <van-nav-bar
      :title="currentRoute.meta.name"
      :left-arrow="currentRoute.name !== 'home'"
      @click-left="onClickLeft"
      fixed
    />
    <div class="seat" style="height: 46px;"></div>
    <div class="content" style="height: calc(100% - 46px)">
      <van-sticky offset-top="46">
        <van-notice-bar
          left-icon="volume-o"
          text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
        />
      </van-sticky>

      <RouterView />
    </div>
    <van-floating-bubble
      @click="onFloatClick"
      axis="xy"
      icon="chat"
      magnetic="x"
      @offset-change="onOffsetChange"
    />
  </main>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { showToast, showLoadingToast } from 'vant';
const router = useRouter();
const currentRoute = useRoute();

onMounted(() => {})
const onClickLeft = () => {
  router.go(-1);
}
const onFloatClick = () => {
  showToast('待开发');
}
const onOffsetChange = (offset) => {};
</script>
<style lang="less" scoped>

.seat{
  width: 100%;
}

.content {
  position: relative;
  overflow: auto;
  box-sizing: border-box;
}
</style>
