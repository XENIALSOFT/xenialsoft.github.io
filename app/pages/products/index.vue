<script setup lang="ts">
import { productsPage } from '~/data/products';

const page = productsPage;

const showcaseItems = computed(() =>
  page.items.filter(item => item.status === 'available'),
);

useMarketingSeo({
  ...page.seo,
  schema: 'products',
  products: page.items.map(item => ({
    name: item.name,
    description: item.description,
    preview: item.preview,
    status: item.status,
    listPrice: item.listPrice
      ? Number(item.listPrice.replace(/\D/g, ''))
      : undefined,
  })),
});
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
    />

    <div class="divide-y divide-default">
      <ProductShowcase
        v-for="(product, index) in showcaseItems"
        :key="index"
        :product="product"
      />
    </div>

    <USeparator />

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
