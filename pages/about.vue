<script setup>
const { data } = await useAsyncData("about", () =>
  queryContent("/about").findOne()
);
useSeoMeta({
  title: data.title,
  description: data.excerpt,
  // ogImage: data.thumbnail.src,
  // twitterImage: data.thumbnail.src,
});
</script>
<template>
  <div class="max-w-prose mx-auto">
    <h1 class="text-center">{{ data.title }}</h1>
    <p class="text-center">{{ data.excerpt }}</p>
    <p>
      <img
        class="w-full object-cover object-top h-96"
        :src="data.thumbnail.src"
        :alt="data.thumbnail.alt"
      />
    </p>
    <ContentRenderer :value="data" />
  </div>
</template>
