<script setup>
import ImageButton from '@/components/OptionButton.component.vue'

</script>

<template>
  <div class = "fixed m-6 text-3xl flex flex-col gap-2.5">
    <image-button>
      <i class = "pi pi-sun"/>
    </image-button>
    <image-button>
      <i class = "pi pi-language"/>
    </image-button>
  </div>

  <div class = "w-full flex flex-col items-center">
    <router-view/>
  </div>
</template>

<style scoped>

</style>
