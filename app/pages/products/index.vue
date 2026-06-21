<script setup lang="ts">
import { productsPage } from '~/data/products';

const page = productsPage;

const showcaseItems = computed(() =>
  page.items.filter(item => item.status === 'available'),
);

const comingSoonItems = computed(() =>
  page.items.filter(item => item.status === 'coming-soon'),
);

useMarketingSeo({
  ...page.seo,
  schema: 'products',
  products: page.items.map(item => ({
    name: item.name,
    description: item.description,
    preview: item.preview,
    status: item.status,
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

    <UPageSection
      v-if="comingSoonItems.length"
      title="준비 중"
      description="피부·미용 클리닉 외 다른 업종 템플릿을 순차적으로 확대할 예정입니다."
    >
      <div class="grid gap-4 max-w-2xl mx-auto">
        <UCard
          v-for="(product, index) in comingSoonItems"
          :key="index"
          variant="subtle"
          :ui="{ body: 'space-y-3 p-5 sm:p-6' }"
        >
          <div class="flex items-center gap-2">
            <p class="text-sm font-semibold text-primary">
              {{ product.name }}
            </p>
            <UBadge
              color="neutral"
              variant="subtle"
              size="sm"
            >
              {{ product.badge }}
            </UBadge>
          </div>
          <p class="font-medium text-highlighted">
            {{ product.title }}
          </p>
          <p class="text-sm text-muted">
            {{ product.description }}
          </p>
        </UCard>
      </div>
    </UPageSection>

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
