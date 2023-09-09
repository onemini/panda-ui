<script lang="ts" setup name="PdCollapse">
import { collapseProps } from './prop'
const props = defineProps(collapseProps)
// console.log(props, 'props')
</script>
<template>
  <div clas="pd-collapse">
    <slot />
  </div>
</template>
