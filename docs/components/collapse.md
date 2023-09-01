# 折叠面板 Collapse

:::demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
</script>
<template>
  <pd-switch v-model="show" />
  <br />
  <pd-collapse-transition>
    <div style="color: #999" v-show="show">
      <div>鸡~</div>
      <div>哎呦~你干嘛</div>
      <div>厉不厉害你k哥</div>
    </div>
  </pd-collapse-transition>
</template>
```

:::
