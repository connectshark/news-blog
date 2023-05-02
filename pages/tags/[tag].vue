<template>
  <NuxtLayout name="index">
    <template v-slot:hero>
      <h1 class="text-primary text-2xl">包含{{ route.params.tag }}的文章</h1>
    </template>
    <ul class="grid lg:grid-cols-2 gap-4">
      <li v-for="article in articles">
        <NuxtLink class="block p-5 bg-white hover:-translate-y-2" :to="article._path">
          <figure v-if="article.cover">
            <img class=" h-44 object-cover" :src="article.cover" alt="cover">
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
const route = useRoute()
const articles = await queryContent()
  .where({ tags: { $in: route.params.tag } })
  .only(['_id', '_path', 'cover', 'title', 'description'])
  .find()
useHead({
  title: `包含${ route.params.tag }的文章`,
  titleTemplate: title => `${title} | Nuxt Content Starter`
})
</script>