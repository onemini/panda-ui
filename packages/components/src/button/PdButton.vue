<template>
  <div
    :class="[bem.b(), bem.m(size), bem.m(type), bem.is('round', round), bem.is('disabled', disabled)]"
  >
    <slot v-if="$slots.default"></slot>
    <span v-else>Default</span>
  </div>
</template>
<script setup lang="ts">
// 组合式，不要用选项式
import { buttonProps } from './types/types'
import { createNamespace } from "@panda-ui/utils/create"

const bem = createNamespace("button") // bem.b() 为 pd-button

defineProps(buttonProps)
</script>
<script lang="ts">
export default {
	name: "PdButton"
};
</script>
<style lang="scss">
// 导入全局 root 中的变量
@use '@panda-ui/theme-chalk/src/var.scss' as *;
</style>
<style lang="scss" scoped>
@use '@panda-ui/theme-chalk/src/mixins.scss' as *;

@mixin button-type($bgcolor, $hover-bgcolor, $active-bgcolor) {
	color: var(--pd-color-white);
	background-color: $bgcolor;
	&:hover {
		background-color: $hover-bgcolor;
	}
	&:active {
		background-color: $active-bgcolor;
	}
}
@mixin button-disabled($bgcolor) {
	cursor: not-allowed;
	opacity: 0.55;
	&:hover {
		background-color: $bgcolor;
	}
	&:active {
		background-color: $bgcolor;
	}
}

@include b(button) {
	@include button-type(var(--pd-color-white), var(--pd-color-primary-light-8), var(--pd-color-primary-light-7));
	display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
	padding: 5px 10px;
	color: #222222;
	border: 1px solid var(--pd-border-color);
	border-radius: var(--pd-border-radius-base);
	user-select: none;
	cursor: pointer;

	@include when(disabled) {
		@include button-disabled(var(--pd-color-white));
	}
	@include when(round) {
		border-radius: var(--pd-border-radius-round);
	}
	@include m(large) {
		padding: 25px 30px;
		font-size: 25px;
		line-height: 50px;
	}
	@include m(small) {
		padding: 15px 18px;
		font-size: 18px;
		line-height: 36px;
	}
	@include m(middle) {
		padding: 18px 20px;
		font-size: 20px;
		line-height: 40px;
	}
	@include m(mini) {
		padding: 5px 10px;
		font-size: 16px;
	}
	@include m(primary) {
		@include button-type(var(--pd-color-primary-light-3), var(--pd-color-primary-light-5), var(--pd-color-primary-dark));
		@include when(disabled) {
			@include button-disabled(var(--pd-color-primary-light-3))
		}
	}
	@include m(success) {
		@include button-type(var(--pd-color-success-light-3), var(--pd-color-success-light-5), var(--pd-color-success-dark));	
		@include when(disabled) {
			@include button-disabled(var(--pd-color-success-light-3))
		}
	}
	@include m(info) {
		@include button-type(var(--pd-color-info-light-3), var(--pd-color-info-light-5), var(--pd-color-info-dark));
		@include when(disabled) {
			@include button-disabled(var(--pd-color-info-light-3))
		}
	}
	@include m(warning) {
		@include button-type(var(--pd-color-warning-light-3), var(--pd-color-warning-light-5), var(--pd-color-warning-dark));
		@include when(disabled) {
			@include button-disabled(var(--pd-color-warning-light-3))
		}
	}
	@include m(danger) {
		@include button-type(var(--pd-color-danger-light-3), var(--pd-color-danger-light-5), var(--pd-color-danger-dark));
		@include when(disabled) {
			@include button-disabled(var(--pd-color-danger-light-3))
		}
	}
}
</style>