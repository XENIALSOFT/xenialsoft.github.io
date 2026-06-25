<script setup lang="ts">
import { pricingHubPage } from '~/data/pricing';
import { pricingAddOns } from '~/data/pricing/shared';
import { productList } from '~/data/templates';

const page = pricingHubPage;

useMarketingSeo({
  ...page.seo,
  schema: 'pricing',
  faq: page.faq.items,
  pricingProducts: productList.map(p => ({
    name: p.name,
    listPrice: p.listPrice,
  })),
});
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
    />

    <UPageSection
      :title="page.intro.title"
      :description="page.intro.description"
    >
      <div class="grid gap-4 max-w-4xl mx-auto sm:grid-cols-2">
        <UCard
          v-for="(item, index) in page.intro.items"
          :key="index"
          variant="subtle"
          :ui="{ body: 'flex gap-4 p-5' }"
        >
          <div class="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
            <UIcon
              :name="item.icon"
              class="size-5 text-primary"
            />
          </div>
          <div class="min-w-0 space-y-1">
            <p class="font-medium text-highlighted">
              {{ item.title }}
            </p>
            <p class="text-sm text-muted">
              {{ item.description }}
            </p>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      title="제품별 요금"
      description="제품을 고르면 화면 구성·예약 방식·포함 기능이 정해집니다. 자세한 내용은 각 제품 페이지에서 확인하세요."
    >
      <div class="grid gap-4 max-w-5xl mx-auto md:grid-cols-3">
        <UCard
          v-for="product in page.products"
          :key="product.productId"
          variant="subtle"
          :ui="{ body: 'flex flex-col gap-4 p-5 sm:p-6 h-full' }"
        >
          <div class="flex items-start gap-3">
            <div class="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
              <UIcon
                :name="product.icon"
                class="size-5 text-primary"
              />
            </div>
            <div class="min-w-0 space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <p class="font-semibold text-highlighted">
                  {{ product.name }}
                </p>
                <UBadge
                  color="neutral"
                  variant="subtle"
                  size="sm"
                >
                  {{ product.tagline }}
                </UBadge>
              </div>
              <p class="text-sm text-muted">
                {{ product.description }}
              </p>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-sm text-muted">
              <span class="font-medium text-highlighted">예약</span>
              · {{ product.reservationLabel }}
            </p>
            <ProductPriceDisplay
              :price="{
                listAmount: product.listAmount,
                suffix: '초기 구축 (VAT 별도)',
                discountNote: product.discountNote,
              }"
            />
          </div>

          <div class="mt-auto flex flex-wrap gap-2">
            <UButton
              label="자세히 보기"
              :to="product.to"
              trailing-icon="i-lucide-arrow-right"
              color="primary"
            />
            <UButton
              v-if="product.preview"
              label="데모"
              :to="product.preview"
              target="_blank"
              icon="i-lucide-external-link"
              color="neutral"
              variant="subtle"
            />
          </div>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      :title="pricingAddOns.title"
      :description="pricingAddOns.description"
    >
      <ul class="max-w-2xl mx-auto space-y-3">
        <li
          v-for="(item, index) in pricingAddOns.items"
          :key="index"
          class="flex items-start gap-3 text-sm sm:text-base text-muted"
        >
          <UIcon
            name="i-lucide-info"
            class="size-5 shrink-0 text-primary mt-0.5"
          />
          <span>{{ item }}</span>
        </li>
      </ul>
    </UPageSection>

    <UPageSection
      :title="page.model.title"
      :description="page.model.description"
    >
      <div class="grid gap-4 max-w-3xl mx-auto sm:grid-cols-3">
        <UCard
          v-for="(step, index) in page.model.steps"
          :key="index"
          :ui="{ body: 'space-y-2' }"
        >
          <p class="font-medium text-highlighted">
            {{ step.title }}
          </p>
          <p class="text-sm text-muted">
            {{ step.description }}
          </p>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      :title="page.maintenance.title"
      :description="page.maintenance.description"
    >
      <div class="grid gap-4 max-w-3xl mx-auto sm:grid-cols-2">
        <UCard
          v-for="(item, index) in page.maintenance.items"
          :key="index"
          :ui="{ body: 'space-y-2' }"
        >
          <p class="font-medium text-highlighted">
            {{ item.label }}
          </p>
          <p class="text-sm text-muted">
            {{ item.description }}
          </p>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <UAccordion
        :items="page.faq.items"
        :unmount-on-hide="false"
        :default-value="['0']"
        type="multiple"
        class="max-w-3xl mx-auto"
        :ui="{
          trigger: 'text-base text-highlighted',
          body: 'text-base text-muted',
        }"
      />
    </UPageSection>
  </div>
</template>
