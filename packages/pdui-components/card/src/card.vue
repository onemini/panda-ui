<script lang="ts" setup name="PdCard">
import { computed, onMounted } from 'vue'
import { cardProps } from './card'
import vanillaTilt from 'vanilla-tilt'

const props = defineProps(cardProps)

const computedCls = computed(() => {
  const { shadow, suspension } = props
  return [
    'pd-card',
    `pd-card__${shadow}`,
    {
      'pd-card__suspension': suspension,
    },
  ]
})
const computedStyle = computed(() => {
  const { height } = props
  const h = typeof height === 'string' ? height : `${height}px`
  console.log(h, height)
  return {
    height: h,
  }
})
onMounted(() => {
  vanillaTilt.init(document.querySelector('.pd-card__suspension') as HTMLElement, {
    max: 12,
  })
})
</script>
<template>
  <div :class="computedCls" :style="computedStyle">
    <div class="pd-card__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="pd-card__body">
      <slot></slot>
    </div>
  </div>
</template>
