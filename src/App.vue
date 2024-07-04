<script setup>

import {backgroundColor, textColor} from "@/scripts/color-scheme.js";
import {onMounted} from "vue";


onMounted(() => {
  document.getElementById("page").classList.add("transition-colors")
})

</script>

<template>

  <div id = "page" :class="backgroundColor + ' ' + textColor " class = "w-full h-all-page flex flex-col items-center">
    <router-view/>
  </div>

</template>

<style scoped>

</style>
