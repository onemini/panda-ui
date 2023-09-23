<template>
  <pd-button type="primary" @click="openDialog()">宽度</pd-button>
  <PdDialog width="80%" :dialog-visible="visible">
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
