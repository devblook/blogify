<script setup>

import {backgroundColor, textColor} from "@/scripts/color-scheme.js";


</script>

<template>

  <div :class="backgroundColor + ' ' + textColor " class = "w-full h-all-page flex flex-col items-center">
    <router-view/>
  </div>
</template>

<style scoped>

</style>
