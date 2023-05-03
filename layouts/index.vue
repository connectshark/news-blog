<template>
<main>
  <div class=" mx-auto max-w-6xl w-11/12">
    <section class="pt-20 pb-32">
      <slot name="hero"/>
    </section>
    <div class=" lg:grid lg:grid-cols-10 gap-10 mb-10">
    <section class="mb-4 lg:mb-0 col-span-7">
      <slot/>
    </section>
    <aside class="col-span-3 bg-white p-3">
      <div class=" mb-4">
        <h4 class="mb-4 text-xl font-bold">粉絲專頁</h4>
        <iframe class=" w-full" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100079569469057&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=276725514699587" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
      <div>
        <h4 class="mb-4 text-xl font-bold">主題標籤</h4>
        <NuxtLink
          class="inline-block align-middle px-2 py-1 m-1 rounded-lg ring-1 ring-primary-500 hover:bg-primary-500 hover:text-white transition"
          v-for="tag in tagList"
          :key="tag"
          :to="`/tags/${tag}`"
        >{{ tag }}</NuxtLink>
      </div>
    </aside>
    </div>
  </div>
</main>
</template>

<script setup>
const tagList = useState('tagList')
</script>