<script setup>

import RoundedButton from "@/components/RoundedButton.component.vue";

import {darkMode, toggleColorTheme} from "@/scripts/color-scheme-switcher.js";
import {changeLanguage, languageName} from "@/scripts/language-switcher.js";
import {ref} from "vue";

let messageBoxVisibility = ref(false);

defineProps({
  pageName: {
    type: String,
    required: true
  }
})

function sendMessageBox(){
  messageBoxVisibility.value = true;
  navigator.clipboard.writeText(window.location.href);
}

</script>

<template>

  <message-box v-if="messageBoxVisibility" class="flex gap-4">
    <p>{{$t("global.shareMessage")}}</p>
    <i class = "pi pi-times text-base cursor-pointer" @click="messageBoxVisibility = false"/>
  </message-box>

  <div class = "mt-24 w-page-limit min-w-72">

    <header class = "flex flex-col gap-10">
      <div class = "flex justify-between">
        <h1 class = "text-4xl">{{$t(pageName + '.title')}}</h1>
        <div class = "computer:text-2xl mobile:text-xl flex gap-2.5">

          <rounded-button @click="toggleColorTheme(!darkMode)">
            <i v-if="darkMode" class = "pi pi-moon"/>
            <i v-else class = "pi pi-sun"/>
          </rounded-button>

          <rounded-button @click="changeLanguage">
            <p>{{languageName}}</p>
          </rounded-button>

          <rounded-button @click="sendMessageBox">
            <i class = "pi pi-share-alt"/>
          </rounded-button>

        </div>
      </div>
    </header>

    <hr class = "my-5 border-gray-500">
    <main class = "text-lg">
      <slot/>

    </main>

    <hr class = "my-5 border-gray-500">
    <footer class="flex justify-end">
      <a href="https://github.com/devblook/blogin">
        <i class = "pi pi-github text-3xl"></i>
      </a>
    </footer>
  </div>

</template>