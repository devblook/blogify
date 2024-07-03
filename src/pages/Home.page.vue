<script setup>

import ImageButton from "@/components/OptionButton.component.vue";
import {darkMode, toggleColorTheme} from "@/scripts/color-scheme.js";

</script>

<template>
  <div></div>
  <main class = "flex mt-24 w-page-limit min-w-72 flex-col gap-10">
    <div>
      <div class = "flex justify-between">
        <h1 class = "text-4xl">Home</h1>
        <div class = " computer:text-2xl mobile:text-xl flex gap-2.5">
          <image-button v-on:click="toggleColorTheme">
            <div v-if="darkMode">
              <i class = "pi pi-moon"/>
            </div>
            <div v-else>
              <i class = "pi pi-sun"/>

            </div>
          </image-button>

          <image-button>
            <p>es</p>

          </image-button>


        </div>
      </div>
      <hr class = "my-5 border-gray-500">
      <p>¡Welcome to this page!</p>
    </div>
    <div class = "text-1xl flex gap-2.5 items-center">
      <i class = "pi pi-spin pi-spinner"/>
      <p>Page in progress...</p>

    </div>



  </main>

</template>

<style scoped>

</style>