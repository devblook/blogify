<script setup>

import RoundedButton from "@/components/RoundedButton.component.vue";

import {darkMode, toggleColorTheme} from "@/scripts/color-scheme.js";
import {changeLanguage, languageName}  from '@/scripts/i18n.js';

</script>

<template>
  <div></div>
  <main class = "flex mt-24 w-page-limit min-w-72 flex-col gap-10">
    <div>
      <div class = "flex justify-between">
        <h1 class = "text-4xl">{{$t('homeTitle')}}</h1>
        <div :key="darkMode" class = " computer:text-2xl mobile:text-xl flex gap-2.5">
          <rounded-button @click="toggleColorTheme">
            <i class = "pi pi-moon"/>

          </rounded-button>

          <rounded-button @click="changeLanguage" :key="darkMode">
            <p>{{languageName}}</p>
          </rounded-button>


        </div>
      </div>
      <hr class = "my-5 border-gray-500">
      <p>{{$t('homeContent')}}</p>
    </div>
    <div class = "text-1xl flex gap-2.5 items-center">
      <i class = "pi pi-spin pi-spinner"/>
      <p>{{$t('pageStatus')}}</p>

    </div>



  </main>

</template>

<style scoped>

</style>