<script>
export default {
  async asyncData({ params, $content }) {
    const blogs = await $content(`blogs`).fetch();
    const page = blogs.find(({ slug }) => {
      return slug === params.slug;
    });

    return {
      ...page,
      page,
    };
  },
};
</script>
<template>
  <div>
    <Seo
      :title="title"
      :excerpt="excerpt.children[0].children[0].value"
      :thumbnail="thumbnail"
      :date="date"
    />
    <div class="max-w-prose mx-auto">
      <p>
        <img
          class="w-full object-cover h-96"
          :src="thumbnail.src"
          :alt="thumbnail.alt"
        />
      </p>
      <h1>{{ title }}</h1>
      <p>
        <b>Date</b>
        {{
          new Date(date).toLocaleDateString('en', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
        <b>Category</b> <a href="#">{{ category }}</a>
      </p>
      <NuxtContent :document="{ body: excerpt }" />
      <hr />
    </div>
    <div class="max-w-prose mx-auto">
      <NuxtContent :document="page" />
    </div>
  </div>
</template>
