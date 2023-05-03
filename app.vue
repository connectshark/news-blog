<template>
<div class=" font-ubuntu bg-primary/5">
  <HeaderWrapper/>
  <NuxtPage />
  <div class="py-20 hero-bg bg-cover bg-center"></div>
  <FooterWrapper/>
</div>
</template>
<script setup>
const tagArticle = await queryContent().only(['tags']).find()

useState('tagList', () => {
  return tagArticle.reduce((sum, item) => {
    item.tags.forEach(tag => {
      if (!sum.includes(tag)) {
        sum.push(tag)
      }
    })
    return sum
  }, [])
})
</script>