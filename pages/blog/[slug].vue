<script setup>
const route = useRoute();
const { data } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryContent(`/blog/${route.params.slug}`).findOne()
);
</script>
<template>
  <div>
    <Seo
      :title="data.title"
      :excerpt="data.excerpt.children[0].children[0].value"
      :thumbnail="data.thumbnail"
      :date="data.date"
    />
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
          new Date(data.date).toLocaleDateString("en", {
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
