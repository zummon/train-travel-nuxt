<script setup>
const { data } = await useAsyncData("about", () =>
  queryContent("/about").findOne()
);
</script>
<template>
  <div class="max-w-prose mx-auto">
    <!-- <Seo
      :title="title"
      :excerpt="excerpt.children[0].children[0].value"
      :thumbnail="thumbnail"
    /> -->
    <h1 class="text-center">{{ data.title }}</h1>
    <p class="text-center">{{ data.excerpt }}</p>
    <p>
      <img
        class="w-full object-cover object-top h-96"
        :src="thumbnail.src"
        :alt="thumbnail.alt"
      />
    </p>
    <ContentRenderer :value="data" />
  </div>
</template>
