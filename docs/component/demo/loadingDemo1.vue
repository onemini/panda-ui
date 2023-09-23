<template>
  <div style="position: relative">
    <div v-loading="true" pd-loading-text="Loading...">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        veritatis saepe, exercitationem illo at ea consectetur nam dolorum
        consequuntur totam, nobis consequatur et voluptate enim vel fugit
        aspernatur reiciendis asperiores!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const mask = document.getElementsByClassName(
    "pd-loading-mask"
  )[0] as HTMLElement;
  mask.style.zIndex = "9";
});
</script>
