# Card 卡片

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 基础用法

<div class="demo-box">
<pd-card>
  <template #header>this is header</template>
  this is card content.
</pd-card>
</div>

::: details 点击查看源代码

```vue
<template>
  <pd-card>
    <template #header>this is header</template>
    this is card content.
  </pd-card>
</template>
```

:::

## 简单用法

<div class="demo-box">
<pd-card>
  this is card content.
</pd-card>
</div>

::: details 点击查看源代码

```vue
<template>
  <pd-card> this is card content. </pd-card>
</template>
```

:::

## 阴影配置

<div class="demo2-box">
  <pd-space>
    <pd-card>
      始终展示
    </pd-card>
    <pd-card shadow="hover">
      hover展示
    </pd-card>
    <pd-card shadow="none">
      无阴影
    </pd-card>
  </pd-space>
</div>

::: details 点击查看源代码

```vue
<template>
  <pd-space>
    <pd-card> 始终展示 </pd-card>
    <pd-card shadow="hover"> hover展示 </pd-card>
    <pd-card shadow="none"> 无阴影 </pd-card>
  </pd-space>
</template>
```

:::

## 3D 悬浮效果

<div style="width: 200px;">
  <pd-card suspension :height="300">content...</pd-card>
</div>

<style>
  .demo-box {
    width: 500px;
  }
  .demo2-box {
    width: 100%;
    display: flex;
  }
</style>
