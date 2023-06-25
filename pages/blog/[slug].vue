<script setup>
const route = useRoute();
const { data } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryContent(`/blog/${route.params.slug}`).findOne()
);
useSeoMeta({
  title: data.title,
  description: data.excerpt,
  // thumbnail="data.thumbnail.src"
  // date="data.date"
});
</script>
<template>
  <div>
    <div class="max-w-prose mx-auto">
      <p>
        <img
          class="w-full object-cover h-96"
          :src="data.thumbnail.src"
          :alt="data.thumbnail.alt"
        />
      </p>
      <h1>{{ data.title }}</h1>
      <p>
        <b>Date</b>
        {{
          new Date(data.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
        <b>Category</b> <a href="#">{{ data.category }}</a>
      </p>
      <p>{{ data.excerpt }}</p>
      <hr />
    </div>
    <div class="max-w-prose mx-auto">
      <ContentRenderer :value="data" />
    </div>
  </div>
</template>
