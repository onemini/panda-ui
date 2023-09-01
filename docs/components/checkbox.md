# 复选框 Checkbox

## 单个复选

绑定值为`boolean`类型
<pd-checkbox v-model="checked1" label="选项一"></pd-checkbox>
<pd-checkbox v-model="checked2" label="选项二"></pd-checkbox>
<span>{{ checked1 }}</span>
<span style="margin-left:20px;">{{ checked2 }}</span>

::: details 点击展开

```html
<script setup>
  import { ref } from 'vue'
  const checked1 = ref(false)
  const checked2 = ref(true)
</script>
<template>
  <pd-checkbox v-model="checked1" label="选项一"></pd-checkbox>
  <pd-checkbox v-model="checked2" label="选项二"></pd-checkbox>
</template>
```

:::

## 多个选项可用复选框组

返回`array[]<string|number>`
<pd-checkbox-group v-model="checkedList1">
<pd-checkbox label="选项一"></pd-checkbox>
<pd-checkbox label="选项二"></pd-checkbox>
<pd-checkbox label="选项三"></pd-checkbox>
</pd-checkbox-group>
<span>{{ checkedList1 }}</span>

::: details 点击展开

```vue
<script setup>
import { ref } from 'vue'
const checkedList1 = ref([])
</script>
<template>
  <pd-checkbox-group v-model="checkedList1">
    <pd-checkbox label="选项一"></pd-checkbox>
    <pd-checkbox label="选项二"></pd-checkbox>
    <pd-checkbox label="选项三"></pd-checkbox>
  </pd-checkbox-group>
  <span>{{ checkedList1 }}</span>
</template>
```

:::

<script setup>
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(true)
const checkedList1 = ref([])
</script>
