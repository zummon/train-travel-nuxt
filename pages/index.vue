<script setup>
const { data: blogs } = await useAsyncData("blog", () =>
  queryContent("/blog").limit(3).find()
);
const excerpt = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const title = "Train Travel";
useSeoMeta({
  title: title,
  description: excerpt,
});
</script>
<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>
    <p class="text-center">{{ excerpt }}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(
          { category, date, excerpt, thumbnail, title, _path }, index
        ) in blogs"
        :key="index"
      >
        <img
          class="w-full object-cover h-48 md:h-56 lg:h-72"
          :src="thumbnail.src"
          :alt="thumbnail.alt"
        />
        <h2>{{ title }}</h2>
        <blockquote>
          <b>Date</b>
          {{
            new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
          <b>Category</b> <a href="#">{{ category }}</a>
        </blockquote>
        <p>{{ excerpt }}</p>
        <p>
          <NuxtLink :to="_path"> Read more </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
