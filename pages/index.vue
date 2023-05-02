<template>
<NuxtLayout name="index">
  <template v-slot:hero>
    <h1 class="text-3xl mb-8">Welcome! {{ config.site.title }}</h1>
    <p>最快文章更新</p>
  </template>
  <ul class="grid lg:grid-cols-2 gap-4">
    <li v-for="article in contentQuery" :key="article._id">
      <NuxtLink class="block p-5 bg-white hover:-translate-y-2" :to="article._path">
        <figure v-if="article.cover">
          <img class=" w-full h-44 object-contain" :src="article.cover" alt="cover">
        </figure>
        <div v-else class="bg-primary-300">
          <p class=" text-center leading-[11rem]">no image</p>
        </div>
        <h3 class=" font-bold text-2xl leading-loose">{{ article.title }}</h3>
        <p class="line-clamp-2 mb-4">{{ article.description }}</p>
        <p class="text-right">
          <span class=" bg-primary-500 text-white p-1 rounded hover:opacity-80">read</span>
        </p>
      </NuxtLink>
    </li>
  </ul>
</NuxtLayout>
</template>

<script setup>
const config = useAppConfig()
const contentQuery = await queryContent().sort({ date: 1 }).only(['title', 'cover', 'description', '_path', '_id']).limit(6).find()
useHead({
  title: config.site.title,
})
</script>