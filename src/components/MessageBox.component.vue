<script setup>

import {secondBackgroundColor} from "@/scripts/color-scheme-switcher.js";


</script>

<template>

  <div :class="secondBackgroundColor" class="transitionable-component p-4  rounded-xl text-xl mt-10">
    <slot/>
  </div>
</template>