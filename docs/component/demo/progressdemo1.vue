<template>
  <div>
    <div style="display:flex">
      <PProgressbar
        :angle="angle"
      ></PProgressbar>
    </div>
    <br>
    调配角度：
    <input
      v-model.number="angle"
      label="调配角度"
      type="range"
      name="设置圆角"
      min="0"
      max="360"
    />
    <br>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const angle = ref(0)
</script>