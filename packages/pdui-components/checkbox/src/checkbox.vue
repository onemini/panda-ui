<script lang="ts" setup name="PdCheckbox">
import { computed, inject, getCurrentInstance, ref } from 'vue'
import type { Ref, ComponentInternalInstance, WritableComputedRef } from 'vue'

import { checkboxProps, checkboxEmits } from './checkbox'
import { checkboxGroupCtxKey } from '../../checkbox-group/src/checkbox-group'

import { CheckboxLabelType, CheckboxGroupInterface as a } from '../../checkbox-group/src/interface'

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)
// const slots = useSlots()
// const selfModel = ref(false)
const checkboxGroupInjectData: Ref<a | undefined> = ref()

const getGroupInject = (): void => {
  const { parent } = getCurrentInstance() as ComponentInternalInstance
  const parentName: string | undefined = (parent as ComponentInternalInstance).type.name
  if (parentName && parentName === 'IkCheckboxGroup') {
    checkboxGroupInjectData.value = inject(checkboxGroupCtxKey) as a
  }
}
getGroupInject()

const isGroup = computed((): boolean => {
  return !!checkboxGroupInjectData.value || false
})

const modelValue: WritableComputedRef<CheckboxLabelType> = computed({
  get() {
    if (isGroup.value) {
      return (checkboxGroupInjectData.value as a)?.modelValue
    }
    return props.modelValue
  },
  set(val) {
    if (isGroup.value) {
      !props.disabled && !checkboxGroupInjectData.value?.disabled && checkboxGroupInjectData.value?.changeEvent(val)
    } else {
      if (props.disabled) return
      emit('update:modelValue', val)
    }
  },
})

const isChecked = computed((): boolean => {
  const val = modelValue.value
  if (Array.isArray(val)) {
    return val.includes(props.label)
  } else if (typeof val === 'boolean') {
    return val
  }
  return (val === props.label) as boolean
})

const classList = computed(() => {
  return [
    'pd-checkbox',
    `pd-checkbox__${checkboxGroupInjectData.value?.size}`,
    {
      'pd-checkbox--selected': isChecked.value,
      'pd-checkbox--bordered': checkboxGroupInjectData.value?.border,
      'pd-checkbox--disabled': props.disabled || checkboxGroupInjectData.value?.disabled,
    },
  ]
})
</script>

<template>
  <label :class="classList">
    <span class="pd-checkbox-inner">
      <input v-model="modelValue" type="checkbox" class="pd-checkbox-input" :value="label" />
      <span class="pd-checkbox-icon"></span>
      <span class="pd-checkbox-label">
        <slot />
        <template v-if="!$slots.default">{{ label }}</template>
      </span>
    </span>
  </label>
</template>
