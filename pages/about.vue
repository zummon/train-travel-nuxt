<script setup>

const {data} = await useAsyncData('',{ $content }) {
   const page = await $content('about').fetch();

   return {
     ...page,
     page,
   };
 }
</script>
<template>
  <div class="max-w-prose mx-auto">
    <!-- <Seo
      :title="title"
      :excerpt="excerpt.children[0].children[0].value"
      :thumbnail="thumbnail"
    /> -->
    <h1 class="text-center">{{ title }}</h1>
    <p class="text-center">{{ excerpt }}</p>
    <p>
      <img
        class="w-full object-cover object-top h-96"
        :src="thumbnail.src"
        :alt="thumbnail.alt"
      />
    </p>
    <NuxtContent :document="page" />
  </div>
</template>
