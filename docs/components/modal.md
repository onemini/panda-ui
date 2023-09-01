# 对话框 Modal

## 基础使用

<pd-button @click="onOpenModal">打开 modal</pd-button>

::: details 点击展开

```vue
<script setup>
import { ref } from 'vue'
const show1 = ref(false)
const onOpenModal = () => {
  show1.value = !show1.value
}
</script>
<template>
  <pd-button @click="onOpenModal">打开 modal</pd-button>
  <pd-modal :visible="show1" @click-mask="onOpenModal"> modal contents ... </pd-modal>
</template>
```

:::

<pd-modal :visible="show1" @click-mask="onOpenModal">
modal contents ...
</pd-modal>

<script setup>
  import { ref } from 'vue'
  const show1 = ref(false)
  const onOpenModal = () => {
    show1.value = !show1.value
  }
</script>
