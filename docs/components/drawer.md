# 抽屉 Drawer

呼出一个临时的侧边栏, 设置`position`可以从多个方向呼出
<pd-space>
<pd-button type="primary" @click="() => onOpen('left')">left</pd-button>
<pd-button type="primary" @click="() => onOpen('right')">right</pd-button>
<pd-button type="primary" @click="() => onOpen('top')">top</pd-button>
<pd-button type="primary" @click="() => onOpen('bottom')">bottom</pd-button>
</pd-space>
<pd-drawer :position="position" title="基础抽屉" :visible="visible" @cancel="onCancel">
content...
</pd-drawer>

::: details 点击查看源码

```vue
<template>
  <pd-space>
    <pd-button type="primary" @click="() => onOpen('left')">left</pd-button>
    <pd-button type="primary" @click="() => onOpen('right')">right</pd-button>
    <pd-button type="primary" @click="() => onOpen('top')">top</pd-button>
    <pd-button type="primary" @click="() => onOpen('bottom')">bottom</pd-button>
  </pd-space>
  <pd-drawer :position="position" title="基础抽屉" :visible="visible" @cancel="onCancel"> content... </pd-drawer>
</template>
<script lang="ts" setup>
const visible = ref(false)
const position = ref('left')
const onOpen = (v) => {
  position.value = v
  visible.value = true
}
const onCancel = () => {
  visible.value = false
}
</script>
```

:::

<script lang="ts" setup>
  import { ref } from 'vue'
  const visible = ref(false)
  const position = ref('left')
  const onOpen = (v) => {
    position.value = v
    visible.value = true
  }
  const onCancel = () => {
    visible.value = false
  }
</script>
