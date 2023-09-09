<script lang="ts" setup name="pdButton">
import { computed } from 'vue'
import { buttonProps } from './button'

const props = defineProps(buttonProps)
const emits = defineEmits(['click'])

const computedCls = computed(() => {
  const { type, disabled, loading, round, size, plain, pdun } = props
  return [
    'pd-button',
    `pd-button-${type}`,
    `pd-button-${size}`,
    {
      'pd-button-disabled': disabled || loading,
      'pd-button-plain': plain,
      'pd-button__round': round,
      // 'pd-button__pdun': pdun,
    },
  ]
})
const iconColor = computed(() => {
  if (!props.type || props.type === 'default') return ''
  return '#ffffff'
})

const onClick = () => {
  emits('click')
}

defineExpose({
  /** @description button type */
  type: props.type,
})
</script>
<template>
  <button :class="computedCls" @click="onClick" :disabled="props.disabled">
    <span class="pd-button__inner">
      <img v-if="pdun" width="20" src="https://laine001.github.io/panda-ui/panda.gif" />
      <pd-icon v-if="icon" :name="props.icon" :color="iconColor"></pd-icon>
      <pd-icon v-if="loading" name="loading" :color="iconColor" class="loading-icon"></pd-icon>
      <slot></slot>
    </span>
  </button>
</template>
