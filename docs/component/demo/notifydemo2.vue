<template>
  <pd-button type="success" @click="openNotify()">位置修改</pd-button>
  <PdNotify
    @NotifyVisibleValue="NotifyVisibleValue"
    :notifyVisible="NotifyVisible"
    position="top-left"
  >
  </PdNotify>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const NotifyVisible = ref(false)
function openNotify() {
  NotifyVisible.value = true
}
function NotifyVisibleValue(value) {
  NotifyVisible.value = value
}
</script>

<style></style>
