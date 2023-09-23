<template>
  <pd-button type="success" @click="openDialog()">添加内容</pd-button>
  <PdDialog :dialog-visible="visible">
    <template #title>
      <h3>我是标题</h3>
    </template>
    <template #footer>
      <pd-button type="primary" @click="close()">确定</pd-button>
      <pd-button type="primary" @click="close()">取消</pd-button>
    </template>
  </PdDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
function openDialog() {
  visible.value = true
}
function close() {
  visible.value = false
}
</script>

<style></style>
