<script setup lang="ts" name="pd-lock-screen">
import { onMounted, ref } from 'vue'
import { lockScreenProps } from './prop'
const props = defineProps(lockScreenProps)
const emits = defineEmits(['onUnlock'])
const currentTime = ref('')
const lockPwd = ref('')
const onUnlock = () => {
  emits('onUnlock', lockPwd.value ?? '')
}
const updateTime = () => {
  let now = new Date()
  let hours: string | number = now.getHours()
  let minutes: string | number = now.getMinutes()
  let seconds: string | number = now.getSeconds()
  hours = hours.toString().padStart(2, '0')
  minutes = minutes.toString().padStart(2, '0')
  seconds = seconds.toString().padStart(2, '0')
  const time = hours + ':' + minutes + ':' + seconds
  currentTime.value = time
}
onMounted(() => {
  setInterval(updateTime, 1000)
})
</script>
<template>
  <Transition name="lockScreen">
    <div v-if="props.visible" class="pd-lock-screen">
      <div class="pd-lock-screen--bg"></div>
      <div class="pd-lock-time" v-if="props.showTime">{{ currentTime }}</div>
      <div class="pd-lock-screen--content">
        <pd-space>
          <pd-input v-model="lockPwd"></pd-input>
          <pd-button icon="unlock" @click="onUnlock">解锁</pd-button>
        </pd-space>
      </div>
    </div>
  </Transition>
</template>
