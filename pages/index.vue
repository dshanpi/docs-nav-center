<template>
  <div>
    <div class="sticky top-0 z-20">
      <!-- <VueSchoolBanner /> -->
      <Header />
    </div>
    <UContainer class="pb-6">
      <div class="mt-6 text-center sm:my-12">
        <p class="text-3xl font-semibold tracking-tight sm:text-4xl">
          百问网文档站点导航
        </p>
        <p class="text-lg sm:text-xl">
          选择适合你的
          <NuxtLink
            to="https://docs.100ask.net/"
            target="_blank"
            class="primary-text font-semibold"
          >
            嵌入式开发
          </NuxtLink>
          或
          <NuxtLink
            to="https://100ask.net/"
            target="_blank"
            class="primary-text font-semibold"
          >
            AI开发
          </NuxtLink>
          文档站点
        </p>
      </div>

      <div class="mt-6 flex flex-grow justify-center gap-4 sm:mt-8">
        <!-- filters -->
        <div class="-mt-2 hidden w-72 shrink-0 p-3 md:block">
          <Filters />
        </div>

        <LibraryCards />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const title = ref("百问网文档站点导航")

const runtimeConfig = useRuntimeConfig()
const loadPlausible = runtimeConfig.public.loadPlausible == "yes"

useHead({
  // dynamic title
  title,

  // helps for accessibility - remove if using i18n
  htmlAttrs: { lang: "zh" },

  // favicon
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon/newlogo.svg",
    },
  ],

  // plausible
  ...(loadPlausible
    ? {
        script: [
          {
            "src": "https://pl.v1v2.io/js/script.js",
            "data-domain": "docs-100ask.net",
            "defer": true,
          },
        ],
      }
    : {}),
})

// Meta tags, OG, Twitter
const description = "📚 百问网文档站点导航 - 嵌入式开发、AI开发、各系列芯片开发板文档汇总"
useSeoMeta({
  title: title.value,
  description: description,
  ogTitle: title.value,
  ogDescription: description,
  ogType: "website",
  ogSiteName: title.value,
  ogUrl: "https://docs-100ask.net/",
  ogImage: "https://docs-100ask.net/img/social_small.png",
  ogImageWidth: "1142",
  ogImageHeight: "760",
})
</script>
