<script setup>
const { data } = await useAsyncData('blog', () => {
  return queryContent('/blog').find();
});
const excerpt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
const title = 'Train Travel';
</script>
<template>
  <div>
    <!-- <Head>
      <title>{{title}}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="date" content={date} />
      <meta name="description" content={excerpt} />
      <meta property="og:description" content={excerpt} />
      <meta name="twitter:description" content={excerpt} />
      <meta property="og:image" content={thumbnail.src} />
      <meta name="twitter:image" content={thumbnail.src} />
    </Head> -->
    <!-- <Seo :title="title" :excerpt="excerpt" /> -->
    <h1 class="text-center">{{ title }}</h1>
    <p class="text-center">{{ excerpt }}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(
          { category, date, excerpt, thumbnail, title, slug }, index
        ) in data"
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
              year: 'numeric',
              month: 'long',
              day: 'numeric',
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
