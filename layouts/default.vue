<template>
<main class=" min-h-screen">
  <div class="text-center mb-4 bg-center bg-no-repeat bg-cover" :style="`background-image: url(${page.cover});`">
    <div class="backdrop-blur bg-white/50">
      <h1 class=" py-32 font-bold text-5xl max-w-2xl mx-auto">{{ page.title }}</h1>
    </div>
  </div>
  <ul class="max-w-2xl mx-auto text-right space-x-2">
    <li v-for="tag in page.tags" class=" text-sm inline-block mr-2 last:mr-0">
      <NuxtLink class="rounded block p-1 bg-primary text-white" :to="`/tags/${tag}`">{{ tag }}</NuxtLink>
    </li>
  </ul>
  <ul class="bx-ul max-w-2xl w-4/5 mx-auto py-10">
    <li v-for="heading in toc.links" :key="heading.id">
      <i class='bx bxs-circle text-stone-300'></i>
      <a class=" text-primary underline leading-loose" :href="'#' + heading.id">{{ heading.text }}</a>
        <ul class="bx-ul" v-if="heading.children">
          <li v-for="child in heading.children" :key="child.id"><i class='bx bx-circle text-stone-300' ></i>
            <a class=" text-primary underline leading-loose" :href="'#' + child.id">{{ child.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  <article class="w-11/12 mb-20 prose mx-auto max-w-2xl">
    <slot/>
  </article>
  <div class="w-11/12 mx-auto max-w-2xl mb-20 bg-primary text-white gap-4 p-10 rounded-3xl grid lg:grid-cols-2">
    <h3>{{ page.author }}</h3>
    <p>Hi! I'm a Frontend developer.High Level experience in web development knowledge, producing quality work.</p>
    <p>
      <a href='https://ko-fi.com/X8X8G7OLQ' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
    </p>
  </div>
  <nav class="w-11/12 mx-auto max-w-2xl">
    <p>
      <NuxtLink class=" inline-block no-underline ring-primary-500 ring-2 text-primary-500 hover:bg-primary-500 hover:text-white py-3 px-6 rounded hover:opacity-80" v-if="prev" :to="prev._path"><i class='bx bx-chevron-right bx-rotate-180' ></i>{{ prev.title }}</NuxtLink>
    </p>
    <p class=" text-right">
      <NuxtLink class=" inline-block no-underline ring-primary-500 ring-2 text-primary-500 hover:bg-primary-500 hover:text-white py-3 px-6 rounded hover:opacity-80" v-if="next" :to="next._path">{{ next.title }}<i class='bx bx-chevron-right'></i></NuxtLink>
    </p>
  </nav>
</main>
</template>

<script setup>
const { toc, prev, next, page } = useContent()
</script>