<script setup>

import {backgroundColor, initDarkMode, textColor} from "@/scripts/color-scheme.js";

import {onUpdated} from "vue";

initDarkMode()


onUpdated(() => {
  document.getElementById("page").classList.add("transition-colors")
})

</script>

<template>

  <div id = "page" :class="[backgroundColor, textColor]" class = "w-full h-all-page flex flex-col items-center">
    <router-view/>
  </div>

</template>

<style scoped>

</style>
