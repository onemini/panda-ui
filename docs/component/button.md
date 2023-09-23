# 按钮

## 基础用法

### 基础

<br>

<div class="example">
    <div>
        <DtsButton></DtsButton>
        <PdButton type="success">success</PdButton>
        <PdButton type="primary">primary</PdButton>
        <PdButton type="info">info</PdButton>
        <PdButton type="danger">danger</PdButton>
        <PdButton type="warning">warning</PdButton>
    </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <pd-button></pd-button>
    <pd-button type="success">success</pd-button>
    <pd-button type="primary">primary</pd-button>
    <pd-button type="info">info</pd-button>
    <pd-button type="danger">danger</pd-button>
    <pd-button type="warning">warning</pd-button>
  </div>
</template>
<script lang="ts" setup>
import { PdButton } from 'panda-ui'
</script>
```

:::

### 圆角和禁止选中

<br>
<div class="expamle">
  <pd-button type="danger" round disabled></pd-button>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <pd-button type="danger" round disabled></pd-button>
  </div>
</template>
<script lang="ts" setup>
import { PdButton } from 'panda-ui'
</script>
```

:::

### 不同大小

<br>
<pd-button size="mini"></pd-button>

::: details 显示代码

```vue
<template>
  <div>
    <pd-button size="mini"></pd-button>
  </div>
</template>
<script lang="ts" setup>
import { PdButton } from 'panda-ui'
</script>
```

:::

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| size          | 尺寸         | string  | large / middle /small / mini                 |  middle   | —     |
| type          | 类型         | string  | primary / success / warning / danger / info  | ------    |
| round         | 是否圆角按钮 | boolean | —                                                  | false |
| disabled      | 是否禁用     | boolean | —                                                  | false |
