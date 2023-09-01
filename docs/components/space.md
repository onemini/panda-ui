# 间距 Space

通过此组件为其子元素提供公共间距

## 基础用法

<pd-space>
  <pd-button type="primary">按钮一</pd-button>
  <pd-button type="primary">按钮二</pd-button>
  <pd-button type="primary">按钮三</pd-button>
</pd-space>

::: details 点击展开代码

```vue
<template>
  <pd-space>
    <pd-button type="primary">按钮一</pd-button>
    <pd-button type="primary">按钮二</pd-button>
    <pd-button type="primary">按钮三</pd-button>
  </pd-space>
</template>
```

:::

## 调节间距与布局方式

`size`属性可设置间距大小
<pd-space size="mini">
<pd-button type="primary">按钮一</pd-button>
<pd-button type="primary">按钮二</pd-button>
<pd-button type="primary">按钮三</pd-button>
</pd-space>
<br>
<br>
<pd-space size="large">
<pd-button type="primary">按钮四</pd-button>
<pd-button type="primary">按钮五</pd-button>
<pd-button type="primary">按钮六</pd-button>
</pd-space>

::: details 点击展开代码

```vue
<template>
  <pd-space size="mini">
    <pd-button type="primary">按钮一</pd-button>
    <pd-button type="primary">按钮二</pd-button>
    <pd-button type="primary">按钮三</pd-button>
  </pd-space>
  <br />
  <pd-space size="large">
    <pd-button type="primary">按钮四</pd-button>
    <pd-button type="primary">按钮五</pd-button>
    <pd-button type="primary">按钮六</pd-button>
  </pd-space>
</template>
```

:::

## 排列方向与换行

设置`direction`设置横向、竖向。`wrap`设置是否换行

<pd-space>
  <pd-card>content one</pd-card>
  <pd-card>content two</pd-card>
  <pd-card>content three</pd-card>
</pd-space>
<br>
<br>
<pd-space direction="column">
  <pd-card>content one</pd-card>
  <pd-card>content two</pd-card>
  <pd-card>content three</pd-card>
</pd-space>
<br>

<!-- <pd-space>
  <pd-card>content one</pd-card>
  <pd-card>content two</pd-card>
  <pd-card>content three</pd-card>
  <pd-card>content three</pd-card>
  <pd-card>content three</pd-card>
  <pd-card>content three</pd-card>
  <pd-card>content three</pd-card>
  <pd-card>content three</pd-card>
</pd-space> -->
