<script setup>
const { data: blogs } = await useAsyncData("blog", () =>
  queryContent("/blog").find()
);
const categories = [...new Set(blogs.map(({ category }) => category))];
const title = "Blog";
</script>
<template>
  <div>
    <!-- <Seo :title="title" /> -->
    <h1 class="text-center">{{ title }}</h1>
    <p class="text-center">
      <b>Categories </b>
      <span v-for="(category, index) in categories" :key="`cate-${index}`">
        <a href="#">
          {{ category }}
        </a>
        {{ index !== categories.length - 1 ? ", " : "" }}
      </span>
    </p>

    <div
      class="sm:flex items-center"
      v-for="(
        { category, date, excerpt, thumbnail, title, slug }, index
      ) in blogs"
      :key="index"
    >
      <div class="flex-1">
        <img
          class="w-full object-cover h-56 sm:h-72 md:h-96"
          :src="thumbnail.src"
          :alt="thumbnail.alt"
        />
      </div>
      <div class="flex-1 sm:pl-4">
        <h2>{{ title }}</h2>
        <blockquote>
          <b>Date</b>
          {{
            new Date(date).toLocaleDateString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
          <b>Category</b> <a href="#">{{ category }}</a>
        </blockquote>
        <p>{{ excerpt }}</p>
        <p>
          <NuxtLink :to="`/blog/${slug}`"> Read more </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
