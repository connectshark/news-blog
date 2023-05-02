<template>
<header class="bg-white border-b border-primary-200" >
  <div class="mx-auto w-11/12 py-6 max-w-6xl">
    <div>
      <NuxtLink to="/">
        <img class=" inline-block align-middle w-10" src="/nosegates.jpg" alt="logo">
        <span class=" inline-block align-middle text-xl">{{ config.site.title }}</span>
      </NuxtLink>
    </div>
  </div>
</header>
</template>

<script setup>
const config = useAppConfig()
</script>