<template>
<header class="bg-white border-b border-primary/20" >
  <div class="mx-auto w-11/12 py-6 max-w-6xl">
    <div>
      <NuxtLink to="/">
        <img class=" inline-block align-middle w-8" src="/favicon.png" alt="logo">
        <span class="ml-2 inline-block align-middle text-xl">{{ config.site.title }}</span>
      </NuxtLink>
    </div>
  </div>
</header>
</template>

<script setup>
const config = useAppConfig()
</script>