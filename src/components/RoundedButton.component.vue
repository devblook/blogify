<script setup>

import {secondBackgroundColor} from "@/scripts/color-scheme-switcher.js";
</script>

<template>
  <div :class="secondBackgroundColor" class = "transitionable-component hover:bg-gray-300 active:bg-gray-400 cursor-pointer rounded-lg py-1.5 px-2.5">
    <slot/>
  </div>
</template>
x