<template>

  <transition name="animate">
    <div
      id="notification_14"
      class="el-notification"
      :class="[bem.b(), bem.m(position)]"
      role="alert"
      style="z-index: 2041"
      :style="{ '--pd-notification-width': width }"
      v-show="notifyVisible"
      ref="notification"
    >
      <i :class="[ben.b(), bem.m(type), bem.e('icon')]">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
          ></path>
        </svg>
      </i>
      <!--v-if-->
      <div class="el-notification__group">
        <h4 class="el-notification__title">
          你好
        </h4>
        <div class="el-notification__content">
          我是内容
        </div>
        <i class="pd-icon el-notification__closeBtn" @click="handleClose()">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
            ></path>
          </svg>
        </i>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
// 组合式，不要用选项式
import { PdNotifyProps } from './types/types'
import { createNamespace } from '@panda-ui/utils/create'
import { ref, watch } from 'vue'

const bem = createNamespace('notification') // bem.b() 为 pd-overlay
const ben = createNamespace('icon')
const props = defineProps(PdNotifyProps)
// console.log(props)
// 关闭提示
const emit = defineEmits(['NotifyVisibleValue'])
function handleClose() {
  emit('NotifyVisibleValue', false)
}
const notification = ref()

watch(
  () => props.notifyVisible,
  (newValue, oldValue) => {
    if (props.notifyVisible == true) {
      setTimeout(function () {
        emit('NotifyVisibleValue', false)
      }, 3000)
    }
  }
)

// setTimeout(function () {
//   console.log(notification.value.style.display)
// }, 3000)
</script>
<script lang="ts" vars="{ prop.disabled }">
export default {
  name: 'PdNotify',
}
</script>
<style lang="scss">
// 导入全局 root 中的变量
@use '@panda-ui/theme-chalk/src/var.scss' as *;
</style>
<style lang="scss" scoped>
@use '@panda-ui/theme-chalk/src/mixins.scss' as *;
@include b(icon) {
  --color: inherit;
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--color);
  font-size: inherit;
}
@include b(notification) {
  --pd-notification-padding: 14px 26px 14px 13px;
  --pd-notification-radius: 8px;
  --pd-notification-shadow: var(--pd-box-shadow-light);
  --pd-notification-border-color: var(--pd-border-color-lighter);
  --pd-notification-icon-size: 24px;
  --pd-notification-close-font-size: var(--pd-message-close-size, 16px);
  --pd-notification-group-margin-left: 13px;
  --pd-notification-group-margin-right: 8px;
  --pd-notification-content-font-size: var(--pd-font-size-base);
  --pd-notification-content-color: var(--pd-text-color-regular);
  --pd-notification-title-font-size: 16px;
  --pd-notification-title-color: var(--pd-text-color-primary);
  --pd-notification-close-color: var(--pd-text-color-secondary);
  --pd-notification-close-hover-color: var(--pd-text-color-regular);
  --pd-notification-direction: var(--pd-notification-width);
  display: flex;
  width: var(--pd-notification-width);
  padding: var(--pd-notification-padding);
  border-radius: var(--pd-notification-radius);
  box-sizing: border-box;
  border: 1px solid var(--pd-notification-border-color);
  position: fixed;
  background-color: var(--pd-bg-color-overlay);
  box-shadow: var(--pd-notification-shadow);
  overflow-wrap: anywhere;
  overflow: hidden;
  z-index: 9999;
  @include e(icon) {
    height: var(--pd-notification-icon-size);
    width: var(--pd-notification-icon-size);
    font-size: var(--pd-notification-icon-size);
  }
  @include m(success) {
    --pd-notification-icon-color: var(--pd-color-success);
    color: var(--pd-notification-icon-color);
  }
  @include m(warning) {
    --el-notification-icon-color: var(--el-color-warning);
    color: var(--el-notification-icon-color);
  }
  @include m(error) {
    --el-notification-icon-color: var(--el-color-error);
    color: var(--el-notification-icon-color);
  }
  @include m(top-right) {
    right: 16px;
    top: 16px;
    // transform: translateX(var(--pd-notification-width));
  }
  @include m(top-left) {
    left: 16px;
    top: 16px;
  }
  @include m(bottom-right) {
    right: 16px;
    bottom: 16px;
  }
  @include m(bottom-left) {
    left: 16px;
    bottom: 16px;
  }
}

.animate-enter-active {
  animation: step 0.5s;
}
.animate-leave-active {
  animation: fade 0.5s;
}
@keyframes step {
  0% {
    transform: translateX(var(--pd-notification-direction));
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.el-notification .el-notification__closeBtn {
  position: absolute;
  top: 18px;
  right: 15px;
  cursor: pointer;
  color: var(--pd-notification-close-color);
  font-size: var(--pd-notification-close-font-size);
}

.pd-icon svg {
  height: 1em;
  width: 1em;
}
</style>
