<template>
<footer class=" bg-primary-800 text-white py-20">
  <div class="mx-auto w-11/12 py-6 max-w-6xl grid grid-cols-2">
    <div>
      <h3>
        <NuxtLink to="/"><i class='bx bx-copyright'></i> {{ config.site.title }}</NuxtLink>
      </h3>
    </div>
    <p>
      <a href="https://github.com/connectshark/nuxt-content-starter" target="_blank" rel="noopener noreferrer">
        <i class='bx bxl-github bx-sm'></i>
      </a>
      <a href="https://github.com/connectshark" target="_blank" rel="noopener noreferrer">
        <i class='bx bx-user bx-sm'></i>
      </a>
    </p>
  </div>
</footer>
</template>
<script setup>
const config = useAppConfig()
</script>