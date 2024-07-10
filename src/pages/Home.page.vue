<script setup>

</script>

<template>

  <template-page page-name="home">
    <div class = "flex gap-4">
      <p class="whitespace-pre-line text-justify">{{$t('home.content')}}</p>
    </div>
    <div class = "flex flex-col gap-1">
      <div class = "flex flex-col items-center">
        <i class = "pi pi-cog text-3xl ml-36 pi-spin"/>
        <i class = "pi pi-server text-blue-400 text-9xl"/>
      </div>
      <div class = "text-1.5xl flex gap-2.5 items-center justify-center">
        <i class = "pi pi-spin pi-spinner"/>
        <p class = "">{{$t('pageStatus')}}</p>
      </div>
    </div>
  </template-page>
</template>
