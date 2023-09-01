# 锁屏 LockScreen

::: demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const showTime = ref(false)
const toggleLockScreen = () => {
  visible.value = true
}
const onUnlock = (pwd) => {
  console.log(pwd)
  visible.value = false
}
</script>
<template>
  <div>
    <pd-switch true-text="显示时间" v-model="showTime" />
    <br />
    <pd-button @click="toggleLockScreen">打开锁屏</pd-button>
    <pd-lock-screen :showTime="showTime" @onUnlock="onUnlock" :visible="visible" />
  </div>
</template>
```

:::
