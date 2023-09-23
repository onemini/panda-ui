# 布局

## 使用方法
使用span来确定不同col占据一行的百分比，使用gutter来确定间隔
<br/>

<div>
    <layoutdemo></layoutdemo>
</div>
<br/>
<br/>
<br/>

::: details 显示代码

```vue
<template>
    <div>
        <pd-row :gutter="10">
            <pd-col span="3"><div class="col-div"></div></pd-col>
            <pd-col span="2"><div class="col-div"></div></pd-col>
            <pd-col span="10"><div class="col-div"></div></pd-col>
            <pd-col span="4"><div class="col-div"></div></pd-col>
    </pd-row>
    <pd-row :gutter="10">
            <pd-col span="5"><div class="col-div"></div></pd-col>
            <pd-col span="2"><div class="col-div"></div></pd-col>
            <pd-col span="1"><div class="col-div"></div></pd-col>
    </pd-row>
    </div>
</template>

<script lang="ts" setup>
import { 
    PdRow,
    PdCol 
  } from 'panda-ui'
</script>

<style>
.col-div {
  background-color: rgb(97, 126, 126); 
  height: 40px; 
  border-radius: 20px;
}
</style>
```

:::

<script setup lang="ts">
import layoutdemo from './demo/layoutdemo.vue'
</script>

## Attributes（row）

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| gutter         | 分栏的间隔        | Number, String  | 0-100                |  0   | —     |
| justify   | flex下的水平排列方式         | string  | "start", "end", "center", "space-around", "space-between" | center   |
| align    |  flex下的垂直排列方式         | string  | "top", "middle", "bottom"  | middle   |

## Attributes（col）

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| span         | col占据的栏位        | string  | [0-24]                |  0   | —     |
