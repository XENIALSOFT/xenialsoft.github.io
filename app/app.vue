<script setup lang="ts">
import { defaultSeoDescription, siteBrand } from '~/data/seo';

const colorMode = useColorMode();

const color = computed(() => colorMode.value === 'dark' ? '#0f172a' : '#ffffff');

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'ko',
  },
});

useSeoMeta({
  titleTemplate: `%s · ${siteBrand.name}`,
});

useSchemaOrg([
  defineWebSite({
    '@id': `${siteBrand.url}/#website`,
    'name': siteBrand.name,
    'alternateName': [...siteBrand.alternateNames],
    'description': defaultSeoDescription,
    'inLanguage': siteBrand.language,
    'url': siteBrand.url,
    'publisher': {
      '@id': `${siteBrand.url}/#identity`,
    },
  }),
]);
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
