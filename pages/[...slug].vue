<template>
  <NuxtLayout>
    <ContentDoc>
      <template #not-found>
        <h1>沒有文章</h1>
        <p>
          <NuxtLink to="/">回首頁</NuxtLink>
        </p>
      </template>
      <template #empty>
        <h1>空的</h1>
        <p>
          <NuxtLink to="/">回首頁</NuxtLink>
        </p>
      </template>
    </ContentDoc>
  </NuxtLayout>
</template>

<script setup>
const { page } = useContent()
useHead({
  title: page.title,
  description: page.description,
  titleTemplate: title => `${title} | Nuxt Content Starter`,
})
</script>
