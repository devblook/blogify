<script setup>

import RoundedButton from "@/components/RoundedButton.component.vue";

import {darkMode, toggleColorTheme} from "@/scripts/color-scheme.js";
import {changeLanguage, languageName}  from '@/scripts/i18n.js';

</script>

<template>
  <div class = "mt-24 w-page-limit min-w-72 ">

    <main class = "flex flex-col gap-10">
      <div>
        <div class = "flex justify-between">
          <h1 class = "text-4xl">{{$t('home.title')}}</h1>
          <div :key="darkMode" class = " computer:text-2xl mobile:text-xl flex gap-2.5">
            <rounded-button @click="toggleColorTheme(!darkMode)">
              <i v-if="darkMode" class = "pi pi-moon"/>
              <i v-else class = "pi pi-sun"/>
            </rounded-button>

            <rounded-button @click="changeLanguage" :key="darkMode">
              <p>{{languageName}}</p>
            </rounded-button>


          </div>
        </div>
        <hr class = "my-5 border-gray-500">
        <div class = "flex flex-col gap-3 text-lg">
          <p>{{$t('home.subtitle')}}</p>
          <p>{{$t('home.content')}}</p>
        </div>
      </div>
      <div class = "text-1xl flex gap-2.5 items-center">
        <i class = "pi pi-spin pi-spinner"/>
        <p>{{$t('pageStatus')}}</p>
      </div>
    </main>
    <hr class = "mt-5 mb-3 border-gray-500">
    <footer class="flex justify-end">
      <a href="https://github.com/devblook/blogin">
        <i class = "pi pi-github text-2xl"></i>
      </a>
    </footer>
  </div>


</template>

<style scoped>

</style>