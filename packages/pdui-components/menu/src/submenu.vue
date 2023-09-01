<script setup lang="ts" name="pd-menu-submenu">
import { CSSProperties, computed, ref } from 'vue'
import PdIcon from '../../icon'
import PdMenuItem from './menu-item.vue'
import CollapseTransition from './collapse-transition.vue'
import { MenuItem, submenuProps } from './prop'
const props = defineProps(submenuProps)
const menuItemCache = ref<MenuItem>(props.current)
const onToggleExpand = () => {
  // console.log(props.current, menuItemCache.value, 'submenu-item')
  menuItemCache.value.isExpand = !menuItemCache.value.isExpand
}

const isExpand = computed(() => {
  return menuItemCache.value.isExpand
})

const itemsComputedCls = computed(() => {
  return [
    'submenu-items',
    {
      // 'submen-item__expand': isExpand.value,
    },
  ]
})
const arrawCls = computed(() => {
  return [
    'arrow-icon',
    {
      'arrow-icon__expand': isExpand.value,
    },
  ]
})
const computedStyle = computed<CSSProperties>(() => {
  const { _level } = props.current
  return {
    textIndent: _level - 2 > 0 ? `${26 * (_level - 2)}px` : 0,
  }
})
</script>
<template>
  <div class="pd-menu-submenu" :style="computedStyle">
    <div class="submenu-title" @click="onToggleExpand">
      <div class="submenu-title__wrap">
        <span class="menu-icon" v-if="current">
          <pd-icon :size="14" :name="menuItemCache?.icon" />
        </span>
        <slot></slot>
      </div>

      <span :class="arrawCls">
        <pd-icon :size="14" name="angle-right" />
      </span>
    </div>
    <CollapseTransition>
      <div :class="itemsComputedCls" v-show="menuItemCache.isExpand">
        <template v-for="(item, i) in props.children" :key="i">
          <template v-if="!item.children">
            <pd-menu-item :current="item">{{ item.label }}</pd-menu-item>
          </template>
          <template v-if="item.children">
            <pd-menu-submenu :children="item.children" :current="item">{{ item.label }} </pd-menu-submenu>
          </template>
        </template>
      </div>
    </CollapseTransition>
  </div>
</template>
