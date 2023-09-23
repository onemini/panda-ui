<template>
  <transition name="a" appear>
    <div
      style="z-index: 2045"
      :class="[bem.b()]"
      v-show="dialogVisible"
      @click="handleClose()"
    >
      <transition name="b">
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Tips"
          aria-describedby="el-id-7802-111"
          :class="[bem1.b()]"
        >
          <div :class="[bem2.b()]" tabindex="-1" :style="{ width: width }">
            <header :class="[bem2.e('header')]">
              <slot name="title">
                <span role="heading" :class="[bem2.e('title')]">{{
                  title
                }}</span>
              </slot>
              <!-- <button
            aria-label="Close this dialog"
            class="el-dialog__headerbtn"
            type="button"
          >
            <i class="el-icon el-dialog__close"
              ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                ></path></svg
            ></i>
          </button> -->
            </header>
            <div id="el-id-7802-111" :class="[bem2.e('body')]">
              <span data-v-1735ddb7="">This is a message</span>
            </div>
            <footer :class="[bem2.e('footer')]">
              <slot name="footer"> </slot>
              <!-- <span class="dialog-footer" data-v-1735ddb7=""
            ><button
              class="el-button"
              aria-disabled="false"
              type="button"
              data-v-1735ddb7=""
            >
              <span class="">Cancel</span></button
            ><button
              class="el-button el-button--primary"
              aria-disabled="false"
              type="button"
              data-v-1735ddb7=""
            >
             <span class=""> Confirm </span>
            </button></span
          > -->
            </footer>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script setup lang="ts">
// 组合式，不要用选项式
import { PdDialogProps } from './types/types'
import { createNamespace } from '@panda-ui/utils/create'

const bem = createNamespace('overlay') // bem.b() 为 pd-overlay
const bem1 = createNamespace('overlay-dialog') // bem.b() 为 pd-button
const bem2 = createNamespace('dialog') // bem.b() 为 pd-button
defineProps(PdDialogProps)
function handleClose() {}
// defineProps(buttonProps)
</script>
<script lang="ts" vars="{ prop.disabled }">
export default {
  name: 'PdDialog',
}
</script>
<style lang="scss">
// 导入全局 root 中的变量
@use '@panda-ui/theme-chalk/src/var.scss' as *;
</style>
<style lang="scss" scoped>
@use '@panda-ui/theme-chalk/src/mixins.scss' as *;

.b-enter-active {
  animation: step 0.5s;
}
.b-leave-active {
  animation: step 0.5s reverse;
}

.a-enter-active {
  animation: fade 0.5s;
}
.a-leave-active {
  animation: fade 0.5s reverse;
}
@keyframes step {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@include b(overlay) {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  height: 100%;
  background-color: var(--pd-overlay-color-lighter);
  overflow: auto;
}

@include b(overlay-dialog) {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}

@include b(dialog) {
  --pd-dialog-margin-top: 15vh;
  --pd-dialog-bg-color: var(--pd-bg-color);
  --pd-dialog-box-shadow: var(--pd-box-shadow);
  --pd-dialog-title-font-size: var(--pd-font-size-large);
  --pd-dialog-content-font-size: 14px;
  --pd-dialog-font-line-height: var(--pd-font-line-height-primary);
  --pd-dialog-padding-primary: 20px;
  --pd-dialog-border-radius: var(--pd-border-radius-small);
  position: relative;
  margin: var(--pd-dialog-margin-top, 15vh) auto 50px;
  background: var(--pd-dialog-bg-color);
  border-radius: var(--pd-dialog-border-radius);
  box-shadow: var(--pd-dialog-box-shadow);
  box-sizing: border-box;
  //   width: var(--pd-dialog-width);

  @include e(header) {
    padding: var(--pd-dialog-padding-primary);
    padding-bottom: 10px;
    margin-right: 16px;
  }
  @include e(title) {
    line-height: var(--el-dialog-font-line-height);
    font-size: var(--el-dialog-title-font-size);
    color: var(--el-text-color-primary);
  }
  @include e(body) {
    padding: calc(var(--pd-dialog-padding-primary) + 10px)
      var(--pd-dialog-padding-primary);
    color: var(--pd-text-color-regular);
    font-size: var(--pd-dialog-content-font-size);
  }
  @include e(footer) {
    padding: var(--pd-dialog-padding-primary);
    padding-top: 10px;
    text-align: right;
    box-sizing: border-box;
  }
}
</style>
