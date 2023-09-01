# 头像 Avatar

代表用户或事物 🐥

## 基础使用

<pd-avatar /><pd-avatar square />

:::details 点击展开

```html
<pd-avatar /> <pd-avatar square />
```

:::

## 自定义链接

<pd-avatar url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />
:::details 点击展开

```html
<pd-avatar url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />
```

:::

## 大小可选

可选`small`、`default`、`large`，默认为`default`
<pd-avatar size="small" url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />
<pd-avatar size="default" url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />
<pd-avatar size="large" url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />

:::details 点击展开

```html
<script lang="ts" setup>
  const avatarUrl = ref<string | undefind>('https://avatars.githubusercontent.com/u/40457081?s=48&v=4')
</script>
<template>
  <pd-avatar size="small" :url="avatarUrl" />
  <pd-avatar size="default" :url="avatarUrl" />
  <pd-avatar size="large" :url="avatarUrl" />
</template>
```

:::
