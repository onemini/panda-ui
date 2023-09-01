# 标签 Tag

可进行标记 🐥 和分类 🏀 的小标签

## 基础使用

`type`指定`tag`的类型，默认为`primary`

:::demo

```vue
<template>
  <pd-space>
    <pd-tag>pdun</pd-tag>
    <pd-tag type="success">Tag 2</pd-tag>
    <pd-tag type="warning">Tag 3</pd-tag>
    <pd-tag type="danger">Tag 4</pd-tag>
  </pd-space>
</template>
```

:::

## 可关闭

`closeable`配置 tag 可删除

:::demo

```vue
<template>
  <div style="display: flex; gap: 10px">
    <pd-tag closeable>Tag 1</pd-tag>
    <pd-tag type="success" closeable>Tag 2</pd-tag>
    <pd-tag type="warning" closeable>Tag 3</pd-tag>
    <pd-tag type="danger" closeable>Tag 4</pd-tag>
  </div>
</template>
```

:::

## 双标签

`tag`支持双色标签

:::demo

```vue
<template>
  <pd-space>
    <pd-tag doubleColor>
      <template #left>pdun</template>
      <template #right>ui</template>
    </pd-tag>

    <pd-tag doubleColor pdun>
      <template #left>pdun</template>
      <template #right>hub</template>
    </pd-tag>
  </div>
</template>
```

:::
