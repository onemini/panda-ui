# 按钮 Button

按钮用于触发一个操作 🏀

## 普通按钮

<pd-button>普通按钮</pd-button>
<pd-button type="primary">主要按钮</pd-button>

`type`设置按钮类型，`shape`属性为圆角按钮

:::demo

```vue
<template>
  <pd-space wrap="wrap">
    <pd-button>普通按钮</pd-button>
    <pd-button type="primary">主要按钮</pd-button>
    <pd-button type="success">成功按钮</pd-button>
    <pd-button type="warning">警告按钮</pd-button>
    <pd-button type="danger">危险按钮</pd-button>
    <pd-button round>普通按钮</pd-button>
    <pd-button type="primary" round>主要按钮</pd-button>
    <pd-button type="success" round>成功按钮</pd-button>
    <pd-button type="warning" round>警告按钮</pd-button>
    <pd-button type="danger" round>危险按钮</pd-button>
  </pd-space>
</template>
```

:::

## 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

:::demo

```vue
<template>
  <pd-space wrap="wrap">
    <pd-button type="primary" plain>朴素按钮</pd-button>
    <pd-button type="success" plain>朴素按钮</pd-button>
    <pd-button type="warning" plain round>朴素按钮</pd-button>
    <pd-button type="danger" plain round>朴素按钮</pd-button>
  </pd-space>
</template>
```

:::

## 禁用

`disabled`属性可直接禁用按钮

:::demo

```vue
<template>
  <pd-space wrap="wrap">
    <pd-button disabled>普通按钮</pd-button>
    <pd-button type="primary" disabled>主要按钮</pd-button>
    <pd-button type="success" disabled>成功按钮</pd-button>
    <pd-button type="warning" disabled>警告按钮</pd-button>
    <pd-button type="danger" disabled>危险按钮</pd-button>
  </pd-space>
</template>
```

:::

## 带图标

`icon`可设置图标，默认放置文字前面。内部也接受`slot`

:::demo

```vue
<template>
  <pd-space>
    <pd-button icon="add">按钮</pd-button>
    <pd-button>
      <pd-icon name="user" />
      按钮
    </pd-button>
    <pd-button>
      按钮
      <pd-icon name="main" />
    </pd-button>

    <pd-button pdun></pd-button>
  </pd-space>
</template>
```

:::

## 不同大小

`size`可设置按钮大小

:::demo

```vue
<template>
  <pd-space>
    <pd-button size="small">普通按钮</pd-button>
    <pd-button type="primary" size="small">主要按钮</pd-button>
  </pd-space>
  <br />
  <br />
  <pd-space>
    <pd-button>普通按钮</pd-button>
    <pd-button type="primary">主要按钮</pd-button>
  </pd-space>
  <br />
  <br />
  <pd-space>
    <pd-button size="large">普通按钮</pd-button>
    <pd-button type="primary" size="large">主要按钮</pd-button>
  </pd-space>
</template>
```

:::

## 加载中按钮

:::demo

```vue
<template>
  <pd-space>
    <pd-button loading>加载中</pd-button>
    <pd-button type="primary" loading>请稍后</pd-button>
  </pd-space>
</template>
```

:::

## Props

| 参数    |    说明    |  类型   |                 可选值                 |    默认值 |
| ------- | :--------: | :-----: | :------------------------------------: | --------: |
| type    |  按钮类型  | string  | `primary` `warning` `success` `danger` |         - |
| round   |  圆形按钮  | boolean |               `Boolean`                |   `false` |
| plain   |  朴素按钮  | boolean |               `Boolean`                |   `false` |
| size    |  按钮大小  | string  |       `small` `default` `large`        | `default` |
| loading | 是否加载中 | boolean |               `Boolean`                |   `false` |

## Events

| 参数  |    说明    |     返回参数      | 默认值 |
| ----- | :--------: | :---------------: | -----: |
| click | click 事件 | `(): Event => {}` |      - |

<style lang="scss">
  .flex {
    .pd-button {
      margin-right: 12px;
    }
  }
</style>
