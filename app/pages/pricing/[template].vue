<script setup lang="ts">
import { getProductPricingPage } from '~/data/pricing';
import { productPackages } from '~/data/templates';

const route = useRoute();
const productParam = String(route.params.template);
const page = getProductPricingPage(productParam);

if (!page?.productId) {
  throw createError({
    statusCode: 404,
    statusMessage: '요금 페이지를 찾을 수 없습니다.',
  });
}

const product = productPackages[page.productId];

useMarketingSeo({
  ...page.seo,
  schema: 'pricing',
  faq: page.faq.items,
  pricingProductId: page.productId,
  pricingListPrice: product.listPrice,
});
</script>

<template>
  <div>
    <UContainer class="pt-6">
      <nav
        class="flex flex-wrap items-center gap-2 text-sm text-muted"
        aria-label="요금 breadcrumb"
      >
        <NuxtLink
          to="/pricing"
          class="hover:text-highlighted transition-colors"
        >
          요금
        </NuxtLink>
        <UIcon
          name="i-lucide-chevron-right"
          class="size-4 shrink-0"
        />
        <span class="text-highlighted font-medium">
          {{ product.name }}
        </span>
      </nav>
    </UContainer>

    <PricingPageContent :page="page" />
  </div>
</template>
