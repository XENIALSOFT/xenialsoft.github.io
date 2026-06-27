<script setup lang="ts">
import { productsPage } from '~/data/products';

const page = productsPage;

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
        v-for="(product, index) in page.items"
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
