<template>
  <br />
  <PdButton
    v-loading.fullscreen.lock="loading"
    pd-loading-text="Loading..."
    type="primary"
    size="mini"
    @click="showLoading"
  ></PdButton>
</template>

<script setup lang="ts">
import { ref } from "vue";
const loading = ref<boolean>(false);
const showLoading = () => {
  loading.value = loading.value ? false : true;
  if (loading.value) {
    setTimeout(() => {
      loading.value = false;
    }, 3000);
  }
};
</script>
