# 文字提示 Tooltip

常用于展示鼠标 `反馈` 时的提示信息

## 基本使用

<pd-tooltip placement="top">
  <template #content>
    <div>这是提示内容</div>
  </template>
  <pd-button>按钮</pd-button>
</pd-tooltip>

::: details

```html
<template>
  <pd-tooltip placement="top">
    <template #content>
      <div>这是提示内容</div>
    </template>
    <pd-button>按钮</pd-button>
  </pd-tooltip>
</template>
```

:::

## 基础配置

不显示`箭头`，`点击`触发展示。可配置`白色背景`。
<pd-space>
<pd-tooltip placement="top" triggerType="click" :arrow="false">
<template #content>

<div>这是提示内容</div>
</template>
<pd-button>按钮</pd-button>
</pd-tooltip>

  <pd-tooltip placement="top" light triggerType="click" arrow>
    <template #content>
      <div>这是提示内容</div>
    </template>
    <pd-button>按钮</pd-button>
  </pd-tooltip>
</pd-space>

::: details 点击展开

```html
<template>
  <pd-tooltip placement="top" triggerType="click" :arrow="false">
    <template #content>
      <div>这是提示内容</div>
    </template>
    <pd-button>按钮</pd-button>
  </pd-tooltip>
</template>
```

:::

## 方向配置

<div class="box">

<div class="box1">
<pd-tooltip placement="left-start">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>LT</pd-button>
</pd-tooltip>
<pd-tooltip placement="left">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>Left</pd-button>
</pd-tooltip>
<pd-tooltip placement="left-end">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>LB</pd-button>
</pd-tooltip>
</div>

<div class="box2">
<div class="box2-top">
<pd-tooltip placement="top-start">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>TL</pd-button>
</pd-tooltip>
<pd-tooltip placement="top">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>Top</pd-button>
</pd-tooltip>
<pd-tooltip placement="top-end">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>TR</pd-button>
</pd-tooltip>
</div>
<div class="box2-bottom">
<pd-tooltip placement="bottom-start">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>BL</pd-button>
</pd-tooltip>
<pd-tooltip placement="bottom">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>Bottom</pd-button>
</pd-tooltip>
<pd-tooltip placement="bottom-end">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>BR</pd-button>
</pd-tooltip>
</div>
</div>
<div class="box1">
<pd-tooltip placement="right-start">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>RT</pd-button>
</pd-tooltip>
<pd-tooltip placement="right">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>Right</pd-button>
</pd-tooltip>
<pd-tooltip placement="right-end">
  <template #content>
    <div>文字提示</div>
  </template>
  <pd-button>RB</pd-button>
</pd-tooltip>
</div>

</div>

## attrs

| 参数        |      说明      |  类型   |      可选值       |  默认值 |
| ----------- | :------------: | :-----: | :---------------: | ------: |
| placement   |  提示展示方向  | string  |         -         |     top |
| triggerType |    触发类型    | string  | `hover` / `click` | `hover` |
| arrow       | 是否展示小箭头 | boolean | `true` / `false`  |  `true` |
| light       |  是否白色背景  | boolean | `true` / `false`  | `false` |

<style>
  .box {
    display: flex;
    margin-top: 40px;
  }
  .box1 {
    height: 130px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .box2 {
    width: 260px;
    height: 220px;
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .box2-top {
  }
  .box2-bottom {
    margin-top: 40px;
  }
  .box3 {
    width: 100px;
    display: flex;
    align-items: center;
  }
</style>
