<script lang="ts" setup name="PdCollapseItem">
import { collapseProps } from './prop'
const props = defineProps(collapseProps)
console.log(props, 'props')
</script>
<template>
  <div clas="pd-collapse--item">
    <slot />
  </div>
</template>
