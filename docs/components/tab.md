# 选项卡

选项卡切换组件

## 基础使用

:::demo

```vue
<template>
  <pd-tab>
    <pd-tab-item label="选项卡一">内容一</pd-tab-item>
    <pd-tab-item label="选项卡二">内容二</pd-tab-item>
    <pd-tab-item label="选项卡三">内容三</pd-tab-item>
  </pd-tab>
</template>
```

:::

## 头部样式设置

`type`属性可设置头部样式，可选值为`segmented` `default` `card`

:::demo

```vue
<template>
  <pd-tab type="segmented">
    <pd-tab-item label="选项卡一">内容一</pd-tab-item>
    <pd-tab-item label="选项卡二">内容二</pd-tab-item>
    <pd-tab-item label="选项卡三">内容三</pd-tab-item>
  </pd-tab>
</template>
```

:::
