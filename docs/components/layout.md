# 布局容器 Layout

协助进行页面级整体布局 🏀

## 常见页面布局

<div class="container-demo">
  <pd-container class="container-column">
    <pd-header class="demo1-header">header</pd-header>
    <pd-main class="demo1-main">main</pd-main>
  </pd-container>
</div>

<br />
<div class="container-demo">
  <pd-container>
    <pd-aside>aside</pd-aside>
    <pd-container direction="ver">
      <pd-header class="demo1-header">header</pd-header>
      <pd-main class="demo1-main">main</pd-main>
    </pd-container>
  </pd-container>
</div>

<br />
<div class="container-demo">
  <pd-container>
    <pd-aside>aside</pd-aside>
    <pd-main class="demo1-main">main</pd-main>
  </pd-container>
</div>

::: details 点击展开

```html
<pd-container>
  <pd-header>header</pd-header>
  <pd-main>main</pd-main>
</pd-container>

<pd-container>
  <pd-aside>aside</pd-aside>
  <pd-container direction="ver">
    <pd-header>header</pd-header>
    <pd-main>main</pd-main>
  </pd-container>
</pd-container>

<pd-container>
  <pd-aside>aside</pd-aside>
  <pd-main>main</pd-main>
</pd-container>
```

:::

<style>
  .container-demo {
    width: 100%;
    height: 300px;
    border-radius: var(--default-radius);
    /* border: 1px solid var(--primary-color); */
    overflow: hidden;
  }
  .container-column {
    flex-direction: column;
  }
</style>
